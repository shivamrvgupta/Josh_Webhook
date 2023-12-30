const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
const meta_id = process.env.META_ID;
const version = process.env.META_API_VERSION;
const token = process.env.META_ACCESS_TOKEN
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path:  `/${version}/${meta_id}/messages`,
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};