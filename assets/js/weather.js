class Weather{

    constructor(){

        this.apiKey="YOUR_API_KEY";

        this.load();

    }

    async load(){

        try{

            const response =
            await fetch(

                `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${this.apiKey}&units=metric`

            );

            const data =
            await response.json();

            document.getElementById("temperature").innerHTML =
            `${Math.round(data.main.temp)}°C`;

            document.getElementById("location").innerHTML =
            data.name;

            document.getElementById("condition").innerHTML =
            data.weather[0].description;

        }

        catch(err){

            console.log(err);

        }

    }

}

window.Weather=Weather;