<template>
    <div>
    <HeroSection />
    <Title/>
    <AboutUs />
    <ServicesCard/>
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import ServicesCard from '~/components/ServicesCard.vue';
import Title from '~/components/Title.vue';


export default {
    components: {
        HeroSection,
        Title,
        AboutUs,
        ServicesCard
    }
}

</script>


