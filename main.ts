scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (info.score() == 8) {
        game.setDialogFrame(img`
            8888.....88....888....88.88....888....888...8888
            867788..8768..86768..8678768..86768..8678.887768
            8767768.8777886767688777877788676768877788677678
            877677686767787767787767676778776778776786776778
            .8778766677678776778767767767877677876778678778.
            .8677866867668676768667686766867676866766687768.
            ..86668688676886868867688867688686886768686668..
            .888666888888888888888888888888888888888866688..
            87777688666666666666666666666666666666668886688.
            867677686666666666666666666666666666666688677778
            .87766786666666666666666666666666666666686776768
            ..877668666666666666666666666666666666668766778.
            ..88888866666666666666666666666666666666866778..
            .867768866666666666666666666666666666666888888..
            86777768666666666666666666666666666666668867768.
            876666886666666666666666666666666666666686777768
            867777686666666666666666666666666666666688666678
            .86776886666666666666666666666666666666686777768
            ..888888666666666666666666666666666666668867768.
            ..87768866666666666666666666666666666666888888..
            .877667866666666666666666666666666666666866778..
            86767768666666666666666666666666666666668766778.
            877776886666666666666666666666666666666686776768
            .88668886666666666666666666666666666666688677778
            87777688666666666666666666666666666666668886688.
            867677686666666666666666666666666666666688677778
            .87766786666666666666666666666666666666686776768
            ..877668666666666666666666666666666666668766778.
            ..88888866666666666666666666666666666666866778..
            .867768866666666666666666666666666666666888888..
            86777768666666666666666666666666666666668867768.
            876666886666666666666666666666666666666686777768
            867777686666666666666666666666666666666688666678
            .86776886666666666666666666666666666666686777768
            ..888888666666666666666666666666666666668867768.
            ..87766866666666666666666666666666666666888888..
            .877667866666666666666666666666666666666866778..
            86767768666666666666666666666666666666668766778.
            877776886666666666666666666666666666666686776768
            .88668886666666666666666666666666666666688677778
            ..886668888888888888888888888888888888888666888.
            ..86668686768868688676888676886868867688686668..
            .8677866676686767686676867668676768667686687768.
            .8778768776787767787677677678776778767766678778.
            877677687677877677877676767787767787767686776778
            8767768877788676768877787778867676887778.8677678
            867788.8768..86768..8678768..86768..8678..887768
            8888...888....888....88.88....888....88.....8888
            `)
        game.showLongText("Ya puedes pasar", DialogLayout.Bottom)
        tiles.setWallAt(location, false)
        game.over(true, effects.smiles)
    } else {
        game.setDialogFrame(img`
            ...cc......................cc....
            ..c55c..bbbb...bbbbb......c55c...
            .cb55bcbdddbbbbbdddbbbbbbcb55bc..
            b555555bbdddb111bdddb11db555555b.
            bb5555bbdbdb11111bdb1111bb5555bb.
            cb5555bcddd11111ddd11111cb5555bc.
            .c5bb5c1111d111d111d111ddc5bb5c..
            .cbbbbc111111111111111111cbbbbc..
            ..b11111111111111111111111d111bb.
            ..b111111111111111111111111d1bdb.
            ..bb11111111111111111111111dbddb.
            .bbdb1d11111111111111111111ddddb.
            .bdddd11111111111111111111d1bdbb.
            .bddbd11111111111111111111111bb..
            .bdb1d111111111111111111111111b..
            .bb111d11111111111111111111111b..
            ..b11111111111111111111111d111bb.
            ..b111111111111111111111111d1bdb.
            ..bb11111111111111111111111dbddb.
            .bbdb1d11111111111111111111ddddb.
            .bdddd11111111111111111111d1bdbb.
            .bddbd11111111111111111111111bb..
            .bdbb1111111111111111111111111b..
            .bbbd1111111111111111111111111b..
            ..bcc111111111111111111111dccdb..
            ..c55c111d111d111d111d1111c55cb..
            .cb55bcdd11111ddd11111dddcb55bc..
            b555555b11111bdb11111bdbb555555b.
            bb5555bbb111bdddb111bdddbb5555bb.
            cb5555bcdbbbbbdddbbbbbddcb5555bc.
            .c5bb5c.bb...bbbbb...bbbbc5bb5c..
            .cbbbbc..................cbbbbc..
            .................................
            `)
        game.showLongText("Responde todas las preguntas y podrás pasar", DialogLayout.Bottom)
        tiles.setWallAt(location, true)
    }
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
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<viernes>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (game.askForString("¿Cúal es el cuarto día de la semana?", 6) == "jueves") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<jueves>>", DialogLayout.Bottom)
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
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    if (game.askForString("¿Cúal es el segundo día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<martes>>", DialogLayout.Bottom)
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
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Los lunes ni las gallinas ponen. Además has ganado una vida por plantar un árbol", DialogLayout.Top)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.castle.treeSmallPine)
        info.changeScoreBy(1)
        music.powerUp.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    if (game.askForString("¿Cúal es el último día de la semana?", 8) == "domingo") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<domingo>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    if (game.askForString("¿Cúal es el tercer día de la semana?", 9) == "miercoles") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<miércoles>>", DialogLayout.Bottom)
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
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<sábado>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
    if (game.askForString("¿Cúal es el primer día de la semana?", 5) == "lunes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
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
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            game.showLongText("La respuesta es <<lunes>>", DialogLayout.Bottom)
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
info.setLife(7)
info.setScore(0)
music.playMelody("C5 G B A F A C5 B ", 66)
