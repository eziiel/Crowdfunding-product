import React from 'react'
import { ContextItems } from '../contextItems/contextStates'
import { FooterBar } from '../../changes/change'
import { Info, Modal, Options, EscModal, BackGround,Label } from './styledmodal'
 
const ModalMaster = () => {
  const [active, setActive] = React.useState(false)
  const items = React.useContext(ContextItems)
  const [spacing, setSpacing] = React.useState(items.spacingModal)
  const [value, setValue] = React.useState()
   
   React.useEffect(() => {
    setSpacing(items.spacingModal)
  },[items.spacingModal])


  const handleModal = () => {
    items.setOfStatusModal(false)  
  }

  const handleItem =({target}) => {
    setActive(target.id)
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
    <Label
    onClick={handleItem}>
      <input
      id='noreward'
      name='item'
      type="radio" />
        <h1>Pledge with no reward</h1>
         <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
    </Label>
        {active == 'noreward' && <FooterBar active={active} pointer={items.bambooExtends}/>}
</Options>
  
      <Options
      opc={items.bambooSimple == 0? ".5": '1'}>
        <Label 
      onClick={handleItem}>
      <input
      id='simple'
      name='item'
      type="radio" />
        <h1>Bamboo Stand </h1>
         <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list</p>
        <h2>Pledge $25 or more </h2>
        <span>{items.bambooSimple} left</span>
      </Label>
        {active == 'simple' &&  <FooterBar active={active} pointer = {items.bambooSimple}/>}
      </Options>

      <Options
       opc={items.bambooExtends == 0? ".5": '1'}>
         <Label
       onClick={handleItem}>
      <input
      id='extends'
      name='item'
      type="radio" />
        <h1>Black Edition Stand</h1>
         <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included</p>
        <h2>Pledge $75 or more</h2>
        <span>{items.bambooExtends} left</span>
        </Label>
        {active == 'extends' && <FooterBar active={active} pointer = {items.bambooExtends}/>}
      </Options>

      <Options
      opc={items.bambooPremium == 0? '.5': '1'}>
        <Label
       onClick={handleItem}>
      <input
      id='premium'
      name='item'
      type="radio" />
        <h1>Mahogany Special Edition</h1>
         <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included</p>
        <h2>Pledge $200 or more</h2>
        <span>{items.bambooPremium} left</span>
        </Label>
        {active == 'premium' && <FooterBar active={active} pointer = {0}/>}
      </Options>


     </Modal>
   </BackGround>
  )
}

export { ModalMaster }