import api from "../api/axiosInstance"

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
};

// Register User
export const registerUser = async (data) => {
    await sleep()
    return api.post("/user/register", data);
}

//Login user
export const loginUser = async (data) => {
    await sleep()
    return api.post("user/login", data)
}