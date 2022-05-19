
import styled from "styled-components"
import mark from "../../images/icon-bookmark.svg"
import mark2 from "../../images/icon-bookmark2.svg"

const Main = styled.main`
  max-width: 700px;
  margin: -5rem auto;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content:space-between;
  color: #333533;
  `
const DivStart = styled.div`
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem;
  text-align: center;
`
const H1 = styled.h1`
  margin-bottom: 1rem;
`
const H1Left = styled.div`
  margin-top: 2rem;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  `
const PLeft = styled.div`
  color: #949494;
  text-align: left;
  margin-top: 2rem;
`

const DivStartAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  pointer-events: ${props => props.des};
  grid-column: ${props => props.col};
  justify-self: end;
  align-self: center;
  border-radius: 30px;
  padding: .9rem .9rem;
  font-size: .875rem;
  font-weight: bold;
  background:#f7b500;
  border: none;
  color: #333533;
  cursor: pointer;
  :hover{
    box-shadow: 0 0 1px #daa001;
    background: #daa001;
    color: #000;
  }
`
const ButtonMark = styled.button`
  display: flex;
  justify-content: end;
  padding: 0.9rem;
  width: 150px;
  border-radius: 30px;
  font-size: .875rem;
  font-weight: bold;
  background: url(${mark}) no-repeat left,#cccccc;
  background-size: contain;
  border: none;
  color: #a0a0a0;
  position: relative;
  cursor: pointer;
  :hover {
    background: url(${mark2}) no-repeat left,#cccccc;
    background-size: contain;
    color: #333533;
  }
`
const DivStatesGeral = styled.div`
  display: flex;
  `
const DivStates = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  &:first-child {
    border-right: 1px solid #333533;
  };
  &:nth-child(2) {
    border-right: 1px solid #333533;
  }
`
const States = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`
const PStates = styled.div`
  color: #949494;

`


export {
  Main,
  DivStart,
  DivStartAction,
  Button,
  ButtonMark,
  H1,
  DivStatesGeral,
  DivStates,
  States,
  PStates,
  H1Left,
  PLeft,
  
}