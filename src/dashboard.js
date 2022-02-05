/* eslint-disable react/style-prop-object */
import React from 'react';
import ArtistTable from './components/table';
import ActionLog from './ActionLog';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

const dashboard = () => {
    return (
        <div className="dashboard">
            <ArtistTable />
            <ActionLog />
        </div>
    );
};

export default withAuthenticator(dashboard);
