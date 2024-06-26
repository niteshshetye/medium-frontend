import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { Help } from "./pages/Help";
import { MyProfile } from "./pages/MyProfile";
import { Write } from "./pages/Write";
import { Notification } from "./pages/Notification";
import { SnackBarType, toasterState } from "./store/toaster";
import { Toster } from "./components/Toster";
import "./App.css";
import { AppLayout } from "./layout/AppLayout";

function App() {
  const toastState = useRecoilValue(toasterState);

  return (
    <>
      {toastState.type !== SnackBarType.idle ? <Toster /> : null}

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blogs />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="help" element={<Help />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="write" element={<Write />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
