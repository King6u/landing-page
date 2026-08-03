class AmbientAudio {

    constructor() {

        this.audio = document.getElementById("ambientAudio");
        this.toggle = document.getElementById("audioToggle");

        if (!this.audio) {
            console.warn("Ambient audio element not found.");
            return;
        }

        /* ===============================
           SETTINGS
        =============================== */

        this.maxVolume = 0.03;   // <-- Change ONLY this value

        this.fadeDuration = 1200;

        this.audio.volume = 0;

        this.init();

    }

    init() {

        /* ===================================
           First user interaction starts audio
        ==================================== */

        document.addEventListener("click", () => {

            if (this.audio.paused) {

                this.audio.play().then(() => {

                    this.fadeVolume(
                        0,
                        this.maxVolume,
                        this.fadeDuration
                    );

                }).catch(() => {});

            }

        }, { once:true });

        /* ===================================
           Toggle Button
        ==================================== */

        if (this.toggle) {

            this.toggle.addEventListener("click", (e) => {

                e.stopPropagation();

                if (this.audio.paused) {

                    this.audio.play().then(() => {

                        this.fadeVolume(
                            0,
                            this.maxVolume,
                            800
                        );

                    });

                    this.toggle.textContent = "🔊";

                }

                else {

                    this.fadeOutAndPause();

                }

            });

        }

    }

    /* ===================================
       Fade Volume
    ==================================== */

    fadeVolume(start, end, duration) {

        this.audio.volume = start;

        const fps = 60;

        const steps = Math.floor(duration / (1000 / fps));

        const increment = (end - start) / steps;

        let current = start;

        clearInterval(this.fadeInterval);

        this.fadeInterval = setInterval(() => {

            current += increment;

            this.audio.volume = Math.min(
                Math.max(current, 0),
                end
            );

            if (
                (increment > 0 && current >= end) ||
                (increment < 0 && current <= end)
            ) {

                clearInterval(this.fadeInterval);

                this.audio.volume = end;

            }

        }, 1000 / fps);

    }

    /* ===================================
       Fade Out
    ==================================== */

    fadeOutAndPause() {

        const fps = 60;

        const start = this.audio.volume;

        const steps = 60;

        const decrement = start / steps;

        clearInterval(this.fadeInterval);

        this.fadeInterval = setInterval(() => {

            this.audio.volume = Math.max(
                0,
                this.audio.volume - decrement
            );

            if (this.audio.volume <= 0.001) {

                clearInterval(this.fadeInterval);

                this.audio.pause();

                this.audio.volume = 0;

                if (this.toggle)
                    this.toggle.textContent = "🔇";

            }

        }, 1000 / fps);

    }

}

window.AmbientAudio = AmbientAudio;