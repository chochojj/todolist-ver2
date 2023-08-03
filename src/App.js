import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { theme } from "./style/theme";
import { useRecoilValue } from "recoil";
import { openSideState, darkModeState } from "./atoms/atoms";
const Header = lazy(() => import("./components/common/header"));
const SideBar = lazy(() => import("./components/common/SideBar"));
const TodoPage = lazy(() => import("./pages/Todo"));
const Diary = lazy(() => import("./pages/Diary"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Madeby = lazy(() => import("./pages/MadeBy"));

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: ${({ theme }) => theme.backgroundUImage};
`;

function App() {
  const openSide = useRecoilValue(openSideState);
  const darkMode = useRecoilValue(darkModeState);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Contain>
          <Header />
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path="/todolist" element={<TodoPage />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/madeby" element={<Madeby />} />
            </Routes>
            {openSide === true ? <SideBar /> : null}
          </Suspense>
        </Contain>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
