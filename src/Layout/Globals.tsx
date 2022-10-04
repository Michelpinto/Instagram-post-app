import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
html {
    font-size: 62.5%;
   
}
body {
    padding: 4rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: auto;

@media screen and (min-width: 700px) {
max-width: 700px;
}
}
a {
    color: inherit;
    text-decoration: none;
}

`

const Layout = ({children}: {children: any}) => {
    return (
        <>
        <GlobalStyle />
        {children}
        </>
    )
   

}

export default Layout;