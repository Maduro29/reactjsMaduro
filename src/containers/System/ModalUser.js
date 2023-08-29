import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    toggle() {
        this.props.toggle();
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
                                <input type="email" name="email" />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type="password" name="password" />
                            </div>
                            <div className='input-container'>
                                <label>First Name</label>
                                <input type="text" name="firstName" />
                            </div>
                            <div className='input-container'>
                                <label>Last Name</label>
                                <input type="text" name="lastName" />
                            </div>
                            <div className='input-container input-full'>
                                <label>Address</label>
                                <input type="text" name="address" />
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-5' onClick={() => this.toggle()}>Add Users</Button>{' '}
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
