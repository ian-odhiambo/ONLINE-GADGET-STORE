import {Button} from "@chakra-ui/react"

function App() {
  

  return (
    <>
      <Box minH="100vh">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
