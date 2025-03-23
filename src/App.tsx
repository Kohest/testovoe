import styles from "./App.module.scss";
import BannerCard from "./components/banner-card/banner-card";
import DignitiesList from "./components/dignities-list/dignities-list";
import Footer from "./components/footer/footer";
import OptionsList from "./components/options-list/options-list";
import PartnersList from "./components/partners-list/partners-list";
import TitleCard from "./components/title-card/title-card";

function App() {
  return (
    <div className={styles.content}>
      <TitleCard />
      <DignitiesList />
      <OptionsList />
      <BannerCard />
      <PartnersList />
      <Footer />
    </div>
  );
}

export default App;
