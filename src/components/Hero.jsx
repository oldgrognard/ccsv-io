import {
    Avatar,
    Box,
    Button,
    Chip,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MONO } from '../constants/fonts.js';
import { HeroBackground } from './HeroBackground';

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
                            label='IETF Internet-Draft'
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
                            draft-rankin-ccsv-03
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
                        <span>Control characters</span> as delimiters
                    </Typography>
                    <Typography>
                        CCSV uses two ASCII control characters as delimiters:
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>
                                    US
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary='Unit Separator (US, U+001F)'
                                secondary='separates fields.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                                    RS
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary='Record Separator (RS, U+001E)'
                                secondary='separates records.'
                            />
                        </ListItem>
                    </List>

                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ fontSize: '1.1rem', maxWidth: 530, mb: 4 }}
                    >
                        A{' '}
                        <strong style={{ color: dark ? '#e8edf5' : '#0a1628' }}>
                            CCSV
                        </strong>{' '}
                        file is encoded using UTF-8 and begins with a header. US
                        and RS are reserved by the format and MUST NOT occur
                        within field contents.
                    </Typography>

                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ fontSize: '1.1rem', maxWidth: 530, mb: 4 }}
                    >
                        Unlike formats that use printable characters as
                        delimiters, CCSV does not define a quoting mechanism for
                        ordinary field values.
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
                            Compare formats
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export { Hero };
