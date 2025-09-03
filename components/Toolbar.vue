<template>
  <v-app-bar color="black" height="80" app class="custom-toolbar">
    <nuxt-link class="nav-button" to="/">
      <img src="../assets/title_nav.png" class="logo-image" alt="Logo" />
    </nuxt-link>

    <v-spacer></v-spacer>

    <div class="d-md-none">
      <v-menu v-model="menuOpen" offset-y>
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <nuxt-link to="/" class="nav-button">Inicio</nuxt-link>
          </v-list-item>
          <v-list-item>
            <nuxt-link to="/contacto" class="nav-button">Contacto</nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="d-none d-md-flex">
      <nuxt-link to="/" class="nav-button">Inicio</nuxt-link>
      <nuxt-link to="/contacto" class="nav-button">Contacto</nuxt-link>
    </div>

    <div class="particles-toolbar">
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
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      const isMediumOrLarger = window.matchMedia("(min-width: 960px)").matches;
      if (isMediumOrLarger) {
        this.menuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.custom-toolbar {
  position: relative;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  padding: 0 1rem;
}

.custom-toolbar::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.logo-image {
  max-width: 250px;
  height: auto;
}

.nav-button {
  display: flex;
  align-items: center;
  font-family: "Bebas Neue", cursive;
  font-weight: bolder;
  font-style: italic;
  font-size: 1.5rem;
  color: #fbbf24;
  margin-right: 16px;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-button:hover {
  color: #fff200;
  transform: scale(1.1);
}

.particles-toolbar {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particles-toolbar .particle {
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
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(90deg);
  }
  50% {
    transform: translateY(-2px) rotate(180deg);
  }
  75% {
    transform: translateY(-8px) rotate(270deg);
  }
}
</style>
