import React from "react";
import EstablishmentService from "../../services/EstablishmentService";
import SessionStorageHelper from "../../tools/SessionStorageHelper";
import LoginForm from "../../components/LoginForm";
import { RouteComponentProps } from "react-router";

import { withRouter } from 'react-router-dom';

interface LoginState {
    username: string;
    usernameModified: boolean;
    password: string;
    passwordModified: boolean;
    passwordError: boolean;
    showPassword: boolean;
    authenticationFailed: boolean;
}

/**
 * LoginPage Container
 * @extends {Component<Props, State>}
 */
class LoginPage extends React.Component<RouteComponentProps, LoginState> {
    state = {
        username: '',
        usernameModified: false,
        password: '',
        passwordModified: false,
        passwordError: false,
        showPassword: false,
        authenticationFailed: false
    };

    handleSubmit = (event: any) => {
        this.setState({ authenticationFailed: false });

        EstablishmentService.login(this.state.username, this.state.password)
            .then(response => {
                const jsonWebToken = response.data;
                SessionStorageHelper.updateToken(jsonWebToken.access_token);
                this.props.history.push('/establishments')
            }).catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    console.log("Authentication failed");
                    this.setState({ authenticationFailed: true });
                }
            });
    }


    handlePasswordVisibleChange = (event: any) => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleUsernameChange = (event: any) => {
        let target = event.currentTarget as HTMLInputElement;
        let value = target.value;
        this.setState({ username: value, usernameModified: true })
    }

    handlePasswordChange = (event: any) => {
        let target = event.currentTarget as HTMLInputElement;
        let value = target.value;
        this.setState({ password: value, passwordError: false, passwordModified: true });
    }

    render() {
        return (
            <LoginForm
                username={this.state.username}
                password={this.state.password}
                onSubmit={this.handleSubmit}
                onPasswordChange={this.handlePasswordChange}
                onUsernameChange={this.handleUsernameChange}
                onPasswordVisibleChange={this.handlePasswordVisibleChange}
                showPassword={this.state.showPassword}
                passwordError={this.state.passwordError}
                authenticationFailed={this.state.authenticationFailed} />
        )

    }
}

export default withRouter(LoginPage);