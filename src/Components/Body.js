import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import {Outlet} from 'react-router-dom'
import WatchPage from './WatchPage'


const Body = () => {
  const state = useSelector((store) => store.hamberg.ismenuopen);

  
  return (
    <>
      <div className="flex">
        {state === true ? <SideBar /> : null}

        <Outlet/>
      </div>
    </>
  );
};
export default Body;
