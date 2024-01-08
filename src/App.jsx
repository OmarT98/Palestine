import {
  HeroRev,
  Footer,
  Hero,
  Martyrs,
  Supports,
  SpecialStory,
  Subscribe,
  AboutUs,
} from "./sections";
import { Nav } from "./components";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Martyrs />
      </section>
      <section className="padding">
        <AboutUs />
      </section>
      <section className="padding-x py-10">
        <Supports />
      </section>
      <section className="padding">
        <SpecialStory />
      </section>
      <section className="bg-pale-blue padding">
        <HeroRev />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
