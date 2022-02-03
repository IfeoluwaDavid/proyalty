/* eslint-disable react/style-prop-object */
import React from 'react';
import ArtistManagement from "./ArtistManagement";
import ActionLog from './ActionLog';
import "./styles.css";

const dashboard = () => {
  return (
    <div className="dashboard">
      <ArtistManagement />
      <ActionLog />
    </div>
  );
};

export default dashboard;
