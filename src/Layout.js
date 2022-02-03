import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports';

// Amplify.configure(awsExports);

const Layout = ({ children, signOut, user }) => {
    console.log(`Hello ${user.username}`);
    return (
        <div style={{ width: 'fit-content', margin: '0 auto' }}>
            <header
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 'fit-content'
                    }}
                >
                    <PaidIcon
                        sx={{
                            fontSize: 55
                        }}
                    />
                    <Typography
                        variant="h1"
                        component="div"
                        sx={{
                            fontSize: 35,
                            margin: '0rem 1rem',
                            alignSelf: 'center'
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

// export default Layout;
export default withAuthenticator(Layout);
