import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
      }
      ul,
      ol {
        padding: 0;
      }
      li {
        list-style: none;
      }
      section {
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default GlobalStyle;
