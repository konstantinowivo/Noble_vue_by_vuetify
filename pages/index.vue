<template>
    <div>
    <HeroSection />
    <AboutUs />
    <Vision />
    <Services />
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import Services from '~/components/Services.vue';
import Vision from '~/components/Vision.vue';

export default {
    components: {
        HeroSection,
        AboutUs,
        Vision,
        Services    
    }
}

</script>


