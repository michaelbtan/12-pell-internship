import api from './ApiConfig'

export const getInternship = async () => {
  try {
    const res = await api.get("/internships");
    return res.data;
  } catch (error) {
    throw error;
  }
};