
import React from "react"
import { ContextItems } from "../contextItems/contextStates"
import {  RangeProgress } from "../inputProgress/ipuntRange"
import { Backers } from "./backers/backers"
import { Button, ButtonMark, DivStart, DivStartAction, Main, H1, DivStatesGeral, DivStates, States, H1Left, PLeft,PStates } from "./styledMaster"



const Mastercraft = () => {
  const [teste, setTeste] = React.useState()
  const items = React.useContext(ContextItems)

  // console.log(items.days)
  return (
   <Main>

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







      <div>
      <input type="text" 
      onChange={({target}) => {
        setTeste(target.value)}
      }
      />
      <button onClick={() => items.setOfBambooSimple(teste)}>trocar</button>
      </div>
   </Main>
  )
}
export { Mastercraft}