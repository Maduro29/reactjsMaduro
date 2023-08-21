import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers } from '../../services/userService';
import './UserManage.scss'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    async componentDidMount() {
        let res = await getUsers('ALL');
        if (res && res.data && res.data.data) {
            this.setState({
                users: res.data.data.users
            })
        }
    }


    render() {
        return (
            <div className="user-container row">
                <div className="title text-center">Manage users</div>
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
                                            <i className='fas fa-edit mr-3 btn-edit'></i>
                                            <i className='fas fa-trash btn-delete'></i>
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
