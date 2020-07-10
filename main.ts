namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
e e e e e e e e e e e e e e e 5 
e e e e e e f e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e d d d d d d d e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e d d d d d d e e e 5 5 
5 5 e e e d d d d d d e e e 5 5 
5 5 e e e d d d d d d e e e 5 5 
5 5 e e e d d d d d d e e e 5 5 
5 5 e e e d d d d d d e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e f e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
5 5 e e e e e e e e e e e e 5 5 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 
1 f f f f f f f f f f f 1 1 1 1 
1 f f f f f f f f f f f f f 1 1 
1 f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f 1 1 
1 f f f f f f f f f f f 1 1 1 1 
1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 
1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd1, function (sprite, location) {
    info.changeLifeBy(-2)
    music.wawawawaa.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeLifeBy(1)
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true, effects.hearts)
})
let mySprite = sprites.create(img`
. . f f f f f f f f . . 
. . f f f f f f f f . . 
. . f f f e e f f f . . 
. . 1 1 1 1 1 1 1 1 . . 
. . f e 1 1 1 1 e f . . 
. f e e e e e e e e f . 
. e e f e e e e f e e . 
. e e f e e e e f e e . 
. e e e e e e e e e e . 
. . e e e a a e e e . . 
. . . e e e e e e . . . 
1 1 1 1 1 e e 1 1 1 1 1 
1 . . 1 1 1 1 1 1 . . 1 
1 e . e e e e e e . e 1 
. . . 1 1 1 1 1 1 . . . 
. . f 1 f . . f 1 f . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`17000c001002020f020202110101010101010128010123012a0101041c2204010101040110020f0211011722020302172b2a1402020302110115021b1c0401040104010101010401041a01010101041c041c15020501040115020f02171b0104010101100205010401220104010401180104010104010410020205010101041c1b0115271d0104011502021b010404010101011002050115021b01040104010401010401041f100f020f051c010104010401040115021b15021b01041922040104010110020501150205010401040101040104100203020302021b01010104010101040104010103021b04191919191919041910021b2710021b010401010f01041d020202020202051c1402030203261d02030202030205`,
            img`
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 2 
. 2 . . 2 2 2 . 2 . . . . . 2 . . . . 2 . 2 2 
. . . . . . 2 . . . 2 . 2 . 2 . 2 2 2 2 . 2 . 
2 2 2 2 2 . 2 . 2 . . . 2 . 2 . . . . 2 . 2 . 
2 2 2 . . . 2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 2 . 
. . . . 2 2 2 . 2 2 2 . . . 2 . 2 . . . . 2 . 
. 2 2 2 2 . . . 2 . . . 2 . 2 . 2 . 2 2 . 2 . 
. 2 . . . . 2 2 2 . 2 . 2 . 2 . . . 2 . . 2 . 
2 . . 2 . 2 2 . . . 2 . . . 2 . 2 . 2 2 . 2 . 
. . . . . . . . 2 2 2 . 2 2 2 . 2 . 2 2 . . . 
. 2 2 2 2 2 2 . 2 . . . . . . . 2 . 2 2 2 2 . 
. . . . . . . . 2 . 2 . . . 2 . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.stairEast,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth,sprites.dungeon.greenSwitchDown,sprites.dungeon.doorClosedNorth,sprites.builtin.forestTiles16,sprites.builtin.crowd5,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.builtin.crowd9,sprites.dungeon.hazardSpike,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.rock1,sprites.vehicle.roadIntersection4,sprites.castle.saplingPine,sprites.builtin.crowd1,sprites.builtin.crowd0,sprites.dungeon.buttonTeal,sprites.dungeon.hazardWater,sprites.dungeon.hazardHole,sprites.dungeon.chestClosed,sprites.dungeon.purpleSwitchDown,myTiles.tile1,sprites.dungeon.stairLadder,sprites.builtin.forestTiles0,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonTeal)
scene.cameraFollowSprite(mySprite)
info.startCountdown(180)
info.setLife(3)
music.playMelody("C5 G B A F A C5 B ", 66)
