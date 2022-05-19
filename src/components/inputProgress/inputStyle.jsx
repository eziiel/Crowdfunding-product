
import React from "react"
import styled from "styled-components"
import { ContextItems } from "../contextItems/contextStates"

const ProgressBar = () => {
  const {value} = React.useContext(ContextItems)
  const percent = (value/1000)

  return percent
}

const Progress = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 30px;
  position: relative;
  background: #e7e7e7;
  `
const BarProgress = styled.div`
  position: absolute;
  width: ${() =>`${ProgressBar()}%`};
  height: 15px;
  border-radius: 30px;
  position: absolute;
  background: #f7b500;
`


export {
  Progress,
  BarProgress,

}

