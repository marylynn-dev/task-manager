<template>
  <v-row justify="center" class="mt-6">
    <v-col cols="12" md="6" lg="4">
      <!-- Logo and application name -->
      <div class="d-flex flex-wrap justify-center mt-15">
        <!-- Logo image -->
        <v-img
          src="../assets/task.png"
          width="60px"
          height="80px"
          class="mx-auto ml-15"
        ></v-img>
        <!-- Application name -->
        <p
          style="
            font-weight: 800;
            font-size: 28px;
            color: rgb(105, 99, 99);
            margin-right: 120px;
          "
          class="text-center mt-4 my-auto"
        >
          Easy Tasks
        </p>
      </div>

      <!-- Bar to add tasks -->
      <div class="my-5 d-flex flex-wrap justify-center my-10">
        <!-- Input field for new task -->
        <v-text-field
          v-model="newTask"
          density="compact"
          variant="solo"
          label="I need to..."
          class="mx-2"
        ></v-text-field>
        <!-- Button to add a task -->
        <v-btn
          color="primary"
          variant="elevated"
          class="mx-2"
          @click="addTask"
          @keyup.enter="addTask"
        >
          Add
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/task-store";
import Swal from "sweetalert2";

const taskStore = useTaskStore();

// Reference for the new task input
const newTask = ref("");

// Handle adding a new task
const addTask = () => {
  // Check if the new task is not empty
  if (newTask.value.length !== 0) {
    // Add the task to the store
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: taskStore.tasks.length + 1,
    });
  } else {
    // Alert the user if they try to add an empty task
    Swal.fire({
      title: "Error!",
      text: "Task is required",
      icon: "error",
      confirmButtonText: "Cool",
      animation: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
    });
  }

  // Clear the input field after adding the task
  newTask.value = "";
};
</script>
