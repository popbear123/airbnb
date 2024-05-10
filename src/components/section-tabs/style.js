import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  .tab {
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 16px;
    padding: 14px 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;
    ${props => props.theme.mixin.shadow}
    cursor: pointer;

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`