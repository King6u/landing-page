class MouseGlow {

    constructor() {

        this.glow = document.querySelector(".cursor-glow");

        if (!this.glow) return;

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        this.currentX = this.x;
        this.currentY = this.y;

        document.addEventListener("mousemove", (e) => {

            this.x = e.clientX;
            this.y = e.clientY;

        });

        this.animate();

    }

    animate() {

        this.currentX += (this.x - this.currentX) * 0.12;
        this.currentY += (this.y - this.currentY) * 0.12;

        this.glow.style.left = this.currentX + "px";
        this.glow.style.top = this.currentY + "px";

        requestAnimationFrame(() => this.animate());

    }

}

window.MouseGlow = MouseGlow;