export default class Menu extends Phaser.Scene {
    constructor() {

      super("Menu");
    }

init () {

}
preload () {
    this.load.image("Menu", "./public/assets/images/Inicio.png")
} 

create () {
this.add.image(400, 300, "Menu").setScale(1)
}
}



