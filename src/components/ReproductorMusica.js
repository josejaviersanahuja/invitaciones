import React from "react";
import audio from "../audio/song.mp3";
import ReactAudioPlayer from "react-audio-player";

export default function ReproductorMusica() {
  return (
    <div className="audioplayer">
      <ReactAudioPlayer src={audio} autoPlay controls volume={0.3} loop/>
    </div>
  );
}
