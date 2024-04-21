import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { useSticky } from "../../../hooks/useSticky";
import { MediumTab } from "../../../common";

interface IHeaderProps {
  activeTab: MediumTab;
  setActiveTab: React.Dispatch<React.SetStateAction<MediumTab>>;
}

const data = [
  {
    label: "For you",
    value: MediumTab.foryou,
  },
  {
    label: "Following",
    value: MediumTab.following,
  },
];

export const Header: React.FC<IHeaderProps> = ({ activeTab, setActiveTab }) => {
  const { classNameString } = useSticky();

  return (
    <div className={classNameString}>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none  border-b border-blue-gray-50 bg-transparent p-0"
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
      </Tabs>
    </div>
  );
};
