import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { InView, defaultFallbackInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { HtmlTooltip } from '../components/HtmlTooltip';

defaultFallbackInView(true);

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          {`${siteTitle} - The world's first conference about prompt engineering - October 12, Online, Free`}
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
                          `You are an Prompt Engineering Conf assistant and you answer questions about the event.`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <></>
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
                        .typeString(`Which topics will be covered?`)
                        .start();
                    }}
                  />
                ) : (
                  <></>
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
                          `The conference will showcase a comprehensive range of topics, including theoretical foundations of prompt engineering,  prompt generation methodologies, practical strategies for prompts optimizing, fine-tuning strategies, bias mitigation, innovative techniques, and many more.`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <></>
                )}
              </span>
            )}
          </InView>
        </section>
      </div>

      <header className="major container medium">
        <h2>
          Prompt engineering is a cutting-edge discipline that focuses on
          harnessing the full potential of language models by strategically
          designing input instructions ("prompts")
        </h2>
      </header>

      <div className="box container">
        <h3>Using AI policy</h3>

        <p>
          We believe that 100% (or so) AI-generated sessions will not meet the
          quality standards we expect. At the same time, we encourage presenters
          to use prompt engineering to improve your talk proposal and session
          content.
        </p>

        <h3>Tracks</h3>

        <p>
          We plan to have two tracks: one focused on using prompts in
          production-ready apps, and the other on pure creativity and
          experimentation. However, this is just a formal separation and the
          boundaries are quite thin.
        </p>

        <h3>Audience</h3>

        <p>
          Our target audience is very broad. The content will be engaging and
          useful for everyone interested in interacting with generative AI
          tools.
        </p>
      </div>

      <div className="box bot container">
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
                        .pauseFor(0)
                        .typeString(`How can I join the conference?`)
                        .start();
                    }}
                  />
                ) : (
                  <></>
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
                        .pauseFor(2000)
                        .typeString(
                          `The conference is in the early stages of planning, so there are many opportunities for you:`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <></>
                )}
              </span>
            )}
          </InView>
        </section>
      </div>

      <div className="box alt container">
        <section className="feature left">
          <a
            href="https://ti.to/prompt-engineering-conference/2023"
            className="image icon solid fa-ticket-alt"
          >
            <img src="images/overlay.png" alt="" />
          </a>
          <div className="content">
            <h3>Attendee</h3>
            <p>
              We will soon open the registration for free tickets. Make sure to
              mark October 12th in your calendars and{' '}
              <a href="#subscribe">
                sign up for the newsletter and push notifications
              </a>{' '}
              to stay informed.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a
            href="https://sessionize.com/prompt-engineering-conference-2023"
            className="image icon solid fa-microphone"
          >
            <img src="images/overlay.png" alt="" />
          </a>
          <div className="content">
            <h3>Speaker</h3>
            <p>
              We want to hear your story about prompt engineering! The call for
              presentations is open.{' '}
              <a href="https://sessionize.com/prompt-engineering-conference-2023">
                Check more details and send your proposal
              </a>{' '}
              now !
            </p>
          </div>
        </section>
        <section className="feature left">
          <a
            href="mailto:hello@promptengineering.rocks?subject=Our community wants to partner with the Prompt Engineering Conference!"
            className="image icon solid fa-people-group"
          >
            <img src="images/overlay.png" alt="" />
          </a>
          <div className="content">
            <h3>Community partner</h3>
            <p>
              Are you organizing a community focused on the generative AI
              topics? Let your people know about the conferences they can join
              the fun as attendees and presenters!{' '}
              <a href="mailto:hello@promptengineering.rocks?subject=Our community wants to partner with the Prompt Engineering Conference!">
                Contact us for the details.
              </a>
            </p>
          </div>
        </section>
        <section className="feature right">
          <a
            href="mailto:hello@promptengineering.rocks?subject=We want to sponsor the Prompt Engineering Conference!"
            className="image icon solid fa-handshake"
          >
            <img src="images/overlay.png" alt="" />
          </a>
          <div className="content">
            <h3>Sponsor</h3>
            <p>
              Does your company develop generative AI-related tools or services?
              Are you looking to hire experienced AI/prompt engineers? Share
              your message with the community by{' '}
              <HtmlTooltip title="Send an email and let's chat!" arrow>
                <a href="mailto:hello@promptengineering.rocks?subject=We want to sponsor the Prompt Engineering Conference!">
                  becoming a sponsor
                </a>
              </HtmlTooltip>
              !
            </p>
          </div>
        </section>
      </div>

      <div className="box bot container">
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
                        .pauseFor(0)
                        .typeString(`Who is organizing this conference?`)
                        .start();
                    }}
                  />
                ) : (
                  <></>
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
                        .pauseFor(2000)
                        .typeString(
                          `Prompt Engineering Conference is a community-driven event organized by a group of prompt engineering enthusiasts led by <a href="https://twitter.com/webmaxru" target="_blank" style="color: white">Maxim Salnikov</a>.`
                        )
                        .start();
                    }}
                  />
                ) : (
                  <></>
                )}
              </span>
            )}
          </InView>
        </section>
      </div>
    </Layout>
  );
}
