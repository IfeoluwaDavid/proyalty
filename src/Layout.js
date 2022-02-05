import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import './styles.css';

const Layout = ({ children, signOut }) => {
    return (
        <div style={{ width: 'fit-content', margin: '0 auto' }}>
            <header>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 'fit-content'
                    }}
                >
                    <PaidIcon
                        sx={{
                            fontSize: 50,
                            color: 'white'
                        }}
                    />
                    <Typography
                        variant="h1"
                        component="div"
                        sx={{
                            fontSize: 35,
                            margin: '0rem 1rem',
                            alignSelf: 'center',
                            color: '#047d95'
                        }}
                    >
                        Proyalty
                    </Typography>
                </div>

                <Button
                    size="small"
                    variant="contained"
                    endIcon={<LogoutIcon />}
                    onClick={signOut}
                    className="sign-out-button"
                >
                    Sign Out
                </Button>
            </header>
            {/* <Typography variant="p" component="div"
        sx={{
        fontSize: 20, margin: "1.5rem 0rem" , alignSelf: "center"
        }} >
        Hello Ifeoluwa
      </Typography> */}
            {/* This application has no navigation bar */}
            <main>{children}</main>
            {/* This application has no footer */}
        </div>
    );
};

export default Layout;
// export default withAuthenticator(Layout);
