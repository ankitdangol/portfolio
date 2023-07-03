import Header from './components/Header';
import Intro from './components/Intro';
import Image from './components/Image';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Overpass', 'sans - serif'],
      color: '#b1b3b7'
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Intro />
        <Image />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
