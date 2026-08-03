class Clock {

    constructor() {

        this.clockElement = document.getElementById("clock");
        this.dateElement = document.getElementById("date");

        this.previousTime = "";

        this.init();

    }

    init() {

        this.update();

        setInterval(() => {

            this.update();

        }, 1000);

    }

    update() {

        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const currentTime = `${hours}:${minutes}:${seconds}`;

        if (currentTime !== this.previousTime) {

            this.animateClock(currentTime);

            this.previousTime = currentTime;

        }

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        this.dateElement.textContent =
            now.toLocaleDateString("en-US", options);

    }

    animateClock(time) {

        this.clockElement.style.opacity = "0";
        this.clockElement.style.transform = "translateY(10px)";

        setTimeout(() => {

            this.clockElement.textContent = time;

            this.clockElement.style.opacity = "1";
            this.clockElement.style.transform = "translateY(0px)";

        }, 120);

    }

}

window.Clock = Clock;