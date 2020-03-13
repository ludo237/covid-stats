import Axios from "axios";

// Force Axios to work with and accept JSON requests
Axios.defaults.headers.common["Accept"] = "application/json";
Axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";

Axios.interceptors.request.use(
  config => config,
  error => {
    // Wrap the axios request into a promis for easy management
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => response,
  error => {
    // Wrap the axios request into a promis for easy management
    return Promise.reject(error);
  }
);

const HttpClient = Axios;
export default HttpClient;
