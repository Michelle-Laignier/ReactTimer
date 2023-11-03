import { useState } from "react"
import {  MdOutlineStopCircle ,MdOutlineReplay10, MdOutlineForward10 } from "react-icons/md"

import { Container, Timer, Sounds } from "./styles"

import { ButtonTimer } from "../../components/ButtonTimer"
import { ButtonPlayPause } from "../../components/ButtonPlayPause"

export function Home() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [minutes, setMinutes] = useState(50)
  const [seconds, setSeconds] = useState(0)

  let countdown

  // if time < 10, add 0 before:
  function formatTime (time) {
    if(seconds >= 60) {
      setSeconds(59)
    }
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
    countdown = setTimeout(() => timerCountdown(), 1000)
  }

  function pauseTimer() {
    setMinutes(minutes)
    setSeconds(seconds)
    clearTimeout(countdown)
  }

  function togglePlayPause() {
    setIsPlaying(!isPlaying)

    if(!isPlaying){
      pauseTimer()
    } else {
      timerCountdown()
    }
  }

  function moreTenSeconds() {
    setSeconds((prevSeconds) => {
      return prevSeconds + 10
    })
  }

  function lessTenSeconds() {
    setSeconds((prevSeconds) => {
      if(minutes == 0 && seconds <= 10) {
        setMinutes(0)
        setSeconds(0)
      }

      if(seconds > 10) {
        return prevSeconds - 10
      } else {
        prevSeconds - seconds
      }
      // continuar aqui
    })
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
        <ButtonTimer icon={MdOutlineStopCircle}/>
        <ButtonTimer onClick={lessTenSeconds} icon={MdOutlineReplay10}/>
        <ButtonTimer onClick={moreTenSeconds} icon={MdOutlineForward10}/>
      </div>
    </Timer>
    <Sounds></Sounds>
   </Container> 
  )
}