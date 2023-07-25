import Navbar from "./Navbar";
import Hero from "./Hero";
import PostContainer from "./PostContainer";
import Footer from "./Footer";

const Home = () => {
  return (
  <>
    <Hero />
    <PostContainer key="1" id="1" sectionId="1" title="Últimos Posts" />
    <PostContainer key="2" id="2" sectionId="2" title="Guías" />
    <PostContainer key="3" id="3" sectionId="3" title="Consejos" />
    <PostContainer key="4" id="4" sectionId="4" title="Sección sin contenido" />
  </>
)};

export default Home;