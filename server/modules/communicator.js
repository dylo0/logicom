'use strict';

// 
// SocketIo communication logic
// 

module.exports = function (express, socketIO) {
    var MemoryStore = express.session.MemoryStore,
        sessionStore = new MemoryStore(),
        io;

    // id's present only for future app logic
    var users = {};
    var idHash = {};
    var currentID = 1;

    return {
        createSocket: function (app) {
            io = socketIO.listen(app);
            io.sockets.on('connection', function(socket) {
        
                socket.on('new:user', function (username, callback) {
                    if (username in users) {
                        callback({error: {type: "user:exists"}});
                    } else {
                        var data = {
                            id: currentID,
                            username: username
                        };
                        socket.username = username;
                        socket.idnumber = currentID;
                        users[username] = socket;
                        idHash[currentID] = username;
                        currentID += 1;

                        callback(data);
                        socket.broadcast.emit('user:connected', data);
                    }
                });

                socket.on('request:user:list', function (callback) {
                    callback(idHash);
                });

                socket.on('send:message', function  (data) {
                    var reciverUsername = idHash[data.reciver],
                        reciver = users[reciverUsername];
                    
                    if (reciver) {
                        reciver.emit('incoming:message', {
                            sender: socket.idnumber, 
                            message: data.msg 
                        });
                    }
                });

                socket.on('send:chat:message', function (data) {
                    // data.sender = socket.idnumber;
                    // TODO: add message validation before emitting
                    socket.broadcast.emit('incoming:chat:message', data);
                });

                socket.on('disconnect', function () {
                    var id = socket.idnumber
                    delete idHash[id];
                    delete users[socket.username];
                    socket.broadcast.emit('user:disconnected', id)
                });
            });
        }
    };
};