<template>
    <div>
    <HeroSection />
    <ServicesCard/>
    </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import ServicesCard from '~/components/ServicesCard.vue';


export default {
    components: {
        HeroSection,
        ServicesCard
    }
}

</script>


