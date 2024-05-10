import styled from "styled-components";

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > .btn {
    padding: 12px;
    border-radius: 22px;
    cursor: pointer;
    color: ${props => props.$isReachTop ? "#fff" : props.theme.textColor.primaryColor};
    font-weight: 600;
    &:hover {
      background-color: ${props => props.$isReachTop ? "rgba(255, 255, 255, .1)" : "#f5f5f5"};
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 77px;
    height: 42px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    background-color: #fff;
    ${props => props.theme.mixin.shadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background-color: #fff;
      .top, .bottom {
        padding: 10px 0;
      }
      .top {
        display: flex;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #ddd;
      }
      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        font-weight: 600;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`

export default RightWrapper