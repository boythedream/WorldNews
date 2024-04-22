import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <LoadingBar
        color="#f11946"
        loading={loading}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<News />} />
        <Route
          exact
          path="/business"
          element={<News key={"business"} country="in" category="business"  setLoading={setLoading} loading={loading} />}
        />
        <Route 
          exact
          path="/entertainment"
          element={
            <News key={"entertainment"} country="in" category="entertainment"  setLoading={setLoading} loading={loading} />
          }
        />
        <Route
          exact
          path="/general"
          element={<News key={"general"} country="in" category="general"  setLoading={setLoading} loading={loading} />}
        />
        <Route
          exact
          path="/health"
          element={<News key={"health"} country="in" category="health"  setLoading={setLoading} loading={loading} />}
        />
        <Route
          exact
          path="/science"
          element={<News key={"science"} country="in" category="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<News key={"sports"} country="in" category="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={
            <News key={"technology"} country="in" category="technology" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
