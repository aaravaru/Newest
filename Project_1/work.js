const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric"
const apikey="29057a78144bde21f3f286a71dcdfccd"
async function checkWeather(city){
    const response=await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);
   
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
    let data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    console.log(data);}
}
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})