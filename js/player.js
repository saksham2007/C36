class Player {
    constructor() { }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) {
            playerCount1 = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update(name) {
        var playerIndex = "player" + playerCount1;
        database.ref(playerIndex).update({
            name: name
        });
    }


}