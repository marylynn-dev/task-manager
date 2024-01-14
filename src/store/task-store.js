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
      try {
        const res = await fetch('/.netlify/functions/mock-api');
        const data = await res.json();
        this.tasks = data.tasks;
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false;

      }
    },

    // Action to asynchronously add a new task
    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch('/.netlify/functions/mock-api', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.error) { console.log(res.err); }
    },

    // Action to asynchronously delete a task
    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      const res = await fetch(`/.netlify/functions/mock-api/deleteTask/${id}`, {
        method: 'DELETE'
      });
      if (res.error) { console.log(res.err); }
    },

    // Action to asynchronously toggle the favorite status of a task
    async toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;

      const res = await fetch(`/.netlify/functions/mock-api/toggleFav/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.error) { console.log(res.err); }
    },

    // Action to asynchronously reset tasks
    async reset() {
      this.tasks = [];
      const res = await fetch('/.netlify/functions/mock-api/resetTasks', {
        method: 'DELETE'
      });
      if (res.error) { console.log(res.err); }
    }
  }
});

//reason why the db data doesn't persists when hosted

// Netlify functions cannot take any kind of POST, PUT, PATCH, UPDATE, or DELETE call… Because it’s only a FUNCTION :rofl:

// It took a couple of days to get this through my thick skull. It can respond to GET… but only with hard-coded data. Once it is built/deployed, it’s just a functional old funky function.

// If a function could take in new data (mutate state), it wouldn’t be a function! Because then f(x) wouldn’t always give the same result.
