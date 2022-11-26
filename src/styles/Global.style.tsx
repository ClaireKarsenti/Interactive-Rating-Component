import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: hsl(25, 97%, 53%);
        --white: hsl(0, 0%, 100%);
        --lightGrey: hsl(217, 12%, 63%);
        --mediumGrey: hsl(216, 12%, 54%);
        --mediumBlue: hsl(213, 19%, 21%);
        --darkBlue: hsl(213, 19%, 18%);
        --mediumDarkBlue:#262a2e;
        --veryDarkBlue: hsl(216, 12%, 8%);

        --fw-regular: 400;
        --fw-bold: 700;
    }
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--veryDarkBlue);
            display: grid;
            place-items: center;
            min-height: 100vh;
            padding: 0 1.5rem;
        }

        body, input, textarea, button {
            font-family: 'Overpass', sans-serif;
            font-weight: 400;
            font-size: 16px;
        }

        button {
            background-color: var(--primary);
            border: none;
            border-radius: 2em;
            color: var(--white);
            cursor: pointer;
            font-size: 14px;
            font-weight: var(--fw-bold);
            padding: 1rem 0;
            letter-spacing: 1.7px;
            text-transform: uppercase;
            width: 100%;
            height: 3.5em;
            transition: color 0.4s ease, background-color 0.5s ease;
            @media (hover: hover) {
            /* Targets devices that can hover */
             &:hover {
            color: var(--primary);
            background-color: var(--white); 
                }
            }
        }
  
        html {
            @media (max-width: 1080px) {
                font-size: 93.75%;
            }

            @media (max-width: 720px) {
                font-size: 87.5%;
            }
        }
    
        /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            }
        }
`;
