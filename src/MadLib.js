import React, { useState } from "react";
import MadLibForm from "./MadLibForm";

function MadLib() {
  const [item, setItem] = useState({});


  const addItem = function(item){
    setItem(item);
  }

  return (
    <div className="MadLib">
      <MadLibForm addItem={addItem}/>
      {item.added ? ( <div>{`There was a ${item.color} ${item.noun1} who loved a ${item.adjective} ${item.noun2}`}</div> ) : <div></div>}
    </div>
  );
};


export default MadLib;