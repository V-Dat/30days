import "./App.css";
import Footer from "./parts/Footer";
import Day1 from "./pages/Day1/Day1.js";
import Day2 from "./pages/Day2/Day2.js";
import Day3 from "./pages/Day3/Day3.js";
import Day4 from "./pages/Day4/Day4.js";
import Day5 from "./pages/Day5/Day5.js";
import Day6 from "./pages/Day6/Day6.js";
import Day7 from "./pages/Day7/Day7.js";
import Day8 from "./pages/Day8/Day8.js";
import Day9 from "./pages/Day9/Day9.js";
import News from "./pages/News/News.js";
import Profile from "./pages/Profile/Profile";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound";
import Login from "./parts/Login";
import ForgotPassword from "./parts/ForgotPassword";
import Register from "./parts/Register";

import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppLayout from "./component/AppLayout/AppLayout";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";

function App() {


  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <ScrollToTop />
            <Routes>
              <Route path="Login" element={<Login />} />
              <Route path="Day1" element={<Day1 />} />
              <Route path="/" element={<AppLayout />}>
                <Route path="Day2" element={<Day2 />} />
                <Route path="Day3" element={<Day3 />} />
                <Route path="Day4" element={<Day4 />} />
                <Route path="Day5" element={<Day5 />} />
                <Route path="Day6" element={<Day6 />} />
                <Route path="Day7" element={<Day7 />} />
                <Route path="Day8" element={<Day8 />} />
                <Route path="Day9" element={<Day9 />} />
                <Route path="News" element={<News />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="404NotFound" element={<NotFound />} />
                <Route path="Forgot-password" element={<ForgotPassword />} />
                <Route path="Register" element={<Register />} />
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Navigate replace to="/404NotFound" />} />
              </Route>
              <Route path="*" element={<Navigate replace to="/404NotFound" />} />
            </Routes>
            <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
