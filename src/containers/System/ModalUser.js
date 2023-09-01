import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addNewUser } from '../../services/userService';
import { add } from 'lodash';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
    }

    toggle() {
        this.props.toggle();
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkValidUser() {
        let arrKey = ['email', 'password', 'firstName', 'lastName', 'address'];
        let key = ['email', 'password', 'first name', 'last name', 'address'];
        for (let i in arrKey) {
            if (!this.state[arrKey[i]]) {
                alert(`Missing ${key[i]}`);
                return false;
            }
        }
        return true;
    }

    handleAddNew() {
        if (this.checkValidUser()) {
            let result = addNewUser(this.state);
            result.then(data => {
                let response = data.data
                if (response.errCode != 0) {
                    alert(`${response.message}`)
                } else {
                    this.props.updateNewUser();
                }
            })
        }
    }

    render() {
        return (
            <div className="text-center" >Manage products
                <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} className="modal-user-container" centered size='lg'>
                    <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type="email" name="email" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.email} />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type="password" name="password" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.password} />
                            </div>
                            <div className='input-container'>
                                <label>First Name</label>
                                <input type="text" name="firstName" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.firstName} />
                            </div>
                            <div className='input-container'>
                                <label>Last Name</label>
                                <input type="text" name="lastName" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.lastName} />
                            </div>
                            <div className='input-container input-full'>
                                <label>Address</label>
                                <input type="text" name="address" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.address} />
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-5' onClick={() => { this.toggle(); this.handleAddNew() }}>Add Users</Button>{' '}
                        <Button color="secondary" className='px-5' onClick={() => this.toggle()}>Close</Button>
                    </ModalFooter>
                </Modal></div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
