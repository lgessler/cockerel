import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'


const MainLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log(currentUser)

  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Hell
            </Typography>
            { !currentUser
            ? <Button color="inherit" onClick={() => navigate(routes.login()) }>Login</Button>
            : <Button color="inherit" onClick={logOut}>Log Out</Button>}
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Container>
          <Box  mt={1}>
            {children}
          </Box>
        </Container>
      </main>
    </>
  )
}

export default MainLayout
