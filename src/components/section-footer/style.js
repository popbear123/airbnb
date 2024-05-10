import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  .footer-content {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.name ? props.theme.color.secondaryColor : '#000'};
    cursor: pointer;

    .text {
      margin-right: 6px;
    }
  }
`