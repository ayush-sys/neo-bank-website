import "./App.css";
import styles from "./style";
import { Navbar, Stats, Hero, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from "./components";


export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>


      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>


      {/* main section */}
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/> 
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
