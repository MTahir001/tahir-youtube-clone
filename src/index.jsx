import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import "react-lazy-load-image-component/src/effects/blur.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";

const MOUNT_NODE = document.getElementById("root");

const root = createRoot(MOUNT_NODE);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
