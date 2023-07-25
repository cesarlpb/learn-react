// import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './assets/css/App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
function App() {

  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
        parent route paths, and nested route elements render inside
        parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="crear" element={<Form />} />
          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

const Layout = () => {
  return(
  <>
  <header>
    <Navbar />
  </header>
    <div id="home" className=''>
      <main>
    <Outlet />  
    </main>
    <Footer />
  </div>
  </>)
}

const NoMatch = () => {
  return (
    <div>
      <h2>404 :(</h2>
      <p>
        <Link to="/">Ir a Home</Link>
      </p>
    </div>
  );
}
export default App
