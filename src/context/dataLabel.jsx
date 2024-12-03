import {createContext} from "react";

const DataLabel = createContext({
  htmlFor: '',
  labelClass: '',
  className: '',
  txt: '',
  type: '',
  name: '',
  id: ''
});

export default DataLabel;