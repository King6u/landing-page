class Background {

    constructor() {

        this.video = document.getElementById("bg-video");
        this.overlay = document.getElementById("overlay");

        if (!this.video || !this.overlay) {
            console.warn("Background elements not found.");
            return;
        }

        this.init();

    }

    init() {

        this.updateTheme();

        // Update every minute
        setInterval(() => {

            this.updateTheme();

        }, 60000);

        // Restart if the browser stops the loop
        this.video.addEventListener("ended", () => {

            this.video.currentTime = 0;
            this.video.play();

        });

        this.video.addEventListener("loadeddata", () => {

            console.log("Background video loaded.");

        });

        this.video.addEventListener("error", (e) => {

            console.error("Background video failed to load.", e);

        });

    }

    updateTheme() {

        const hour = new Date().getHours();

        let brightness = 0.75;
        let overlayOpacity = 0.45;

        if (hour >= 6 && hour < 11) {

            // Morning
            brightness = 0.90;
            overlayOpacity = 0.20;

        }
        else if (hour >= 11 && hour < 17) {

            // Afternoon
            brightness = 1.00;
            overlayOpacity = 0.15;

        }
        else if (hour >= 17 && hour < 20) {

            // Evening
            brightness = 0.75;
            overlayOpacity = 0.35;

        }
        else {

            // Night
            brightness = 0.55;
            overlayOpacity = 0.60;

        }

        this.video.style.filter = `
            brightness(${brightness})
            contrast(1.05)
            saturate(1.15)
        `;

        this.overlay.style.background =
            `rgba(0,0,0,${overlayOpacity})`;

    }

}

window.Background = Background;