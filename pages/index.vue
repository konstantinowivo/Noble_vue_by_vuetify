<template>
    <div>
    <HeroSection />
    <Title/>
    <AboutUs />
    <ServicesCard/>
    <GoogleMaps/>
    <BrandCarousel />
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import ServicesCard from '~/components/ServicesCard.vue';
import BrandCarousel from '~/components/BrandCarousel.vue';
import Title from '~/components/Title.vue';
import GoogleMaps from '~/components/GoogleMaps.vue';

export default {
    components: {
        HeroSection,
        Title,
        AboutUs,
        ServicesCard,
        GoogleMaps,
        BrandCarousel
    },
    setup() {
        // Get necessary script for Map initializtion (google maps API key required!!)
        if (process.server) {
            const runtimeConfig = useRuntimeConfig();
            useHead({ script: [{ src: `https://maps.googleapis.com/maps/api/js?key=${runtimeConfig.googleMapKey}&v=weekly`, defer: true }] });
        }

        return {};
    },
};
</script>

<style scoped></style>


