<template>
  <!-- Main layout  -->
  <v-layout class="rounded rounded-md">
    <!-- Application bar component -->
    <v-app-bar height="200" flat><appBar /></v-app-bar>

    <!-- Main content area centered both horizontally and vertically -->
    <v-main class="d-flex align-center justify-center">
      <!-- Main content component -->
      <mains />
    </v-main>
  </v-layout>
</template>

<script setup>
// Import components
import appBar from "../src/components/app-bar.vue";
import mains from "../src/components/main.vue";
</script>
