class App extends Domer {
    constructor() { 
        super();
        
        this.contact=new Contact();

        this.concertlist=new Concertlist();
        this.concertlist.addConcert( new Concert("Christmas Concert", "2019-12-24") ); //Ändra koncerter 
        this.concertlist.addConcert( new Concert("New Year Concert", "2019-12-31") );
        this.concertlist.addConcert( new Concert("China", "2021-02-18") );
    }
    render(html) {
        return html`
    <section>    
    <h1><strong><em>Anna Söllscher</em></strong></h1>
    <h2><em><strong>Mezzosopran & flutist</em></strong></h2>
    <div class="box">
    <img id="bild1" src="js/img/concertpic.jpg">
    <img id="bild2" src="js/img/sollschertrio_1024.png">
    </div>
    
    ${this.contact} 
    ${this.concertlist}
        </section>

     `
    }
}
new App();
