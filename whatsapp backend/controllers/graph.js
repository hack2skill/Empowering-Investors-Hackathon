import axios from "axios";
import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

import { app, database, storage } from "../firebaseconf.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from "firebase/storage";


const sendImage = async () => {
const url = 'https://graph.facebook.com/v17.0/103127159543212/messages';
const accessToken = "EAAX521u5F3wBOxGkbRhLZADj5Nl2TNDu1YpaFlOqvHOwGd8ZAF5vyFLdSujoaPj8M0Pq8R7vZCCzbMDOeWvU4Rki36HHB623AB0FA2Fe6ykAHykDzHsOyLYQulXRgZBtpw4zlJ33x64vFBmQhDnorjPY7nJqDZAQSoCS1oUfW6u7pgDwOsHG8ehndxMZBxC9OZA5USJOxj7VnoIk14Rj1L7";
const link1="https://firebasestorage.googleapis.com/v0/b/cashfloai.appspot.com/o/wamid.HBgMOTE5Nzc4NzE1NjM0FQIAEhggQzU0QkUxMkQ1RjMyOUE5QkFCMjUzNTk0Q0UzRTZBQkUAgraph.jpg?alt=media&token=ffb5f7d0-6ad3-4449-bc67-4a09f5cc7858.jpg";
const link='https://imgur.com/kJ2o23Z.jpg';
const data = {
  messaging_product: 'whatsapp',
  recipient_type: 'individual',
  to: '+919778715634',
  type: 'image',
  image: {
    link: link1
  }
};

const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
};

axios.post(url, data, { headers })
  .then(response => {
    console.log('Message sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending message:', error.response.data);
  });

}
  sendImage();