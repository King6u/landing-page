class Search {

    constructor() {

        this.input = document.getElementById("searchInput");
        this.buttons = document.querySelectorAll(".engine");

        this.engine = "google";

        this.urls = {
            google: "https://www.google.com/search?q=",
            chatgpt: "https://chatgpt.com/?q=",
            gemini: "https://gemini.google.com/app",
            github: "https://github.com/search?q=",
            youtube: "https://www.youtube.com/results?search_query=",
            reddit: "https://www.reddit.com/search/?q=",
            stackoverflow: "https://stackoverflow.com/search?q="
        };

        this.bindEvents();

    }

    bindEvents() {

    // Engine selection
    this.buttons.forEach((button) => {

        button.addEventListener("click", () => {

            this.buttons.forEach((b) =>
                b.classList.remove("active")
            );

            button.classList.add("active");

            this.engine = button.dataset.engine;

            console.log("Selected:", this.engine);

        });

    });

    // Search
    this.input.addEventListener("keydown", (e) => {

        if (e.key !== "Enter") return;

        const query = this.input.value.trim();

        if (!query) return;

        let url = "";

        switch (this.engine) {

            case "google":
                url = "https://www.google.com/search?q=" + encodeURIComponent(query);
                break;

            case "chatgpt":
                url = "https://chatgpt.com/?q=" + encodeURIComponent(query);
                break;

            case "gemini":
                url = "https://gemini.google.com/app";
                break;

            case "github":
                url = "https://github.com/search?q=" + encodeURIComponent(query);
                break;

            case "youtube":
                url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
                break;

            case "reddit":
                url = "https://www.reddit.com/search/?q=" + encodeURIComponent(query);
                break;

            case "stackoverflow":
                url = "https://stackoverflow.com/search?q=" + encodeURIComponent(query);
                break;

        }

        window.open(url, "_blank");

    });

}

}

window.Search = Search;