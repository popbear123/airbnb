import styled from 'styled-components'

export const EntireFilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  .filter-list {
    display: flex;
    .filter-item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;
    }
    .filter-item.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`