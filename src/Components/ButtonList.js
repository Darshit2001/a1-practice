import React from "react";
import Button from "./Button";

const BtnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Socker",
  "Cricket",
  "Cooking",
  "Cars",
];

function ButtonList() {
  return (
    <>
      <div> 
        {BtnList.map((e) => {
          return <Button name={e} />;
        })}
      </div>
    </>
  );
}

export default ButtonList;
