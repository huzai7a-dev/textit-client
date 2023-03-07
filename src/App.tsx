import { createTheme,ThemeProvider } from '@mui/material';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/SignUp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Colors from './Constants/Colors';


const router = createBrowserRouter([
  {
    path: '/',
    element:<h1>Chat</h1>
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
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
