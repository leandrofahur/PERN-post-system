import api from './api';

class CommentService {
  create(payload: {}, post_id: string) {
    return api.post(`/comments/${post_id}`, payload);
  }
  getAll() {
    return api.get(`/comments`);
  }
  getId(post_id: string) {
    return api.get(`/comments/${post_id}`);
  }
}

export default new CommentService();
