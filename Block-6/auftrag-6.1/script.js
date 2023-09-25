const plzField = document.getElementById("plz");
const ortField = document.getElementById("ort");

plzField.addEventListener("blur", async () => {
  try {
    const response = await fetch('places.json');
    

    const data = await response.json();
    const placeData = data.find(place => place.zipcode === plzField.value) || { place: "unbekannt" };
    ortField.value = placeData.place;
  } catch (error) {
    console.error('Error fetching or processing JSON data:', error);
  }
});