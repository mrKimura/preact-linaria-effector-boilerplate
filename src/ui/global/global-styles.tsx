import { css } from 'linaria'

export const globals = css`
  :global() {
    :root {
      --indent: 16px;
    }
    @media (min-width: 360px) {
      :root {
        --indent: 24px;
      }
    }

    #selection {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      width: 100%;

      & *,
      & *:before,
      & *:after {
        box-sizing: inherit;
      }

      & button,
      & select {
        font-family: inherit;
      }
    }

    input,
    textarea,
    button,
    label,
    select,
    div,
    span,
    a {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }
`
