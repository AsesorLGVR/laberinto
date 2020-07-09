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
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
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
            hex`100010000d100f0211191002021a0c0e010d0a0612051411041914020202020210020501220211041402020202020211040211080110051402021110020f110404191901011402020f0205041c05040414020f0f230f0211040419140211140502021b2212041705140202021104191002020508020302020f02020205041904011002230902021104100202111402050104200d10111005040401100510111a02031107041405101b14110410051502021b040704101104140504040417041a0f110407141b04140f0205140510051c040404010d04041c14021a1c1c041a11100504011a14030202020f1f101b1403030f030d0b070701010c1402051402020205220b`,
            img`
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
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.stairEast,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth,sprites.dungeon.greenSwitchDown,sprites.dungeon.doorClosedNorth,sprites.builtin.forestTiles16,sprites.builtin.crowd5,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.builtin.crowd9,sprites.dungeon.hazardSpike,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.rock1,sprites.vehicle.roadIntersection4,sprites.castle.saplingPine,sprites.builtin.crowd1,sprites.builtin.crowd0,sprites.dungeon.buttonTeal,sprites.dungeon.hazardWater,sprites.dungeon.hazardHole,sprites.dungeon.chestClosed,sprites.dungeon.purpleSwitchDown],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(180)
music.playMelody("E D G F B A C5 B ", 120)
