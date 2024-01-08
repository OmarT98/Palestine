import { supports } from "../constants";
import { SupportCard } from "../components";

const Supports = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {supports.map((service) => (
        <SupportCard key={service.label} {...service} />
      ))}
    </section>
  );
};
export default Supports;
