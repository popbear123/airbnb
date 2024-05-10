import styled from "styled-components";


export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  padding: 8px;
  width: ${props => props.width};

  .inner {
    .swiper {
      position: relative;
      .btn {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 3;
        display: none;
        align-items: center;
        justify-content: center;
        width: 30%;
        color: #fff;
        font-weight: 700;

        &.prev {
          left: 0;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }

        &.next {
          right: 0;
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }

      &:hover {
        .btn {
          display: flex;
        }
      }

      .cover {
        position: relative;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;

        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .indicator {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        z-index: 9;
        margin: 0 auto;
        width: 30%;
        overflow: hidden;

        .dot {
          display: flex;
          align-items: center;
          width: 14.29%;

          .dot-item {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;

            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }

    .message {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: #767676;
    }

    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      padding: 8px 0;
    }

    .rating {
      display: flex;
      align-items: center;
      .bottom-info {
        display: flex;
        align-items: center;
        .count {
          padding: 0 2px 0 4px;
        }
      }
    }
  }
`