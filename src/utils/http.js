import instance from "./axios";

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

const get = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params: data })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

const put = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

const del = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, { params: data })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

export default {
  post,
  get,
  put,
  del,
};
