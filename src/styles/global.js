import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323f;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343b41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --success: #3FE864;
    --negative: #E83F5B;
}

body{
    background: var(--grey-4);
    color: var(--grey-0);
}

body, input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
