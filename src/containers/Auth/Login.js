import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { handleLogin } from '../../services/userService';
import { FormattedMessage } from 'react-intl';
import { textChangeRangeIsUnchanged } from 'typescript';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            show: false,
            message: ''
        }
    }

    handleOnChangeInput = (event, key) => {
        this.setState({
            [key]: event.target.value
        });
    }

    handleLogin = async () => {
        this.setState({
            message: ''
        })
        try {
            let data = await handleLogin(this.state.username, this.state.password);
            // console.log(data)
            this.props.userLoginSuccess(data.data.data.user)
        } catch (e) {
            this.setState({ message: e.response.data.data.message })
        }
    }

    handleShowPassword = () => {
        this.setState({
            show: !this.state.show
        })
    }


    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center form-title'>Login</div>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type='text' className='form-control login-input' placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeInput(event, 'username')} />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type={this.state.show ? 'text' : 'password'} className='form-control login-input' placeholder='Enter password'
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangeInput(event, 'password')} />
                            <i className={this.state.show ? "fas fa-eye-slash show-password" : "fas fa-eye show-password"} onClick={() => this.handleShowPassword()}></i>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.message}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => {
                                this.handleLogin()
                            }}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            Or login with:
                        </div>
                        <div className='social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
