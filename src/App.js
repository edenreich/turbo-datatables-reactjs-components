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


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      records: [],
      columns: [{ name: 'test'}, { name: 'test'}],
      perPage: [ '10', '20', '30' ],
      requestData: {
        page: 1,
        draw: 0,
        limit: 10,
        search: '',
        column: 0,
        direction: 'desc'
      },
      pagination: {
        lastPage: null,
        currentPage: null,
        nextPage: null,
        prevPage: null,
        total: null,
        totalPages: null,
        lastPageUrl: '',
        nextPageUrl: '',
        prevPageUrl: '',
        from: null,
        to: null
      }
    };
  }

  onPerPageChanged(limit) {
    this.requestData.limit = limit;
  }

  onSearch(term) {
    this.requestData.search = term;
  }

  onColumnClicked(column, direction) {
    this.requestData.direction = direction;
    this.requestData.column = column;
  }

  onGettingRecords() {
    this.loading = true;
  }
  
  onRecordsFetched(response) {
    this.columns = response.columns;
    this.records = response.data;
    this.pagination = response.pagination || {};
    this.loading = false;
  }

  onPrev() {

  }

  onNext() {

  }

  onLinkClicked() {

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <DatatableWrapper>
            <DatatableHeader>
              <DatatablePerPage perPage={this.state.perPage} 
                                perPageChanged={this.onPerPageChanged}>
              </DatatablePerPage>
              <DatatableSearch searching={this.onSearch}></DatatableSearch>
            </DatatableHeader>
            <Datatable url="http://localhost:3000/users"
                      data={this.state.requestData}
                      gettingRecords={this.onGettingRecords}
                      onRecordsFetched={this.onRecordsFetched}>
              <DatatableHead columns={this.state.columns}
                            columnClicked={this.onColumnClicked}>
              </DatatableHead>
              <DatatableBody columns={this.state.columns}
                            records={this.state.records}>
                <DatatableLoader loading={this.state.loading}></DatatableLoader>
              </DatatableBody>
              <DatatableFooter columns={this.state.columns}></DatatableFooter>
            </Datatable>
            <DatatablePagination short={this.state.pagination.totalPage > 10 ? true : false}
                                pagination={this.state.pagination}
                                prev={this.onPrev}
                                next={this.onNext}
                                linkClicked={this.onLinkClicked}>
            </DatatablePagination>
          </DatatableWrapper>
        </div>
      </div>
    );
  }
}

export default App;
