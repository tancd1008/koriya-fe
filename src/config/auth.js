import { instance } from "./instance";
const authUrl = "/user/auth";
const Login = (account) => {
  return instance.post(`${authUrl}/login`, account);
};
export { Login };
