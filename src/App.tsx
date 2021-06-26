import "./styles.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { ProfilePage } from "./components/ProfilePage";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <ProfilePage />
    </div>
  );
};
