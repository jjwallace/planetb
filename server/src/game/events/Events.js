export default class Events {
    
    constructor(sockets, gameData){
        this.socket = socket;
        this.gameData = gameData;
    }

    emit(title, data){
        console.log("Emit Data '" + title + "' : ", data);
        if(title == ""){
            console.warn("Socket Emit Title Null");
            return;
        }
        if(data == ""){
            console.warn("Socket Emit Data Null");
            return;
        }
        this.socket.emit(title, data) 
    }

    
    // // just like on the client side, we have a socket.on method that takes a callback function
    // socket.on('change name', (name) => {
    //     // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    //     // we make use of the socket.emit method again with the argument given to use from the callback function above
    //     console.log('Player Set Name: ', name, socket.id);
    //     //io.sockets.emit('change color', name)
    // })

}

// const instance = new Connect();
// Object.freeze(instance);