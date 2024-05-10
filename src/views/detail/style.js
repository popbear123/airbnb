import styled from 'styled-components'

export const DetailWrapper = styled.div`
  .banner {
    position: relative;
    display: flex;

    &:hover {
      .banner-item {
        .cover {
          opacity: 1 !important;
        }
      }
    }

    > .left, > .right {
      flex: 1;
      cursor: pointer;

      .banner-item {
        position: relative;
        overflow: hidden;

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          z-index: 2;
          transition: opacity 200ms ease;
        }

        img {
          width: 100%;
          transition: transform 200ms ease;
        }

        &:hover {
          .cover {
            opacity: 0 !important;
          }
          
          img {
            transform: scale(1.08);
          }
        }
      }
    }

    > .left {
      
    }

    > .right {
      display: flex;
      flex-wrap: wrap;

      .banner-item {
        width: 50%;
        border: 1px solid #222;
      }
    }

    .show-btn {
      position: absolute;
      right: 15px;
      bottom: 15px;
      z-index: 99;
      line-height: 22px;
      padding: 6px 15px;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;
    }
  }
`