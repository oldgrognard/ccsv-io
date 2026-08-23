import { Box } from '@mui/material';

const Score = ({ value }) => {
    const dotArray = [1, 2, 3, 4, 5];
    return (
        <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
            {dotArray.map((item) => (
                <Box
                    key={item}
                    sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: item <= value ? 'primary.main' : 'divider',
                    }}
                />
            ))}
        </Box>
    );
};

export { Score };
