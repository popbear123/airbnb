import styled from "styled-components";

const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    ${props => props.theme.mixin.shadow}
    cursor: pointer;
    .text {
      padding: 0 16px;
      font-weight: 600;
    }
    .search-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .tab-bar {
    position: relative;

    .tabs {
      display: flex;

      .tab {
        width: 64px;
        height: 20px;
        margin: 10px 16px;
        font-size: 16px;
        color: ${props => props.$isReachTop ? "#fff" : "#222"};
        cursor: pointer;

        &.active {
          position: relative;
          .bridge {
            position: absolute;
            top: 28px;
            left: 0;
            width: 64px;
            height: 2px;
            background-color: ${props => props.$isReachTop ? "#fff" : "#333"};
          }
        }
      }
    }

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      width: 850px;
      height: 66px;
      border-radius: 32px;
      border: 1px solid #ddd;
      background-color: #fff;

      .info-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 32px;
        cursor: pointer;

        &:hover {
          background-color: #eee;
        }

        .item-inner {
          padding: 0 30px;
          .title {
            font-size: 12px;
            font-weight: 800;
            color: #222
          }

          .desc {
            font-size: 14px;
            color: #666;
          }
        }

        .divider {
          height: 32px;
          width: 1px;
          background-color: #ddd;
        }
      }
    }
  }

  .app-header-bar-enter {
    opacity: 0;
    transform: scale(0);
  }
  
  .app-header-bar-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 150ms ease;
  }

  .app-header-bar-exit {
    opacity: 1;
    transform: scale(1);
  }

  .app-header-bar-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: all 150ms ease;
  }
`

export default CenterWrapper