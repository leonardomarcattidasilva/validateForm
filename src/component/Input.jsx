import React, {useContext} from "react";
import Label from "./Label";
import DataLabel from "../context/dataLabel";

const Input = ({change, blur, val}) => {
  const ctx = useContext(DataLabel)
  return (
    <>
      <Label />
      <input
        type={ctx.type}
        id={ctx.id}
        name={ctx.name}
        className={ctx.className}
        value={val}
        onChange={change}
        onBlur={blur}
      />
    </>
  )
}

export default React.memo(Input);