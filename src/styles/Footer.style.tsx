import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.8em;
  text-align: center;
  margin-bottom: 0.5em;
  line-height: 1.5em;
  .attribution,
  a {
    color: var(--darkBlue);
  }
  a {
    font-weight: bold;
    transition: all 500ms ease;
    @media (hover: hover) {
      /* Targets devices that can hover */
      &:hover {
        color: var(--primary);
        text-decoration: none;
        opacity: 0.7;
      }
    }
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
