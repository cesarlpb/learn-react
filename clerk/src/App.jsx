import React from "react";
import './App.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import { Routes, Route, Outlet, Link } from "react-router-dom";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function Welcome() {
  return <div>¡Bienvenid@ a mi app!</div>;
}

function App() {

  return (
    <>
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div> 
    </>
  )
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li className="nav-li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-li">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-li">
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Inicio</h2>
      <p>Donde la cosas comienzan.</p>
      <ClerkProvider publishableKey={clerkPubKey}>
        <h3>Clerk</h3>
        {/* <div><a href='#'>Registro</a></div>
        <br />
        <div><a href='#'>Login</a></div> */}
        <SignedIn>
          <Welcome />
          <div 
          style={{
            display: "flex", 
            justifyContent: "center",
            margin: "10px auto"
            }}>
          <div style={{ marginRight: "10px"}}>Perfil:</div>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider> 
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Estas en About!</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Estas en dashboard!</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404 No pudimos encontrar eso :(</h2>
      <p>
        <Link to="/">Inicio</Link>
      </p>
    </div>
  );
}

export default App
