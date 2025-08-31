<template>
    <div>
    <HeroSection />
    <AboutUs />
    <Services />
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import Services from '~/components/Services.vue';

export default {
    components: {
        HeroSection,
        AboutUs,
        Services    
    }
}

</script>


