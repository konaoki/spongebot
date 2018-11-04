var Discord = require('discord.io');
var auth = require('./auth.json');
var net = require('net')
var mongo = require('mongodb').MongoClient;

var url = "./botdb";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created");
    db.close();
});

const hostname = '127.0.0.1';
const port = 3000;

var socket = new net.Socket();
socket.connect(port, hostname, function() {
    console.log("Client: Connected to server");
});

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

socket.on("data", function (data) {
    data = JSON.parse(data);
    message = data.response;
    user = data.user;

    if (user == 'kpzerg') {
        spongebob_message = '';
        for (var i = 0; i < message.length; i++) {
            if (Math.random() > 0.5) {
                spongebob_message += message.charAt(i).toUpperCase();
            } else {
                spongebob_message += message.charAt(i).toLowerCase();
            }
        }

        for (var key in bot.channels) {
            if (bot.channels[key].name == 'general') {
                gen_id = bot.channels[key].id;
            }
        }

        console.log("%s>%s", message, spongebob_message)
        bot.sendMessage({
            to: gen_id,
            message: spongebob_message
        });
    }
});