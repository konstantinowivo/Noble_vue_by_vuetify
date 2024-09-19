<template>
  <div class="map-container">
    <GoogleMap
      :center="center"
      :zoom="14"
      style="width: 100%; height: 400px"
    >
      <MapMarker :position="center" title="My Location" />
    </GoogleMap>
  </div>
</template>

<script setup>
const center = { lat: -32.93495559692383, lng: -60.659671783447266 };
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>