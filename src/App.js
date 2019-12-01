import React, {Component} from 'react';
import Container from './components/common/application_container';
import TableRenderer from './components/common/table_renderer';
import DynamicList from './components/common/dynamic_list';
// import Dockers from './components/Dockers/dockers';
// import DockerMachine from './components/Dockers/machines';


class App extends Component {

    render() {

        // var __tabs = [
        //     {__name:"Test", __className:"fas fa-arrow-left font-s-18 mr-2", __render: true, __component: <Dockers/> },
        //     {__name:"Test1", __className:"fas fa-arrow-left font-s-18 mr-2", __render: true, __component: <DockerMachine/> }
        // ];
        
        // var __PageActions = [
        //     {__name: "Back", __uri: "/", __uri_extra: {'test':'O Wow'}, __className: "fas fa-arrow-left font-s-18 mr-2", __render: true}
        // ];


        return (
            <Container header="Main Page" tabs={null} PageActions={null}>
                Welcome to Surveillance Admin
                <DynamicList />
            </Container>
        );
    }

}

export default App;
