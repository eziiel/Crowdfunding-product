
import React from 'react'
import './App.css'
import { ProvideItems } from './components/contextItems/contextStates'
import { HeaderMastercraft } from './components/header/header'
import { ModalMaster } from './components/modal/modalMaster'
import { Mastercraft } from './components/Page/mastercraft'

function App() {

  return (
    <>
      <HeaderMastercraft />
      <ProvideItems>
        <Mastercraft />
      </ProvideItems>
      <ModalMaster />
    </>
  )
}

export default App
