class heroiTipo{
    constructor(name, age, type){

        this.name = name;
        this.age = age;
        this.type = type;
        
    }

    toAttack(){

        let attack;

        switch(this.type){

            case "Assassino":
                attack = "sua lâmina"
                console.log(`O ${this.type} atacou usando ${attack}!\n`)
                break; 

            case "Mago":
                attack = "sua magia"
                console.log(`O ${this.type} atacou usando ${attack}!\n`)
                break;

            case "Lutador":
                attack = "artes marciais"
                console.log(`O ${this.type} atacou usando ${attack}!\n`)
                break;

            case "Atirador":
                attack = "sua arma"
                console.log(`O ${this.type} atirou usando ${attack}!\n`)
                break;

            case "Suporte":
                attack = "sua habilidade de cura"
                console.log(`O ${this.type} curou usando ${attack}!\n`)
                break;

            case "Tanque":
                attack = "seu escudo"
                console.log(`O ${this.type} defendeu usando ${attack}!\n`)
                break;

            default:
                attack = "seu ataque"
                console.log(`O ${this.type} atacou usando ${attack}!\n`)

        }
    }
}

const champion1 = new heroiTipo("Talon", 30, "Assassino");
const champion2 = new heroiTipo("Leblanc", 23, "Mago");
const champion3 = new heroiTipo("Lee Sin", 27, "Lutador"); 
const champion4 = new heroiTipo("Caitlyn", 20, "Atirador");
const champion5 = new heroiTipo("Yuumi", 5, "Suporte");
const champion6 = new heroiTipo("Braum", 45, "Tanque");
const champion7 = new heroiTipo("Rek'Sai", 3, "Desconhecido");

champion1.toAttack()
champion2.toAttack()
champion3.toAttack()
champion4.toAttack()
champion5.toAttack()
champion6.toAttack()
champion7.toAttack()