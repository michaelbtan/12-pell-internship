import api from './ApiConfig'

export const getInternships = async () => {
  try {
    const res = await api.get("/internships/");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getInternship = async (id) => {
  try {
    const res = await api.get(`/internships/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createInternship = async (internship) => {
  try {
    const res = await api.post("/internships/", internship)
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateInternship = async (id, internship) => {
  try {
    const res = await api.put(`/internships/${id}`, internship);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteInternship = async (id) => {
  try {
    const res = await api.delete(`/internships/${id}`)
    return res.data;
  } catch (error) {
    throw error;
  }
};