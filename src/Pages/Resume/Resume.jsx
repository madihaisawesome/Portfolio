import Layout from "../../Components/Layout/Layout";
import Timeline from "../../Components/Timeline/TimeLine";
import { education } from "../../data/education";
import { certifications } from "../../data/Certifications";
import SkillsSection from "./SkillsSection/SkillsSection";
import {
  faCertificate,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { experience } from "../../data/Experience";

const Resume = () => {
  return (
    <Layout pageTitle="Resume">
      {/* Small resume link (place Resume.pdf and resume-icon.png in public/) */}
      <div style={{ marginBottom: 16 }}>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume PDF"
        >
          <img
            src="/resume-icon.png"
            alt="Resume PDF"
            width="48"
            height="48"
            style={{ display: "inline-block" }}
          />
        </a>
      </div>
      <Timeline title="Experience" icon={faGraduationCap} items={experience} />
      <Timeline title="Education" icon={faGraduationCap} items={education} />
      <Timeline
        title="Certifications"
        icon={faCertificate}
        items={certifications}
      />
      <SkillsSection />
    </Layout>
  );
};

export default Resume;
