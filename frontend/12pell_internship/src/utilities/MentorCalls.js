import api from './ApiConfig'

export const getMentor = async () => {
  try {
    const res = await api.get("/mentors");
    return res.data;
  } catch (error) {
    throw error;
  }
};