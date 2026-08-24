import { Box, Container, Typography } from '@mui/material';
import { MONO } from '../constants/fonts.js';

const Footer = () => {
    return (
        <Box
            component='footer'
            sx={{
                borderTop: '1px solid',
                borderColor: 'divider',
                py: 4,
            }}
        >
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: MONO,
                                fontWeight: 700,
                                color: 'primary.main',
                            }}
                        >
                            .ccsv
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                            ASCII-native rectangular data format
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        {['RS = 0x1E', 'US = 0x1F', 'UTF-8'].map((tag) => (
                            <Typography
                                key={tag}
                                variant='caption'
                                sx={{
                                    fontFamily: MONO,
                                    color: 'text.secondary',
                                }}
                            >
                                {tag}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export { Footer };
