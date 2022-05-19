import React from 'react'
import { ContextItems } from '../contextItems/contextStates'
import { Info, Modal, Options, InputRadio, EscModal, BackGround } from './styledmodal'
 const ModalMaster = () => {
   const items = React.useContext(ContextItems)
   const [spacing, setSpacing] = React.useState(items.spacingModal)

   
   React.useEffect(() => {
    setSpacing(items.spacingModal)
  },[items.spacingModal])

  const handleModal = () => {
    items.setOfStatusModal(false)
  }

  return (
    <BackGround>
     <Modal
     spacing = {spacing}
     >
       <Info>
         <h1>Back this Project</h1>
        <EscModal
          onClick={handleModal}>X</EscModal>
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
   </BackGround>
  )
}

export { ModalMaster }