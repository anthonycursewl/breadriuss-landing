import { useState, useRef, useEffect } from 'react';
import { AnimatedText } from '../../ui/AnimatedText';
import { Link } from '../../ui/Link';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: 'What types of security assessments do you offer?',
    answer: 'We offer comprehensive security assessments including infrastructure audits, threat modeling, penetration testing, and compliance evaluations. All assessments are conducted by certified security professionals through our partnership with Nakomi Studio.',
  },
  {
    question: 'How quickly can you respond to a security incident?',
    answer: 'Our emergency response team is available 24/7. For critical incidents, our average response time is under 15 minutes. We maintain active threat monitoring across all client infrastructure to detect and neutralize threats before they escalate.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have extensive experience across financial services, healthcare, government agencies, and enterprise technology companies. Our solutions are designed to meet the stringent compliance requirements of each sector, including SOC 2, HIPAA, and FedRAMP.',
  },
  {
    question: 'How do you stay ahead of emerging threats?',
    answer: 'Our threat intelligence platform continuously analyzes global attack patterns and feeds data into our detection systems. We maintain partnerships with major cybersecurity research organizations and participate in information sharing forums to ensure our clients are protected against the latest attack vectors.',
  },
  {
    question: 'What is your approach to implementation?',
    answer: 'We follow a phased approach that minimizes disruption to your existing operations. Our implementation includes thorough testing, zero-downtime deployment, and comprehensive documentation. We also provide training to ensure your team can effectively manage and maintain the security systems.',
  },
  {
    question: 'How does the Nakomi Studio partnership work?',
    answer: 'Nakomi Studio serves as our primary consultancy partner for security assessments and strategic consulting. They handle the initial consultation, assessment scheduling, and ongoing advisory services, while Breadriuss provides the underlying technology and operational security support.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, i) => {
      if (ref) {
        if (openIndex === i) {
          ref.style.maxHeight = ref.scrollHeight + 'px';
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [openIndex]);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <AnimatedText as="h2" className={styles.title} animation="blur" delay={0.1} duration={1}>
            Frequently Asked Questions
          </AnimatedText>
          <AnimatedText as="p" className={styles.subtitle} animation="fade" delay={0.2} duration={0.8}>
            Everything you need to know about our security services.
          </AnimatedText>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                ref={(el) => { answerRefs.current[i] = el; }}
                className={styles.answer}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Still have questions?</p>
          <Link href="https://nakomi.studio" external>
            Contact Nakomi Studio
          </Link>
        </div>
      </div>
    </section>
  );
}