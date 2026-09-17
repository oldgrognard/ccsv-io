import { Box, Container, Grid, Typography } from '@mui/material';
import { CodeBlock } from '../../components/CodeBlock';
import { PageHeader } from '../../components/PageHeader';
import { SectionHeading } from '../../components/SectionHeading';
import { MONO } from '../../constants/fonts';

const SqLite = () => {
    return (
        <>
            <PageHeader
                eyebrow='Examples - SQLite'
                title='Reading and writing .ccsv with SQLite'
                intro={
                    <>
                        SQLIte has no native control-character import mode, but{' '}
                        <Box
                            component='code'
                            sx={{ fontFamily: MONO, color: 'primary.main' }}
                        >
                            char(31)
                        </Box>{' '}
                        and{' '}
                        <Box
                            component='code'
                            sx={{ fontFamily: MONO, color: 'primary.main' }}
                        >
                            char(30)
                        </Box>
                        make round-tripping a one-liner. The CLI{' '}
                        <code>.mode</code> options let you set arbitrary
                        separators.
                    </>
                }
            />

            <Container maxWidth='lg' sx={{ pb: { xs: 8, md: 14 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <Box>
                        <SectionHeading
                            eyebrow='Export - CLI'
                            title='Set separators with .mode + .separator'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                color: 'text.secondary',
                                mb: 3,
                                maxWidth: 640,
                            }}
                        >
                            The <code>--newline</code> and column separators
                            accept any byte. Pass the control characters
                            straight through your shell with{' '}
                            <Box component='code' sx={{ fontFamily: MONO }}>
                                $'\x1f'
                            </Box>
                            and{' '}
                            <Box component='code' sx={{ fontFamily: MONO }}>
                                $'\x1e'
                            </Box>
                        </Typography>
                        <CodeBlock
                            caption='export.sh'
                            code={`sqlite3 app.db <<'SQL'
    .headers on
    .mode ascii
    .separator $'\\x1f' $'\\x1e'     -- column=US, row=RS
    .once authors.ccsv
    SELECT id, name, bio FROM authors;
    SQL`}
                        />
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Export - pure SQL'
                            title='Assemble with group_concat()'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                color: 'text.secondary',
                                mb: 3,
                                maxWidth: 640,
                            }}
                        >
                            For embedded use where the CLI is unavailable, build
                            the whole document in a scalar subquery. Unlike
                            MySQL, SQLite&apos;s <code>group_concat</code> has
                            no length ceiling.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CodeBlock
                                    caption='assemble.sql'
                                    code={`SELECT group_concat(row, char(30)) AS ccsv
FROM (
  SELECT id || char(31) ||
         name || char(31) ||
         bio AS row
  FROM authors
  ORDER BY id
);`}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CodeBlock
                                    caption='with a header record'
                                    code={`SELECT
  'id' || char(31) || 'name' || char(31) || 'bio'
  || char(30) ||
  group_concat(
    id || char(31) || name || char(31) || bio,
    char(30)
  )
FROM authors;`}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Import - CLI'
                            title='Load a .ccsv file back into a table'
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                color: 'text.secondary',
                                mb: 3,
                                maxWidth: 640,
                            }}
                        >
                            Mirror the export separators on <code>.import</code>
                            . The <code>ascii</code> mode disables SQLite&apos;s
                            CSV quoting rules entirely, which is exactly what
                            .ccsv wants.
                        </Typography>
                        <CodeBlock
                            caption='import.sh'
                            code={`sqlite3 app.db <<'SQL'
CREATE TABLE authors(id INTEGER, name TEXT, bio TEXT);
.mode ascii
.separator $'\\x1f' $'\\x1e'
.import authors.ccsv authors --skip 1
SQL`}
                        />
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Inspect'
                            title='Verify the bytes with hex()'
                        />
                        <CodeBlock
                            caption='verify.sql'
                            code={`SELECT hex(name || char(31) || cast(id AS TEXT))
FROM authors LIMIT 1;
-- 416C6963651F3432
--           ^^ 1F = US`}
                        />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { SqLite };
