export default function SectionHead({ title, subtitle, tag, center }) {
  return (
    <div className={`head ${center ? 'center' : ''}`}>
      <span className="eyebrow">{tag}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
