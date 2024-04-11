import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Blog } from "./pages/Blog";
import { SnackBarType, toasterState } from "./store/toaster";
import { Toster } from "./components/Toster";
import "./App.css";

function App() {
  const toastState = useRecoilValue(toasterState);

  return (
    <>
      {toastState.type !== SnackBarType.idle ? <Toster /> : null}

      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
