import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { BlogPage } from "../Blog";
import { BlogPost } from "../Blog/BlogPost";
import { Login } from "../Auth/Login";
import { Logout } from "../Auth/Logout";
import { AuthProvider, AuthRoute } from "../Auth/auth";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/blog" element={<BlogPage />} >
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route 
              path="/logout" 
              element={<AuthRoute>
                <Logout />
              </AuthRoute>} />

            <Route path="/profile" element={
              <AuthRoute><Profile /></AuthRoute>} />

            {/* En caso de que no exista la ruta Imprimimos el mensaje */}
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>

          <Footer />
        </AuthProvider>
      </HashRouter>
    </React.Fragment>
  );
}

export { App };
