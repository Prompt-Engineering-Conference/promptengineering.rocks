import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Prompt Engineering Conference';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { InView, defaultFallbackInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

defaultFallbackInView(true);

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.main,
  },
}));

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6B40D8',
    },
    secondary: {
      main: '#F4AC36',
    },
  },
});

export default function Layout({ children, home }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      //setIsTooltipOpen(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/app.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/icons/safari-pinned-tab.svg"
          color="#6b40d8"
        />
        <meta name="msapplication-TileColor" content="#6b40d8" />
        <meta name="theme-color" content="#6b40d8"></meta>
        <meta property="og:url" content="https://promptengineering.rocks" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Prompt Engineering Conference - World's first conference about prompt engineering"
        />
        <meta
          property="og:description"
          content="Prompt Engineering Conference - World's first conference about prompt engineering"
        />
        <meta
          property="og:image"
          content="https://promptengineering.rocks/images/social.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="promptengineering.rocks" />
        <meta
          property="twitter:url"
          content="https://promptengineering.rocks"
        />
        <meta
          name="twitter:title"
          content="Prompt Engineering Conference - World's first conference about prompt engineering"
        />
        <meta
          name="twitter:description"
          content="Prompt Engineering Conference - World's first conference about prompt engineering"
        />
        <meta
          name="twitter:image"
          content="https://promptengineering.rocks/images/social.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>

      <div id="header">
        <span className="logo">
          <img src="images/logo.svg" alt={siteTitle} title={siteTitle} />
        </span>
        <HtmlTooltip
          open={isTooltipOpen}
          arrow
          title={
            <React.Fragment>
              <>Characters: 121, Tokens: 20</>
            </React.Fragment>
          }
        >
          <div
            className="tokenizer-output"
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
          >
            <span className="tokenizer-tkn tokenizer-tkn-0">The</span>
            <span className="tokenizer-tkn tokenizer-tkn-1"> world</span>
            <span className="tokenizer-tkn tokenizer-tkn-2">'s</span>
            <span className="tokenizer-tkn tokenizer-tkn-3"> first</span>
            <span className="tokenizer-tkn tokenizer-tkn-4"> conference</span>
            <span className="tokenizer-tkn tokenizer-tkn-0"> dedicated</span>
            <span className="tokenizer-tkn tokenizer-tkn-1"> to</span>
            <span className="tokenizer-tkn tokenizer-tkn-2"> the</span>
            <span className="tokenizer-tkn tokenizer-tkn-3"> only</span>
            <span className="tokenizer-tkn tokenizer-tkn-4"> way</span>
            <span className="tokenizer-tkn tokenizer-tkn-0"> to</span>
            <span className="tokenizer-tkn tokenizer-tkn-1"> communicate</span>
            <span className="tokenizer-tkn tokenizer-tkn-2"> with</span>
            <span className="tokenizer-tkn tokenizer-tkn-3"> the</span>
            <span className="tokenizer-tkn tokenizer-tkn-4"> most</span>
            <span className="tokenizer-tkn tokenizer-tkn-0"> powerful</span>
            <span className="tokenizer-tkn tokenizer-tkn-1"> AI</span>
            <span className="tokenizer-tkn tokenizer-tkn-2"> tools</span>
            <span className="tokenizer-tkn tokenizer-tkn-3"> currently</span>
            <span className="tokenizer-tkn tokenizer-tkn-4"> available</span>
          </div>
        </HtmlTooltip>
        <h1>October 12th, Online, Free</h1>
        <Button
          variant="contained"
          href="https://ti.to/prompt-engineering-conference/2023"
          style={{ width: '18em', margin: '0 2em 1em 2em' }}
          size="large"
        >
          Tickets (pre-register)
        </Button>
        <Button
          variant="outlined"
          style={{ width: '18em', margin: '0 2em 1em 2em' }}
          size="large"
        >
          Apply to speak (soon)
        </Button>
      </div>

      <div id="main">{children}</div>

      <div id="footer">
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
                          .typeString(
                            `How do I know when the tickets will be released and call for papers will open?`
                          )
                          .start();
                      }}
                    />
                  ) : (
                    <>
                      How do I know when the tickets will be released and call
                      for papers will open?
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
                          .pauseFor(2000)
                          .typeString(
                            `Just subscribe to our newsletter and we'll let you know.`
                          )
                          .start();
                      }}
                    />
                  ) : (
                    <>
                      Just subscribe to our newsletter and we'll let you know.
                    </>
                  )}
                </span>
              )}
            </InView>
          </section>
          <section className="prompt assistant">
            <iframe
              src="https://embeds.beehiiv.com/42af6a85-9c77-44a1-87fa-d0c3040cacb5?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              style={{
                margin: '0',
                borderRadius: '0px !important',
                backgroundColor: 'transparent',
              }}
            ></iframe>
          </section>
        </div>

        <div className="container medium">
          <header className="major last">
            <h2>Let's stay connected!</h2>
          </header>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/webmaxru"
                className="icon brands fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/webmaxru/promptengineering.rocks"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
          </ul>

          <ul className="copyright">
            <li>&copy; 2023 {siteTitle}</li>
            <li>
              Template: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
}
