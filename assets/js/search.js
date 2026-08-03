class Search {

    constructor() {

        this.input = document.getElementById("searchInput");
        this.buttons = document.querySelectorAll(".engine");
        this.searchDock = document.querySelector(".search-engines");

        this.searchIcon = document.getElementById("searchEngineIcon");
        this.backgroundTint = document.getElementById("backgroundTint");

        this.engine = "google";
        this.lockedEngine = "google";

        this.engines = {

            google: {
                url: "https://www.google.com/search?q=",
                placeholder: "Search Google..."
            },

            chatgpt: {
                url: "https://chatgpt.com/?q=",
                placeholder: "Ask ChatGPT..."
            },

            gemini: {
                url: "https://gemini.google.com/app",
                placeholder: "Ask Gemini..."
            },

            github: {
                url: "https://github.com/search?q=",
                placeholder: "Search GitHub..."
            },

            youtube: {
                url: "https://www.youtube.com/results?search_query=",
                placeholder: "Search YouTube..."
            },

            reddit: {
                url: "https://www.reddit.com/search/?q=",
                placeholder: "Search Reddit..."
            },

            stackoverflow: {
                url: "https://stackoverflow.com/search?q=",
                placeholder: "Search Stack Overflow..."
            }

        };

        this.icons = {

            google: "assets/icons/google.svg",
            chatgpt: "assets/icons/chatgpt-icon.svg",
            gemini: "assets/icons/googlegemini.svg",
            github: "assets/icons/github.svg",
            youtube: "assets/icons/youtube.svg",
            reddit: "assets/icons/reddit.svg",
            stackoverflow: "assets/icons/stackoverflow.svg"

        };

        this.colors = {

            google: "rgba(66,133,244,.20)",
            chatgpt: "rgba(16,163,127,.20)",
            gemini: "rgba(139,92,246,.20)",
            github: "rgba(107,114,128,.18)",
            youtube: "rgba(239,68,68,.20)",
            reddit: "rgba(249,115,22,.20)",
            stackoverflow: "rgba(245,158,11,.20)"

        };

        this.bindEvents();

    }

    updateUI(engine) {

        this.engine = engine;

        this.input.placeholder = this.engines[engine].placeholder;

        this.searchIcon.style.opacity = "0";
        this.searchIcon.style.transform = "scale(.75) rotate(-15deg)";

        setTimeout(() => {

            this.searchIcon.src = this.icons[engine];

            this.searchIcon.style.opacity = "1";
            this.searchIcon.style.transform = "scale(1) rotate(0deg)";

        }, 120);

        this.backgroundTint.style.background = `
            radial-gradient(
                circle at 50% 45%,
                ${this.colors[engine]} 0%,
                transparent 65%
            )
        `;

        this.buttons.forEach(btn =>
            btn.classList.toggle(
                "active",
                btn.dataset.engine === engine
            )
        );

    }

    bindEvents() {

        /* ===============================
           Hover Preview
        =============================== */

        this.buttons.forEach(button => {

            button.addEventListener("mouseenter", () => {

                this.updateUI(button.dataset.engine);

            });

            /* ===============================
               Click = Select
            =============================== */

            button.addEventListener("click", () => {

                this.lockedEngine = button.dataset.engine;
                this.updateUI(this.lockedEngine);

            });

        });

        /* ===============================
           Leaving dock
        =============================== */

        this.searchDock.addEventListener("mouseleave", () => {

            this.updateUI(this.lockedEngine);

        });

        /* ===============================
           Reset only when input is empty
        =============================== */

        this.input.addEventListener("input", () => {

            if (this.input.value.trim() !== "") return;

            this.lockedEngine = "google";
            this.updateUI("google");

        });

        /* ===============================
           Search
        =============================== */

        this.input.addEventListener("keydown", (e) => {

            if (e.key !== "Enter") return;

            const query = this.input.value.trim();

            if (!query) return;

            if (this.engine === "gemini") {

                window.open(
                    this.engines.gemini.url,
                    "_blank"
                );

                return;

            }

            const url =
                this.engines[this.engine].url +
                encodeURIComponent(query);

            window.open(url, "_blank");

        });

    }

}

window.Search = Search;