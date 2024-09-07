import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/product/:id" Component={Products} />
            <Route path="/cart/:id?" Component={Cart} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
