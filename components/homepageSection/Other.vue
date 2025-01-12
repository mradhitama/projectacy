<template>
    <div class="text-center">
      <h5 class="time">{{ currentTime }}</h5>
      <p class="date text-gray-500">{{ currentDate }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: '',
        currentDate: '',
      };
    },
    methods: {
      updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();
  
        this.currentTime = `${hours}:${minutes}`;
        this.currentDate = `${month} ${day}, ${year}`;
      },
    },
    mounted() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    },
  };
  </script>
  
  <style scoped>
  
  .time {
    animation: fadeIn 1s ease-in-out;
  }
  
  .date {
    animation: fadeIn 1.5s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  