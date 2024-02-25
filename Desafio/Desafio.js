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
            break; 

        }
        
        console.log(`O ${this.type} atacou usando ${attack}!`)

    }
    
}

const champion1 = new heroiTipo("Talon", 30, "Assassino");

champion1.toAttack()




// Assassino
// Mago;
// Lutador;
// Atirador;
// Controlador ou Suporte;
// Tanque;

// colocar tipo - mago // etc
// colocar ataque - tipo do ataque // etc

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada