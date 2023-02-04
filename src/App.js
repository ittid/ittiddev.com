import { Routes, Route } from "react-router-dom";
import { Header } from "./components/UI/organisms/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Footer from "./components/UI/organisms/Footer";
import PostView from "./components/pages/PostView";

function App() {
  return (
    <div className="App" id="layout">
      <Header />
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="me" element={<About />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="blog">
              <Route index element={<Blog />}></Route>
              <Route path="view/:postId" element={<PostView />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
