import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./PAGES/HomePage";
import CreatePage from "./PAGES/CreatePage";
import Navbar from "./COMPONENTS/Navbar";

function App() {
  const { products} = useProductStore();
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
