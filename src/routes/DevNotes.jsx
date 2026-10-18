import { Box, Container, Grid, Link, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { SpecPreview } from '../components/SpecPreview';
import { MONO } from '../constants/fonts';
import { specPreviewData as RULES } from '../data/specPreviewData';

const DevNotes = () => {
    const dark = useMediaQuery('(prefers-color-scheme: dark)');

    const CONSIDERATIONS = [
        {
            kind: 'do',
            title: 'Set the MIME type explicitly',
            body: 'Serve .ccsv as text/ccsv; charset=utf-8. Browsers and proxies default unknown text to CSV heuristics that will mangle control characters.',
        },
        {
            kind: 'do',
            title: 'Treat the file as binary in transit',
            body: 'Read and write with byte-accurate streams. Any later that normalizes line endings (git autocrlf, some FTP modes) can corrupt an RS-adjacent CR/LF that is legitimate data.',
        },
        {
            kind: 'do',
            title: 'Validate field counts on ingest',
            body: 'The US (U+001F) count pre record is a MUST. A record whose US count differs from the header is a hard error, not a value to pad. Surface it loudly.',
        },
        {
            kind: 'avoid',
            title: 'Do not display raw .ccsv in a terminal',
            body: 'Control characters can move the cursor or reconfigure a TTY. Always visualize US/RS as glyphs before printing to a console or log.',
        },
        {
            kind: 'avoid',
            title: 'Do not paste through rich text editors',
            body: 'Word processors and many web inputs silently strip control characters. Round-trip only through byte-preserving tools.',
        },
        {
            kind: 'avoid',
            title: 'Do not assume spreadsheet support',
            body: 'Excel, Numbers, and Sheets cannot open .ccsv directly. You can convert to CSV/TSV prior to importing but you will surface the problems with those formats when you do.',
        },
    ];

    return (
        <>
            <PageHeader
                eyebrow='Reference: Developer Considrations'
                title='Rules for producing a valid .ccsv file'
                intro='The normative ruleset plus the practical guidance you need when .ccsv meets real toolchains, transports, and terminals.'
            >
                <Typography variant='body2' sx={{ maxWidth: 640, mt: 2 }}>
                    The key words "MUST", "MUST NOT", "REQUIRED", "SHALL",
                    "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT
                    RECOMMENDED", "MAY", and "OPTIONAL" in this document are to
                    be interpreted as described in BCP 14{' '}
                    <Link
                        href='https://www.rfc-editor.org/info/rfc2119/'
                        target='_blank'
                    >
                        [RFC2119]
                    </Link>{' '}
                    <Link
                        href='https://www.rfc-editor.org/info/rfc8174/'
                        target='_blank'
                    >
                        [RFC8174]
                    </Link>{' '}
                    when, and only when, they appear in all capitals, as shown
                    here.
                </Typography>
                <div id='rules' />
            </PageHeader>

            <Container maxWidth='lg' sx={{ pb: { xs: 8, md: 14 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <Box>
                        <SectionHeading
                            eyebrow='Normative'
                            title={`The ${RULES.length} Rules`}
                        />
                        <SpecPreview />
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Field guidance'
                            title='Do this, avoid that'
                        />
                        <Grid container spacing={3}>
                            {CONSIDERATIONS.map((c) => {
                                const accent =
                                    c.kind === 'do'
                                        ? 'primary.main'
                                        : dark
                                          ? '#ffb300'
                                          : '#e65100';
                                return (
                                    <Grid
                                        key={c.title}
                                        container
                                        spacing={3}
                                        size={{ xs: 12, md: 6 }}
                                    >
                                        <Box
                                            sx={{
                                                p: 3,
                                                height: '100%',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                borderRadius: 1,
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    width: 2,
                                                    bgcolor: accent,
                                                    opacity: 0.7,
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontFamily: MONO,
                                                    fontSize: '0.65rem',
                                                    letterSpacing: '0.1rem',
                                                    color: accent,
                                                    mb: 1,
                                                }}
                                            >
                                                {c.kind === 'do'
                                                    ? 'DO'
                                                    : 'AVOID'}
                                            </Typography>
                                            <Typography
                                                variant='h6'
                                                sx={{
                                                    fontSize: '0.98rem',
                                                    mb: 1,
                                                }}
                                            >
                                                {c.title}
                                            </Typography>
                                            <Typography
                                                variant='body2'
                                                color='text.secondary'
                                                sx={{
                                                    fontSize: '0.85rem',
                                                }}
                                            >
                                                {c.body}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>

                    <Box>
                        <SectionHeading
                            eyebrow='Edge cases'
                            title='Behaviors to pin down in your implementation'
                        />
                        <Box
                            component='pre'
                            sx={{
                                m: 0,
                                p: { xs: 2.5, md: 3 },
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                bgcolor: 'background.paper',
                                fontFamily: MONO,
                                fontSize: '0.82rem',
                                lineHeight: 1.9,
                                color: 'text.secondary',
                                overflowX: 'auto',
                            }}
                        >
                            {`Trailing RS     An RS after the final record is OPTIONAL. Parsers MUST accept files with or without it.
                
Empty Field     Two adjacent US bytes denote an empty string, not a null.  Distinguish these in typed loaders.
                
Empty Record    An RS with no US and no bytes is a single-field record containing the empty string.

Binary fields   Any byte except 0x1E/0x1F is legal. Do not treat .ccsv fields as C strings.
                
Streaming       Split incrementally on RS. A record is complete the instant an RS byte arrives. No Look-ahead is needed.`}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { DevNotes };
