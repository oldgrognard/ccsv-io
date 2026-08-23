import { Box, Typography } from '@mui/material';
import { specPreviewData } from '../data/specPreviewData.js';
import { MONO } from '../constants/fonts.js';

const SpecPreview = () => {
    return (
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
                Spec preview: normative rules
            </Typography>
            {specPreviewData.map(([num, rule]) => (
                <Box
                    key={num}
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
                            fontFamily: MONO,
                            fontSize: '0.72rem',
                            color: 'primary.main',
                            minWidth: 24,
                            pt: 0.3,
                        }}
                    >
                        {num}
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
    );
};

export { SpecPreview };
