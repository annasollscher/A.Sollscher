class App extends Domer {

    constructor() {
        super(); //Ärver från Domer

        this.concertlist = new Concertlist(); // klass med en låda 

        this.contact = new Contact(this.concertlist); /*this.contakt= blir ett objekt som 
        innehåller information från mallen new Contact, i new Contact finns concertlist*/

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
    
    <div id="footerAnna"> <!---här är en footer med info/visas längst ner på sidan--->
    <footer id="footer">Contact:<br>Anna Söllscher<br>Telephone number: 0708-462472<br>Mail:annamaria.sollscher@gmail.com</footer>
    </div>
        </section>

     `
    }
}
new App(); //new App()görs endast i App för att kicka igång systemet
