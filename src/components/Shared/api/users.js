import axios from "axios";

export const instance = axios.create({
  baseURL: "https://647af7bfd2e5b6101db0b00d.mockapi.io/api/v1",
});

export const getAllUsers = async (p=1) => {
  try {
    const {data} = await instance.get("/users", {
      params: {
        p,
        l: 3,
      },
    });
    console.log('data in getAllUsers', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id) => {
  try {
    const { data } = await instance.get(`/users/${id}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserFollowers = async (id, newFollowersCount, newFollow) => {
  try {
    const data = await instance.put(`/users/${id}`, {
      followers: newFollowersCount,
      follow: newFollow
    });
    return data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
};
