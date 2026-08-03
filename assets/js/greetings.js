class Greeting {

    constructor() {

        this.element = document.getElementById("greeting");

        this.update();

        setInterval(() => {

            this.update();

        },60000);

    }

    update(){

        const hour = new Date().getHours();

        let icon = "";
        let text = "";

        if(hour>=5 && hour<12){

            icon = "☀";
            text = "Good Morning";

        }

        else if(hour>=12 && hour<17){

            icon = "🌤";
            text = "Good Afternoon";

        }

        else if(hour>=17 && hour<21){

            icon = "🌇";
            text = "Good Evening";

        }

        else{

            icon = "🌙";
            text = "Good Night";

        }

        this.element.style.opacity = 0;

        setTimeout(()=>{

            this.element.innerHTML =
            `${icon} ${text}, Kingshuk`;

            this.element.style.opacity = 1;

        },300);

    }

}

window.Greeting = Greeting;