
import React from "react";

const ContextItems = React.createContext()

const ProvideItems = ({children}) => {
  const day = 64
  const total = 100000
  const [value, setValue] = React.useState(89914)
  const [backers,setBackers] = React.useState(5007)
  const [days, setDays] = React.useState(day)
  const [bambooSimple,setBambooSimple] = React.useState(101)
  const [bambooExtends,setBambooExtends] = React.useState(64)
  const [bambooPremium,setBambooPremium] = React.useState(0)

  const setOfValue = dataValue => {
    setValue(dataValue)
  }
  const setOfBackers = databackers => {
    setBackers(databackers)
  }
  const setOfBambooSimple = dataBambooSimple => {
    setBambooSimple(dataBambooSimple)
  }
  const setOfBambooExtends = dataBambooExtends => {
    setBambooExtends(dataBambooExtends)
  }
  const setOfBambooPremium = dataBambooPremium => {
    setBambooPremium(dataBambooPremium)
  }
  
  const data = {
    days, total,value,backers,bambooSimple,bambooExtends,bambooPremium,setOfValue,
    setOfBackers,setOfBambooSimple,setOfBambooExtends,setOfBambooPremium
  }



  return (
    <ContextItems.Provider value={data}>
      {children}
    </ContextItems.Provider>
  )
}

export {
  ContextItems,
  ProvideItems
}
