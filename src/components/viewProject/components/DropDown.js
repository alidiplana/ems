import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
}));

const DropDown = (props) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">
        {props.title}
      </InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={props.open}
        onClose={props.handleClose}
        onOpen={props.handleOpen}
        value={props.managerId !== "" ? props.managerId : props.memberId}
        onChange={
          props.handleChange ? props.handleChange : props.handleChangeMember
        }
      >
        <MenuItem value="">
          {props.managerId !== "" ? (
            <b>Project Managers</b>
          ) : (
            <b>Project Members</b>
          )}
        </MenuItem>
        {props.employees.map((employee) => (
          <MenuItem key={Date.now() + Math.random()} value={employee.id}>
            {employee.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
