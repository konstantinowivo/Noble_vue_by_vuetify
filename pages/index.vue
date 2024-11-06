<template>
    <div>
    <HeroSection />
    <AboutUs />
    <ServicesCard/>
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import ServicesCard from '~/components/ServicesCard.vue';


export default {
    components: {
        HeroSection,
        AboutUs,
        ServicesCard
    }
}

</script>


