import styles from './styles.module.scss';
import Button from '../Button';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  console.log(location);

  const { setFilterPosts, filterPosts } = useContext(AppContext);

  const handleClick = () => {
    setFilterPosts?.((oldState: boolean) => !oldState);
  };

  return !location?.pathname.includes('/post') ? (
    <nav className={styles.nav}>
      <Button
        text={filterPosts ? 'Todos os Posts' : 'Meu Posts'}
        onClick={handleClick}
        customClass={styles.btnFilterOn}
      />
    </nav>
  ) : null;
}
