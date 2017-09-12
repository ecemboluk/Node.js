var http = require("http");//http isteği yapıyoruz.
var fs=require("fs");//fs kütüphanesini çağırdık.
var server=http.createServer(function (req,res) { //server oluşturduk ve isteğe cevaplar gönderdik.
  if(req.url=="/"){
      fs.readFile("index.html",function (err,data) {
          console.log(req.url);
          res.write(data);
          res.end("mesaj bitti");
      });
  }
  else if(req.url=="/login"){
      fs.readFile("login.html",function (err,data) {
          console.log(req.url);
          res.write(data);
          res.end("xdxdxd");
      });
  }
});

server.listen(3000)//istenilen portu dinliyoruz.