import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1.5rem;
  padding: 26px 20px 32px 20px;
  height: 100%;
  width: 100%;
  max-width: 25em;
  max-height: 25em;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(hsl(217, 20%, 15%)),
    to(hsl(217, 25%, 12%))
  );

  animation: animate-blur 1.8s ease;
  @keyframes animate-blur {
    0% {
      opacity: 0;
      filter: blur(15px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @media (min-width: 720px) {
    padding: 26px 30px 32px 30px;
  }

  img {
    padding: 1rem;
    background-color: var(--mediumBlue);
    border-radius: 2em;
    margin-bottom: 1.5rem;
    animation: rotation 4s infinite linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
  h1 {
    color: var(--white);
    font-weight: var(--fw-bold);
    font-size: 24px;
    margin-bottom: 1.5rem;
  }
  p {
    color: var(--lightGrey);
    font-weight: var(--fw-regular);
    margin-bottom: 2rem;
    line-height: 1.5em;
    font-size: 0.9em;
    padding-right: 1em;
  }
  form {
    display: grid;
    grid-template-rows: auto auto;
    gap: 1.5rem;
    fieldset {
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      .rating-item {
        height: 48px;
        width: 48px;
        label {
          height: inherit;
          width: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background-color: var(--mediumBlue);
          color: var(--lightGrey);
          font-weight: var(--fw-bold);
          border-radius: 100%;
          transition: color 0.4s ease, background-color 0.5s ease,
            transform 0.5s ease;
          @media (hover: hover) {
            /* Targets devices that can hover */
            &:hover {
              background-color: var(--lightGrey);
              color: var(--white);
              transform: scale(1.1);
            }
          }

          &:focus-within {
            background-color: var(--primary);
            color: var(--white);
          }
          input {
            appearance: none;
          }
        }
      }
    }
    button {
      animation: animate-fade 3s ease;
      @keyframes animate-fade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;
