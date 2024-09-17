<template>
    <div>
    <HeroSection />
    <Title/>
    <AboutUs />
    <ServicesCard/>
    <BrandCarousel />
</div>
</template>

<script>

import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import ServicesCard from '~/components/ServicesCard.vue';
import BrandCarousel from '~/components/BrandCarousel.vue';
import Title from '~/components/Title.vue';

export default {
    components: {
        HeroSection,
        Title,
        AboutUs,
        ServicesCard,
        BrandCarousel
    },
    
}
</script>


