import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { openSideState } from "./atom/atoms";
const Header = lazy(() => import("./components/common/header"));
const SideBar = lazy(() => import("./components/common/SideBar"));
const TodoPage = lazy(() => import("./pages/Todo"));
const Diary = lazy(() => import("./pages/Diary"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Madeby = lazy(() => import("./pages/MadeBy"));

function App() {
  const openSide = useRecoilValue(openSideState);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/madeby" element={<Madeby />} />
          </Routes>
          {openSide === true ? <SideBar /> : null}
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
