import styled from "styled-components"

export const ScrollViewWrapper = styled.div`
  position: relative;
  
  .scroll-inner {
    overflow: hidden;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translate(0, -50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    z-index: 9;

    &.btn-left {
      position: absolute;
      left: -14px;
    }

    &.btn-right {
      position: absolute;
      right: -14px;
    }
  }

  .scroll-content {
    display: flex;
    transition: transform 250ms ease;
  }
`