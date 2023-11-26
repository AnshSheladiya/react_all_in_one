import React from 'react';
import BasicTable from './BasicTable';
import DataTable from './DataTable';
import CustomizedTables from './CustomizedTables';
import CollapsibleTable from './CollapsibleTable';
import SpanningTable from './SpanningTable';


const TableIndex = () => {
  const mainContainerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: '20px 0', // Improved spacing
    textAlign: 'center', // Center the text
    textTransform: 'uppercase', // Uppercase text
    borderBottom: '2px solid #333', // Add an underline
    paddingBottom: '10px', // Space under the underline
  };

  const componentStyle = {
    margin: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  };

  return (
    <div style={mainContainerStyle}>
      <h1 style={titleStyle}>Table</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>BasicTable</h2>
          <BasicTable />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>DataTable</h2>
          <DataTable />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>CustomizedTables</h2>
          <CustomizedTables />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>CollapsibleTable</h2>
          <CollapsibleTable />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>SpanningTable</h2>
          <SpanningTable />
        </div>
      </div>
    </div>
  );
};

export default TableIndex;
