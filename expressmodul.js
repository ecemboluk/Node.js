var fs=require("fs");//fs kütüphanesini çağırdık.

var express = require("express")
var path = require("path");

var app = express();
app.use('/public',express.static(path.join(__dirname, 'public')))

app.get("/",function (req,res) {
    fs.readFile("index.html",function (err,data) {
        console.log(req.url);
        res.write(data);
        res.end("mesaj bitti");
    });
})

app.get("/login",function (req,res) {
    fs.readFile("login.html",function (err,data) {
        console.log(req.url);
        res.write(data);
        res.end("xdxdxd");
    });
})


app.listen(3000)//istenilen portu dinliyoruz.