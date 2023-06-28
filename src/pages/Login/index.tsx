import styles from './styles.module.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import InputComponent from '../../components/InputComponent/index';
import Button from '@mui/material/Button';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../init-firebase';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../utils/localStorage';
import Header from '../../components/Header';
import Loading from '../../components/loading';

export default function Login() {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const handleChangeLogin = (value: string) => {
    setLogin(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        setLocalStorage('user', userCredential);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (auth.currentUser) navigate('/');
    setIsLoading(false);
  }, [auth, navigate]);

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
      <div className={styles.container}>
        <div className={styles.modalContent}>
          <InputComponent
            type="text"
            value={login}
            placeholder="Digite seu login"
            label="Email:"
            onChange={handleChangeLogin}
          />
          <InputComponent
            type="password"
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
