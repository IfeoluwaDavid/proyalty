import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import HistoryIcon from '@mui/icons-material/History';

const ActionLog = () => {
    return (
        <div>
            <Paper className="action-log-head-container">
                <HistoryIcon
                    sx={{
                        color: 'white',
                        alignSelf: 'center',
                        marginRight: '1rem',
                        fontSize: 32
                    }}
                />
                <Typography
                    variant="h6"
                    component="div"
                    className="action-log-header"
                >
                    Activity Log
                </Typography>
            </Paper>
            <Divider />
            <List className="action-log-body-container">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <Typography
                                    sx={{ letterSpacing: '0rem' }}
                                    component="span"
                                    variant="body2"
                                >
                                    Ali Connors
                                </Typography>
                                <Typography
                                    sx={{
                                        letterSpacing: '0rem',
                                        margin: '0rem 0.4rem'
                                    }}
                                    component="span"
                                    variant="body2"
                                >
                                    paid out
                                </Typography>
                                <Typography component="span" variant="body2">
                                    The Beatles
                                </Typography>
                            </React.Fragment>
                        }
                        secondary="Jan 9, 2014"
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Craig Secario"
                        secondary="Jan 9, 2014"
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </List>
        </div>
    );
};

export default ActionLog;
