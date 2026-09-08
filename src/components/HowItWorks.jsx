import SectionHead from './SectionHead';
import { steps } from '../data/siteData';
import stepOne from '../img/steps/step-1.jpeg';
import stepTwo from '../img/steps/step-2.jpeg';
import stepThree from '../img/steps/step-3.jpeg';
import stepFour from '../img/steps/step-4.jpeg';
import stepFive from '../img/steps/step-5.jpeg';

const stepImages = [stepOne, stepTwo, stepThree, stepFour, stepFive];

export default function HowItWorks({ ar, t }) {
  return (
    <section className="how" id="how">
      <div className="section">
        <SectionHead
          title={t.how}
          subtitle={t.hsub}
          tag={ar ? 'خططها بخمس خطوات' : 'Plan it in five steps'}
          center
        />

        <div className="steps-mosaic">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            const title = ar ? step.arTitle : step.enTitle;
            const description = ar
              ? step.arText
              : 'Organize the details in minutes and get everyone ready for a smooth, enjoyable journey.';

            return (
              <article className="step-card" key={step.enTitle}>
                <img src={stepImages[index]} alt={title} loading="lazy" />
                <div className="step-card-shade" />
                <span className="step-card-number">0{index + 1}</span>
                <div className="step-card-title">
                  <Icon size={25} aria-hidden="true" />
                  <h3>{title}</h3>
                </div>
                <div className="step-card-detail">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
