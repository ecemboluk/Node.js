var http = require("http");//http isteği yapıyoruz.
var fs=require("fs");//fs kütüphanesini çağırdık.
var yonlendirici = new Object();

var homeController = function (req,res) {
    fs.readFile("index.html",function (err,data) {
        console.log(req.url);
        res.write(data);
        res.end("mesaj bitti");
    });
}
var loginController = function (req,res) {
    fs.readFile("login.html",function (err,data) {
        console.log(req.url);
        res.write(data);
        res.end("xdxdxd");
    });
}
yonlendirici["/"] =homeController;
yonlendirici["/login"] = loginController;
var server=http.createServer(function (req,res) { //server oluşturduk ve isteğe cevaplar gönderdik.
   if(req.url in yonlendirici){
     yonlendirici[req.url](req,res);
   }
});

server.listen(3000)//istenilen portu dinliyoruz.