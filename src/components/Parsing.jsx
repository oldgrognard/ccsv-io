import { Box, Container, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { parsingRules } from '../data/parsingRules.js';

const Parsing = () => {
    const dark = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Box id='parsing' sx={{ py: { xs: 8, md: 14 } }}>
            <Container maxWidth='lg'>
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant='overline'
                        color='primary'
                        sx={{ mb: 1, display: 'block' }}
                    >
                        Parsing
                    </Typography>
                    <Typography
                        variant='h2'
                        sx={{
                            fontSize: { xs: '1.9rem', md: '2.8rem' },
                            mb: 2,
                        }}
                    >
                        Parsing CCSV
                    </Typography>
                    <Typography
                        variant='body1'
                        color={dark ? 'text.secondary' : 'text.primary'}
                    >
                        The basic structure of CCSV is simple: RS separates
                        records, and US separates fields.
                    </Typography>
                    <Box
                        sx={{
                            mt: 7,
                            p: { xs: 3, md: 5 },
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            textAlign: 'left',
                        }}
                    >
                        <Typography
                            variant='overline'
                            color='text.secondary'
                            sx={{
                                mb: 3,
                                display: 'block',
                            }}
                        >
                            A conforming parser must also:
                        </Typography>
                        {parsingRules.map((rule, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    py: 1.25,
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    '&:last-child': {
                                        borderBottom: 'none',
                                        pb: 0,
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '0.72rem',
                                        color: 'primary.main',
                                        minWidth: 24,
                                        pt: 0.3,
                                    }}
                                >
                                    {`${index + 1}.`}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                    sx={{
                                        fontSize: '0.85rem',
                                        pt: 0.3,
                                    }}
                                >
                                    {rule}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export { Parsing };
