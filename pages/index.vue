<template>
    <div>
    <HeroSection />
    <Title :title="props.title"/>
    <AboutUs />
    <v-row>
        <v-col cols="12" md="4" v-for="service in services" :key="service.id">
        <ServiceCard
        :title="service.title"
        :subtitle="service.subtitle"
        :description="service.description"
        :image="service.image"
        />
        </v-col>
    </v-row>
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
    
    data() {
        return {
        props:[
            { id:1, title: 'Sobre Nosotros'},
        ],
        services: [
            { id: 1, title: 'Servicio 1', subtitle: 'Subtítulo 1', description: 'Descripción del servicio 1', image: '/path/to/image1.jpg' },
            { id: 2, title: 'Servicio 2', subtitle: 'Subtítulo 2', description: 'Descripción del servicio 2', image: '/path/to/image2.jpg' },
            { id: 3, title: 'Servicio 3', subtitle: 'Subtítulo 3', description: 'Descripción del servicio 3', image: '/path/to/image3.jpg' },
        ]
        }
    }
}
</script>