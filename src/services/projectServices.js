import Client from "./api";

export const createProject = async (data) => {
  try {
    const res = await Client.post("/projects", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const res = await Client.get('/projects')
    return res.data
  } catch (error) {
    throw error
  }
}
export const getSingleProject = async (id) => {
  try {
    const res = await Client.get(`/projects/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProject = async (id, data) => {
  try {
    const res = await Client.put(`/projects/${id}`, data)
    return res.data
  } catch (error) {
    
  }
}