import { useState } from "react";
import { usePopper } from "react-popper";
import Cross from "../../assets/img/circleovercross.svg";
import Search from "../../assets/img/searchicon.svg";
import DefaultProfilePic from "../../assets/img/defaultprofilepic.png";
import ClickAwayListener from "react-click-away-listener";

function Dropdown({ options, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [referenceRef, setReferenceRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);
  const [search, setSearch] = useState("");
  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        enabled: true,
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: ["bottom", "bottom"],
        },
      },
    ],
  });

  return (
    <ClickAwayListener onClickAway={() => setIsActive(false)}>
      <div className="family-details-dropdown" style={{ width: "100%" }}>
        <div
          className="relationship-manager-input-container"
          style={isActive ? { backgroundColor: "#e6e5ff" } : {}}
          ref={setReferenceRef}
        >
          {!isActive ? (
            <input
              type="text"
              className="relationship-manager-input w-full"
              disabled
              value={selected.username}
              style={{ fontFamily: "Inter,sans-serif" }}
            />
          ) : (
            <input
              type="text"
              className="relationship-manager-input w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: "#e6e9f7", color: "#1982F8" }}
              placeholder="Search"
            />
          )}

          {!isActive && (
            <img
              src={
                selected.profile_pic ? selected.profile_pic : DefaultProfilePic
              }
              className="manager-image-inside-input rounded-[100%]"
              alt="err"
            />
          )}
          <div
            onClick={(e) => setIsActive(!isActive)}
            className="icon-inside-input"
          >
            <img src={!isActive ? Cross : Search} alt="err" />
          </div>
        </div>

        {isActive && (
          <div
            ref={setPopperRef}
            style={styles.popper}
            {...attributes.popper}
            className="family-details-dropdown-content"
          >
            {options
              .filter((data) =>
                data.username.toLowerCase().includes(search.toLowerCase())
              )
              .map((option, ind) => (
                <div
                  key={ind}
                  onClick={() => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="purple-dropdown-item"
                >
                  {option.username}
                </div>
              ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default Dropdown;
