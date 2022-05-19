import React from "react"
import { ContextItems } from "../components/contextItems/contextStates"
import { Button } from "../components/Page/styledMaster"

const FooterBar = ({pointer, active}) => {
  const items = React.useContext(ContextItems)
  let status = pointer == 0? "none":"initital"
  const [value, setValue] = React.useState()

  const handleData =() =>{
    items.setOfValue(!value?items.value:items.value + +value)
    if(active == 'simple') {
      items.setOfBambooSimple(items.bambooSimple+ -1)
      items.setOfBackers( items.backers+1)
    } else if(active == 'extends') {
      items.setOfBambooExtends(items.bambooExtends+ -1)
      items.setOfBackers( items.backers+1)
    } else if(active == 'premium') {
      items.setOfBambooPremium(items.bambooPremium+ -1)
      items.setOfBackers( items.backers+1)
    } 
  }

  function handleValue (e) {
    // console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div>
      <p>Enter you Plage</p> 
      <div border="1px solid #949494">
      <input
      onChange={handleValue}
      type="text"
      />
        <Button 
        des={status}
        onClick={handleData}
        >continue</Button>
      </div>
    </div>
  )
}
export {FooterBar}