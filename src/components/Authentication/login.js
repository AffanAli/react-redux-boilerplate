import React, {Component} from 'react';
import {connect} from "react-redux";

import {login} from '../../actions/index';
import { RC_LOAD_APP } from '../routers/RouteConstants';
import Container from '../common/application_container';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        }
        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        this.onLogin();
    }

    onLogin() {
        var user = {
            "empID": "-",
            "access_token": "token",
        }
        localStorage.setItem("user", JSON.stringify(user));

        this.props.login(this.state.userDetails);
        this.props.history.push(RC_LOAD_APP)
    }

    render() {
        return (
            <Container headers="Login">
                Hello I'm Login
            </Container>
        )
    }
}


function mapStateToProps({activeUser}){
    return {activeUser}
}

export default connect(mapStateToProps,{login})(Login);