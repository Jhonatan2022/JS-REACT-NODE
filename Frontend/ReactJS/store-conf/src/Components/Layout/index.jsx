import { Footer } from "../Footer";
import { Header } from "../Header";
import "./styles.css";

function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export { Layout };
