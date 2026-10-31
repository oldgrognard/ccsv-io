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
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
                bgcolor: 'background.default',
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
                            CCSV
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                            UTF-8 encoded rectangular data format
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        {[
                            'US = U+001F - Field Separator',
                            'RS = U+001E - Record Separator',
                        ].map((tag) => (
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
