import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import PendingIcon from '@mui/icons-material/Pending';
import { visuallyHidden } from '@mui/utils';
import { DataStore } from 'aws-amplify';
import { Artist } from './models';
import './styles.css';

const headCells = [
    {
        id: 'id',
        label: 'ID'
    },
    {
        id: 'artist',
        label: 'Artist'
    },
    {
        id: 'rate',
        label: 'Rate'
    },
    {
        id: 'streams',
        label: 'Streams'
    },
    {
        id: 'payout',
        label: 'Pay Out'
    },
    {
        id: 'paidOut',
        label: 'Paid Out'
    }
    // {
    //   id: "averagePayout",
    //   label: "Average Payout",
    // },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all'
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            // active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '0.5rem',
                color: 'white'
                // px: { sm: 2 },
                // pr: { xs: 1, sm: 1 },
                // ...(numSelected > 0 && {
                //   bgcolor: (theme) =>
                //     alpha(
                //       theme.palette.primary.main,
                //       theme.palette.action.activatedOpacity
                //     ),
                // }),
            }}
        >
            <TextField
                id="outlined-basic"
                label="Search Artistes"
                variant="outlined"
                size="small"
            />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {numSelected === 1 && (
                    <>
                        <Tooltip title="Edit">
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                )}
                {numSelected > 0 && (
                    <>
                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            style={{
                                fontSize: '0.8rem',
                                background: '#091929',
                                margin: '0rem 1rem'
                            }}
                        >
                            Pay Out
                        </Button>
                    </>
                )}

                <Button
                    variant="contained"
                    endIcon={<AddCircleIcon />}
                    style={{
                        fontSize: '0.8rem',
                        background: '#091929',
                        margin: '0rem 1rem'
                    }}
                >
                    Add New Artiste
                </Button>
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

export default function ArtistManagement() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [artists, setArtists] = React.useState([]);

    const getArtists = React.useCallback(async () => {
        const fullDBdata = await DataStore.query(Artist);
        if (!fullDBdata) return null;
        return fullDBdata;
    }, []);

    React.useEffect(() => {
        DataStore.start();
        getArtists().then((response) => {
            let artists = response;
            setArtists(artists);
        });
    }, [getArtists]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = artists.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - artists.length) : 0;

    return (
        <Box className="artiste-management-table">
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <Divider />
                <TableContainer>
                    <Table
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={artists.length}
                        />
                        <TableBody
                            sx={{
                                width: 300
                            }}
                        >
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(artists, getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((artistObj, index) => {
                                    const isItemSelected = isSelected(
                                        artistObj.id
                                    );
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) =>
                                                handleClick(event, artistObj.id)
                                            }
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={artistObj.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby':
                                                            labelId
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                            >
                                                {index}
                                            </TableCell>
                                            <TableCell>
                                                {artistObj.name}
                                            </TableCell>
                                            <TableCell>
                                                {'$'}
                                                {artistObj.rate.toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                {artistObj.streams}
                                            </TableCell>
                                            <TableCell>
                                                {'$'}
                                                {artistObj.payout.toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                {artistObj.paidOut ? (
                                                    <Chip
                                                        size="small"
                                                        color="success"
                                                        icon={
                                                            <CheckCircleIcon />
                                                        }
                                                        label="Paid"
                                                    />
                                                ) : (
                                                    <Chip
                                                        size="small"
                                                        color="warning"
                                                        icon={<PendingIcon />}
                                                        label="Pending"
                                                    />
                                                )}
                                            </TableCell>

                                            {/* <TableCell>{artistObj.averagePayout}</TableCell> */}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={artists.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Enable Row Spacing"
      /> */}
        </Box>
    );
}
