<template>
    <div>
    <HeroSection />
    <AboutUs />
    <Services />
    <BrandCarousel />
</div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import Services from '~/components/Services.vue';
import BrandCarousel from '~/components/BrandCarousel.vue';

export default {
components: {
    HeroSection,
    AboutUs,
    Services,
    BrandCarousel
}
}
</script>