import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../common/application_container';


class DockerMachine extends Component {

    render() {
        return (
            <Container>
                Hello I am Docker Machines
            </Container>
        )
    }
    
}

export default withRouter(DockerMachine)