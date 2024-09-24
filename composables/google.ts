export const initializeGoogleMap = (map_html: HTMLElement): void => {
    if (!useGoogleMapHTML().value) {
        console.error("google_map_html is not defined");
        return;
    }

    // Initialize Google Map
    const googleMap = new google.maps.Map(map_html as HTMLElement, {
        center: { lat: -32.93495559692383, lng: -60.659671783447266 }, // Default map view position
        zoom: 17, // Default zoom

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

        gestureHandling: "greedy", // Does not need 2 fingers to move on map when using touchscreen (Not working on Firefox Mobile. Safari, not sure.)
        keyboardShortcuts: false,
    });

    // Store the map instance in reactive state
    useGoogleMap().value = googleMap;
};