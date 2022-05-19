
import React from "react"
import { ContextItems } from "../contextItems/contextStates"
import {  RangeProgress } from "../inputProgress/ipuntRange"
import { ModalMaster } from "../modal/modalMaster"
import { Backers } from "./backers/backers"
import { Button, ButtonMark, DivStart, DivStartAction, Main, H1, DivStatesGeral, DivStates, States, H1Left, PLeft,PStates } from "./styledMaster"



const Mastercraft = () => {
  const items = React.useContext(ContextItems)
  const refItem = React.useRef()

  
  React.useEffect(() => {
    const {left} = refItem.current.getBoundingClientRect()
    items.setOfSpacingModal(left)
  },[])
  

  return (
   <Main 
   ref={refItem}>

      <DivStart>
        <div>
          <H1>
            MasterCraft Bamboo Monitor Riser
          </H1>
          <p>
            A beutiful & handcrafted monitor stand to reduce neck end eye strain
          </p>
        </div>
        <DivStartAction>
          <Button>Back this project</Button>
          <ButtonMark>BookMarked</ButtonMark>
        </DivStartAction>
      </DivStart> 

      <DivStart>
        <DivStatesGeral>
          <DivStates>
            <States>
              <h1>$ {items.value}</h1>
              <PStates>of ${items.total} backed</PStates>
            </States>
          </DivStates>
          <DivStates>
            <States>
              <h1>{items.backers}</h1>
              <PStates>total backers</PStates>
            </States>
            </DivStates>
          <DivStates>
            <States>
              <h1>{items.days}</h1>
              <PStates>days left</PStates>
            </States>
            </DivStates>
        </DivStatesGeral>
        
        < RangeProgress/>
      </DivStart>

      <DivStart>
          <div>
            <H1Left>About this project</H1Left>
            <PLeft>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</PLeft>
            <PLeft>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</PLeft>
          </div>

          <Backers />
      </DivStart>

      {items.statusModal && <ModalMaster/>}

   </Main>
  )
}
export { Mastercraft}