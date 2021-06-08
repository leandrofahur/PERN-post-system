import api from './api';

class PostService {
  create(payload: {}) {
    return api.post('/post', payload);
  }
  getId(username: string) {
    return api.get(`/post/${username}`);
  }

  getAll() {
    return api.get(`/post`);
  }
}

export default new PostService();
