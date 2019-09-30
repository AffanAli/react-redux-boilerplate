import React, {Component} from 'react';
import Container from './components/common/application_container';
import TableRenderer from './components/common/table_renderer';
import Dockers from './components/Dockers/dockers';
import DockerMachine from './components/Dockers/machines';


class App extends Component {

    render() {

        var __tabs = [
            {__name:"Test", __className:"fas fa-arrow-left font-s-18 mr-2", __render: true, __component: <Dockers/> },
            {__name:"Test1", __className:"fas fa-arrow-left font-s-18 mr-2", __render: true, __component: <DockerMachine/> }
        ];
        
        var __PageActions = [
            {__name: "Back", __uri: "/", __uri_extra: {'test':'O Wow'}, __className: "fas fa-arrow-left font-s-18 mr-2", __render: true}
        ];

        var tableHeaders = {
            'Col1': { label:'Col 1', render: true },
            'Col2': { label:'Col 2', render: true }
        }

        var tableData = [
            {Col1: 'F1'},
            {Col2: 'R2', Col1: 'T4'}
        ]

        return (
            <Container header="Main Page" tabs={__tabs} PageActions={__PageActions}>
              Welcome to Surveillance Admin
              <TableRenderer usePagination={false} showSno={false} tableHeaders={tableHeaders} tableData={tableData} />
            </Container>
        );
    }

}

export default App;
