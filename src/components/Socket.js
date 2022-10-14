import io from "socket.io-client";
//let socket=io("//localhost:9000");
let socket=io("/");
//socket.connect();
//console.log(socket)
export default socket;