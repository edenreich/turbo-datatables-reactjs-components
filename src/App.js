import React, { Component } from 'react';
import DatatableWrapper from './components/DatatableWrapper';
import DatatableHeader from './components/DatatableHeader';
import DatatablePerPage from './components/DatatablePerPage';
import DatatableSearch from './components/DatatableSearch';
import Datatable from './components/Datatable';
import DatatableLoader from './components/DatatableLoader';
import DatatableHead from './components/DatatableHead';
import DatatableBody from './components/DatatableBody';
import DatatableFooter from './components/DatatableFooter';
import DatatablePagination from './components/DatatablePagination';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DatatableWrapper>
          <DatatableHeader>
            <DatatablePerPage></DatatablePerPage>
            <DatatableSearch></DatatableSearch>
          </DatatableHeader>
          <Datatable>
            <DatatableLoader></DatatableLoader>
            <DatatableHead></DatatableHead>
            <DatatableBody></DatatableBody>
            <DatatableFooter></DatatableFooter>
          </Datatable>
          <DatatablePagination></DatatablePagination>
        </DatatableWrapper>
      </div>
    );
  }
}

export default App;
