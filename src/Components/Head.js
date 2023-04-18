import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../utils/AppSlice";
import { cacheResults } from "../utils/SearchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/const";

const Head = () => {
  const Dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [offset, setOffset] = useState(0);

  const searchCache = useSelector((state) => state.search);

  // Rebouncing used in search to avoid unessary API call to avoid time delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchQuery(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // to remove searchsuggestion at top of page on page scrollup
  useEffect(() => {
    const onScroll = () =>
      setOffset(window.pageYOffset, setShowSuggestion(false));
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getSearchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsondata = await data.json();
    //console.log(jsondata[1]);
    setSuggestion(jsondata[1]);
    Dispatch(
      cacheResults({
        [searchQuery]: jsondata[1],
      })
    );
  };

  const handleclick = () => {
    Dispatch(togglemenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 ">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII= "
          onClick={handleclick}
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-20 ml-20">
        <div className="flex">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="Search"
            value={searchQuery}
            placeholder={"Search"}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
          />
          <button className="border border-gray-400 bg-gray-200 px-5 p-2 rounded-r-full">
            🔍
          </button>
          <img
            className="h-11 pl-3 py-3"
            alt="mike"
            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
          />
        </div>

        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((item) => {
                return (
                  <li
                    key={item}
                    className="py-2 px-2 shadow-sm hover:bg-gray-100"
                    onClick={() => {
                      setSearchQuery(item);
                    }}
                  >
                    🔍 {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png"
        />
      </div>
    </div>
  );
};
export default Head;
