import { createTheme,ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';
import Colors from './Constants/Colors';
import AlertWrapper from './Context/AlertWrapper';


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Chat</h1>
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
]);


const theme = createTheme({
  palette: {
    primary: {
      main:Colors.primary
    },
    secondary: {
      main:Colors.secondary
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper>
        <RouterProvider router={router} />
      </AlertWrapper>
    </ThemeProvider>
  )
}

export default App
