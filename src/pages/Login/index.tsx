import styles from './styles.module.scss';
import Input from '../../components/InputComponent/index';

interface LoginProps {
  login: string;
  senha: string;
  setLogin: (value: string) => void;
  setSenha: (value: string) => void;
}
export default function Login({
  login,
  setLogin,
  senha,
  setSenha,
}: LoginProps) {
  const senhaChange = (value: any) => {
    setSenha(value);
  };
  return (
    <div className={styles.container}>
      <div>
        <Input
          type="text"
          value={login}
          placeholder="Digite seu login"
          label="Login:"
          onChange={(value) => setLogin(value)}
        />
        <Input
          type="text"
          value={senha}
          placeholder="Digite sua senha"
          label="Senha:"
          onChange={senhaChange}
        />
      </div>
    </div>
  );
}
