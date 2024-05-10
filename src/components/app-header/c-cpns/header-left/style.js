import styled from "styled-components";

const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.$isReachTop ? "#fff" : props.theme.color.primaryColor};
  .logo {
    display: inline-block;
    cursor: pointer;
  }
`

export default LeftWrapper