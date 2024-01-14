<template>
  <div style="width: 500px" class="mt-15">
    <!-- Filter buttons -->
    <div class="text-right mb-2">
      <!-- Button to show all tasks -->
      <v-btn
        variant="outlined"
        size="x-small"
        rounded="0"
        class="mx-2"
        @click="filter = 'all'"
        >All Tasks</v-btn
      >

      <!-- Button to show favorite tasks -->
      <v-btn
        variant="outlined"
        size="x-small"
        rounded="0"
        @click="filter = 'favs'"
        >Favourite Tasks</v-btn
      >
    </div>

    <!-- Frontend loading indicator -->
    <div v-if="taskStore.isLoading">
      <p class="text-center" style="font-weight: 900">Loading Tasks...</p>
    </div>

    <!-- Display all tasks when filter is set to 'all' -->
    <div v-if="filter === 'all'" v-for="task in taskStore.tasks">
      <taskCard :task="task"></taskCard>
    </div>

    <!-- Display favorite tasks when filter is set to 'favs' -->
    <div v-if="filter === 'favs'" v-for="task in taskStore.favourites">
      <taskCard :task="task"></taskCard>
    </div>

    <!-- Displayed when there are no tasks -->
    <div v-if="taskStore.tasks.length === 0" class="mt-15">
      <v-img
        src="../assets/icons8-image-not-available-50.png"
        width="50px"
        height="50px"
        class="mx-auto"
      ></v-img>
      <p class="text-center" style="font-weight: 900">Wow, such empty!</p>
    </div>

    <!-- Reset button -->
    <p class="text-center my-15">
      <v-btn color="primary" variant="elevated" @click="taskStore.reset()"
        >Reset</v-btn
      >
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/task-store";
import taskCard from "../components/task.vue";

const taskStore = useTaskStore();

// A reactive variable to hold the current filter (all or favs)
const filter = ref("all");

// Fetch tasks when the component is created
taskStore.getTasks();
</script>
