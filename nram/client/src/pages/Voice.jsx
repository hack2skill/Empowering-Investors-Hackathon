import { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

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

function Voice() {
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
          console.log(data);
          console.log("server responded");
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
    <div>
      <button
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
          {status === "recording" && "Stop"}
        </>
      </button>
      <audio src={recordingBlob} ref={audioRef} />
    </div>
  );
}

export default Voice;
