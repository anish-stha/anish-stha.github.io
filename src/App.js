import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./Intro";
import TopNavBar from "./TopNavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CV from "./CV";
import "./style.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="container-fluid no-padding-no-margin">

                    <div className="row">
                        <div className="col-lg-3 col-sm-12 no-padding-no-margin">
                            <Intro/>
                        </div>
                        <div className="col-lg-9 col-sm-12 no-padding-no-margin">
                            <TopNavBar/>
                            <Routes>
                                <Route path="/" element={<CV/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
