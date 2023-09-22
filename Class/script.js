"use a strict"
/* 

Créer une Class Pokemon : name,attack,defense,hp,luck (isLucky & attackPokemon)

Ajouter 2 Pokemon -> "Givrali",14,8,100,0,0,5
->"Noctalie",18,4,70,0,8
Combattre jusqu'à la mort de l'un
À chaque fois que l'un combat un console log va s'afficher avec les dégats subi, par qui, sur qui, et le nombre de hp qui leurs reste
Quand un pokemon meurt -> console.log(... is dead ! )



 * Formule
 * degat =att de l'attaquant - def du defenseur
 * la luck correspon a la probabilite de touche l'adversaire (precision en pourcentage)
 * generer un nombre aleatoire avec math.random()
 * Si le nombre est inferieur a luck du pokemon alors le pokemon peut attaquer 
 */
class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){
        if(this.isLucky()){ //voir si il réussit à attaquer 
            let damage=this.attack-pokemon.defense //les dégats
            pokemon.hp-=damage// -= -> enlèvre l'équivalent de damage -> hp qu'il reste
            console.log(this.name+' a attaqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){
        return this.luck>Math.random()//qui attaque qui après 
    }
}
let Givrali=new Pokemon('Givrali',14,8,100,0.5);
let Noctali=new Pokemon('Noctali',18,4,70,0.8);

while(Givrali.hp >0 && Noctali.hp>0){
    Givrali.attackPokemon(Noctali)
    if(Noctali.hp<=0){
        console.log(Noctali.name+" is dead !");
        break;
    }
    Noctali.attackPokemon(Givrali) //tant que 
    if(Givrali.hp<=0){
        console.log(Givrali.name+" is Dead !");
        break
    }
}