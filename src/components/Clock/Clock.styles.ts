import styled from 'styled-components'

interface PointerProps {
  hour?: number;
  minute?: number;
  second?: number
}

export const Container = styled.div`
    display: none;
    margin-top: 2%;
    align-items: center;
    justify-content: center;

    @media(min-width: 1100px) {
      display: flex;
      position: absolute;
      top: 10%;
      left: 5%;
      height: 20%;
      width: 20%;
    }

    @media(min-width: 1250px) {
      display: flex;
      position: absolute;
      top: 10%;
      left: 10%;
      height: 20%;
      width: 20%;
    }
`

export const Pointer = styled.div<PointerProps>`
  position: absolute;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%);
  height: 2px;
`

export const PointerMinutes = styled(Pointer)`
  width: 80px;
  transform: ${props => `rotateZ(${props.minute}deg)`} ;
`

export const PointerHours = styled(Pointer)`
  width: 50px;
  transform: ${props => `rotateZ(${props.hour}deg)`} ;
`

export const PointerSeconds = styled(Pointer)`
  width: 80px;
  transform: ${props => `rotateZ(${props.second}deg)`} ;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, red 50%, red 100%, red 100%);
`
