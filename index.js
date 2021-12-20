//Dependencies
const LocalTunnel = require("localtunnel")
const Request_IP = require("request-ip")
const Express = require("express")

//Variables
const Port = process.env.PORT || Math.floor(Math.random() * 9999)
const Web = Express()

//Functions
async function LocalTunnel_establisher(){
    const tunnel = await LocalTunnel(Port)

    console.log(`IP Logger is running in ${tunnel.url}(Send this url to anyone so you can get their IP)`)
}

//Main
Web.use("", function(req, res){
    const IP = Request_IP.getClientIp(req)

    console.log(`
Someone visited the url.
IP: ${IP}
UserAgent: ${req.headers["user-agent"]}`)
    res.redirect("https://example.com")
})

Web.listen(Port, ()=>{
    console.log(`IP Logger is running in port ${Port}`)
    LocalTunnel_establisher()
})