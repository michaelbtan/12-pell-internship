import api from './ApiConfig'

export const getMentors = async () => {
  try {
    const res = await api.get("/mentors/");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMentor = async (id) => {
  try {
    const res = await api.get(`/mentors/${id}/`)
    return res.data;
  } catch (error) {
    throw error
  }
};

export const createMentor = async (mentor) => {
  try {
    const res = await api.post("/mentors/", mentor)
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateMentor = async (id, mentor) => {
  try {
    const res = await api.put(`/mentors/${id}`, mentor)
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMentor = async (id) => {
  try {
    const res = await api.delete(`/mentors/${id}`)
    return res.data
  } catch (error) {
    throw error;
  }
};