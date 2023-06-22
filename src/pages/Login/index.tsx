import styles from './styles.module.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import InputComponent from '../../components/InputComponent/index';
import Button from '@mui/material/Button';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../init-firebase';

export default function Login() {
  initializeApp(firebaseConfig);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleChangeLogin = (value: string) => {
    setLogin(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className={styles.container}>
      <div>
        <InputComponent
          type="text"
          value={login}
          placeholder="Digite seu login"
          label="Login:"
          onChange={handleChangeLogin}
        />
        <InputComponent
          type="text"
          value={password}
          placeholder="Digite sua senha"
          label="Senha:"
          onChange={handleChangePassword}
        />
      </div>
      <Button variant="contained" onClick={() => handleLogin()}>
        Adicionar Produto
      </Button>
    </div>
  );
}
