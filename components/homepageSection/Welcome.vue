<template>
    <div>
      <h5 ref="title" @mouseenter="scrambleOnHover" @mouseleave="resetText">
        Welcome to Projectacy
      </h5>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrambleText(element, text, duration = 1000, callback) {
        const chars = "!<>-_\\/[]{}—=+*^?#________";
        const steps = 20;
        const interval = duration / steps;
  
        let iterations = 0;
        const randomText = () =>
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
  
        const scrambleInterval = setInterval(() => {
          element.textContent = randomText();
          iterations++;
          if (iterations > text.length) {
            clearInterval(scrambleInterval);
            if (callback) callback();
          }
        }, interval);
      },
      scrambleOnHover() {
        const titleElement = this.$refs.title;
        const textToScramble = "Welcome to Projectacy";
        
        // Scramble the text again each time the mouse enters
        this.scrambleText(titleElement, textToScramble);
      },
      resetText() {
        const titleElement = this.$refs.title;
        titleElement.textContent = ""; // Clear the text when mouse leaves
      },
    },
  };
  </script>
  
  <style scoped>
  h5 {
    font-size: 2rem;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  </style>
  