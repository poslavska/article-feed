import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux-state/store.ts'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#363636"
    }
  },
  typography: {
    fontFamily: "Montserrat ,sans-serif",
    h3: {
      fontWeight: 400,
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      lineHeight: 1.5,
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: "#868686"
    }
  },
})

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)
