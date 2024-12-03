import React from 'react';
import Input from '../src/component/Input';
import Button from '../src/component/Button';
import Radio from '../src/component/Radio';
import DataLabel from './context/dataLabel';
import TextArea from '../src/component/TextArea';
import styles from './App.module.css';
import useForm from './hooks/useForm';

function App() {
   const {isValid, clearFields, handleSubmit, handleName, validateName, handleEmail, validateEmail, handlePass, validatePass, handlePass2, validatePass2, handleSex, nameState, emailState, passState, passState2, sex, passReducer, passReducer2, msg} = useForm()

  return (
    <div className={styles.App}>
      <h3>Preencha o formulário abaixo</h3>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"fullName", txt: "Nome Completo:", labelClass: "form-label", className: "form-control", type: "text", name:"fullName", id:"fullName"}}>
            <Input val={nameState.value} change={handleName} blur={validateName} />
          </DataLabel.Provider>
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor: 'masculino', txt: 'Masculino', className: 'form-label'}}>
            <Radio myid="masculino" value="m" chk={sex === 'm'} onChange={handleSex}/>
          </DataLabel.Provider>
          <DataLabel.Provider value={{htmlFor: 'feminino', txt: 'Feminino', className: 'form-label'}}>
            <Radio myid="feminino" value="f" chk={sex === 'f'} onChange={handleSex}/>
          </DataLabel.Provider>
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"email", txt: "Email:", labelName: "form-label", type:"email", name:"email", id:"email", className:"form-control"}}>
            <Input val={emailState.value} change={handleEmail} blur={validateEmail} />
          </DataLabel.Provider>
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"password", txt: "Senha:", labelName: "form-label", type: "password", name:"password", id:"password", className:"form-control", val: passState.value}}>
            <Input val={passReducer.value} change={handlePass} blur={validatePass} />
          </DataLabel.Provider>  
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"password2", txt: "Repita senha:", labelName: "form-label", type:"password", name:"password2", id:"password2", className: "form-control", val: passState2.value}}>
            <Input  val={passReducer2.value} change={handlePass2} blur={validatePass2}/>
          </DataLabel.Provider> 
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"message", txt: "Mensagem:", className: "form-label"}}>
            <TextArea ref={msg}/>
          </DataLabel.Provider>
        </div>
        <div className='mb-3'>
          <Button type="submit" txt="Cadastrar" id="submit" className="btn btn-success" status={!isValid}/>
          <Button type="reset" txt="Limpar" id="clear" className="btn btn-danger" onClick={clearFields}/>
        </div>
      </form>
    </div>
  );
}

export default App;
