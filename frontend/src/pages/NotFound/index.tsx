import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import withAuthentication from '../../routes/auth';
import styles from './styles.module.scss';
import { RotateCcwIcon } from 'lucide-react';

import notFound from '../../assets/images/notfound.svg';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(5);

  const handleRedirect = () => {
    console.log('oi');
    navigate('/home');
  };

  useEffect(() => {
    let timer: any;
    if (count > -1) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      clearTimeout(timer);
      navigate('/home');
    }
  }, [count, navigate]);

  console.log(count);

  return (
    <main className={`${styles.main}`}>
      <div>
        <img src={notFound} />
        <Button
          text={`Clique para voltar... ${count}`}
          onClick={handleRedirect}
        >
          <RotateCcwIcon />
        </Button>
      </div>
    </main>
  );
}

const AuthenticatedComponent = withAuthentication(NotFound);

export default AuthenticatedComponent;
