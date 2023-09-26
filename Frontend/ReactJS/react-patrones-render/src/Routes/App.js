import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Home";
import { EditTodo } from "./EditTodo";
import { NewTodo } from "./NewTodo";
import { NotFound } from "./NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export { App };