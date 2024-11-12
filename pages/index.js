import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { InView, defaultFallbackInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { HtmlTooltip } from '../components/HtmlTooltip';
import ReactGA from 'react-ga4';
import Link from 'next/link';
import React from 'react';
import IframeResizer from 'iframe-resizer-react';

defaultFallbackInView(true);

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          {`${siteTitle} - The world's first conference about prompt engineering - Online, Free`}
        </title>
      </Head>

      <IframeResizer
        src="./schedule.html"
        style={{ width: '1px', minWidth: '100%' }}
      />

      <header className="major container medium">
        <h2>
          Prompt engineering is a cutting-edge discipline that focuses on
          harnessing the full potential of language models by strategically
          designing input instructions ("prompts")
        </h2>
      </header>

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

      <div className="box container">
        <h3>Topics</h3>

        <ul className="default">
          <li>
            <strong>Development</strong>
            <p>
              Using prompts in production-ready apps. Helping companies adopt
              generative AI by sharing use cases, best practices, and lessons
              learned.
            </p>
          </li>
          <li>
            <strong>Experimentation</strong>
            <p>
              Pure research, experiments, arts, and ideas - the "tomorrow" of
              prompt engineering, if you wish.
            </p>
          </li>
        </ul>

        <h3>What is the Prompt Engineering Conference</h3>

        <p>
          The Prompt Engineering Conference is the world's first event
          exclusively dedicated to prompt engineering. We are pioneers in this
          field. Our close connections with top researchers, influencers,
          educators, and presenters ensure a strong, inspirational, and
          skill-enhancing experience for all participants.
        </p>

        <p>
          We firmly believe in the significant and substantial contribution of
          prompt engineering to the development of AI-infused applications. To
          introduce this topic as an essential skill for modern developers, or
          even as a distinct job title, we organized this conference exclusively
          dedicated to this field.
        </p>

        <h3>Audience</h3>

        <p>
          The Prompt Engineering Conference is open to everyone who wishes to
          attend, present, and collaborate. We intentionally keep it online to
          accommodate participants from around the globe. Although we dive
          deeply into prompt engineering, this event is not solely for technical
          individuals. One unique aspect of this discipline is its accessibility
          to multiple professions: developers, linguists, data scientists,
          domain experts, and more—all can become successful prompt engineers.
        </p>

        <h3>Using AI policy</h3>

        <p>
          We believe that 100% (or so) AI-generated sessions will not meet the
          quality standards we expect. At the same time, we encourage presenters
          to use prompt engineering to improve their talk proposal and session
          content.
        </p>
      </div>

      <div className="box bot container">
        <section className="prompt user">
          <span className="actor">user</span>
          How can I join the conference?
        </section>

        <section className="prompt assistant">
          <span className="actor">assistant</span>
          The conference is in the early stages of planning, so there are many
          opportunities for you:
        </section>
      </div>

      <div className="box alt container">
        <section className="feature left">
          <Link
            href="https://ti.to/prompt-engineering-conference/2024?source=website"
            className="image icon solid fa-ticket-alt"
            onClick={() => ReactGA.event('ticket', {})}
          >
            <img src="images/overlay.png" alt="" />
          </Link>
          <div className="content">
            <h3>Attendee</h3>
            <p>
              <Link
                href="https://ti.to/prompt-engineering-conference/2024?source=website"
                onClick={() => ReactGA.event('ticket', {})}
              >
                Get your free ticket
              </Link>{' '}
              right now and make sure to mark the conference date in your
              calendars. Also,{' '}
              <a href="#subscribe">
                sign up for the newsletter and push notifications
              </a>{' '}
              to stay updated.
            </p>
          </div>
        </section>
        <section className="feature right">
          <Link
            href="https://sessionize.com/prompt-engineering-conference-2024"
            className="image icon solid fa-microphone"
            onClick={() => ReactGA.event('cfp', {})}
          >
            <img src="images/overlay.png" alt="" />
          </Link>
          <div className="content">
            <h3>Speaker</h3>
            <p>
              CFP for 2024 is closed. We want to hear your story about prompt
              engineering at the next conference edition in 2025 - stay tuned!
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
          Who is organizing this conference?
        </section>

        <section className="prompt assistant">
          <span className="actor">assistant</span>
          Prompt Engineering Conference is a community-driven event organized by
          a group of generative AI enthusiasts:
          <div className="team clearfix">
            <div className="member">
              <img src="/images/team/maxim_salnikov.jpg" alt="Maxim Salnikov" />
              <h2>Maxim Salnikov</h2>
              <small>Developer Productivity @ Microsoft</small>
              <ul className="icons">
                <li>
                  <a
                    href="https://twitter.com/webmaxru"
                    target="_blank"
                    className="icon brands fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/webmax/"
                    target="_blank"
                    className="icon brands fa-linkedin"
                  >
                    <span className="label">LinkedInd</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="member">
              <img src="/images/team/goda_go.png" alt="Goda Go" />
              <h2>Goda Go</h2>
              <small>Youtuber & Podcast co-host</small>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.linkedin.com/in/godago/"
                    target="_blank"
                    className="icon brands fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="member">
              <img src="/images/team/dan_cleary.png" alt="Dan Cleary" />
              <h2>Dan Cleary</h2>
              <small>Founder @ Prompt Hub</small>
              <ul className="icons">
                <li>
                  <a
                    href="https://twitter.com/DanJCleary"
                    target="_blank"
                    className="icon brands fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dan-cleary-06b754123/"
                    target="_blank"
                    className="icon brands fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h2>Event partner in the Asian region</h2>
          <div className="team clearfix">
            <div className="member">
              <img src="/images/team/hank_liu.jpg" alt="Hank Liu" />
              <h2>Hank.Liu</h2>
              <small>Microsoft MVP, ChatU CEO</small>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.linkedin.com/in/hank6/"
                    target="_blank"
                    className="icon brands fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="box container">
        <h3>Sponsors</h3>

        <div className="partners">
          <div className="partner">
            <a href="https://www.prompthub.us/">
              <img src="/images/partners/prompt-hub.png" alt="Prompt Hub" />
              <p>
                Test, deploy, and manage your prompts with PromptHub, a prompt
                management tool built for teams
              </p>
            </a>
          </div>

          <div className="partner">
            <a href="https://promptperfect.xyz/">
              <img
                src="/images/partners/prompt-perfect.png"
                alt="Prompt Perfect"
              />
              <p>
                Prompt Perfect optimizes your prompts in ChatGPT to ensure
                high-quality, relevant responses
              </p>
            </a>
          </div>

          <div className="partner">
            <a href="https://www.conf42.com/prompt2024">
              <img
                src="/images/partners/conf42.png"
                alt="Conf42 Prompt Engineering Conference"
              />
              <p>Conf42 Prompt Engineering Conference</p>
            </a>
          </div>
        </div>
      </div>

      <div className="box container">
        <h3>Media partners</h3>

        <div className="partners">
          <div className="partner">
            <a href="https://www.it-schulungen.com">
              <img
                src="/images/partners/it-schulungen.png"
                alt="IT-Schulungen"
              />
              <p>IT-Schulungen</p>
            </a>
          </div>
        </div>
      </div>

      <div className="box container">
        <h3>Upskilling sponsor</h3>

        <div className="partners">
          <div className="partner">
            <a href="https://www.packt.com">
              <img src="/images/partners/packt.png" alt="Packt" />
              <p>Packt</p>
            </a>
          </div>
        </div>
      </div>

      <div className="box container">
        <h3>Community partners (all years)</h3>

        <div className="partners">
          <div className="partner">
            <a href="https://www.meetup.com/promptengineering/">
              <img
                src="/images/partners/pe-norway.png"
                alt="Prompt Engineering Norway"
              />
              <p>Prompt Engineering Norway</p>
            </a>
          </div>

          <div className="partner">
            <a href="https://www.meetup.com/london-prompt-engineers/">
              <img
                src="/images/partners/london-prompt-engineers.jpg"
                alt="London Prompt Engineers"
              />
              <p>London Prompt Engineers</p>
            </a>
          </div>

          <div className="partner">
            <a href="https://aka.ms/SKDiscord">
              <img
                src="/images/partners/semantic-kernel.png"
                alt="Semantic Kernel Community"
              />
              <p>Semantic Kernel Community</p>
            </a>
          </div>

          <div className="partner">
            <a href="https://www.meetup.com/berlin-prompt-engineers-meetup/">
              <img
                src="/images/partners/berlin-prompt-engineers.png"
                alt="Berlin Prompt Engineers"
              />
              <p>Berlin Prompt Engineers</p>
            </a>
          </div>

          <div className="partner">
            <a href="https://cubixai.com/">
              <img src="/images/partners/cubix-ai.png" alt="Cubix AI" />
              <p>Cubix AI</p>
            </a>
          </div>

          <div className="partner">
            <a href="https://www.dataforeningen.no/">
              <img
                src="/images/partners/dnd.png"
                alt="Den norske dataforening"
              />
              <p>Den norske dataforening</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
