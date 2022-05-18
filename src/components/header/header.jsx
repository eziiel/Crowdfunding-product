import { Nav, Header, Ul, Li, A } from "./styledHeader"


const HeaderMastercraft = () => {

  return (
    <Header>
      <Nav>
        <h1>
          crowdfund
        </h1>
          <Ul>
            <Li><A href="#about">About</A></Li>
            <Li><A href="#discover">Discover</A></Li>
            <Li><A href="#getStarted">GetStarted</A></Li>
          </Ul>
      </Nav>
    </Header>
  )
}

export { HeaderMastercraft }