import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutMe, Projects, Blogs } from './pages';
import { AppLayout } from './components';
import { Box, useColorModeValue } from '@chakra-ui/react';

function App() {
  const bg = useColorModeValue('white', '#121212');
  return (
    <Box background={bg} width="100vw">
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/blogs/:id" element={<BlogEntry entry={id} />} /> */}
            <Route path="/*" element={<AboutMe />} />
          </Routes>
        </AppLayout>
      </Router>
    </Box>
  )
}

export default App;
