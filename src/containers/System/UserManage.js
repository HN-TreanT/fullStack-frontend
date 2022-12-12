import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  CreateNewUserService,
  DeleteUser,
  UpdateUserServices,
} from "../../services";
import ModalUser from "./ModalUser";
import EditUser from "./EditUser";
import { emitter } from "../../utils/emitter";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  toggleUserModel = () => {
    this.setState({
      isOpenModalUser: false,
      isOpenModalEditUser: false,
    });
  };

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  //creat new user
  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  CreateNewUser = async (data) => {
    try {
      let response = await CreateNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA", { id: "your id" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  //delete user

  handleDeleteUser = async (userId) => {
    try {
      let response = await DeleteUser(userId);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
      }
    } catch (e) {
      console.log(e);
    }
  };
  //edit user
  UpdateUser = async (data, userId) => {
    try {
      let userEdit = { ...data, id: userId };
      let response = await UpdateUserServices(userEdit);
      if (response && response.errCode !== 0) {
        console.log(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalEditUser: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleEditUser = async (user) => {
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user,
    });
  };

  render() {
    return (
      <div className="users-container">
        {this.state.isOpenModalUser && (
          <ModalUser
            isOpen={this.state.isOpenModalUser}
            toggle={this.toggleUserModel}
            CreateNewUser={this.CreateNewUser}
          />
        )}
        {this.state.isOpenModalEditUser && (
          <EditUser
            isOpen={this.state.isOpenModalEditUser}
            user={this.state.userEdit}
            UpdateUser={this.UpdateUser}
            toggle={this.toggleUserModel}
          />
        )}

        <div className="title">Manage users</div>
        <div
          onClick={() => this.handleAddNewUser()}
          className="mx-1 btn btn-primary px-3"
        >
          <i className="fas fa-plus mx-1"></i>Add New User
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Adress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrUsers &&
                this.state.arrUsers.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.email}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.address}</td>
                      <td>
                        <button
                          onClick={() => this.handleEditUser(user)}
                          className="btn-edit"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          onClick={() => this.handleDeleteUser(user.id)}
                          className="btn-delete"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
