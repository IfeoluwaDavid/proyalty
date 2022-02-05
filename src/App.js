import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Layout from './Layout';
import './styles.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App({ signOut, user }) {
    console.log('here you go bruh -', user);
    return (
        <StyledEngineProvider injectFirst>
            <Layout signOut={signOut}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Layout>
        </StyledEngineProvider>
    );
}

export default withAuthenticator(App);
