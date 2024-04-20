import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSticky } from "../../../hooks/useSticky";
import { MediumBlog } from "./MediumBlog";
import { ComingSoon } from "../../../components/ComingSoon";

export const Header = () => {
  const { classNameString } = useSticky();

  const [activeTab, setActiveTab] = useState("foryou");
  const data = [
    {
      label: "For you",
      value: "foryou",
      Component: MediumBlog,
    },
    {
      label: "Following",
      value: "following",
      Component: ComingSoon,
    },
  ];

  return (
    <div className={classNameString}>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data.map(({ value, Component }) => (
            <TabPanel key={value} value={value}>
              <Component />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
