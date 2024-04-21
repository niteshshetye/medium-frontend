import { useState } from "react";
import { MediumTab } from "../../common";
import { Header } from "./components/Header";
import { ComingSoon } from "../../components/ComingSoon";
import { MediumBlog } from "./components/MediumBlog";

export const Blogs = () => {
  const [activeTab, setActiveTab] = useState(MediumTab.foryou);

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === MediumTab.foryou ? <MediumBlog /> : <ComingSoon />}
    </div>
  );
};
