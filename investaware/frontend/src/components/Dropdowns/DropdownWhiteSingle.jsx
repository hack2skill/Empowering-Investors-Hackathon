import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function Dropdown({
  options,
  selected,
  setSelected,
  labelName = "Select",
  disabled = false,
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
          fallbackPlacements: ["bottom", "bottom"],
        },
      },
    ],
  });*/

  return (
    <FormControl
      fullWidth
      disabled={disabled}
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
        label={labelName}
        onChange={(e) => setSelected(e.target.value)}
        className="font-inter text-sm"
      >
        {options.map((option, ind) => (
          <MenuItem value={option} id={ind} key={ind}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
