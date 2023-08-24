import { motion } from "framer-motion";
import { useReactMediaRecorder } from "react-media-recorder";
import { useState, useEffect, useCallback, useRef } from "react";
// import useClipboard from "react-use-clipboard";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from "axios";

function startSpeech(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const synth = window.speechSynthesis;

  synth.cancel();
  synth.speak(utterance);
}

async function sendAudio(audio, blob) {
  audio.src = blob;

  const audioBlob = await fetch(audio.src).then((res) => res.blob());

  const formData = new FormData();
  formData.append("audio", audioBlob, "audio.wav");
  formData.append("id", localStorage.getItem("token"));

  const headers = new Headers();
  headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

  const response = await fetch("http://localhost:5000" + "/api/conversation", {
    method: "POST",
    body: formData,
    headers,
  });

  const data = await response.json();

  return data;
}

const Section = (props) => {

  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <InputBoard />
    </div>
  );
};

const AboutSection = () => {
  const [data, setData] = useState({
    name: "",
    profileImage: "",
  });

  const getData = useCallback(() => {
    const token = localStorage.getItem("token"); // Replace 'token' with your actual key

    axios
      .get("http://localhost:5000/user/userinfo", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the 'Authorization' header
        },
      })
      .then((response) => {
        console.log(response);
        const { name, profileImage } = response.data;
        setData({
          name: name,
          profileImage: profileImage,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(
            "Server responded with an error status:",
            error.response.status
          );
          console.log("Response data:", error.response.data);
        }
      });
  }, []);

  useEffect(() => {
    getData();
  }, []);



  return (
    <Section>
      <div className="w-fit p-4 bg-[#cacbfe]/20 backdrop-blur rounded-lg">
        <h1 className="text-6xl font-extrabold leading-snug">
          Welcome Back
          <br />
          <span className="px-1 italic">{data.name}</span>
        </h1>
        <motion.p
          className="text-lg text-[#22222c] mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          Clarify Your Doubts
          <br />
          Your AI Companion for Exploring and Learning
        </motion.p>
        <motion.button
          className={`bg-violet-500 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
      </div>
    </Section>
  );
};

const InputBoard = () => {
  const [Data, setData] = useState({
    prompt: "",
    solution: ""
  })

  const audioRef = useRef(null);
  const {
    clearBlobUrl,
    startRecording,
    stopRecording,
    status,
    mediaBlobUrl: recordingBlob,
  } = useReactMediaRecorder({
    audio: true,
    video: false,
    blobPropertyBag: { type: "audio/wav", endings: "native" },
  });

  useEffect(() => {
    if (status === "stopped") {
      stopRecording();
      sendAudio(audioRef.current, recordingBlob)
        .then((data) => {
          console.log("server responded");
          setData((prevData) => ({
            ...prevData,
            prompt: data, // Update the prompt with the received data
          }));

          startSpeech(data.output)
        })
        .catch((err) => {
          console.log(err);
        });
      clearBlobUrl();
    }
  }, [status]);

  useEffect(() => {
    return () => {
      clearBlobUrl();
    };
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <motion.div className="h-full w-full p-4 md:p-20" whileInView={"visible"}>
        <div className="h-full rounded bg-[#686882]/70 shadow-lg mr-44 backdrop-blur flex flex-col overflow-hidden">
          <div className="w-full p-3 px-4 relative flex justify-between bg-slate-900">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
              <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
              <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
              <svg width="24" height="24" fill="none" className="ml-4 flex-none text-slate-400 dark:text-slate-500"><path d="m15 7-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <svg width="24" height="24" fill="none" className="ml-2 flex-none text-slate-400 dark:text-slate-500"><path d="m10 7 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <div>
              <svg width="24" height="24" fill="none" className="text-slate-400 dark:text-slate-500">
                <path d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>

            <div className="absolute left-1/2 top-2 -translate-x-1/2">
              <div><div className="bg-slate-100 rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto px-10 dark:bg-slate-800 dark:text-slate-500"><svg viewBox="0 0 20 20" fill="currentColor" className="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>NRAM.ai</div></div>
            </div>
          </div>
          <div className="h-full overflow-y-auto p-4">
          <div className="text-gray-400 bg-gray-700 border-2 p-2 rounded border-gray-400">{Data.prompt.output}</div>


          </div>
          <div className="p-4 bg-gray-700 rounded shadow m-4">
            <button className="text-gray-400 w-full h-full"
              onClick={() => {
                if (status === "recording") {
                  stopRecording();
                } else {
                  startRecording();
                }
                status === "";
              }}
            >
              <>
                {status === "idle" && "Record"}
                {status === "recording" && "Stop Recording"}
              </>
            </button>
            <audio src={recordingBlob} ref={audioRef} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

