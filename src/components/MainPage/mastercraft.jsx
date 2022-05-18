
import React from "react"
import { ContextItems } from "../contextItems/contextStates"
import { Button, ButtonMark, DivStart, DivStartAction, Main, H1, DivStatesGeral, DivStates, States } from "./styledMaster"



const Mastercraft = () => {
  const items = React.useContext(ContextItems)

  console.log(items.days)
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
              <h1>{items.value}</h1>
              <p>of ${items.total} backed</p>
            </States>
          </DivStates>
          <DivStates>
            <States>
              <h1>{items.backers}</h1>
              <p>total backers</p>
            </States>
            </DivStates>
          <DivStates>
            <States>
              <h1>{items.days}</h1>
              <p>days left</p>
            </States>
            </DivStates>
        </DivStatesGeral>
        <input type="range" />
      </DivStart>


   </Main>
  )
}
export { Mastercraft}