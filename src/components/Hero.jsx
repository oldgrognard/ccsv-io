import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { MONO } from '../constants/fonts.js';
import { HeroBackground } from './HeroBackground';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Hero = () => {
    const theme = useTheme();
    const dark = useMediaQuery('(prefers-color-scheme: dark)');

    return (
        <Box
            id='what'
            sx={{
                position: 'relative',
                py: { xs: 10, md: 16 },
                overflow: 'hidden',
            }}
        >
            <HeroBackground />
            <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ maxWidth: 760 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            mb: 3,
                        }}
                    >
                        <Chip
                            label='RFC Proposal'
                            size='small'
                            sx={{
                                fontFamily: MONO,
                                fontSize: '0.65rem',
                                letterSpacing: '0.08em',
                                bgcolor: dark
                                    ? 'rgba(0,229,255,0.1)'
                                    : 'rgba(0,102,204,0.08)',
                                color: 'primary.main',
                                border: '1px solid',
                                borderColor: dark
                                    ? 'rgba(0,229,255,0.2)'
                                    : 'rgba(0,102,204,0.2)',
                            }}
                        />
                        <Typography variant='caption' color='text.secondary'>
                            ASCII-native delimiter format
                        </Typography>
                    </Box>

                    <Typography
                        variant='h1'
                        sx={{
                            fontSize: { xs: '2.8rem', md: '5rem' },
                            lineHeight: 1.0,
                            mb: 3,
                            '& span': { color: 'primary.main' },
                        }}
                    >
                        The delimiter that <span>cannot</span> collide with your
                        data.
                    </Typography>

                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ fontSize: '1.1rem', maxWidth: 530, mb: 4 }}
                    >
                        <strong style={{ color: dark ? '#e8edf5' : '#0a1628' }}>
                            .ccsv
                        </strong>{' '}
                        uses ASCII control characters, the Unit Separator (US)
                        and Record Separator (RS), as delimiters. These
                        characters were designed in 1963 specifically to
                        separate data. They have never appeared in human text.
                        No quoting. No escaping. No ambiguity.
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <Button
                            variant='contained'
                            size='large'
                            color='primary'
                            href='#spec'
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '0.95rem',
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                '&:hover': { opacity: 0.9 },
                            }}
                        >
                            Read the Specification →
                        </Button>
                        <Button
                            variant='outlined'
                            size='large'
                            href='#compare'
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '0.95rem',
                                borderColor: 'divider',
                                color: 'text.primary',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                },
                            }}
                        >
                            See the comparison
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export { Hero };
