
import styled from "styled-components"
import BgMaster from "../../images/image-hero-desktop.jpg"
import BgMobile from "../../images/image-hero-mobile.jpg"

const Header = styled.header`
  max-width: 100%;
  top: 0;
  height: 400px;
  background: url(${BgMaster}) no-repeat center;
  background-size: cover;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  color: #fff;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
const Li = styled.li`
  :hover {
    transform:scale(1.5);
}
`
const A = styled.a`
  padding: 0.5rem;
  color: #fff;
`

export {
  Header,
  Nav,
  Ul,
  Li,
  A,
}