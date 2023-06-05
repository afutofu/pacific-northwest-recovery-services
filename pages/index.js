import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  const [showAwtf, setShowAwtf] = useState(false);
  const [showAahaa, setShowAahaa] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Site Meta Tags --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Pacific Northwest Recovery Services. After decades of living in this space and finding spaces to heal, A Walk To Freedom and Alcoholics & Addicts Helping Alcoholics & Addicts (AAHAA) have decided to come together in order to provide all these comprehensive wrap-around services for healing and growth for the men and women who are looking for real change."
        />
        <link rel="canonical" href="https://awalktofreedom.com" />
        <link rel="canonical" href="https://www.aahaasupportivehousing.com" />
        <meta name="robots" content="index, follow" />

        {/* <!--OG Meta Tags --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pacific Northwest Recovery Services"
        />
        <meta
          property="og:description"
          content="After decades of living in this space and finding spaces to heal, we have gathered the experience to provide services for healing and growth for the men and women who are looking for real change."
        />
        <meta
          property="og:image"
          content="https://www.aahaasupportivehousing.com/wp-content/uploads/2020/02/shutterstock_728707039-1-scaled.jpg"
        />
        <meta property="og:url" content="PERMALINK" />
        <meta
          property="og:site_name"
          content="Pacific Northwest Recovery Services"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta
          name="twitter:title"
          content="Pacific Northwest Recovery Services"
        />
        <meta
          name="twitter:description"
          content="After decades of living in this space and finding spaces to heal, we have gathered the experience to provide services for healing and growth for the men and women who are looking for real change."
        />
        <meta
          name="twitter:image"
          content="https://www.aahaasupportivehousing.com/wp-content/uploads/2020/02/shutterstock_728707039-1-scaled.jpg"
        />

        <title>
          Pacific Northwest Recovery Services | Recovery services for healing
          and growth for the men and women who are looking for real change.
        </title>
      </Head>
      <section id="home">
        <div className="home-banner">
          <div className="content">
            <h2>Pacific Northwest Recovery Services</h2>
            <p>
              After decades of living in this space and finding spaces to heal,
              A Walk To Freedom and AAHAA have decided to come together in order
              to provide all these comprehensive wrap-around services for{" "}
              <strong>healing</strong> and <strong>growth</strong> for the men
              and women who are looking for <strong>real change</strong>.
            </p>
          </div>
        </div>
        <Link href="/aahaa">
          <a
            id="aahaa-container"
            style={{width:'100%'}}
            onMouseOver={() => setShowAahaa(true)}
            onMouseLeave={() => setShowAahaa(false)}
          >
            <img
              src={"/images/aahaa-home-bg.jpg"}
              alt="person opening up to sunlight and embracing change. letting go of their previous problems and opening up to other people."
              className="background-image"
            />
            <img id="aahaa-logo" src={"/images/aahaa-logo.png"} alt="AAHAA" />
            {/* <div className="container"> */}
            <div className={`content  ${showAahaa ? "visible" : "visible"}`}>
              {/* <h3 className="quote">
            “A new way of life is possible, one just has to be willing to try
            something new and have a willingness to embrace change.”
          </h3> */}
              <div className="services">
                <h3>Services We Provide</h3>
                <ul>
                  <li>Individual Counseling Services</li>
                  <li>Life Skills Training & Seminars</li>
                  <li>Case Management</li>
                  <li>Food</li>
                  <li>Utilities</li>
                  <li>Local & Long Distance Telephone</li>
                  <li>Internet Access</li>
                  <li>Laundry</li>
                  <li>Furnishings (including bed & dressers)</li>
                  <li>Linen and Bath</li>
                  <li>Easy Access to Public Transportation</li>
                  <li>Therapeutic Classes</li>
                  <li>Work Readiness Programs</li>
                  <li>Structured and Supportive Clean and Sober Environment</li>
                </ul>
              </div>
              <h3 className="quote">&quot;Compassion with accountability&quot;</h3>
            </div>
            {/* </div> */}
          </a>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
