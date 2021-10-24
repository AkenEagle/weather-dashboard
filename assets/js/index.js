// When clicking on the search button
$("#searchForm").submit(async (event) => {
  // Get city name from input
  const city = $("#searchInput").val();

  // Search in the api
  if (city.length > 0) {
    console.log(city);
  } else {
    console.log("please enter a city");
  }

  event.preventDefault();
});
