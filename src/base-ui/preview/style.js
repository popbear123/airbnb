import styled from 'styled-components'

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #333;
  z-index: 999;

  > .top {
    position: relative;
    height: 86px;

    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  > .middle {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fff;
    
    .slider {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: 0 auto;
        height: 100%;
      }

        /* 动画css */
        .fade-enter {
          opacity: 0;
          transform: translateX(${props => props.$isNext ? "100%" : "-100%"});
        }

        .fade-enter-active {
          opacity: 1;
          transform: translate(0);
          transition: all 200ms ease;
        }

        .fade-exit {
          opacity: 1;
        }

        .fade-exit-active {
          opacity: 0;
          transition: all 200ms ease;
        }
    }

    .btn {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 83px;
      height: 100%;
      cursor: pointer;

      &.prev {
        left: 0;
      }

      &.next {
        right: 0;
      }
    }
  }

  > .bottom {
    position: relative;
    margin-top: 10px;
    height: 100px;

    .bottom-inner {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 105vh;
    }

    .info {
      display: flex;
      justify-content: space-between;
      color: #fff;

      .info-right {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }

    .pic-list {
      margin-top: 3px;
      height: ${props => props.$showPicList ? "67px" : "0"};
      transition: height 300ms ease;
      overflow: hidden;

      .pic-item {
        margin-right: 15px;
        cursor: pointer;

        img {
          height: 67px;
          opacity: 0.5;

          &.active {
            opacity: 1;
          }
        }
      }
    }
  }
`