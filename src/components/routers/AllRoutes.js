import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Error404 from '../common/error404';
import Login from '../Authentication/login';
import App from '../../App';
import Dockers from '../Dockers/dockers';
import DockerMachine from '../Dockers/machines';


import { RC_LOAD_APP, RC_LOAD_LOGIN, RC_DOCKER, RC_DOCKER_MACHINES } from './RouteConstants';



class AllRoutes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <ProtectedRoute path={RC_LOAD_LOGIN} component={Login} />

                    <ProtectedRoute exact path={RC_LOAD_APP} component={App} />

                    <ProtectedRoute exact path={RC_DOCKER} component={Dockers} />
                    <ProtectedRoute exact path={RC_DOCKER_MACHINES} component={DockerMachine} />

                    <ProtectedRoute exact path="*" component={Error404} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AllRoutes