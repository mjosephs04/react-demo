import './App.css';
import Home from "./modules/Home"
import About from "./modules/About"
import {Route, Routes} from "react-router-dom";
import Layout from "./modules/Layout";

function App() {
  return (
      <>
          <Routes>
              <Route exact path="" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route exact path='/about' element={<About />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
