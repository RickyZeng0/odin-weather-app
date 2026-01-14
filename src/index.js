
async function get(location){
    let baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    let url = `${baseUrl}${location}?key=CGCAWWNLHDKLDFCJ5ZVFH99W9`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

get("London");
