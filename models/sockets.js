class Sockets {

    constructor( io ){
        this.io = io;
        this.socketEvents()
    }

    socketEvents(){
        this.io.on("connection", (socket) => {

          socket.on("mensaje-to-server", (data) => {
            console.log(data);
            this.io.emit('mensaje-from-server', data)
          });

          // socket.emit('mensaje-bienvenida', 'Bienvenido al server')
          // socket.on('mensaje-prueba', (data) => {
          //     console.log(data);
          // })

          // socket.emit('mensaje-prueba', {
          //     msg: 'cliente',
          //     nombre: 'Pepe pecas'
          // })
        });
    }

}

module.exports = Sockets