import {useState, useEffect, useReducer, useRef, useCallback} from 'react';

const useForm = () => {
   const [isValid, setValid] = useState(false)
   const [sex, setSex] = useState(null)
   const msg = useRef('');

   const nameReducer = (state, action) => {
      const {type, val} = action;
      if (type === 'user_input') {
      const validName = val.length > 0
      return {value: val, valid: validName};
      }

      if (type === 'input_blur') {
      const validName = state.value.length > 0
      return {value: state.value, valid: validName};
      }

      return {value: state, valid: false};
   }

   const [nameState, dispatchName] = useReducer(nameReducer, {value: '', valid: null});

   const handleName = e => {
      const{value} = e.target;
      dispatchName({type: 'user_input', val: value});
   }

   const validateName = () => {
      dispatchName({type: 'input_blur'});
   }

   const emailReducer = (state, action) => {
      const {type, val} = action;
      if (type === 'user_input') {
      let validEmail = false;
      if (val.includes('@') && val.includes('.com')) {
         validEmail = true;
      }
      return {value: val, valid: validEmail}
      }

      if (type === 'input_blur') {
      let validEmail = false;
      if (state.value.includes('@') && state.value.includes('.com')) {
         validEmail = true;
      }
      return {value: state.value, valid: validEmail}
      }

      return {value: state, valid: false};
   }

   const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});

   const handleEmail = e => {
      const{value} = e.target;
      dispatchEmail({type: 'user_input', val: value});
   }

   const validateEmail = () => {
      dispatchEmail({type: 'input_blur'});
   }

   const passReducer = (state, action) => {
      const {type, val} = action;
      const length = 3;
      let validPass = false;
      if (type === 'user_input') {
      if (val.length >= length) {
         validPass = true;
         
      }
      return {value: val, valid: validPass}
      }

      if (type === 'input_blur') {
      let validPass = false;
      if (state.value.length >= length) {
         validPass = true;
      }
      return {value: state.value, valid: validPass}
      }

      return {value: state, valid: false};
   }

   const [passState, dispatchPass] = useReducer(passReducer, {value: '', isValid: null});

   const handlePass = e => {
      const{value} = e.target;
      dispatchPass({type: 'user_input', val: value});
   }

   const validatePass = () => {
      dispatchPass({type: 'input_blur'});
   }

   const passReducer2 = (state, action) => {
      const {type, val} = action;
      const length = 3;
      let validPass = false;
      if (type === 'user_input') {
      if (val.length >= length) {
         validPass = true;
         
      }
      return {value: val, valid: validPass}
      }

      if (type === 'input_blur') {
      let validPass = false;
      if (state.value.length >= length) {
         validPass = true;
      }
      return {value: state.value, valid: validPass}
      }

      return {value: state, valid: false};
   }

   const [passState2, dispatchPass2] = useReducer(passReducer2, {value: '', isValid: null});

   const handlePass2 = e => {
      const{value} = e.target;
      dispatchPass2({type: 'user_input', val: value});
   }

   const validatePass2 = () => {
      dispatchPass2({type: 'input_blur'});
   }

   const handleSex = e => {
      const{value} = e.target
      setSex(value)
   }

   useEffect(() => {
      if (nameState.valid && emailState.valid && sex && passState.valid && passState2.valid && passState.value === passState2.value) {
      setValid(true)
      } else{
      setValid(false)
      }
   }, [nameState.valid, emailState.valid, passState.valid, passState2.valid, sex, passState.value, passState2.value])

   const handleSubmit = e => {
      e.preventDefault();
      alert(`Nome: ${nameState.value} Sex: ${sex} Email: ${emailState.value} Senha: ${passState.value} Mensagem: ${msg.current.value}`);
   }

   const clearFields = useCallback(() => {
      dispatchName({type: 'user_input', val: ''});
      dispatchEmail({type: 'user_input', val: ''});
      dispatchPass({type: 'user_input', val: ''});
      dispatchPass2({type: 'user_input', val: ''});
      setSex(null);
   }, [])

   return {isValid, clearFields, handleSubmit, handleName, validateName, handleEmail, validateEmail, handlePass, validatePass, handlePass2, validatePass2, handleSex, nameState, emailState, passState, passState2, sex, passReducer, passReducer2, msg}
}

export default useForm