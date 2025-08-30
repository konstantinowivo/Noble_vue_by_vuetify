<template>
    <div>
    <HeroSection />
    <TestComponent />
    <AboutUs />
    <ServicesCard/>
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import ServicesCard from '~/components/ServicesCard.vue';
import TestComponent from '~/components/TestComponent.vue';

export default {
    components: {
        HeroSection,
        AboutUs,
        ServicesCard,
        TestComponent
    }
}

</script>


