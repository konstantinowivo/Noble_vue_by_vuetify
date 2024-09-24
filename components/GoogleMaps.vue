<template>
  <div>
    <div ref="google_map" id="map"></div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const google_map = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (!google_map.value) throw new Error("Google Map DOM element not found");

      useGoogleMapHTML().value = google_map.value; // Guarda el HTML del mapa
      initializeGoogleMap(google_map.value); // Inicializa el mapa de Google
    });

    return { google_map };
  },
});

// Inicializar Google Map con marcador
export const initializeGoogleMap = (map_html: HTMLElement): void => {
  if (!useGoogleMapHTML().value) {
    console.error("google_map_html is not defined");
    return;
  }

  // Inicializar Google Map
  const googleMap = new google.maps.Map(map_html as HTMLElement, {
    center: { lat: -32.93495559692383, lng: -60.659671783447266 }, // Coordenadas predeterminadas
    zoom: 17, // Zoom predeterminado

    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],

    clickableIcons: false,
    streetViewControl: false,
    mapTypeControl: false,
    draggableCursor: "crosshair",
    fullscreenControl: false,
    minZoom: 2,

    restriction: {
      latLngBounds: {
        north: 85,
        south: -85,
        west: -180,
        east: 180,
      },
    },

    gestureHandling: "greedy",
    keyboardShortcuts: false,
  });

  // Guardar la instancia del mapa en el estado
  useGoogleMap().value = googleMap;

  // Añadir un marcador al mapa
  const marker = new google.maps.Marker({
    position: { lat: -32.93495559692383, lng: -60.659671783447266 }, // Coordenadas del marcador
    map: googleMap, // Asignar el marcador al mapa
    title: "Marcador predeterminado", // Título al pasar el mouse
  });
};
</script>

<style scoped>
#map {
  /* Define las medidas del mapa */
  height: 400px;
  width: 50%;

  /* Centrar el mapa */
  margin: auto;
}
</style>
