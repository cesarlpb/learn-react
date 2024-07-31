import { Routes, Route } from "react-router-dom";
import './App.css'

import Layout from './Layout';
import OtroLink from './OtroLink';
import About from './About';
import Error404 from './Error404';
import Home from './Home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acerca-de" element={<About />} />
          <Route path="otro-link" element={<OtroLink />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
