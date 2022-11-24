import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
      sex: 1,
      roleId: 0,
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggle();
  };

  handleOnChangeInput = (e, id) => {
    let copyState = { ...this.state };
    copyState[id] = e.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        console.log("check--->", copyState);
      }
    );
  };

  render() {
    return (
      <Modal
        size="lg"
        centered
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
      >
        <ModalHeader toggle={() => this.toggle()}>Create New User</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="col-12 input-container">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "email");
                }}
              />
            </div>
            <div className="col-12 input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "password");
                }}
              />
            </div>
            <div className="col-12 input-container">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "firstName");
                }}
              />
            </div>
            <div className="col-12 input-container">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "lastName");
                }}
              />
            </div>
            <div className="col-12 input-container">
              <label>Address</label>
              <input
                type="text"
                name="address"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "address");
                }}
              />
            </div>
            <div className="col-12 input-container">
              <label>Phone number</label>
              <input
                type="text"
                name="phonenumber"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "phonenumber");
                }}
              />
            </div>
            <div className="col-12 input-container">
              <label>Sex</label>
              <select
                id="inputState"
                className="form-control"
                name="gender"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "gender");
                }}
              >
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div className="col-12 input-container">
              <label>Role</label>
              <select
                class="form-control"
                name="roleId"
                onChange={(e) => {
                  this.handleOnChangeInput(e, "roleId");
                }}
              >
                <option value="0">admin</option>
                <option value="1">doctor</option>
                <option value="2">Patient</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Create
          </Button>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
