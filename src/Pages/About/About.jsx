import Layout from "../../Components/Layout/Layout";
import Brief from "./Brief/Brief";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <Brief />
      <Gallery />
      <Services />
    </Layout>
  );
};

export default About;
