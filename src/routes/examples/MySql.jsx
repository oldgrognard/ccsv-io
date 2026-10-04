import { Box, Container, Grid, Typography } from '@mui/material';
import { CodeBlock } from '../../components/CodeBlock';
import { PageHeader } from '../../components/PageHeader';
import { SectionHeading } from '../../components/SectionHeading';
import { MONO } from '../../constants/fonts';

const MySql = () => {
    // language=SQL format=false
    return (
        <>
            <PageHeader
                eyebrow='examples - mysql'
                title='Reading and writing .ccsv with MySQL'
                intro={
                    <>
                        MySQL can emit and ingest .ccsv directly. Because the
                        delimiters are single bytes,{' '}
                        <Box
                            component='code'
                            sx={{ fontFamily: MONO, color: 'primary.main' }}
                        >
                            CHAR(31)
                        </Box>{' '}
                        for US and{' '}
                        <Box
                            component='code'
                            sx={{ fontFamily: MONO, color: 'secondary.main' }}
                        >
                            CHAR(30)
                        </Box>{' '}
                        for RS, no escaping clause is ever required.
                    </>
                }
            />

            <Container maxWidth='lg' sx={{ pb: { xs: 8, md: 14 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <Box>
                        <SectionHeading
                            eyebrow='Export'
                            title='SELECT &hellip; INTO OUTFILE'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                mb: 3,
                                maxWidth: 640,
                                color: 'text.secondary',
                            }}
                        >
                            Terminate fields with the Unit Separator and lines
                            with the Record Separator. Note the deliberately
                            empty <code>ESCAPED BY</code>; .ccsv never escapes
                            because its delimiters cannot occur inside data.
                        </Typography>
                        <CodeBlock
                            caption='export.sql'
                            code={`SELECT id, name, bio, updated_at
FROM authors
INTO OUTFILE '/var/lib/mysql-falies/authors.ccsv'
    FIELDS  TERMINATED BY 0x1F    -- US (Unit Separator)
            ESCAPED BY ''         -- no escaping, ever
    LINES   TERMINATED BY 0x1E;   -- RS (Record Separator)
                            `}
                        />
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Import'
                            title='LOAD DATA INFILE'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                mb: 3,
                                maxWidth: 640,
                                color: 'text.secondary',
                            }}
                        >
                            The inverse operation. Becuase a <code>bio</code>{' '}
                            column may contain commas, quotes, and full
                            paragraphys, a CSV import here would routinely
                            misparse. A.ccsv cannot.
                        </Typography>
                        <CodeBlock
                            caption='import.sql'
                            code={`LOAD DATA INFILE '/var/lib/mysql-files/authors.ccsv'
INTO TABLE authors
    CHARACTER SET utf8mb4
    FIELDS  TERMINATED BY 0x1F
            ESCAPED BY ''
    LINES   TERMINATED BY 0x1E
    IGNORE 1 LINES;   -- skip header row
    (id, name, bio, updated_at);
     `}
                        />
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='In-query assembly'
                            title='Build a .ccsv payload with CONCAT_WS + GROUP_CONCAT'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                mb: 3,
                                maxWidth: 640,
                                color: 'text.secondary',
                            }}
                        >
                            When you cannot write to the filesystem, assemble
                            the document inside a single query and stream the
                            resulting column to your application.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CodeBlock
                                    caption='assemble.sql'
                                    code={`SELECT GROUP_CONCAT(
  CONCAT_WS(
    CHAR(31),          -- US between fields
    id, name, bio
  )
  ORDER BY id
  SEPARATOR CHAR(30)   -- RS between records
) AS ccsv_payload
FROM authors;`}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CodeBlock
                                    caption='raise group_concat_max_len first'
                                    code={`-- GROUP_CONCAT truncates silently at 1 KB
-- by default. Raise it before assembling
-- a full table.
SET SESSION group_concat_max_len = 1073741824;`}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Inspect'
                            title='Confirm the separators landed'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                mb: 3,
                                maxWidth: 640,
                                color: 'text.secondary',
                            }}
                        >
                            Control characters are invisble in most clients. Use{' '}
                            <code>HEX()</code> to verify bytes are present and
                            correctly positioned.
                        </Typography>
                        <CodeBlock
                            caption='verify.sql'
                            code={`SELECT HEX(ccsv_payload) FROM (
  SELECT CONCAT_WS(CHAR(31), 'Alice', '42') AS ccsv_payload
) t;
-- 416C6963651F3432
--           ^^ 1F = US, exactly where expected`}
                        />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { MySql };
