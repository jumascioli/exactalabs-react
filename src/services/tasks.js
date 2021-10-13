import api from "./api.js";

class TaskService {
  static async getTasks({ page, limit = 5 }) {
    const response = await api.get(`/tasks?_page=${page}&_limit=${limit}`);

    return {
      data: response.data,
      total: response.headers["x-total-count"],
    };
  }

  static async saveTask(task) {
    const response = await api.post("/tasks/", task)

    return response.data;
  }

  static async deleteTask(id) {
    const response = await api.delete("/tasks/" + id);

    return response.data;
  }
}

export default TaskService;