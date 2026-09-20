import SectionHead from './SectionHead';
import { features } from '../data/siteData';

export default function Features({ ar, t }) {
  return (
    <section className="section" id="features">
      <SectionHead title={t.features} subtitle={t.fsub} tag={ar ? 'كل شيء في مكان واحد' : 'Everything in one place'} />
      <div className="featureGrid">
        {features.map(feature => {
          const Icon = feature.Icon;
          return (
            <article className="feature" key={feature.enTitle}>
              <i><Icon size={23} /></i>
              <h3>{ar ? feature.arTitle : feature.enTitle}</h3>
              <p>{ar ? feature.arText : feature.enText}</p>
              <b />
            </article>
          );
        })}
      </div>
    </section>
  );
}
