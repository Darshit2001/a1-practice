import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import { VedioContainer } from "./VedioContainer";
import { opentoggle } from "../utils/AppSlice";
import { useDispatch } from "react-redux";

function MainContainer() {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(opentoggle());
  });
  return (
    <>
      <div className="">
        <ButtonList />
        <VedioContainer />
      </div>
    </>
  );
}

export default MainContainer;
