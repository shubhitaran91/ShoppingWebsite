import { Provider } from "react-redux";

import appStore from "./utils/appStore";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./components/Body";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
