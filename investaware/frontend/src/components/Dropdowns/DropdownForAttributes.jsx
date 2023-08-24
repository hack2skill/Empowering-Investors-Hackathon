import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropdownForAttributes({
  options,
  selected,
  setSelected,
  disabled = false,
  attribute,
  labelName = "Select",
}) {
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
        value={selected[attribute]}
        disabled={disabled}
        defaultValue=""
        label={labelName}
        className="font-inter text-sm"
        onChange={(e) => {
          let newselected = { ...selected };
          newselected[attribute] = e.target.value;
          setSelected(newselected);
        }}
      >
        {options.map((option, ind) => (
          <MenuItem key={ind} value={option} id={ind}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
