import styles from './App.module.scss';
import Section from './components/Section';
import Banner from './components/Banner';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.headerMain}>intersection observer</h1>
      <Section />
      <Banner />
      <Section />
    </div>
  );
}

export default App;
