import styled from 'styled-components'

export const EntirePaginationWrapper = styled.div`
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .MuiPaginationItem-page {
    width: 32px;
    height: 32px;
    margin: 0 9px;

    &:hover {
      text-decoration: underline;
    }
  }
  .MuiPaginationItem-previousNext svg {
    font-size: 24px;
  }
  .MuiPaginationItem-page.Mui-selected {
    color: #fff;
    background-color: #222;

    &:hover {
      background-color: #222;
    }
  }

  .pagination-text {
    margin-top: 16px;
    color: #222;
  }
`