import Alert from "./components/Alert";
import Login from "./components/Login";
import { useState } from "react";

function App() {

  //seteo inicial de la alerta 
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  //validación acceso usuario
  const validateAccess = (user) => {
    
    //valores validos
    const email = 'correo@email.cl';
    const password = '123456';
  
    //condicion de la validacion
    if (user.email === email && user.password === password) {
      setAlertMessage('Acceso - OK');
      setAlertType('success')
    } else {
      setAlertMessage('Acceso - NOK');
      setAlertType('danger')
    }
  }

  return (
    <div className="App container">
      <Login onSubmit={ validateAccess } />
      <Alert alertMessage = { alertMessage } alertType = { alertType } />
    </div>
  );
}

export default App;
