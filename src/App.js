import {Routes,Route,useLocation} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./components/Themes";
import{AnimatePresence} from "framer-motion";
import GlobalStyle from "./globalStyles";

//components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";
function App() {
  const location=useLocation();
  return (
    <>
    <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <SoundBar/>
         {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}
          <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/work" element={<WorkPage/>}/>
          <Route path="/skills" element={<MySkillsPage/>}/>
           {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
          <Route path="*" element={<Main/>}/>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
