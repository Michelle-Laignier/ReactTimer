import { useRef, useState } from "react"
import ReactPlayer from "react-player"
import { IoMdBonfire, IoMdSnow, IoMdRainy } from "react-icons/io"
import {  MdOutlineStopCircle, MdOutlineReplay5, MdOutlineForward5 } from "react-icons/md"

import { Container, Timer, Sounds } from "./styles"

import { ButtonTimer } from "../../components/ButtonTimer"
import { ButtonPlayPause } from "../../components/ButtonPlayPause"
import { SoundButton } from "../../components/SoundButton"

export function Home() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [audioBtn, setAudioBtn] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoUrl, setVideoUrl] = useState(null)

  const [minutes, setMinutes] = useState(50)
  const [seconds, setSeconds] = useState(0)
  

  let countdown = useRef(null)

  function formatTime (time) {
    if(minutes > 60) {
      setMinutes(60)
      setSeconds(0)
    }
    
    // if time < 10, add 0 before:
    return time < 10 ? `0${time}` : `${time}`
  }

  function timerCountdown() {
    setSeconds((prevSeconds) => {
      if(prevSeconds === 0) {
        setSeconds(59)
      
        setMinutes((prevMinutes) => {
          if (prevMinutes <= 0 && prevSeconds <= 0) {
            setMinutes(0)
            setSeconds(0)
            clearTimeout(countdown)
            setIsPlaying(isPlaying)
            return
          }
          return prevMinutes - 1
        })
      }
      return prevSeconds - 1
    })
    countdown.current = setTimeout(() => timerCountdown(), 1000)
  }

  function pauseTimer() {
    clearTimeout(countdown.current)
    setIsPlaying(!isPlaying)
  }

  function resetTimer() {
    if(minutes === 50 && seconds === 0) {
      return
    }

    audio()
    const isOk = confirm("Resetar o timer?")

    if(isOk) {
      pauseTimer()
      setMinutes(50)
      setSeconds(0)
    }
  }

  function togglePlayPause() {
    audio()
    
    setIsPlaying(!isPlaying)

    if(!isPlaying){
      pauseTimer()
    } else {
      timerCountdown()
    }
  }

  function plusFiveMinutes() {
    audio()
    setMinutes((prevMinutes) => {
      return prevMinutes + 5
    })
  }

  function lessFiveMinutes() {
    audio()
    setMinutes((prevMinutes) => {
      if(minutes === 0 || minutes <= 5) {
        setMinutes(0)
        setSeconds(0)
      }

      return prevMinutes - 5
    })
  }

  function audio() {
    const audio = new Audio("../../../src/audio/button-press.wav")
    audio.play()
    setAudioBtn(audio)
  }

  function toggleVideoFire() {
    setIsVideoPlaying(!isVideoPlaying)
    if(!isVideoPlaying) {
      setVideoUrl("https://www.youtube.com/watch?v=L_LUpnjgPso")
    } else {
      setVideoUrl("")
    }
  }

  function toggleVideoSnow() {
    setIsVideoPlaying(!isVideoPlaying)
    if(!isVideoPlaying) {
      setVideoUrl("https://www.youtube.com/watch?v=vz91QpgUjFc")
    } else {
      setVideoUrl("")
    }
  }

  function toggleVideoRain() {
    setIsVideoPlaying(!isVideoPlaying)
    if(!isVideoPlaying) {
      setVideoUrl("https://www.youtube.com/watch?v=lZ0aPqnRffg")
    } else {
      setVideoUrl("")
    }
  }

  return(
    <Container>
    <Timer>
      <div>
        <span>{formatTime(minutes)}</span>
        <span>:</span>
        <span>{formatTime(seconds)}</span>
      </div>

      <div className="buttons-div">
        <ButtonPlayPause isPlaying={isPlaying} onClick={togglePlayPause}/>
        <ButtonTimer onClick={resetTimer} icon={MdOutlineStopCircle}/>
        <ButtonTimer onClick={lessFiveMinutes} icon={MdOutlineReplay5}/>
        <ButtonTimer onClick={plusFiveMinutes} icon={MdOutlineForward5}/>
      </div>
    </Timer>

    <Sounds>
      <ReactPlayer
        url={videoUrl}
        playing={isVideoPlaying}
        loop={true}
        width="100%"
        height="100%"
        className="video"
      />
      <SoundButton onClick={toggleVideoFire} icon={IoMdBonfire} videoPlaying={isVideoPlaying}/>
      <SoundButton onClick={toggleVideoSnow} icon={IoMdSnow} videoPlaying={isVideoPlaying}/>
      <SoundButton onClick={toggleVideoRain} icon={IoMdRainy} videoPlaying={isVideoPlaying}/>
    </Sounds>
   </Container>
  )
}