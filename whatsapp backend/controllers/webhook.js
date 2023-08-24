
import { signupController } from "./register_controller.js";



const webhook_get = async (req, res) => {

        const VERIFY_TOKEN = "test";
    
        console.log("yyyyyyyyyyy");
        // Parse params from the webhook verification request
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];
        console.log(token);
    
        // Check if a token and mode were sent
        if (!mode || !token) {
            return res.status(403).send({ error: "Missing mode or token" });
        }
    
        // Check the mode and token sent are correct
        if (mode === "subscribe" && token === VERIFY_TOKEN) {
            // Respond with 200 OK and challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.setHeader('Content-Type', 'text/plain');
            res.send(challenge);
        }
        else {
            // Responds with '403 Forbidden' if verify tokens do not match
            return res.sendStatus(403);
        }

};


const webhook_post = async (req, res) => {

   const status = await signupController(req, res);



};



export { webhook_post, webhook_get };