import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AsciiTag } from './AsciiTag';
import { MONO } from '../constants/fonts.js';

const Mechanism = () => {
    const theme = useTheme();
    const dark = useMediaQuery('(prefers-color-scheme: dark)');

    return (
        <Box id='how' sx={{ py: { xs: 8, md: 14 } }}>
            <Container maxWidth='lg'>
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant='overline'
                        color='primary'
                        sx={{ mb: 1, display: 'block' }}
                    >
                        Mechanism
                    </Typography>
                    <Typography
                        variant='h2'
                        sx={{
                            fontSize: { xs: '1.9rem', md: '2.8rem' },
                            mb: 2,
                        }}
                    >
                        Two characters. Zero ambiguity.
                    </Typography>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ maxWidth: 560 }}
                    >
                        The ASCII standard defines control characters explicitly
                        as data delimiters. .ccsv uses exactly two of them and
                        nothing more.
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: 8 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                p: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    bgcolor: 'primary.main',
                                    opacity: 0.6,
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mb: 3,
                                    alignItems: 'flex-start',
                                }}
                            >
                                <AsciiTag label='UNIT SEP' hex='1F' dec={31} />
                                <Box>
                                    <Typography variant='h5' sx={{ mb: 1 }}>
                                        Unit Separator
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        color='primary'
                                        sx={{ display: 'block', mb: 1.5 }}
                                    >
                                        Field / column delimiter
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        Separates individual values within a
                                        single record. Equivalent to the comma
                                        in CSV or the tab in TSV, but impossible
                                        to confuse with data.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: dark
                                        ? 'rgba(0,0,0,0.4)'
                                        : 'rgba(0,0,0,0.03)',
                                    borderRadius: 1,
                                    fontFamily: MONO,
                                    fontSize: '0.8rem',
                                    color: 'text.secondary',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                <span
                                    style={{
                                        color: dark ? '#e8edf5' : '#0a1628',
                                    }}
                                >
                                    Alice
                                </span>
                                <span
                                    style={{
                                        color: dark ? '#00e5ff' : '#0066cc',
                                    }}
                                >
                                    {' \\x1F '}
                                </span>
                                <span
                                    style={{
                                        color: dark ? '#e8edf5' : '#0a1628',
                                    }}
                                >
                                    42
                                </span>
                                <span
                                    style={{
                                        color: dark ? '#00e5ff' : '#0066cc',
                                    }}
                                >
                                    {' \\x1F '}
                                </span>
                                <span
                                    style={{
                                        color: dark ? '#e8edf5' : '#0a1628',
                                    }}
                                >
                                    New York, NY
                                </span>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                p: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    bgcolor: 'secondary.main',
                                    opacity: 0.6,
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mb: 3,
                                    alignItems: 'flex-start',
                                }}
                            >
                                <AsciiTag label='REC SEP' hex='1E' dec={30} />
                                <Box>
                                    <Typography variant='h5' sx={{ mb: 1 }}>
                                        Record Separator
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        color='secondary'
                                        sx={{ display: 'block', mb: 1.5 }}
                                    >
                                        Row delimiter
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        Separates one record (row) from the
                                        next. Equivalent to a newline in CSV.
                                        Unlike a newline, it never appears in
                                        ordinary text fields, code, or
                                        multi-line values.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: dark
                                        ? 'rgba(0,0,0,0.4)'
                                        : 'rgba(0,0,0,0.03)',
                                    borderRadius: 1,
                                    fontFamily: MONO,
                                    fontSize: '0.8rem',
                                    color: 'text.secondary',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                <div>
                                    <span
                                        style={{
                                            color: dark ? '#e8edf5' : '#0a1628',
                                        }}
                                    >
                                        name\x1Fage\x1Fcity
                                    </span>
                                    <span
                                        style={{
                                            color: dark ? '#c49fff' : '#6200ea',
                                        }}
                                    >
                                        {' \\x1E '}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        style={{
                                            color: dark ? '#e8edf5' : '#0a1628',
                                        }}
                                    >
                                        Alice\x1F42\\x1FNew York, NY
                                    </span>
                                    <span
                                        style={{
                                            color: dark ? '#c49fff' : '#6200ea',
                                        }}
                                    >
                                        {' \\x1E '}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        style={{
                                            color: dark ? '#e8edf5' : '#0a1628',
                                        }}
                                    >
                                        Bob\x1F31\\x1FSão Paulo, BR
                                    </span>
                                    <span
                                        style={{
                                            color: dark ? '#c49fff' : '#6200ea',
                                        }}
                                    >
                                        {' \\x1E '}
                                    </span>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Parser pseudocode */}
                <Box
                    sx={{
                        p: { xs: 3, md: 5 },
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                    }}
                >
                    <Typography
                        variant='overline'
                        color='text.secondary'
                        sx={{ mb: 3, display: 'block' }}
                    >
                        Complete parser &mdash; pseudocode
                    </Typography>
                    <Box
                        sx={{
                            fontFamily: MONO,
                            fontSize: { xs: '0.78rem', md: '0.88rem' },
                            lineHeight: 2,
                            color: 'text.secondary',
                            '& .kw': {
                                color: dark ? '#00e5ff' : '#0066cc',
                            },
                            '& .fn': {
                                color: dark ? '#c49fff' : '#6200ea',
                            },
                            '& .cm': {
                                color: dark ? '#506479' : '#889911',
                            },
                            '& .str': {
                                color: dark ? '#b3e5fc' : '#1565c0',
                            },
                        }}
                    >
                        <div>
                            <span className='kw'>function</span>{' '}
                            <span className='fn'>parseCCSV</span>(bytes):
                        </div>
                        <div>
                            &nbsp;&nbsp;records = bytes.
                            <span className='fn'>split</span>(
                            <span className='str'>RS</span>){' '}
                            <span className='cm'>
                                {'// 0x1E - never appears in data'}
                            </span>
                        </div>
                        <div>
                            &nbsp;&nbsp;<span className='kw'>return</span>{' '}
                            records.<span className='fn'>map</span>(r {'=>'} r.
                            <span className='fn'>split</span>(
                            <span className='str'>US</span>)){' '}
                            <span className='cm'>
                                {'// 0x1F - split each row into fields'}
                            </span>
                        </div>
                        <div>&nbsp;</div>
                        <div>
                            <span className='cm'>
                                {
                                    "// That's the entire parser. No state machine. No quoting rules."
                                }
                            </span>
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export { Mechanism };
