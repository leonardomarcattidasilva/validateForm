import React from "react";
import Label from "./Label";

const Radio = ({ myid, value, chk, onChange}) => {

  return (
    <div className="form-check form-check-inline">
      <input type="radio" name="sex" id={myid} value={value} onChange={onChange} checked={chk} className="form-check-input"/>
      <Label/>
    </div>
  );
}

export default Radio;