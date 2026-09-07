import SectionHead from './SectionHead';
import { steps } from '../data/siteData';

export default function HowItWorks({ ar, t }) {
  return (
    <section className="how" id="how">
      <div className="section">
        <SectionHead title={t.how} subtitle={t.hsub} tag={ar ? 'خططها بخمس خطوات' : 'Plan it in five steps'} center />
        <div className="timeline">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <article className={`step ${index % 2 ? 'rev' : ''}`} key={step.enTitle}>
                <div>
                  <small>0{index + 1}</small>
                  <h3>{ar ? step.arTitle : step.enTitle}</h3>
                  <p>{ar ? step.arText : 'Organize the details in minutes and get everyone ready for a smooth, enjoyable journey.'}</p>
                </div>
                <div className="phone">
                  <b>WeWay</b>
                  <span>{index === 3 ? 'SAR 4,280' : ''}</span>
                  <i><Icon size={24} /></i>
                  <i />
                  <i />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
