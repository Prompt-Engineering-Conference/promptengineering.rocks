import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { InView, defaultFallbackInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { HtmlTooltip } from '../components/HtmlTooltip';

defaultFallbackInView(true);

export default function Home() {
  return (
    <Layout>
      <div className="box container">
        <h2>
          Prompt Engineering Conference is intended to be an inclusive,
          welcoming conference for everyone.
        </h2>
        <p>
          Prompt Engineering Conference requires everyone to be respectful to
          each other. Treat everyone with respect. Participate while
          acknowledging that everyone deserves to be here — and each of us has
          the right to enjoy our experience without fear of harassment,
          discrimination, or condescension, whether blatant or via
          micro-aggressions.
        </p>
        <p>
          Prompt Engineering Conference will not tolerate discrimination and/or
          harassment for any reason, including but not limited to
          characteristics like: race, color, religion (including religious dress
          and grooming), sex, gender, sexual orientation, gender identity and/or
          expression, national origin, ancestry, mental or physical disability,
          medical condition, pregnancy, military or veteran status, genetic
          information, citizenship status, and marital status.
        </p>
        <p>
          We expect that everyone attending our events will avoid making
          inappropriate or offensive comments (slurs, epithets, etc.) or engage
          in inappropriate or offensive conduct that targets another person.
        </p>
        <p>
          Anyone violating these rules, including but not limited to attendees,
          sponsors, and organizers,may be sanctioned or expelled from the
          conference at the discretion of the conference organizers.
        </p>
        <h2> Who does the Code of Conduct apply? Where does it apply?</h2>
        <p>
          The Code of Conduct applies to everyone, including attendees,
          sponsors, speakers, and organizers. It applies to any Prompt
          Engineering Conference hosted event and all related online and offline
          spaces, including code repositories and communication channels (site
          repo, Twitter, event chat, etc…). Inappropriate behavior or harassment
          of any kind is not tolerated.
        </p>
        <h2>Reporting Code of Conduct issues.</h2>
        <p>
          If you need help of any kind, to report a bad situation, or anything
          else not specified that we can help with, you can contact us by:
        </p>
        <p>
          - DMing <a href="https://twitter.com/PromptEngConf">@PromptEngConf</a>
          <br />- Mailing{' '}
          <a href="mailto:hello@promptengineering.rocks">
            hello@promptengineering.rocks
          </a>
        </p>
        <hr />
        This Code of Conduct was heavily influenced by the{' '}
        <a href="https://webassembly-summit.org/coc">
          Web Assembly Summit Code of Conduct
        </a>{' '}
        and the{' '}
        <a href="(https://aneventapart.com/registration-information#code-of-conduct">
          An Event Apart Code of Conduct
        </a>
        .
      </div>
    </Layout>
  );
}
