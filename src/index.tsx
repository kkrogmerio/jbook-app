import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Provider } from "react-redux";
import { store } from './state';
import App from "./App";

const Jbook = () => {
  return (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  );
};

const root = document.querySelector("#root");

if (root instanceof Element) {
  ReactDOMClient.createRoot(root).render(<Jbook/>);
}
