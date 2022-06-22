import socketIOClient from "socket.io-client";
//import Brain from "./Brain"

export default class Connect {
    
    constructor(Brain){

        const config = {
            endpoint: window.location.hostname + ":3000"
        }

        console.log('Socket Endpoint: ', config.endpoint)

        console.log("singleton created");
        this._createdTime = new Date();

        this.socket = socketIOClient(config.endpoint);


        //Messages from server
        this.socket.on("hello from server", (...args) => {
            console.log('Got this from server, ', args)
        });

        this.socket.emit("get gameData") 

        this.socket.on("gameData", data => {
            //console.log('Received Initial Game Data, ', data);
            if(Brain.gameData == null){
                Brain.gameData = data;
                Brain.spawner.spawnAll();
            }else{
                //console.log('Game Data Update', data)
                Brain.gameData = data;
                Brain.update.entities();
            }
        });

        //this.getData()
    }

    getData(){

        this.socket.emit("get gameData") 

    }

    sendKeyboard(Brain){
        this.socket.emit("keyboard", Brain.keyboard);
    }

    // emit(title, data){
    //     console.log("Emit Data '" + title + "' : ", data);
    //     if(title == ""){
    //         console.warn("Socket Emit Title Null");
    //         return;
    //     }
    //     if(data == ""){
    //         console.warn("Socket Emit Data Null");
    //         return;
    //     }
    //     this.socket.emit(title, data) 
    // }

    createdTime() {
        return this._createdTime.toISOString();
    }
}
