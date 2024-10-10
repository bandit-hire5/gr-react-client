import Menu from './Menu';
import HomePage from '../pages/HomePage';

const MainApp = () => {
  return (
    <div style={styles.container}>
      <Menu />
      <div style={styles.content}>
        <HomePage />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default MainApp;
