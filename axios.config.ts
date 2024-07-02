import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const DIVISIONS = ["provinces", "ward", "districts", "divisions"];

instance.interceptors.request.use(
  async function (config) {
    let url = config.url!;

    const isDivision = DIVISIONS.some((item) => url.includes(item));

    return {
      ...config,
      baseURL: isDivision
        ? process.env.NEXT_PUBLIC_DOMAIN_NAME_DIVISIONS
        : process.env.NEXT_PUBLIC_BASE_URL,
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    return Promise.reject(err);
  }
);

export default instance;
