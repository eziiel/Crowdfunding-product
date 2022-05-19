import React from 'react'
import { Info, Modal, Options, InputRadio } from './styledmodal'

 const ModalMaster = () => {
  return (
   <Modal>
     <Info>
       <h1>Back this Project</h1>
       <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
     </Info>

    <Options>
    <InputRadio 
    id='item'
    name='item'
    type="radio" />
      <Info>
      <h1>Pledge with no reward</h1>
       <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
      </Info>
    </Options>

    <Options>
    <InputRadio 
    id='item'
    name='item'
    type="radio" />
     <Info>
      <h1>Pledge with no reward</h1>
       <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
      </Info>
    </Options>


   </Modal>
  )
}

export { ModalMaster }