import { createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

// store.subscribe(() => {
//   console.log(store.getState());
// });
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <NavBar />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
