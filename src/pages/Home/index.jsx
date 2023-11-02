import { useState } from "react"
import {  MdOutlineStopCircle ,MdOutlineReplay10, MdOutlineForward10 } from "react-icons/md"

import { Container, Timer, Sounds } from "./styles"

import { ButtonTimer } from "../../components/ButtonTimer"
import { ButtonPlayPause } from "../../components/ButtonPlayPause"

export function Home() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [timerMinutes, setTimerMinutes] = useState(50)
  const [timerSeconds, setTimerSeconds] = useState(0)

  let countdown

  // if time < 10, add 0 before:
  function formatTime (time) {
    if(timerSeconds >= 60) {
      setTimerSeconds(59)
    }
    return time < 10 ? `0${time}` : `${time}`
  }

  function timerCountdown() {
    setTimerSeconds((prevSeconds) => {
      if(prevSeconds === 0) {
        setTimerSeconds(59)
      
        setTimerMinutes((prevMinutes) => {
          if (prevMinutes <= 0 && prevSeconds <= 0) {
            setTimerMinutes(0)
            setTimerSeconds(0)
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
    setTimerMinutes(timerMinutes)
    setTimerSeconds(timerSeconds)
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
    setTimerSeconds((prevSeconds) => {
      return prevSeconds + 10
    })
  }

  function lessTenSeconds() {
    setTimerSeconds((prevSeconds) => {
      if(timerMinutes == 0 && timerSeconds <= 10) {
        setTimerMinutes(0)
        setTimerSeconds(0)
      }

      if(timerSeconds > 10) {
        return prevSeconds - 10
      } else {
        prevSeconds - timerSeconds
      }
      // continuar aqui
    })
  }

  return(
    <Container>
    <Timer>
      <div>
        <span>{formatTime(timerMinutes)}</span>
        <span>:</span>
        <span>{formatTime(timerSeconds)}</span>
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