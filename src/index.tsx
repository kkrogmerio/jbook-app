import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import * as ReactDOMClient from "react-dom/client";

import {store} from './state';
import { Provider } from "react-redux";
import App from "./App";

const Jbook = () => {


  return (
    <Provider store={store}>
   <App/>
    </Provider>
  );
};

const root = document.querySelector("#root");

if (root instanceof Element) {
  ReactDOMClient.createRoot(root).render(<Jbook/>);
}
