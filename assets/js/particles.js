class Particles{

    constructor(){

        const container =
        document.getElementById("particles");

        for(let i=0;i<45;i++){

            const dot =
            document.createElement("span");

            dot.className="particle";

            dot.style.left=
            Math.random()*100+"vw";

            dot.style.top=
            Math.random()*100+"vh";

            dot.style.animationDelay=
            Math.random()*10+"s";

            dot.style.animationDuration=
            (8+Math.random()*12)+"s";

            container.appendChild(dot);

        }

    }

}

window.Particles=Particles;