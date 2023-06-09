import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact";
import Header from "./Header";
import { Pagination } from "@mui/material";
const App = () => {
return(
  <div>
  <BrowserRouter>
    <Header />
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        </Routes>
 </BrowserRouter>
 <Pagination/>
 </div>
)

}

export default App