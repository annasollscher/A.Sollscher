class App extends Domer {
    constructor() { 
        super();
        
        this.contact=new Contact();

        this.concertlist=new Concertlist();
        this.concertlist.addConcert( new Concert("Julkonsert", "2019-12-24") ); //Ändra koncerter 
        this.concertlist.addConcert( new Concert("Nyårskonsert", "2019-12-31") );
        this.concertlist.addConcert( new Concert("Kina", "2021") );
    }
    render(html) {
        return html`
    <section>    
    <h1><em>Anna Söllscher</em></h1>
    <h2><em>Mezzosopran & flutist</em></h2>
    <img src="js/img/concertpic.jpg">
    ${this.contact} 
    ${this.concertlist}
        </section>

     `
    }
}
new App();
