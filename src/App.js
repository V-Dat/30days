import "./App.css";
import Day1 from "./pages/Day1/Day1.js";
import Day2 from "./pages/Day2/Day2.js";
import Day3 from "./pages/Day3/Day3.js";
import Day4 from "./pages/Day4/Day4.js";
import Day5 from "./pages/Day5/Day5.js";
import Day6 from "./pages/Day6/Day6.js";
import Day7 from "./pages/Day7/Day7.js";
import Day8 from "./pages/Day8/Day8.js";
import Day9 from "./pages/Day9/Day9.js";
import Profile from "./pages/Profile/Profile";
import News from "./pages/News/News.js";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Content from "./component/Content/Content";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <Routes>
            <Route path="Day1" element={ <Day1 />} />
            <Route path="Day2" element={<><Header /><Day2 /> </>} />
            <Route path="Day3" element={<><Header /><Day3 /> </>} />
            <Route path="Day4" element={<><Header /><Day4 /> </>} />
            <Route path="Day5" element={<><Header /><Day5 /> </>} />
            <Route path="Day6" element={<><Header /><Day6 /> </>} />
            <Route path="Day7" element={<><Header /><Day7 /> </>} />
            <Route path="Day8" element={<><Header /><Day8 /> </>} />
            <Route path="Day9" element={<><Header /><Day9 /> </>} />
            <Route path="News" element={<><Header /><News /> </>} />
            <Route path="Profile" element={<><Header /><Profile /> </>} />
            <Route path="404NotFound" element={<><Header /><NotFound /> </>} />
            <Route path="/" element={<><Header /><Content /> </>} />
            <Route path="*" element={<><Header /><Navigate replace to="/404NotFound" /> </>} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
  );
}

export default App;
