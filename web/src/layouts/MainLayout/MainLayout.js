import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const MainLayout = ({ children }) => {
  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Hell
            </Typography>
            <Button disabled color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </>
  )
}

export default MainLayout
