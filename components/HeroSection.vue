<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">
        <div class="hero-content" ref="heroContent">
          <h1 class="main-title" :class="{ visible: isVisible }">{{ titleText }}</h1>
          <h2 class="subtitle" :class="{ visible: isVisible }">{{ subtitleText }}</h2>

          <GlowButton :text="ctaText" to="/contacto" :delay="800" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import portadaImage from "@/assets/BannerPortada.jpg";
import logoBgRemoved from "@/assets/logo.bg.removed.png";
import GlowButton from "@/components/GlowButton.vue";

export default {
  name: "HeroSection",
  components: {
    GlowButton,
  },
  data() {
    return {
      loading: true,
      titleText: "MATAFUEGOS NOBLE",
      subtitleText: "ofrecemos soluciones de calidad para tu empresa",
      isVisible: false,
    };
  },
  props: {
    ctaText: {
      type: String,
      default: "Contáctanos",
    },
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${portadaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",

        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      };
    },
    bannerLogoStyle() {
      return {
        backgroundImage: `url(${logoBgRemoved})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "300px",
        height: "150px",
        margin: "0 auto",
        position: "relative",
        zIndex: 5,
      };
    },
    contentStyle() {
      return {
        padding: "20px",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
      };
    },
  },
  mounted() {
    document.fonts.ready.then(() => {
      this.loading = false;

      this.$nextTick(() => {
        setTimeout(() => {
          this.isVisible = true;
        }, 200);
      });
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap");

.hero-content {
  position: relative;
  z-index: 10;
}

.main-title {
  font-family: "Bebas Neue", cursive;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  font-style: italic;
  background: linear-gradient(45deg, #fbbf24, #fcd34d, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(32px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.main-title.visible {
  transform: translateY(0);
  opacity: 1;
}

.subtitle {
  font-family: "Bebas Neue", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-style: italic;
  color: white;
  margin-bottom: 32px;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateY(32px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}
.subtitle.visible {
  transform: translateY(0);
  opacity: 1;
}

.v-container {
  position: relative;
  overflow: hidden;
}

@media (max-width: 960px) {
  .main-title {
    font-size: 4.5rem;
  }
  .subtitle {
    font-size: 1.61rem;
  }
}
</style>
