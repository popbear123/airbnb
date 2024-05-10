import styled from 'styled-components'

export const SectionLongforWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 20%;

  .longfor-inner {
    position: relative;
    padding: 8px;
    overflow: hidden;

    .cover {
      border-radius: 3px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    .bg-cover {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    .info {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 24px 32px;
      color: #fff;
      .city {
        font-size: 18px;
        font-weight: 600;
      }
      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }

`