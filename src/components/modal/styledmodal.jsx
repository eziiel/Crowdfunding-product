
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
input[type='radio']{
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
}

  width: 700px;
  /* height: 500px; */
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
  opacity: ${props => props.opc};
  padding: 1rem;
  display: grid;
  grid-template-columns: 30px repeat(3,1fr);
  gap: 1rem;
  border: 2px solid #f7b500;
  border-radius: 15px;
  h1 {
    font-size: 1rem;
    grid-row: 1;
    grid-column:2;
  }
  p {
    grid-row: 2;
    grid-column: 2/5;
    font-size: .875rem;
  }
  h2{
    grid-row: 1;
    grid-column: 3;
    font-size: 1rem;
  };
  span{
    font-weight: bold;
    grid-row: 1;
    grid-column: 5;
  };
  div {
    border: ${props => props.border} !important;
  };
  button {
    padding: .5rem !important;
  };
  input[type="text"]{
    color: #333533;
    font-size: 1rem;
    padding: .5rem;
    margin-right: 1rem;
    border-radius: 30px;
    background: #e4e4e4;
    border: 1px solid #e4e4e4;
    :hover, :focus{
      border: 1px solid #f7b500;
    }
  };
  div {
    grid-row: 3;
    grid-column: 1/6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const InputRadio = styled

export { 
  Modal,
  Info,
  Options,
  EscModal,
  BackGround,
 }