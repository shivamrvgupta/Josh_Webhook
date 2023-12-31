const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
const meta_id = "155621414308796";
const version = 'v17.0';
const token = 'EAAVOmhbOBCABO2rCVnMTBszx09D7EvjJB0LqElbaAV6DFOreuZCcClJW56H0SZCPuU8cUPPMHO4SvdLnceO21k8lXyavt8FvZAsIjIZCMkkVMgrB9eMZBwv9Cze9ZByboRFIQxieXhzyD4twvY1VWfZAvZA1nl6Ti39ULMdUbmbE9DZBIVOAysPKtHx2G2WRtZAYCL0GrZByxo9ZBRDONzfZB7Qh8sVBlM2VDFQYe7DEZD';
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