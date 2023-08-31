import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { BlogPage } from "../Blog";
import { BlogPost } from "../Blog/BlogPost";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* En caso de que no exista la ruta Imprimimos el mensaje */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

        <Footer />
      </HashRouter>
    </React.Fragment>
  );
}

export { App };
