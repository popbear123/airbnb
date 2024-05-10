import styled from "styled-components";


export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;

  .services{
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  .footer-list {
    display: flex;
    .footer-item {
      width: 25%;
      .title {
        margin-bottom: 16px;
        font-weight: 700;
      }
      li {
        margin-top: 6px;
        color: #767676;
        cursor: pointer;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .statement {
    margin-top: 30px;
    padding: 20px;
    border-top: 1px solid #EBEBEB;
    text-align: center;
    color: #767676;
  }
`