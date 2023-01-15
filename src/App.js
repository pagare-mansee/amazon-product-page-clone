import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import MainPage from './Components/MainPage';
import NavBar from './Components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
              <Header/>
              <NavBar/>
              <Header2/>
              <Routes>         
                  <Route path=""
                    element={<MainPage />}>
                </Route>
              </Routes>
         
      </div>
    </Router>
  );
}

export default App;
