<template>
  <v-footer padless class="custom-footer">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" sm="6">
          <p class="footer-text">&copy; 2024 Matafuegos Noble</p>
        </v-col>
        <v-col cols="12" sm="6" class="social-container">
          <v-btn
            icon
            href="https://facebook.com/MatafuegosNoble"
            target="_blank"
            class="social-btn"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://instagram.com/MatafuegosNoble"
            target="_blank"
            class="social-btn"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div class="particles-footer">
        <div
          v-for="i in 6"
          :key="i"
          class="particle"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }"
        />
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.custom-footer {
  background: #111;
  color: #fff;
  padding: 2rem 0;
  position: relative;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.footer-text {
  font-family: "Poppins", "Inter", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

.social-container {
  display: flex;
  justify-content: flex-end;
}

.social-btn {
  margin-left: 8px;
  color: #fbbf24;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  color: #fff200;
}

.particles-footer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particles-footer .particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(251, 191, 36, 0.4);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(90deg);
  }
  50% {
    transform: translateY(-5px) rotate(180deg);
  }
  75% {
    transform: translateY(-15px) rotate(270deg);
  }
}
</style>
