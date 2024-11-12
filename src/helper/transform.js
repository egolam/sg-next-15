export function transform(latLng) {
  const lat_t = (latLng.lng - 110.83093333333333333333333333333) * 29.296875;
  const lng_t = -(latLng.lat + 128) * 29.30078125;

  return {
    lat: lat_t,
    lng: lng_t,
  };
}

export function transform2(latLng) {
  console.log("x: " + latLng.lng, "y: " + latLng.lat * -1);
  const x = latLng.lng;
  const y = latLng.lat * -1;
}
