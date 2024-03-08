import './App.css';
import Home from "./modules/Home"
import Test from "./modules/Test"
import {Route, Routes} from "react-router-dom";
import Layout from "./modules/Layout";

function App() {
  return (
      <>
          <Routes>
              <Route exact path="/" element={<Layout />}>
                  <Route path='' element={<Home />} />
                  <Route exact path='/test' element={<Test />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
