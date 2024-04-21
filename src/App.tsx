import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Blogs } from "./pages/Blogs";
import { Help } from "./pages/Help";
import { MyProfile } from "./pages/MyProfile";
import { Write } from "./pages/Write";
import { Notification } from "./pages/Notification";
import { SnackBarType, toasterState } from "./store/toaster";
import { Toster } from "./components/Toster";
import "./App.css";

function App() {
  const toastState = useRecoilValue(toasterState);

  return (
    <>
      {toastState.type !== SnackBarType.idle ? <Toster /> : null}

      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </>
  );
}

export default App;
