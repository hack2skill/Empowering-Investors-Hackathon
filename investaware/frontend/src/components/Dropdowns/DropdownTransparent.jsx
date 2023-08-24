import { useState } from "react";
import * as RiIcons from "react-icons/ri";
import { usePopper } from "react-popper";
function Dropdown({ options, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [referenceRef, setReferenceRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);

  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: "bottom-start",
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
    <div className="family-details-dropdown">
      <div
        className="transparent-dropdown-btn"
        ref={setReferenceRef}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected ? selected : "Choose One"}
        <RiIcons.RiArrowDownSFill style={{ marginTop: "0rem" }} size={18} />
      </div>
      {isActive && (
        <div
          ref={setPopperRef}
          style={styles.popper}
          {...attributes.popper}
          className="family-details-dropdown-content transparent-dropdown-content p-0 w-[200px]"
        >
          {options.map((option, ind) => (
            <div
              key={ind}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="family-details-dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
