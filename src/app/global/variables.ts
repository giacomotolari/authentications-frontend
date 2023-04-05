const backendUrl = process.env.BACKEND_URL;

const paths = {
  authentication: {
    login: "/authentication/login",
    register: "/authentication/register",
  },
  user: "/user",
};

export { backendUrl, paths };
