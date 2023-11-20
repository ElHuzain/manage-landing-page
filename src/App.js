import Header from './components/ui/Header';
import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Reviews from './components/sections/reviews/Reviews';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="App max-w-screen w-full min-h-screen bg-white relative overflow-x-hidden">
      <Header />
      {/* <img alt="" src="./images/bg-tablet-pattern.svg" className="absolute top-[-5%] right-[-12%] md:top-[-15%] md:right-[-5%] xl:top-[-12%] xl:right-[-4%] z-0" /> */}
      <img alt="" src="./images/bg-tablet-pattern.svg" className="absolute top-[-60px] right-[-60px] z-0" />
      <div className="flex flex-col gap-[6rem]">
        <Hero />
        <About />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
