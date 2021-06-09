import api from './api';

class CommentService {
  create(payload: {}, user_id: string) {
    return api.post(`/comments/${user_id}`, payload);
  }
  getAll() {
    return api.get(`/comments`);
  }
  getId(post_id: string) {
    return api.get(`/comments/${post_id}`);
  }
}

export default new CommentService();
