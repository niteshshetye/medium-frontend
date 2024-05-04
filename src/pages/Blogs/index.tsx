import { useEffect, useState } from "react";
import { MediumTab, State } from "../../common";
import { Header } from "./components/Header";
import { ComingSoon } from "../../components/ComingSoon";
import { MediumBlog } from "./components/MediumBlog";
import { useRecoilStateLoadable } from "recoil";
import { blogsAtom } from "../../store/blog";
import { fetchBlogs } from "../../services/blog";

export const Blogs = () => {
  const [activeTab, setActiveTab] = useState(MediumTab.foryou);
  const [blogs, setBlogsList] = useRecoilStateLoadable(blogsAtom);

  useEffect(() => {
    if (blogs.state !== State.loading) {
      const response = fetchBlogs();
      setBlogsList(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === MediumTab.foryou ? <MediumBlog /> : <ComingSoon />}
    </div>
  );
};
