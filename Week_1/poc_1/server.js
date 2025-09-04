const http = require("http")
const fs = require("fs")

function handler(req, res){
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hello from Node.js")

  }else if (req.url === "/time"){
    setTimeout(() =>{
      const currentTime = new Date().toLocaleTimeString()
      res.writeHead(200,{"Content-Type": "text/plain"})
      res.end(currentTime)
    }, 300)

  }else{
    fs.readFile("index.html", (err, data) =>{
      if (err){
        res.writeHead(500,{"Content-Type": "text/plain"})
        res.end("Error loading page")
      }else{
        res.writeHead(200,{"Content-Type": "text/html"})
        res.end(data)
      }
    })
  }
}
const server = http.createServer(handler)
server.listen(3000, () => console.log("Server running at http://localhost:3000"))