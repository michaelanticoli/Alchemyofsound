import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network | Michael Anticoli",
  description:
    "A public dispatch for work leads and introductions for Michael Anticoli in Los Angeles.",
};

export default function NetworkPage() {
  return (
    <>
      <style>{`
        :root {
          --paper: #f3eee3;
          --ink: #11110f;
          --red: #e52b22;
          --muted: #6e6a62;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: var(--paper);
          color: var(--ink);
        }

        a {
          color: inherit;
        }

        .network-wrap {
          min-height: 100vh;
          position: relative;
          isolation: isolate;
          background: var(--paper);
          color: var(--ink);
        }

        .network-wrap::before {
          content: "";
          pointer-events: none;
          opacity: 0.2;
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.13'/%3E%3C/svg%3E");
          z-index: -1;
        }

        .masthead {
          position: relative;
          top: 20px;
          margin: 0 2vw;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid;
          border-bottom: 1px solid;
          z-index: 2;
        }

        .nameplate,
        .hero h1,
        .credential-card dd,
        .section-heading h2,
        .action-section h2 {
          font-family: "Arial Narrow", Impact, sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          font-stretch: 75%;
        }

        .nameplate {
          font-size: clamp(1.6rem, 2.3vw, 2.5rem);
          letter-spacing: -0.04em;
          text-decoration: none;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 28px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
          font-weight: 800;
        }

        nav a {
          text-decoration: none;
        }

        .nav-cta {
          color: var(--red);
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 2.1fr) minmax(300px, 0.9fr);
          gap: 3vw;
          min-height: calc(100vh - 102px);
          padding: 64px 2vw 24px;
        }

        .hero-message {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.68rem;
          font-weight: 800;
        }

        .hero h1 {
          margin: 3vh 0 4vh;
          max-width: 1000px;
          font-size: clamp(5.5rem, 10.7vw, 10.8rem);
          line-height: 0.76;
          letter-spacing: -0.075em;
        }

        .urgent-line {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 14px 0;
          border-top: 4px solid var(--red);
        }

        .flare {
          color: var(--red);
          font-size: 3.5rem;
          line-height: 1;
        }

        .urgent-line strong {
          color: var(--red);
          font-family: "Arial Narrow", Impact, sans-serif;
          text-transform: uppercase;
          font-size: 1.8rem;
        }

        .urgent-line p {
          margin: 3px 0 0;
          font-size: clamp(1.1rem, 1.65vw, 1.7rem);
          font-weight: 700;
        }

        .credential-card {
          display: flex;
          flex-direction: column;
          margin-top: 2vh;
          padding-left: 2vw;
          border-left: 1px solid;
        }

        dl {
          margin: 0;
        }

        dl > div {
          padding: 13px 0 16px;
          border-bottom: 1px solid;
        }

        dt {
          margin-bottom: 10px;
          font-size: 0.64rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .credential-card dd {
          margin: 0;
          font-size: clamp(1.65rem, 3vw, 3.2rem);
          line-height: 0.95;
        }

        .credential-card dl > div:last-child dd {
          font-size: clamp(1.1rem, 1.65vw, 1.7rem);
          line-height: 1.05;
        }

        .status {
          margin-top: auto;
          padding: 20px 4px;
          border-top: 1px solid;
          border-bottom: 1px solid;
          color: var(--red);
          text-transform: uppercase;
          font-family: "Arial Narrow", Impact, sans-serif;
          font-weight: 900;
          font-size: 1.3rem;
        }

        .status span {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 12px;
          border-radius: 50%;
          vertical-align: middle;
          background: var(--red);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          50% {
            opacity: 0.5;
          }
        }

        .primary-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 22px;
          background: var(--red);
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          font-family: "Arial Narrow", Impact, sans-serif;
          font-size: clamp(1.2rem, 1.65vw, 1.7rem);
          font-weight: 900;
          transition: all 0.2s;
        }

        .primary-button:hover,
        .primary-button:focus-visible {
          background: var(--ink);
          transform: translateY(-2px);
        }

        .primary-button span {
          font: 2rem Arial;
          transition: transform 0.2s;
        }

        .primary-button:hover span {
          transform: translate(6px);
        }

        .phone-link {
          margin-top: 12px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
        }

        .proof-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2vw;
          padding: 24px 2vw;
          background: var(--ink);
          color: var(--paper);
        }

        .proof-strip p {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .proof-strip strong {
          color: var(--red);
          text-transform: uppercase;
          font-size: 2rem;
        }

        .proof-strip span {
          max-width: 230px;
          font-size: 0.73rem;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .work-section,
        .story-section {
          padding: 100px 4vw;
          border-bottom: 1px solid;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 3vw;
          margin-bottom: 60px;
        }

        .section-heading > p {
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-size: 0.68rem;
          font-weight: 800;
        }

        .section-heading h2 {
          margin: 0;
          max-width: 1100px;
          font-size: clamp(3.2rem, 6.5vw, 7rem);
          line-height: 0.86;
          letter-spacing: -0.055em;
        }

        .role-list {
          border-top: 2px solid;
        }

        .role-list article {
          display: grid;
          grid-template-columns: 60px 1fr 1.4fr;
          align-items: center;
          gap: 2vw;
          padding: 26px 0;
          border-bottom: 1px solid;
        }

        .role-list span {
          color: var(--red);
          font-size: 0.7rem;
          font-weight: 800;
        }

        .role-list h3 {
          margin: 0;
          text-transform: uppercase;
          font-size: 1.5rem;
        }

        .role-list p {
          margin: 0;
          color: #45423d;
        }

        .work-note {
          margin: 50px 0 0 auto;
          max-width: 760px;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .story-section {
          background: #ded7ca;
        }

        .story-copy {
          margin-left: auto;
          max-width: 760px;
          font-size: 1.22rem;
          line-height: 1.65;
        }

        .story-copy blockquote {
          margin: 48px 0;
          padding: 5px 0 5px 26px;
          border-left: 6px solid var(--red);
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.15;
        }

        .action-section {
          padding: 100px 4vw;
          background: var(--red);
          color: #fff;
        }

        .action-section h2 {
          margin: 30px 0;
          font-size: clamp(4rem, 10vw, 10rem);
          line-height: 0.78;
          letter-spacing: -0.065em;
        }

        .action-section > p:not(.eyebrow) {
          max-width: 660px;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .actions {
          margin-top: 50px;
          display: flex;
          align-items: stretch;
          gap: 16px;
        }

        .dark {
          min-width: min(480px, 100%);
          background: var(--ink);
        }

        .secondary-button {
          display: flex;
          align-items: center;
          padding: 24px;
          border: 2px solid #fff;
          text-decoration: none;
          font-weight: 700;
        }

        .action-section .support-note {
          margin-top: 28px;
        }

        .support-note a {
          color: #fff;
          font-weight: 800;
          text-underline-offset: 4px;
        }

        footer {
          display: flex;
          justify-content: space-between;
          padding: 26px 2vw;
          background: var(--ink);
          color: var(--paper);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
        }

        footer p {
          margin: 0;
        }

        @media (max-width: 800px) {
          .masthead {
            top: 10px;
            height: 64px;
          }

          .masthead nav a:not(.nav-cta) {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            padding-top: 50px;
          }

          .hero h1 {
            font-size: clamp(4rem, 20vw, 7rem);
            line-height: 0.8;
          }

          .credential-card {
            padding: 20px 0;
            border-top: 1px solid;
            border-left: 0;
          }

          .status {
            margin-top: 20px;
          }

          .proof-strip,
          .section-heading {
            grid-template-columns: 1fr;
          }

          .role-list article {
            grid-template-columns: 35px 1fr;
          }

          .role-list article p {
            grid-column: 2;
          }

          .actions {
            flex-direction: column;
          }

          .secondary-button {
            justify-content: center;
          }

          footer {
            flex-direction: column;
            gap: 10px;
          }

          .work-section,
          .story-section,
          .action-section {
            padding: 72px 6vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .status span {
            animation: none;
          }

          * {
            transition: none !important;
          }
        }
      `}</style>

      <main className="network-wrap">
        <header className="masthead">
          <a className="nameplate" href="#top">
            Michael Anticoli
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">What I can do</a>
            <a href="#story">Why I’m asking</a>
            <a
              className="nav-cta"
              href="mailto:michaelanticoli@gmail.com?subject=Work%20lead%20for%20Michael&body=Hi%20Michael%2C%0A%0AI%20may%20have%20a%20work%20lead%20for%20you%3A%0A%0ACompany%20or%20person%3A%0ARole%20or%20project%3A%0ABest%20way%20to%20follow%20up%3A%0A"
            >
              Send a lead
            </a>
          </nav>
        </header>

        <section className="hero" id="top">
          <div className="hero-message">
            <p className="eyebrow">A public dispatch · Los Angeles · July 2026</p>
            <h1>
              OK Los Angeles,
              <br />
              now you listen
              <br />
              to me.
            </h1>
            <div className="urgent-line">
              <span className="flare" aria-hidden="true">
                ✹
              </span>
              <div>
                <strong>Available now</strong>
                <p>I need work. Not someday. In the next three weeks.</p>
              </div>
            </div>
          </div>

          <aside className="credential-card" aria-label="Michael’s availability">
            <dl>
              <div>
                <dt>Name</dt>
                <dd>Michael Anticoli</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Los Angeles</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>15+ years</dd>
              </div>
              <div>
                <dt>Strengths</dt>
                <dd>Hospitality + brand / creative strategy</dd>
              </div>
            </dl>

            <p className="status">
              <span /> Open availability
            </p>

            <a
              className="primary-button"
              href="mailto:michaelanticoli@gmail.com?subject=Work%20lead%20for%20Michael&body=Hi%20Michael%2C%0A%0AI%20may%20have%20a%20work%20lead%20for%20you%3A%0A%0ACompany%20or%20person%3A%0ARole%20or%20project%3A%0ABest%20way%20to%20follow%20up%3A%0A"
            >
              Send Michael a lead <span>→</span>
            </a>

            <a className="phone-link" href="tel:+19733498750">
              or call 973-349-8750
            </a>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Quick facts">
          <p>
            <strong>15+</strong>
            <span>years serving people &amp; building brands</span>
          </p>
          <p>
            <strong>Open</strong>
            <span>to full-time, part-time, contract, or shift work</span>
          </p>
          <p>
            <strong>Now</strong>
            <span>available days, nights, weekends &amp; immediately</span>
          </p>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p>01 / Put me to work</p>
            <h2>
              I’m not looking for perfect.
              <br />
              I’m looking for useful.
            </h2>
          </div>

          <div className="role-list">
            <article>
              <span>01</span>
              <h3>Hospitality</h3>
              <p>Bartending · Serving · Barista · FOH · Events</p>
            </article>
            <article>
              <span>02</span>
              <h3>Creative</h3>
              <p>Brand strategy · Copywriting · Content · Campaigns</p>
            </article>
            <article>
              <span>03</span>
              <h3>Operations</h3>
              <p>Administrative · Coordination · Customer support</p>
            </article>
            <article>
              <span>04</span>
              <h3>Immediate work</h3>
              <p>Food prep · Stocking · Janitorial · Local gigs</p>
            </article>
            <article>
              <span>05</span>
              <h3>Independent services</h3>
              <p>Tarot · Astrology · Creative consulting · Custom music</p>
            </article>
          </div>

          <p className="work-note">
            If the work is honest, paid, and based in the greater Hollywood area—or
            reasonably accessible elsewhere in Los Angeles—I want to hear about it.
            Remote opportunities are welcome, too.
          </p>
        </section>

        <section className="story-section" id="story">
          <div className="section-heading">
            <p>02 / The honest version</p>
            <h2>
              Los Angeles has let me reinvent myself for thirteen years. I’m fighting
              to stay.
            </h2>
          </div>

          <div className="story-copy">
            <p>
              I have applied to hundreds of positions across hospitality, brand
              strategy, administration, customer service, and operations. I have
              taken on paid research projects and one-off gigs, sold belongings, and
              patched together whatever work I could find. The silence has been
              relentless.
            </p>
            <p>
              I’m not asking anyone to rescue me. I’m asking my network to notice
              me—and connect me to someone who needs a capable, adaptable
              professional who can start now.
            </p>
            <blockquote>
              “I didn’t come this far just to come this far. I’m tired, but I’m still
              here—and I still believe Los Angeles has one more door left to open.”
            </blockquote>
            <p>
              I know how to work a packed room, steady a difficult guest, shape a
              campaign, write the line, organize the moving pieces, and show up with
              care. I will also prep food, stock shelves, clean, carry, coordinate,
              or learn something new. No role is beneath me.
            </p>
          </div>
        </section>

        <section className="action-section">
          <p className="eyebrow">The ask is simple</p>
          <h2>
            Know someone
            <br />
            who needs someone?
          </h2>
          <p>
            Send me the name, the opening, or the introduction. A lead is enough to
            change the trajectory.
          </p>

          <div className="actions">
            <a
              className="primary-button dark"
              href="mailto:michaelanticoli@gmail.com?subject=Work%20lead%20for%20Michael&body=Hi%20Michael%2C%0A%0AI%20may%20have%20a%20work%20lead%20for%20you%3A%0A%0ACompany%20or%20person%3A%0ARole%20or%20project%3A%0ABest%20way%20to%20follow%20up%3A%0A"
            >
              Send Michael a lead <span>→</span>
            </a>

            <a className="secondary-button" href="mailto:michaelanticoli@gmail.com">
              michaelanticoli@gmail.com
            </a>
          </div>

          <p className="support-note">
            If you’d simply like to offer a little support while I keep searching,
            you can{" "}
            <a
              href="https://buymeacoffee.com/michaelantq"
              target="_blank"
              rel="noreferrer"
            >
              buy me a coffee ↗
            </a>
            . It’s deeply appreciated, never expected.
          </p>
        </section>

        <footer>
          <p>Michael Anticoli · Los Angeles, California</p>
          <p>
            Available immediately · <a href="tel:+19733498750">973-349-8750</a> ·{" "}
            <a
              href="https://buymeacoffee.com/michaelantq"
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
