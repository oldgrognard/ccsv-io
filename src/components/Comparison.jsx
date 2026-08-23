import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Score } from './Score.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MONO } from '../constants/fonts.js';
import { comparisonData } from '../data/comparisonData.js';
import { callouts } from '../constants/callouts.js';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const Comparison = () => {
    const dark = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Box
            id='compare'
            sx={{
                py: { xs: 8, md: 14 },
                ' .kw': {
                    color: dark ? '#00e5ff' : '#0066cc',
                },
                ' .fn': {
                    color: dark ? '#c49fff' : '#6200ea',
                },
                ' .cm': {
                    color: dark ? '#445566' : '#889911',
                },
                ' .str': {
                    color: dark ? '#b3e5fc' : '#1565c0',
                },
            }}
        >
            <Container maxWidth='lg'>
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant='overline'
                        color='primary'
                        sx={{ mb: 1, display: 'block' }}
                    >
                        Format Comparison
                    </Typography>
                    <Typography
                        variant='h2'
                        sx={{
                            fontSize: { xs: '1.9rem', md: '2.8rem' },
                            mb: 2,
                        }}
                    >
                        .ccsv <span className='cm'>vs</span> .csv{' '}
                        <span className='cm'>vs</span> .tsv
                    </Typography>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ maxWidth: 580 }}
                    >
                        Scored across eight attributes. Dots indicate relative
                        strength &mdash; more is better. Scores reflect design
                        properties, not tooling maturity.
                    </Typography>
                </Box>

                <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow
                                sx={{
                                    bgcolor: dark
                                        ? 'rgba(0,0,0,0.3)'
                                        : 'rgba(0,0,0,0.03)',
                                }}
                            >
                                <TableCell
                                    sx={{
                                        fontFamily: MONO,
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.08em',
                                        width: '24%',
                                    }}
                                >
                                    ATTRIBUTE
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: MONO,
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.08em',
                                        color: 'primary.main',
                                        width: '25%',
                                    }}
                                >
                                    .CCSV
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: MONO,
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.08em',
                                        color: 'primary.main',
                                        width: '25%',
                                    }}
                                >
                                    .CSV
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: MONO,
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.08em',
                                        color: 'primary.main',
                                        width: '25%',
                                    }}
                                >
                                    .TSV
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {comparisonData.map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        '&:hover': {
                                            bgcolor: dark
                                                ? 'rgba(0,229,255,0.02)'
                                                : 'rgba(0,102,204,0.02)',
                                        },
                                        '& td': {
                                            borderColor: 'divider',
                                        },
                                    }}
                                >
                                    <TableCell>
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                fontFamily: MONO,
                                                fontSize: '0.72rem',
                                                color: 'text.primary',
                                            }}
                                        >
                                            {row.attribute}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ mb: 1 }}>
                                            <Score value={row.ccsv.score} />
                                        </Box>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            sx={{ fontSize: '0.8rem' }}
                                        >
                                            {row.ccsv.value}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ mb: 1 }}>
                                            <Score value={row.csv.score} />
                                        </Box>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            sx={{ fontSize: '0.8rem' }}
                                        >
                                            {row.csv.value}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ mb: 1 }}>
                                            <Score value={row.tsv.score} />
                                        </Box>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            sx={{ fontSize: '0.8rem' }}
                                        >
                                            {row.tsv.value}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Summary callouts */}
                <Grid container spacing={3} sx={{ mt: 4 }}>
                    {callouts.map((card, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box
                                sx={{
                                    p: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 1,
                                    height: '100%',
                                }}
                            >
                                {card.icon === 'check' && (
                                    <CheckCircleRoundedIcon color='primary' />
                                )}
                                {card.icon === 'warning' && (
                                    <WarningRoundedIcon color='warning' />
                                )}
                                <Typography
                                    variant='h5'
                                    sx={{ mb: 1, fontSize: '0.95rem' }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                    sx={{ fontSize: '0.82rem' }}
                                >
                                    {card.body}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export { Comparison };
