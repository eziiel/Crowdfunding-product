
import styled from "styled-components"


const BackGround = styled.div`
  top: 0;
  align-self: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.471);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Modal = styled.main`
  width: 700px;
  height: 500px;
  background:#fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 2rem; 
  padding: 2rem;
  z-index: 5;
`
const Info = styled.div`
  text-align: left;
  display: grid;
  gap: 1rem;
  grid-column: 2/5;
  h1{
    font-size: 1rem;
  };
  p{
    font-size: .875rem;
    grid-row: 2;
  }
`
const EscModal = styled.button`
  grid-column:5;
  grid-row: 1;
  width: 20px;
  height: 20px;
  padding: 15px;
  display: flex;
  place-content: center;
  place-items: center;
  font-weight:bolder;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`
const Options = styled.div `
  padding: 2rem;
  display: grid;
  grid-template-columns: 50px repeat(2,1fr) 2fr;
  border: 2px solid #f7b500;
  border-radius: 15px;
`
const InputRadio = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background: #333533;
  border-radius: 50%;
  border: 1px solid #949494;
  :checked {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #f7b500;
    border: 5px solid #333533;
  }
`

export { 
  Modal,
  Info,
  Options,
  InputRadio,
  EscModal,
  BackGround,

 }