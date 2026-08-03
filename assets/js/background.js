class Background {

    constructor() {

        this.video = document.getElementById("bg-video");
        this.overlay = document.getElementById("overlay");

        if (!this.video || !this.overlay) {

            console.warn("Background elements not found.");
            return;

        }

        /* =====================================
           Background Videos
        ===================================== */

        this.videos = [

            "assets/video/bg.mp4",
            "assets/video/bg1.mp4",
            "assets/video/bg2.mp4"

        ];

        this.currentVideo = -1;

        this.init();

    }

    init() {

        // Load a random background immediately
        this.changeVideo();

        // Update brightness every minute
        this.updateTheme();

        setInterval(() => {

            this.updateTheme();

        }, 60000);

        // Change background every 5 minutes
        setInterval(() => {

            this.changeVideo();

        }, 5 * 60 * 1000);

        // Restart if browser pauses looping
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

    /* =====================================
       Random Video
    ===================================== */

    changeVideo() {

        let index;

        do {

            index = Math.floor(Math.random() * this.videos.length);

        } while (index === this.currentVideo);

        this.currentVideo = index;

        // Fade out
        this.video.style.opacity = "0";

        setTimeout(() => {

            this.video.src = this.videos[index];

            this.video.load();

            this.video.play().catch(() => {});

            // Fade back in
            this.video.style.opacity = "1";

        }, 600);

    }

    /* =====================================
       Time Based Theme
    ===================================== */

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