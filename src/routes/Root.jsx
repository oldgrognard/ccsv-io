import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header';

const Root = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
            <Header />
            <Box
                sx={{
                    pb: '100px',
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export { Root };
