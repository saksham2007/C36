class Game{
constructor(){

}

getState(){
    var gameStateref=database.ref("gameState")
    gameStateref.on("value",function(data){
        gameState1=data.val()
    })
}

update(state){
    database.ref("/").update({
        gameState: state
    })
}

start(){
    if(gameState1===0){
        player=new Player()
        player.getCount()

        form = new Form()
        form.display()
    }
}
}