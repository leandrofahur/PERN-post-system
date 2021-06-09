import api from './api';

class PostService {
  create(payload: {}, user_id: string) {
    return api.post(`/posts/${user_id}`, payload);
  }
  getId(username: string) {
    return api.get(`/posts/${username}`);
  }

  getAll() {
    return api.get(`/posts`);
  }
}

export default new PostService();
