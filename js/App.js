class App extends Domer {
    /*class som ärver av Domer, 
    testConcert = new Concert("Test concert", "2019-10-22")
    <h1>${this.testConcert}</h1>*/

    constructor() {
        super(); //Ärver från Domer

        this.concertlist = new Concertlist(); // klass med en låda 

        this.contact = new Contact(this.concertlist);

        /* valde att ej ha med detta på sidan
        this.concertlist.addConcert( new Concert("Christmas Concert", "2019-12-24") ); //skicka vidare till en annan klass som är där för att hålla i koncerter.
        this.concertlist.addConcert( new Concert("New Year Concert", "2019-12-31") );
        this.concertlist.addConcert( new Concert("China", "2021-02-18") );*/

    }
    render(html) {  //Förvandlar till HTML. //Render är en metod som ärver av domer, metoden ska returnera en sträng.
        return html`
    <section>
    <nav><strong>Home Page</nav></strong> 
    <h1><strong><em>Anna Söllscher</em></strong></h1>
    <h2><em><strong>Mezzosopran & flutist</em></strong></h2>
    <div class="box">
    <img id="bild1" src="js/img/concertpic.jpg">
    <img id="bild2" src="js/img/sollschertrio_1024.png">
    </div>
    
    ${this.contact} 
    ${this.concertlist}
    
    <div id="footerAnna">
    <footer id="footer">Anna Söllscher</footer>
    </div>
        </section>

     `
    }
}
new App(); //new App()görs endast i App för att kicka igång systemet
