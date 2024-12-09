<template>
  <div class="coming-soon">
    <h1>
      The <span class="text-accent">{{ animatedText }}</span>dventure<br>Begins Soon<span class="text-accent">!</span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullText: "Acy",
      animatedText: "",
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < this.fullText.length) {
          this.animatedText += this.fullText[currentIndex];
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    },
  },
};
</script>

<style scoped>
.coming-soon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  animation: fadeIn 3s ease-in-out alternate;
}

h1 {
  font-size: 1.986rem;
  font-weight: bold;
}
@media (min-width: 1024px) {
  h1 {
    font-size: 2.986rem;
  }
}

.text-accent {
  color: #49716E;
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
