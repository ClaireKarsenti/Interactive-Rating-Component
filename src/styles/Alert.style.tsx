import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  height: 3.1em;
  @media (min-width: 720px) {
    height: 3.5em;
  }
  animation: animate-fade 1s ease;
  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .alert-danger {
    margin: auto;
    color: var(--primary);
  }
`;
