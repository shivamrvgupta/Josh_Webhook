module.exports = {
    verifyToken : (req, res) => {
        try{
            var accessToken = "JOSHFUELS#2022";
            var token = req.query["hub.verify_token"];
            var challenge = req.body["hub.challenge"]

            if(challenge != null && token != null && token == accessToken){
                res.send(challenge);
            }else{
                res.status(400).send();
            }
        }catch (error) {
            console.log(error);
            res.send(400).send();
        }
    },

    receivedToken : (req, res) => {
        res.send("hello Received");
    }
}