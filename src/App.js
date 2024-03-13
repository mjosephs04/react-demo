import Layout from "./modules/Layout";
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./modules/Home"
import About from "./modules/About"

function App() {
  return (
      <>
          <Routes>
              <Route exact path="/" element={<Layout />}>
                  <Route path='' element={<Home />} />
                  <Route exact path='/about' element={<About />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
