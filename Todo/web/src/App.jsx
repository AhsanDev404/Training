import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


import { useSelector } from "react-redux";
import Login from "./layout/Login";
import Signup from "./layout/Signup";
import TodoForm from "./layout/TodoForm";



function App() {

 const {userData}  = useSelector((state)=>state.customReducer)
  return (
      

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={userData ? <Home /> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create/todo" element={<TodoForm />} />
          
        </Routes>
        <Footer />
      </Router>
    

  );
}

export default App;
