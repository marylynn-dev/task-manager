// Utilities
import { defineStore } from 'pinia';

// Define and export the task store using Pinia
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],         // Array to store tasks
    isLoading: false   // Flag for task loading state
  }),

  // Define getters for the store
  getters: {
    // Getter to filter and return favorite tasks
    favourites() {
      return this.tasks.filter((task) => task.isFav === true);
    }
  },

  // Define actions for the store
  actions: {
    // Action to asynchronously fetch tasks from the server
    async getTasks() {
      this.isLoading = true;
      const res = await fetch('/.netlify/functions/mockApi');
      const data = await res.json();
      this.tasks = data;
      this.isLoading = false;
    },

    // Action to asynchronously add a new task
    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch('/.netlify/functions/mockApi', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.error) { console.log(res.err); }
    },

    // Action to asynchronously delete a task
    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      const res = await fetch(`/.netlify/functions/deleteTask/${id}`, {
        method: 'DELETE'
      });
      if (res.error) { console.log(res.err); }
    },

    // Action to asynchronously toggle the favorite status of a task
    async toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;

      const res = await fetch(`/.netlify/functions/toggleFav/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.error) { console.log(res.err); }
    },

    // Action to asynchronously reset tasks
    async reset() {
      this.tasks = [];
      const res = await fetch('/.netlify/functions/resetTasks', {
        method: 'DELETE'
      });
      if (res.error) { console.log(res.err); }
    }
  }
});
