/* eslint-disable react/style-prop-object */
import ArtistTable from './components/table';
import ActionLog from './ActionLog';
import './styles.css';

const dashboard = () => {
    return (
        <div className="dashboard">
            <ArtistTable />
            <ActionLog />
        </div>
    );
};

export default dashboard;
