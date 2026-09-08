import { useState } from 'react';
import { CheckCircle2, Mail, Send, UserRound } from 'lucide-react';

export default function Contact({ ar }) {
  const [sent, setSent] = useState(false);

  const submit = event => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <span className="contact-tag">{ar ? 'تواصل معنا' : 'Get in touch'}</span>
        <h2>{ar ? 'لديك سؤال؟ نحن هنا لخدمتك' : 'Have a question? We are here to help'}</h2>
        <p>{ar ? 'اكتب لنا وسيتواصل معك فريق WeWay في أقرب وقت.' : 'Send us a message and the WeWay team will get back to you shortly.'}</p>

        <form className="contact-form" onSubmit={submit}>
          <div className="contact-fields">
            <label>
              <UserRound size={19} aria-hidden="true" />
              <input required name="name" placeholder={ar ? 'الاسم الكامل' : 'Full name'} />
            </label>
            <label>
              <Mail size={19} aria-hidden="true" />
              <input required type="email" name="email" placeholder={ar ? 'البريد الإلكتروني' : 'Email address'} />
            </label>
          </div>
          <label className="contact-message">
            <textarea required name="message" placeholder={ar ? 'اكتب رسالتك أو ملاحظاتك' : 'Write your message or feedback'} />
          </label>
          <button type="submit" className={sent ? 'is-sent' : ''}>
            {sent ? <CheckCircle2 size={20} aria-hidden="true" /> : <Send size={20} aria-hidden="true" />}
            <span>{sent ? (ar ? 'تم إرسال رسالتك' : 'Message sent') : (ar ? 'إرسال الرسالة' : 'Send message')}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
