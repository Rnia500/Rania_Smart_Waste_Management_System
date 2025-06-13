import React from 'react';
import WasteReportForm from './components/WasteReportForm';
import ReportList from './components/ReportList';

function App() {
  return (
    <div className="App">
      <h1>Smart Waste Management</h1>
      <WasteReportForm />
      <ReportList />
    </div>
  );
}

export default App;