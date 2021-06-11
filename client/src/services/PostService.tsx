import api from './api';

class PostService {
  create(payload: {}, user_id: string) {
    return api.post(`/posts/${user_id}`, payload);
  }
  getAll() {
    return api.get(`/posts`);
  }
  getId(user_id: string) {
    return api.get(`/posts/${user_id}`);
  }

  getUserByPost() {
    return api.get('/post');
  }
}

export default new PostService();
