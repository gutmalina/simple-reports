import styles from "./select-element.module.css";
import { useState, useEffect } from "react";
import {
  TYPE_FILTER_CAMPAIGN,
  TYPE_FILTER_GROUPING,
  TYPE_FILTER_OFFICES,
  TYPE_FILTER_DATA_REPORT,
  TYPE_FILTER_METRICS,
  TEXT_FILTER_DATA_REPORT,
  TEXT_FILTER_CAMPAIGN,
  TEXT_FILTER_GROUPING,
  TEXT_FILTER_OFFICES,
  TEXT_FILTER_DATA_START,
  TEXT_FILTER_DATA_FINISH,
  TEXT_FILTER_METRICS,
  OFFICES,
  CAMPAIGN,
  GROUPING,
  METRICS,
  METRICS_DEFAULT
} from "../../utils/constants";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectElement = ({ type, setPersonName, personName }) => {
  const [textTitle, setTextTitle] = useState("");
  const [menu, setMenu] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleStyleFilter = () => {
    switch (type) {
      case TYPE_FILTER_CAMPAIGN:
        setTextTitle(TEXT_FILTER_CAMPAIGN);
        setMenu(CAMPAIGN);
        break;
      case TYPE_FILTER_GROUPING:
        setTextTitle(TEXT_FILTER_GROUPING);
        setMenu(GROUPING);
        break;
      case TYPE_FILTER_OFFICES:
        setTextTitle(TEXT_FILTER_OFFICES);
        setMenu(OFFICES);
        break;
      case TYPE_FILTER_DATA_REPORT:
        setTextTitle(TEXT_FILTER_DATA_REPORT);
        setMenu("");
        break;
      case TYPE_FILTER_METRICS:
        setTextTitle(TEXT_FILTER_METRICS);
        setMenu(METRICS);
        setPersonName(METRICS_DEFAULT)
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    handleStyleFilter();
  }, [type]);

  return (
    <article className={styles.container}>
      <h4 className={styles.title}>{textTitle}</h4>
      {menu ? (
        <div className={styles.menu}>
          <FormControl sx={{ width: 289 }} size="small">
            <InputLabel id="demo-multiple-checkbox-label">{type}</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-select-small"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label={type} />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {menu.map((item) =>
                type !== TYPE_FILTER_GROUPING ? (
                  <MenuItem key={item} value={item}>
                    <Checkbox checked={personName.indexOf(item) > -1} />
                    <ListItemText primary={item} />
                  </MenuItem>
                ) : (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
      ) : (
        <div className={styles.group_data}>
          <DatePicker
            label={TEXT_FILTER_DATA_START}
            slotProps={{ textField: { size: "small" } }}
            sx={{ width: 191 }}
          />
          <DatePicker
            label={TEXT_FILTER_DATA_FINISH}
            slotProps={{ textField: { size: "small" } }}
            sx={{ width: 191 }}
          />
        </div>
      )}
    </article>
  );
};

export default SelectElement;
