import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MONO } from '../constants/fonts.js';
import { comparisonData } from '../data/comparisonData.js';

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
                        CCSV is intentionally limited to a simple rectangular
                        data model. Its use of US and RS as delimiters
                        distinguishes it from formats that use printable
                        characters.
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
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            sx={{ fontSize: '0.8rem' }}
                                        >
                                            {row.ccsv.value}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            sx={{ fontSize: '0.8rem' }}
                                        >
                                            {row.csv.value}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
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
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                height: '100%',
                            }}
                        >
                            <CheckCircleRoundedIcon color='primary' />
                            <Typography
                                variant='h5'
                                sx={{ mb: 1, fontSize: '0.95rem' }}
                            >
                                No quoting syntax
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem', mb: 1 }}
                            >
                                CCSV does not define a quoting mechanism.
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem', mb: 1 }}
                            >
                                US and RS are reserved as delimiters, while
                                other characters including commas, tabs,
                                quotation marks, CR, and LF, may occur in field
                                values.
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem' }}
                            >
                                This allows CCSV to represent values containing
                                printable delimiter characters without applying
                                a quoting convention to those characters.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                height: '100%',
                            }}
                        >
                            <CheckCircleRoundedIcon color='primary' />
                            <Typography
                                variant='h5'
                                sx={{ mb: 1, fontSize: '0.95rem' }}
                            >
                                Multi-line values
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem', mb: 1 }}
                            >
                                CR and LF are valid characters within CCSV field
                                values.
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem', mb: 1 }}
                            >
                                A field may therefore contain multi-line text
                                without using a quoting mechanism for those
                                characters.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                height: '100%',
                            }}
                        >
                            <CheckCircleRoundedIcon color='primary' />
                            <Typography
                                variant='h5'
                                sx={{ mb: 1, fontSize: '0.95rem' }}
                            >
                                A defined delimiter structure
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem', mb: 1 }}
                            >
                                CCSV defines two delimiters:
                            </Typography>
                            <List dense={true} sx={{ mb: 1 }}>
                                <ListItem>
                                    US (U+001F) separates fields
                                </ListItem>
                                <ListItem>
                                    RS (U+001E) separates records
                                </ListItem>
                            </List>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem' }}
                            >
                                The format also defines UTF-8 encoding, a
                                required header, consistent field counts, and
                                restrictions on the delimiter characters within
                                field contents.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                height: '100%',
                            }}
                        >
                            <WarningRoundedIcon color='warning' />
                            <Typography
                                variant='h5'
                                sx={{ mb: 1, fontSize: '0.95rem' }}
                            >
                                Tooling
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem', mb: 1 }}
                            >
                                CCSV tooling is currently more limited than
                                tooling for CSV and TSV.
                            </Typography>
                            <Typography
                                variant='body'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem' }}
                            >
                                Applications that support CCSV need to implement
                                the format directly or use a library that
                                provides CCSV support.
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ fontSize: '0.82rem' }}
                            >
                                The CCSV specification is intentionally small,
                                which makes implementations relatively
                                straightforward while leaving applications free
                                to determine how CCSV data is imported,
                                exported, stored, or transformed.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export { Comparison };
