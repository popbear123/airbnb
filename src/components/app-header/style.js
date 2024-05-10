import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: ${props => props.$isFixed ? "fixed" : "relative"};
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: ${props => props.$isReachTop ? "130px" : "80px" };
  border-bottom: ${props => props.$isReachTop ? "unset" : "1px solid #eee" };
  background-color: ${props => props.$isReachTop ? "unset" : "#fff" };
  transition: all 200ms ease;

  /* .app-header-inner {
    height: 80px;
    padding: 0 24px;
    overflow: hidden;
  } */

  .top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
  }

  .bottom {
    height: 100px;
    width: 100%;
  }
`

export default HeaderWrapper