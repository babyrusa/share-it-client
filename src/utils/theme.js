import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --card-bg-color: white;
  --text-color: #262626;
  --text-color-grey: #999999;
  --bx-shadow-color: #00000063;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

html,
body, #root {
  height: 100%;
  scrollbar-color: transparent;
}

body {
  background-color: #fafafa;
}

@media (max-width: 640px) {
  :root {
    --card-bg-color: #fafafa;
  }
}
`;

export const theme = {
  cardColor: 'var(--card-bg-color)',
  textColor: 'var(--text-color)',
  textColorGrey: 'var(--text-color-grey)',
  bxShadowColor: 'var(--bx-shadow-color)'
};
