class Musician{
    constructor(name){
        this.name = name;}
    play(piece){
        console.log(this.name +' is now palying '+ piece )
    }
}


let Violinist = new Musician('Suman');
Violinist.play('Violin');
let Pianist = new Musician('Khatiwada');
Pianist.play('Piano');