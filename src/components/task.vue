<template>
  <!-- Individual task representation  -->
  <v-text-field :key="task.id" variant="solo" density="comfortable">
    <template v-slot:append-inner>
      <!-- delete icon for deleting tasks -->
      <v-icon class="mx-2" @click="taskStore.deleteTask(task.id)"
        >mdi-delete</v-icon
      >

      <!-- Heart icon for toggling favorite status of a task -->
      <v-icon
        @click="taskStore.toggleFav(task.id)"
        :class="{ iconColor: task.isFav }"
        >mdi-heart</v-icon
      >
    </template>

    <!-- Display the task title with bold font weight -->
    <div style="font-weight: 900">{{ task.title }}</div>
  </v-text-field>
</template>

<script setup>
import { useTaskStore } from "@/store/task-store";

const taskStore = useTaskStore();

//props
defineProps({
  task: Object,
});
</script>

<style scoped>
/* Scoped style for coloring the heart icon when the task is marked as favorite */
.iconColor {
  color: rgb(255, 4, 4); /* Red color for emphasis */
}
</style>
