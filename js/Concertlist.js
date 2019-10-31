class Concertlist extends Domer {
    _concerts = [];          // en lista,array med konserter
    _consert = "";
    constructor() {
        super();            //Ärver från Domer- super
    }

    addConcert(newConcert) { // Lagt till i consertlist
        this._concerts.push(newConcert); //Push=lägger till i listan från concerts

    }
    removeConcert(newConcert) {   //Pop = Tar bort från listan från concerts
        this._concerts.pop(newConcert);
    }

    render(html) { //Läser om till HTML 
        return html`

    <section>
    <ul>${this._concerts}</ul> <!---unorder list, här kommer en lista--->
    </section>
    `
    }
}
