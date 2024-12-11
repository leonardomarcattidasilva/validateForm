import React from "react";
import Label from "./Label";

const TextArea = ({ref}) => {
   return <>
      <Label />
      <textarea className='form-control' ref={ref}></textarea>
   </>
}

export default TextArea;