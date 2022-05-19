
import React from 'react'
import { ContextItems } from '../../contextItems/contextStates'
import { Button } from '../styledMaster'
import { BackersGeral, DivBk, Span } from './styledBackers'

const Backers = () => {
  const items = React.useContext(ContextItems)

  const handleModal =() => {
    items.setOfStatusModal(true)
  }
  

  return (
    <BackersGeral>
    <DivBk 
    opc={items.bambooSimple == 0? ".5": 1}>
      <h1>Bamboo Estand</h1>
      <span>Pledge $25 or more </span>
      <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. </p>
    <Span>
      <p>{items.bambooSimple}</p>
      <span>left</span>
    </Span>
    <Button 
    onClick={handleModal}
    des = {items.bambooSimple == 0? "none" : "initial"}
    col="3">Select Reward</Button>
    </DivBk>
    <DivBk
    opc={items.bambooExtends == 0? ".5": 1}>
      <h1>Black Edition Estand</h1>
      <span>Pledge $75 or more </span>
      <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
    <Span>
      <p>{items.bambooExtends}</p>
      <span>left</span>
    </Span>
    <Button 
    onClick={handleModal}
    des = {items.bambooExtends == 0? "none" : "initial"}
    col="3">Select Reward</Button>
    </DivBk>
    <DivBk
    opc={items.bambooPremium == 0? ".5": 1}>
      <h1>Bamboo Estand</h1>
      <span>Pledge $200 or more </span>
      <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
    <Span>
      <p>{items.bambooPremium}</p>
      <span>left</span>
    </Span>
    <Button 
    onClick={handleModal}
    des = {items.bambooPremium == 0? "none" : "initial"}
    col="3">Select Reward</Button>
    </DivBk>
    </BackersGeral>
  )
}

export { Backers }