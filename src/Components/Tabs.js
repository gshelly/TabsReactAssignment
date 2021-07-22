import { useState } from 'react';
import "../App.css"

const Tabs = (props) => {

  const { tabsArray, setResult } = props

  // conditionally styling the tabs with classes in CSS
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab"; //{`tab ${ tabStyle(index) }`} 
    }
  }

  const handleResult = (event, index, content) => {
    setResult(content);
    setCurrentTabIndex(index)
  }

  return (
    <>
      {
        tabsArray.map((item, index) => (
          <button key={index} className={`tab ${tabStyle(index)}`} onClick={(event) => handleResult(event, index, item.content)}> {item.label} </button>
        ))
      }

    </>
  )

}

export default Tabs;