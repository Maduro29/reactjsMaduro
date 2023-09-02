import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../services/userService';
import './UserManage.scss'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpenModal: false,
            isOpenEditModal: false,
            editingUser: {}
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

    async update() {
        await this.fetchAllUsers();
    }

    async handleDelete(user) {
        try {
            let response = await deleteUser({ id: user.id });
            console.log(response);
            if (response && response.data && response.data.errCode != 0) {
                alert(`${response.data.message}`)
            } else {
                this.update();
            }
        } catch (e) {
            console.error(e)
        }
    }

    toggleEdit() {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal
        })
    }

    handleEdit(user) {
        this.toggleEdit();
        console.log(user);
        this.setState({
            editingUser: user
        })
    }

    render() {
        return (
            <div className="user-container row">
                <ModalUser isOpen={this.state.isOpenModal} toggle={() => this.toggleParent()}
                    update={() => this.update()} />
                {this.state.isOpenEditModal &&
                    <ModalEditUser isOpen={this.state.isOpenEditModal} toggle={() => this.toggleEdit()}
                        user={this.state.editingUser} update={() => this.update()} />}
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
                                            <button className='mr-3 btn-edit' onClick={() => this.handleEdit(user)}>
                                                <i className='fas fa-edit'></i>
                                            </button>
                                            <button className='btn-delete' onClick={() => this.handleDelete(user)}>
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
