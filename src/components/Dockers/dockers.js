import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../common/application_container';


class Dockers extends Component {

    render() {
        var __tabs = [];
        var __PageActions = [];

        return (
            <Container tabs={__tabs} PageActions={__PageActions}>
                Hello I am Dockers
            </Container>
        )
    }
    
}

export default withRouter(Dockers)