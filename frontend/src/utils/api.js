import axios from "axios";

const instance = axios.create({
  baseURL: "https://project-manager-backend-nodejs.herokuapp.com/",
});

//get
export const getProjects = (callback) => {
  instance
    .get("/get/projects")
    .then((res) => {
      callback && callback(res?.data || []);
    })
    .catch((err) => {
      console.log(err);
    });
};

//post
export const postProject = (data = {}) => {
  return instance
    .post("/new/project", {
      ...data,
    })
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
    });
};