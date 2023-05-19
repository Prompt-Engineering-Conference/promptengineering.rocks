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

      <div className="box bot container">
        <section className="prompt system">
          <span className="actor">system</span>

          <InView triggerOnce={true}>
            {({ inView, ref, entry }) => (
              <span ref={ref}>
                {inView ? (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(20)
                        .typeString(
                          `You are a Prompt Engineering Conference assistant. You answer the questions about event.`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <>
                    You are a conference organizing assistant. You write
                    descriptions for the conferences.
                  </>
                )}
              </span>
            )}
          </InView>
        </section>
        <section className="prompt user">
          <span className="actor">user</span>
          <InView triggerOnce={true}>
            {({ inView, ref, entry }) => (
              <span ref={ref}>
                {inView ? (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(20)
                        .pauseFor(3000)
                        .typeString(
                          `What is this conference about?`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <>
                    Write a short description for the conference about prompt
                    engineering.
                  </>
                )}
              </span>
            )}
          </InView>
        </section>

        <section className="prompt assistant">
          <span className="actor">assistant</span>
          <InView triggerOnce={true}>
            {({ inView, ref, entry }) => (
              <span ref={ref}>
                {inView ? (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(20)
                        .pauseFor(5000)
                        .typeString(
                          `The conference features a diverse range of captivating sessions,
                          including keynote speeches by renowned thought leaders who have
                          revolutionized the field. Attendees will have the opportunity to delve
                          into enlightening presentations, thought-provoking panel discussions,
                          and interactive workshops led by experts in the realm of prompt
                          engineering.`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <>
                    The conference features a diverse range of captivating
                    sessions, including keynote speeches by renowned thought
                    leaders who have revolutionized the field. Attendees will
                    have the opportunity to delve into enlightening
                    presentations, thought-provoking panel discussions, and
                    interactive workshops led by experts in the realm of prompt
                    engineering.
                  </>
                )}
              </span>
            )}
          </InView>
        </section>
      </div>

      <header className="major container medium">
        <h2>
          Prompt Engineering is the technique of formulating instructions
          (“prompts”) for a generative AI, in order to have it produce the
          expected output. (
          <a href="https://en.m.wiktionary.org/wiki/prompt_engineering">
            Wiktionary
          </a>
          )
        </h2>
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
