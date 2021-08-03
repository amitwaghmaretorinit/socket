import { get, post } from "./service";

export const registerUser = async ({ name, email }) => {
  try {
    const res = await post("register_user", { name, email });
    return res;
  } catch (err) {
    return false;
  }
};

export const getUsers = async () => {
  try {
    const res = await get("users");
    return res?.data;
  } catch (err) {
    return false;
  }
};
