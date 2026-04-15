import { Box } from "@chakra-ui/react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./PAGES/HomePage";
import CreatePage from "./PAGES/CreatePage";
import Navbar from "./COMPONENTS/Navbar";

function App() {
  

  return (
    <>
      <Box minH={"100vh"}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
