import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { InView, defaultFallbackInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

defaultFallbackInView(true);

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          {`${siteTitle} - World's first conference about prompt engineering`}
        </title>
      </Head>

      <header className="major container medium">
        <InView triggerOnce={true}>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(10)
                      .typeString(
                        `<h2>Create a description for the conference about prompt engineering</h2>`
                      )
                      .pauseFor(500)
                      .typeString(
                        `<p>Welcome to the groundbreaking world's first conference on prompt engineering! This highly anticipated event brings together leading experts, researchers, and practitioners in the field of artificial intelligence and natural language processing.

                        The Conference on Prompt Engineering is an extraordinary platform where innovators converge to explore the latest advancements and best practices in crafting effective and precise prompts for language models. Prompt engineering is a cutting-edge discipline that focuses on harnessing the full potential of language models by strategically designing input instructions or queries.</p>`
                      )
                      .start();
                  }}
                />
              ) : (
                <h2>
                  The world's first conference dedicated to the only way to
                  communicate with the most powerful AI tools currently
                  available
                </h2>
              )}
            </div>
          )}
        </InView>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="#" className="image icon solid fa-signal">
            <img src="images/pic01.jpg" alt="" />
          </a>
          <div className="content">
            <h3>Sessions</h3>
            <p>
              The conference features a diverse range of captivating sessions,
              including keynote speeches by renowned thought leaders who have
              revolutionized the field. Attendees will have the opportunity to
              delve into enlightening presentations, thought-provoking panel
              discussions, and interactive workshops led by experts in the realm
              of prompt engineering.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="#" className="image icon solid fa-code">
            <img src="images/pic02.jpg" alt="" />
          </a>
          <div className="content">
            <h3>Participants</h3>
            <p>
              Participants will gain valuable insights into the theoretical
              foundations of prompt engineering, discover practical strategies
              for optimizing prompt design, and explore innovative techniques to
              achieve desired outcomes with language models. The conference aims
              to foster a collaborative environment, enabling attendees to
              engage in lively discussions, share their research findings, and
              network with fellow professionals from academia and industry.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="#" className="image icon solid fa-mobile-alt">
            <img src="images/pic03.jpg" alt="" />
          </a>
          <div className="content">
            <h3>Topics</h3>
            <p>
              The Conference on Prompt Engineering showcases a comprehensive
              range of topics, including prompt generation methodologies,
              fine-tuning strategies, bias mitigation, intent specification, and
              context modeling. Participants will explore the impact of prompt
              engineering across diverse domains, such as healthcare, finance,
              education, and customer support. Furthermore, ethical
              considerations surrounding prompt design and its implications on
              fairness, transparency, and inclusivity will be thoroughly
              examined
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
