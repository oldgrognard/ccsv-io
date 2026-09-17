import { Button, Container, Typography } from '@mui/material';
import { MONO } from '../constants/fonts.js';
import { Link as RouterLink } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
    return (
        <Container
            maxWidth='md'
            sx={{ py: { xs: 12, md: 20 }, textAlign: 'center' }}
        >
            <Typography
                sx={{
                    fontFamily: MONO,
                    color: 'primary.main',
                    fontSize: '0.8rem',
                    mb: 2,
                }}
            >
                HTTP 404 - 0x1E RECORD NOT FOUND
            </Typography>
            <Typography
                variant='h2'
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}
            >
                No record at this path
            </Typography>
            <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                The delimiter you followed points to a field that does not
                exist.
            </Typography>
            <Button
                component={RouterLink}
                to='/'
                variant='contained'
                startIcon={<ArrowBackIcon />}
                sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
            >
                Back to the specification
            </Button>
        </Container>
    );
};

export { NotFound };
