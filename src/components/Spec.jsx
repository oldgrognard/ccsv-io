import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HeroBackground } from './HeroBackground.jsx';
import { SpecPreview } from './SpecPreview.jsx';

const Spec = () => {
    const dark = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Box
            id='spec'
            sx={{
                py: { xs: 10, md: 16 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <HeroBackground dark={dark} />
            <Container
                maxWidth='md'
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant='overline'
                    color='primary'
                    sx={{
                        mb: 2,
                        display: 'block',
                    }}
                >
                    Specification
                </Typography>
                <Typography
                    variant='h2'
                    sx={{
                        fontSize: { xs: '2rem', md: '3.2rem' },
                        mb: 3,
                        lineHeight: 1.15,
                    }}
                >
                    CCSV is currently defined by the IETF Internet-Draft
                    draft-rankin-ccsv-03.
                </Typography>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{
                        mb: 5,
                        fontSize: '1.05rem',
                        maxWidth: 520,
                        mx: 'auto',
                    }}
                >
                    The draft specifies the file encoding, delimiters, record
                    structure, field rules, security considerations, and
                    proposed{' '}
                    <Typography
                        component='span'
                        variant='overline'
                        color='primary'
                    >
                        text/ccsv
                    </Typography>{' '}
                    media type.
                </Typography>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{
                        mb: 5,
                        fontSize: '1.05rem',
                        maxWidth: 520,
                        mx: 'auto',
                    }}
                >
                    The Internet-Draft is the authoritative technical
                    specification for CCSV.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        variant='contained'
                        component={Link}
                        size='large'
                        color='primary'
                        sx={{
                            px: 5,
                            py: 1.75,
                            fontSize: '1rem',
                            fontWeight: 700,
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            minWidth: '240px',
                        }}
                        endIcon={<ArrowForwardRoundedIcon />}
                        target='_blank'
                        href='https://datatracker.ietf.org/doc/html/draft-rankin-ccsv-03'
                    >
                        Read the Rules
                    </Button>
                </Box>

                {/* Spec Preview */}
                <SpecPreview />
            </Container>
        </Box>
    );
};

export { Spec };
