import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  toggleUserModel = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  render() {
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggle={this.toggleUserModel}
        />
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
                    <tr>
                      <td>{user.email}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.address}</td>
                      <td>
                        <button className="btn-edit">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn-delete">
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
