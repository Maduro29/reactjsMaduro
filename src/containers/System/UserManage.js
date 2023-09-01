import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers } from '../../services/userService';
import './UserManage.scss'
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpenModal: false
        }
    }

    async componentDidMount() {
        await this.fetchAllUsers();
    }

    async fetchAllUsers() {
        let res = await getUsers('ALL');
        if (res && res.data && res.data.data) {
            this.setState({
                users: res.data.data.users
            })
        }
    }

    toggleParent() {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    updateNewUser() {
        this.fetchAllUsers();
    }

    render() {
        return (
            <div className="user-container row">
                <ModalUser isOpen={this.state.isOpenModal} toggle={() => this.toggleParent()}
                    updateNewUser={() => this.updateNewUser()} />
                <div className="title text-center">Manage users</div>
                <div className="m-1">
                    <button className="btn btn-primary px-3"
                        onClick={() => this.toggleParent()}>
                        <i className="fas fa-plus"></i>&nbsp;
                        Add new user
                    </button>
                </div>
                <div className="user-table col-12">
                    <table>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {
                            this.state.users && this.state.users.map(user => {
                                return <>
                                    <tr>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button className='mr-3 btn-edit'>
                                                <i className='fas fa-edit'></i>
                                            </button>
                                            <button className='btn-delete'>
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            })
                        }
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
