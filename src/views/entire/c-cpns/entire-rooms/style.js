import styled from 'styled-components'

export const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  .total {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;

    > * {
      flex-shrink: 0;
      cursor: pointer;
    }
  }

  .entire-rooms-cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`