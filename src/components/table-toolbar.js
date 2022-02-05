import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },

    cssLabel: {
        color: 'green'
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `white !important`
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
    }
});

export function TableToolbar(props) {
    const { numSelected } = props;
    return (
        <Toolbar
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '0.5rem'
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
                size="small"
                // className="text-input-fields"
                InputProps={{
                    classes: {
                        root: props.cssOutlinedInput,
                        focused: props.cssFocused,
                        notchedOutline: props.notchedOutline
                    },
                    inputMode: 'numeric'
                }}
            />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {numSelected === 1 && (
                    <div>
                        <Tooltip title="Edit">
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                )}
                {numSelected > 0 && (
                    <div>
                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            className="update-artiste-button"
                        >
                            Pay Out
                        </Button>
                    </div>
                )}
                <Button
                    variant="contained"
                    endIcon={<AddCircleIcon />}
                    className="update-artiste-button"
                >
                    Add
                </Button>
            </div>
        </Toolbar>
    );
}

export default withStyles(styles)(TableToolbar);
