import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PATH } from "./consts";
import { store } from "./redux/store";

import {
  MainPage
} from "./pages";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<MainPage />}></Route>
          <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
