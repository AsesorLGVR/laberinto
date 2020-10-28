scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Quien ríe en viernes llora en domingo", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, myTiles.tile7)
    }
    mySprite.say("", 5000)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (game.askForString("¿Cúal es el quinto día de la semana?", 7) == "viernes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el quinto día de la semana?", 7) == "viernes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.splash("La respuesta es <<viernes>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (game.askForString("¿Cúal es el cuarto día de la semana?", 6) == "jueves") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el cuarto día de la semana?", 6) == "lunes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.splash("La respuesta es <<jueves>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("El día 31 de octubre es Halloween", DialogLayout.Top)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.hazardWater)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Hoy es domingo de Ramos. Una fiesta católica", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.stairNorth)
    }
    mySprite.say("", 5000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Pareces el día jueves, siempre estás en medio.", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.doorClosedSouth)
    }
    mySprite.say("", 5000)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    if (game.askForString("¿Cúal es el segundo día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el segundo día de la semana?", 6) == "martes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            music.powerDown.play()
            game.splash("La respuesta es <<martes>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("De lunes a martes de mierda te hartes", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.vehicle.roadTurn3)
    }
    mySprite.say("", 5000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Los lunes ni las gallinas ponen", DialogLayout.Top)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.castle.treeSmallPine)
    }
    mySprite.say("", 5000)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    if (game.askForString("¿Cúal es el último día de la semana?", 8) == "domingo") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el último día de la semana?", 8) == "domingo") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.splash("La respuesta es <<domingo>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    if (game.askForString("¿Cúal es el tercer día de la semana?", 9) == "miercoles") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el tercer día de la semana?", 9) == "miercoles") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.splash("La respuesta es <<miércoles>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("El día 25 de diciembre es navidad", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, myTiles.tile12)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    if (game.askForString("¿Cúal es el penúltimo día de la semana?", 6) == "sabado") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el penúltimo día de la semana?", 6) == "sabado") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.splash("La respuesta es <<sábado>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
    if (game.askForString("¿Cúal es el primer día de la semana?", 5) == "lunes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeLifeBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el primer día de la semana?", 5) == "lunes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeLifeBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.splash("La respuesta es <<lunes>>")
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
let mySprite: Sprite = null
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ..b11d111111111111dbc...
    .b11bcccccccccccccc.....
    ccccc...................
    `)
game.setDialogTextColor(8)
game.showLongText("Hola soy Freud, soy ingeniero de caminos, estoy aprendiendo español y mi objetivo de hoy es aprender los días de la semana. ¿es fácil?", DialogLayout.Full)
mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 . . 
    . . 4 4 4 4 4 4 4 4 . . 
    . . 5 d 4 4 4 4 d 5 . . 
    . 5 d d d d d d d d 5 . 
    . d d 8 d d d d 8 d d . 
    . d d 8 d d d d 8 d d . 
    . d d d d d d d d d d . 
    . . d d d 3 3 d d d . . 
    . . . d d d d d d . . . 
    1 1 1 1 1 d d 1 1 1 1 1 
    1 . . 1 1 1 1 1 1 . . 1 
    1 d . d d d d d d . d 1 
    . . . 4 4 4 4 4 4 . . . 
    . . 4 4 4 . . 4 4 4 . . 
    `, SpriteKind.Player)
mySprite.say("¡vamos allá!", 5000)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`17000c0008020207020202091c18181b1b0e0e190e0e160e0f0e110419130401010e04190802070209011b150203190c10110a02020302090e0b020d0e04010401040e0e0e0e041c041e19191919040e040e0b02050104010b0207021b0d0e041b1b1b0802050e041c1901100104191a19040e0e041c04080202050e0e0e040e1a180b19171904190b02020d1804040e0e0e0e080605010b020d1c0e0104190401010419040a0207020705180e19040e041c04010b020d1a020d19041c1c0419041c1c0802050e0b020501040e0401010419040802031a0302020d1c191904191c1c041c04010103020d041b1b1b1b1b1b041b08020d140802181c0419191d0e041a020202020202050e0a020302031b120c030202030205`, img`
    . . . . . . . . . 2 2 2 . 2 2 2 2 2 . 2 . 2 2 
    . 2 . . 2 2 2 . 2 . . . . . 2 . . . . 2 . 2 . 
    . . . . . . 2 . . . 2 . 2 . 2 . 2 2 2 2 . 2 . 
    . 2 2 2 2 . 2 . 2 . . . 2 . 2 . . . . 2 . 2 . 
    2 2 2 . . . 2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 2 . 
    . . . . 2 2 2 . 2 2 2 . . . 2 . 2 . . . . 2 . 
    . 2 2 2 2 . . 2 . . . . 2 . 2 . 2 . 2 2 . 2 . 
    . . . . . . . 2 2 . 2 . 2 . 2 . . . 2 . . 2 . 
    2 2 . . . 2 2 . . . 2 . . . 2 . 2 . 2 2 . 2 . 
    . . . 2 . . . . 2 2 2 . 2 2 2 . 2 . . 2 . . . 
    . 2 2 . 2 2 2 . 2 . . . . . . . 2 . 2 2 2 2 . 
    . . . . . . . . 2 . . . . . 2 . . . . . . . . 
    `, [myTiles.tile0,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.dungeon.stairLarge,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.castle.shrub,sprites.vehicle.roadIntersection4,sprites.castle.saplingPine,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile8,myTiles.transparency16,myTiles.tile9,myTiles.tile4,myTiles.tile6,myTiles.tile10,myTiles.tile1,myTiles.tile7,myTiles.tile11,myTiles.tile12,sprites.castle.tileGrass1,sprites.castle.rock1,sprites.castle.tilePath5], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.startCountdown(180)
info.setLife(3)
music.playMelody("C5 G B A F A C5 B ", 66)
