import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MONO } from '../constants/fonts.js';
import { AsciiTag } from './AsciiTag';

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
                        Two delimiters.
                    </Typography>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ maxWidth: 560 }}
                    >
                        CCSV uses two ASCII control characters:{' '}
                        <strong>US</strong> &mdash; Field delimiter ( separates
                        fields within a record ), and <strong>RS</strong>{' '}
                        &mdash; Record separator ( separates records within a
                        file).
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
                                        Field delimiter
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        Separates individual fields within a
                                        record. Like the comma in CSV or the tab
                                        in TSV, US defines the boundary between
                                        fields. Because US is a non-printing
                                        control character, printable characters
                                        such as commas, tabs, and quotation
                                        marks do not have delimiter significance
                                        in CCSV.
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
                                        Record delimiter
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        Separates one record from the next. CCSV
                                        does not use CR or LF as record
                                        delimiters, so those charcters may occur
                                        within field values, including
                                        multi-line text.
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
                <Typography
                    variant='h2'
                    sx={{
                        fontSize: { xs: '1.9rem', md: '2.8rem' },
                        mb: 2,
                    }}
                >
                    A simple tabular structure
                </Typography>
                <Typography variant='body1'>
                    A CCSV file consists of a header followed by zero or more
                    records.
                </Typography>
                <Typography variant='body1' sx={{ mb: 2 }}>
                    The header defines the fields in each record. The header and
                    every records MUST contain the same number of fields.
                </Typography>
                <Typography variant='body1'>
                    For example, a three-field dataset might contain:
                </Typography>
                <Typography variant='body1'>
                    <strong>Header: </strong>
                    <code>name · age · location</code>
                </Typography>
                <Typography>
                    <strong>Record:</strong> Alice · 42 · New York, NY
                </Typography>
                <Typography>
                    <strong>Record:</strong> Bob · 31 · São Paulo, Br
                </Typography>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.03)',
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
                            name
                            <span
                                style={{
                                    color: dark ? '#00e5ff' : '#0066cc',
                                }}
                            >
                                {' \\x1F '}
                            </span>
                            age{' '}
                            <span
                                style={{
                                    color: dark ? '#00e5ff' : '#0066cc',
                                }}
                            >
                                {' \\x1F '}
                            </span>
                            city
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
                            Alice{' '}
                            <span
                                style={{
                                    color: dark ? '#00e5ff' : '#0066cc',
                                }}
                            >
                                {' \\x1F '}
                            </span>
                            42{' '}
                            <span
                                style={{
                                    color: dark ? '#00e5ff' : '#0066cc',
                                }}
                            >
                                {' \\x1F '}
                            </span>
                            New York, NY
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
                            Bob{' '}
                            <span
                                style={{
                                    color: dark ? '#00e5ff' : '#0066cc',
                                }}
                            >
                                {' \\x1F '}
                            </span>
                            31{' '}
                            <span
                                style={{
                                    color: dark ? '#00e5ff' : '#0066cc',
                                }}
                            >
                                {' \\x1F '}
                            </span>
                            São Paulo, BR
                        </span>
                        <span
                            style={{
                                color: dark ? '#c49fff' : '#6200ea',
                            }}
                        >
                            {' \\x1E '}
                        </span>
                    </div>
                </Box>{' '}
                <Typography variant='body1'>
                    In the actual CCSV file, the fields are separated by US
                    (U+001F) and the records by RS (U+001E).
                </Typography>
                {/* Parser pseudocode */}
                <Box
                    sx={{
                        p: { xs: 3, md: 5 },
                        mt: { xs: 3, md: 5 },
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
                        Parsing CCSV
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
