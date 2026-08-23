import { Box, Typography } from '@mui/material';
import { MONO } from '../constants/fonts.js';

const AsciiTag = ({ label, hex, dec }) => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 0.5,
                px: 2,
                py: 1.5,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Typography
                variant='overline'
                color='primary'
                sx={{ lineHeight: 1 }}
            >
                {label}
            </Typography>
            <Typography
                sx={{ fontFamily: MONO, fontWeight: 700, fontSize: '1.5rem' }}
            >
                {dec}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
                0x{hex}
            </Typography>
        </Box>
    );
};

export { AsciiTag };
