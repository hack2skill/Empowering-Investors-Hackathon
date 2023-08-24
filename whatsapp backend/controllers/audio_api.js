import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

import { app, database, storage } from "../firebaseconf.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import axios from "axios";
import { getTranscript } from "./api_call.js";





const manage_audio = async (incomingMessage) => {
  const messageid = incomingMessage.audio.id;
  const accessToken = process.env.ACCESSTOKEN;

  console.log("msgid", messageid);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://graph.facebook.com/v17.0/${messageid}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  axios
    .request(config)
    .then((response) => {
      
      const media_url = response.data.url;
      console.log("poda",media_url);
      try {
        axios
          .get(media_url, {
            responseType: "arraybuffer",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            console.log("hee", response);
            const media = response.data;
            const bytes = new Uint8Array(media);
            //uploading image to firebase
            const storageRef = ref(storage, `audio/${messageid}`);
            const metadata = {
              contentType: "audio/mp3",
            };
            uploadBytes(storageRef, bytes, metadata).then((snapshot) => {
              console.log("Uploaded an array!");
              getDownloadURL(storageRef).then( async(firebase_url) => {
                console.log(firebase_url);

                getTranscript(firebase_url)

              });
            });
          })
          .catch((error) => {
            console.log("error", error);
          });
      } catch (error) {
        console.log("error", error);
      }
    })
    .catch((error) => {
      console.log("error8", error);
    });
};


export { manage_audio}