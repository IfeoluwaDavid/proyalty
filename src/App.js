import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Layout from './Layout';
import './styles.css';
import { StyledEngineProvider } from '@mui/material/styles';

Amplify.configure(awsconfig);

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Layout>
        </StyledEngineProvider>
    );
}

export default App;
