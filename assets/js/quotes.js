class Quotes{

    constructor(){

        this.element =
        document.getElementById("quote");

        this.author =
        document.getElementById("author");

        this.index = 0;

        this.quotes = [

            {
                quote:"Discipline beats motivation.",
                author:"Jim Rohn"
            },

            {
                quote:"Small progress is still progress.",
                author:"Unknown"
            },

            {
                quote:"Success is the sum of small efforts repeated every day.",
                author:"Robert Collier"
            },

            {
                quote:"The obstacle is the way.",
                author:"Marcus Aurelius"
            },

            {
                quote:"Stay hungry. Stay foolish.",
                author:"Steve Jobs"
            }

        ];

        this.show();

        setInterval(()=>{

            this.next();

        },15000);

    }

    show(){

        const q =
        this.quotes[this.index];

        this.element.style.opacity=0;

        this.author.style.opacity=0;

        setTimeout(()=>{

            this.element.innerHTML =
            `"${q.quote}"`;

            this.author.innerHTML =
            `— ${q.author}`;

            this.element.style.opacity=1;

            this.author.style.opacity=1;

        },300);

    }

    next(){

        this.index++;

        if(this.index>=this.quotes.length){

            this.index=0;

        }

        this.show();

    }

}

window.Quotes = Quotes;