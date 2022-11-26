import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1.5rem;
  padding: 34px 25px 46px 25px;
  text-align: center;
  height: 100%;
  max-width: 25em;
  max-height: 25em;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(217, 20%, 15%)),
    to(hsl(217, 25%, 12%))
  );
  animation: animate-fade 3s ease;
  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 720px) {
    padding: 24px 24px 32px 24px;
  }
  img {
    height: 100px;
    margin: 0.5em 0 1.5em 0;
    @media (min-width: 720px) {
      margin: 1em 0 2em 0;
    }
  }
  .rating-output {
    background-color: var(--mediumBlue);
    border-radius: 1.5em;
    padding: 0.3rem 1.2rem;
    width: fit-content;
    margin: auto;
    margin-bottom: 1.8em;
    p {
      color: var(--primary);
    }
  }
  h1 {
    font-size: 1.7rem;
    color: var(--white);
    margin-bottom: 1rem;
  }
  p {
    color: var(--mediumGrey);
    line-height: 1.5;
    font-size: 0.9em;
  }
`;
