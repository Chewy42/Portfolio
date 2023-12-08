import Header from './Header';
import Landing from './Landing';
import FeaturesSection from "./FeaturesSection";
import LimitedTimeOffer from "./LimitedTimeOffer.jsx";

const ACDemo = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col">
      <Header/>
      <main className="flex-grow">
        <Landing />
        <FeaturesSection />
        <LimitedTimeOffer />
      </main>
    </div>
  );
};

export default ACDemo;