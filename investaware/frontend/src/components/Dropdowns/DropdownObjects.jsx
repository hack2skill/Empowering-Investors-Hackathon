import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function Dropdown({
  options,
  selected,
  setSelected,
  attribute,
  labelName = "Select",
}) {
  /*const [isActive, setIsActive] = useState(false);
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
          fallbackPlacements: ["bottom", "top"],
        },
      },
    ],
  });*/

  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        "& .MuiInputBase-inputSizeSmall": {
          paddingTop: "10px",
          paddingBottom: "10px",
        },
      }}
    >
      <InputLabel>
        <span className="font-inter font-normal text-sm">{labelName}</span>
      </InputLabel>
      <Select
        value={selected}
        defaultValue=""
        label={labelName}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        className="font-inter text-sm"
      >
        {options.map((option, ind) => (
          <MenuItem key={ind} value={option} id={ind}>
            {option[attribute]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    /*<div className="family-details-dropdown" style={{ width: "100%" }}>
      <div
        className="portfolio-proposal-dropdown-btn"
        ref={setReferenceRef}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected ? selected[attribute] : "Choose One"}
        <MdIcons.MdKeyboardArrowDown
          style={{ marginTop: "0.2rem" }}
          size={17}
        />
      </div>
      {isActive && (
        <ClickAwayListener onClickAway={() => setIsActive(false)}>
          <div
            ref={setPopperRef}
            style={styles.popper}
            {...attributes.popper}
            className="family-details-dropdown-content"
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
                {option[attribute]}
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </div>*/
  );
}

export default Dropdown;
