import styles from './styles.module.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import InputComponent from '../../components/InputComponent/index';
import Button from '@mui/material/Button';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../init-firebase';
import { useNavigate } from 'react-router-dom';
import { setSessionStorage } from '../../utils/sessionStorage';
import Header from '../../components/Header';

export default function Login() {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();

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
        setSessionStorage('user', userCredential);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.modalContent}>
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
          <div className={styles.button}>
            <Button variant="contained" onClick={() => handleLogin()}>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
