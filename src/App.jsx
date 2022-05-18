
import React from 'react'
import './App.css'
import { ProvideItems } from './components/contextItems/contextStates'
import { HeaderMastercraft } from './components/header/header'
import { Mastercraft } from './components/MainPage/mastercraft'

function App() {

  return (
    <>
      <HeaderMastercraft />
      <ProvideItems>
        <Mastercraft />
      </ProvideItems>
    </>
  )
}

export default App
