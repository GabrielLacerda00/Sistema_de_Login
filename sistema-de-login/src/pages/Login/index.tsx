import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {

  const auth = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
      if(email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
              navigate('/');
            }else {
              alert("Não deu certo");
            }
      }
  };

  return (
    <div>
      <h2>Página Fechada</h2>

      <input type='text' value={email} placeholder='Digite seu email'
      onChange={e => setEmail(e.target.value)} />

      <input type='password' value={password} placeholder='Digite seu password' onChange={e=> setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}