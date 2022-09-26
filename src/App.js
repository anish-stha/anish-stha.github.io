
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Intro from "./Intro";
import TopNavBar from "./TopNavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CV from "./CV";
import "./style.css";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

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
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/blog" element={<Blog/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
