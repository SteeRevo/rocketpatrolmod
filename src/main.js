//Ethan Nguyen, Rocket Patrol Mod, 4/17/2022, 2 hours
//Copyright free music : 5
//speed increase: 5
//control rocket after fired: 5
//created 4 new explosion sfx: 10
//new spaceship: 20
//simultaneous two player: 30
//new weapon:  20
//Total points: 95

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Play2 ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyL;