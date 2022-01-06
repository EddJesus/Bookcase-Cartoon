import React, { useState, useEffect, useCallback } from 'react';

import { ClockBase } from '../../svgs'

import { 
  Container, 
  PointerMinutes, 
  PointerHours, 
  PointerSeconds,
} from './Clock.styles'

const Clock = () => {
  const [minute, setMinute] = useState((new Date().getMinutes() * 6) - 90)
  const [hour, setHour] = useState((new Date().getHours() * 30) - 90)
  const [second, setSecond] = useState(0)

  useEffect(() => { setTime() }, [])

  window.setInterval(function () {
    setTime();
  }, 60000);

  window.setInterval(function () {
    setSeconds();
  }, 1000);

  function setTime() {
    const d = new Date()
    setMinute((d.getMinutes() * 6) - 90)

    // this is for calculate the position of the hour pointer based on the minutes. ex: if its 08:30, the hour pointer will be between 8 and 9 hour.
    setHour(((d.getHours() * 30) - 90) + (30 * d.getMinutes() / 60))
  }

  const setSeconds = useCallback(() => {
    const d = new Date()
    setSecond((d.getSeconds() * 6) - 90)
  }, [])

  return (
    <Container>
      <PointerMinutes minute={minute} />
      <PointerHours hour={hour} />
      <PointerSeconds second={second} />
      <ClockBase height="80%" width="80%"/>
    </Container>
  ) ;
}

export default Clock;
