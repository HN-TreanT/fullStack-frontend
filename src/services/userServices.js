import axios from "../axios";

export const handleLoginApi = (email, password) => {
  return axios.post("/api/login", {
    email: email,
    password: password,
  });
};

export const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`, {
    id: inputId,
  });
};

export const CreateNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

export const DeleteUser = (userID) => {
  return axios.delete(`/api/delete-user`, {
    data: {
      id: userID,
    },
  });
};

export const UpdateUserServices = (data) => {
  return axios.put(`/api/update-user`, data);
};
