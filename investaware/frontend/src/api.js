import axios from "axios";
//request interceptor to add the auth token header to requests

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== process.env.REACT_APP_refreshTokenURL &&
      originalRequest.url !== process.env.REACT_APP_settingsChangePasswordURL
    ) {
      originalRequest._retry = true;
      return await axios
        .post(
          "http://ec2-3-6-94-18.ap-south-1.compute.amazonaws.com:8010/accounts/auth/token/refresh/",
          {
            refresh: refreshToken,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.access);
            return axios(originalRequest);
          }
        })
        .catch((error) => {
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("accessToken");
          window.location.pathname = "/login";
        });
    }
    return Promise.reject(error);
  }
);
//functions to make api calls
const api = {
  login: (body) => {
    return axios.post(
      "{{url}}accounts/auth/token/",
      body
    );
  },
  refreshToken: (body) => {
    return axios.post(
      "{{url}}accounts/auth/token/refresh/",
      body
    );
  },
  getBlogs: () => {
    return axios.get("{{url}}blogs/");
  },
};
export default api;
