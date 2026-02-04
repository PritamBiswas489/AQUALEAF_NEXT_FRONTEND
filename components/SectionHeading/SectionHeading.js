import "./SectionHeading.scss";
import "./SectionHeading.responsive.scss";

function SectionHeading({ sectionHheading }) {
  return (
    <>
      <div className="section-heading">
        <h2>{sectionHheading}</h2>
      </div>
    </>
  );
}

export default SectionHeading;
