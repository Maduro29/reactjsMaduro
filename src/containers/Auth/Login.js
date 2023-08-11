import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { textChangeRangeIsUnchanged } from 'typescript';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center form-title'>Login</div>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type='text' className='form-control login-input' placeholder='Enter your username' />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' className='form-control login-input' placeholder='Enter password' />
                        </div>
                        <div className='col-12'>
                            <button className='btn-login'>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            Or login with:
                        </div>
                        <div className='social-login'>
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
