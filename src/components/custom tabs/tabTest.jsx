import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>tab 1 content</div>,
    },
    {
      label: "Tab 2",
      content: <div>tab 2 content</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}