import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { editUser } from '../../services/userService';
import { add } from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            password: '',
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            address: this.props.user.address
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
        let arrKey = ['firstName', 'lastName', 'address'];
        let key = ['first name', 'last name', 'address'];
        for (let i in arrKey) {
            if (!this.state[arrKey[i]]) {
                alert(`Missing ${key[i]}`);
                return false;
            }
        }
        return true;
    }

    handleEdit() {
        if (this.checkValidUser()) {
            try {
                let result = editUser({
                    ...this.state,
                    id: this.props.user.id,
                });
                result.then(async data => {
                    let response = data.data
                    if (response.errCode != 0) {
                        alert(`${response.message}`)
                    } else {
                        await this.props.update();
                    }
                })
            } catch (e) {
                console.error(e);
            }
        }
    }

    render() {
        return (
            <div className="text-center" >
                <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} className="modal-user-container" centered size='lg'>
                    <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type="email" name="email" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.email} disabled />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type="password" name="password" onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.password} disabled />
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
                        <Button color="primary" className='px-5' onClick={() => { this.toggle(); this.handleEdit() }}>Edit</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
