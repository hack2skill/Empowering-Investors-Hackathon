import { supabase, Whatsapp } from "../supabaseconf.js";
import { check_regis, to_register } from "./register_utils.js";
import {  manage_audio } from "./audio_api.js";
import axios from "axios";
import { sent_text } from "./api_call.js";

import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

import { app, database, storage } from "../firebaseconf.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from "firebase/storage";







const signupController = async (req, res) => {
  try {
    let body = Whatsapp.parseMessage(req.body);
    console.log("yaay");
    if (body?.isMessage) {
      let incomingMessage = body.message;
      let recipientPhone = incomingMessage.from.phone;
      console.log(recipientPhone);
      let recipientName = incomingMessage.from.name;
      let typeOfMsg = incomingMessage.type;
      let message_id = incomingMessage.message_id;

      if (
        typeOfMsg === "simple_button_message" &&
        incomingMessage.interactive.type === "button_reply" &&
        incomingMessage.interactive.button_reply.id === "register"
      ) {
        try {
          await to_register(incomingMessage, typeOfMsg);

          return res.sendStatus(200);
        } catch (error) {
          console.error("Error in to_register:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }
      }

      const status = check_regis(incomingMessage, recipientPhone);

      if (status) {
        if (typeOfMsg === "text_message") {
          try {
           console.log("text fun");
             
           const ans= await sent_text(incomingMessage,res)
           const storageRef = ref(storage, message_id + "graph.jpg")
            if('graph' in ans){
           
              uploadString(storageRef,ans.graph, "base64").then((snapshot) => {

                console.log('Uploaded an array!');
                getDownloadURL(storageRef)
                    .then((firebase_url) => {
                        console.log(firebase_url);
                        Whatsapp.sendText({
                            recipientPhone: incomingMessage.from.phone,
                            message: `hey ${firebase_url} \n this is your Report Link.Enjoy!`,
                        });

                    });

            });
           
            }

            
           await Whatsapp.sendText({
             recipientPhone: incomingMessage.from.phone,
            message: ans.wts_text,
          });
         
           
            return res.sendStatus(200);
          } catch (error) {
            console.error("Error in sent_text:", error);
            return res.status(500).json({ error: "Internal Server Error" });
          }
        }

        if (incomingMessage.audio.id) {

          manage_audio(incomingMessage);
          return res.sendStatus(200);

        }



        return res.sendStatus(200);
      }

      return res.sendStatus(200);

    } else if (
      typeOfMsg === "simple_button_message" &&
      incomingMessage.interactive.type === "button_reply" &&
      incomingMessage.interactive.button_reply.id === "register"
    ) {
      try {
        await to_register(incomingMessage, typeOfMsg);

        return res.sendStatus(200);
      } catch (error) {
        console.error("Error in to_register:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }

    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).json({ error: "Bad request" });
  }
};




export { signupController };
