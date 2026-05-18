import api from '../../../shared/api/client';

export const getVideos = async () => {
  const res = await api.get('/videos');
  return res.data;
};

export const uploadVideo = async (data: FormData) => {
  const res = await api.post('/videos/upload', data);
  return res.data;
};