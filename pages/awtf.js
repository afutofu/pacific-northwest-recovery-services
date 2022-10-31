import Head from "next/head";
import Link from "next/link";

import Banner from "../components/Banner";
import TeamSelector from "../components/TeamSelector";

const team = [
  {
    name: "Lynn Dalsing",
    title: "Executive Director, Billing Coordinator, Owner, Coordinator",
    pic: "/images/awtf-staff-1.jpg",
    desc: "Ms. Dalsing has worked in Behavioral Health since 2015 until current and has been in Medical Billing in Washington state from 1992 to currently. Ms. Dalsing has a Bachelors in Business Management with expertise in Medical Billing, HIPPA Compliance and WAC Requirements. Ms. Dalsing opened A Walk To Freedom Counseling with the main purpose of helping individuals find peace and happiness when battling Substance Use Disorder and/or Mental Health issues.",
  },
  {
    name: `Ryan "Allyson" Noel`,
    title: "Substance Use Disorder Supervisor",
    pic: "/images/awtf-staff-2.jpg",
    desc: "Allyson Noel brings peace and calmness to our office, she has been in the addiction field since 2013, she loves serving the clients and seeing there lives transform. She has been in recovery herself since 2011.",
  },
  {
    name: "Michael Preston",
    title: "Substance Use Disorder Professional Trainee, Coordinator, Owner",
    pic: "/images/awtf-staff-3.jpg",
    desc: "Mr. Preston has been working in the behavioral Health for 6 years. He not only teaches but practices Mindfulness himself while on his own recovery journey. He is a Certified Peer Support as well as a Substance Use Disorder Professional Trainee. He has work as a manager in recovery homes and has worked with parents of addicts to help unite families. Mr. Preston&apos;s goal is to help show people that are struggling recovery is possible and there is a way out of pain and suffering.",
  },
];

const WalkPage = () => {
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
        <meta name="robots" content="index, follow" />

        {/* <!--OG Meta Tags --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pacific Northwest Recovery Services | A Walk To Freedom Counselling"
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
          content="Pacific Northwest Recovery Services | A Walk To Freedom Counselling"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta
          name="twitter:title"
          content="Pacific Northwest Recovery Services | A Walk To Freedom Counselling"
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
          Pacific Northwest Recovery Services | A Walk To Freedom Counselling
        </title>
      </Head>
      <section id="awtf">
        <img
          className="bg-image"
          src={"/images/awtf-page-bg.jpg"}
          alt="path going through green grass and forest into the distance."
        />
        <Banner>
          <p>
            <strong>January 1st</strong> - Our brand new PHP home for those who
            are in need of more structured environment.
          </p>
        </Banner>
        <header>
          <Link href="/">
            <a className="back-button">Back</a>
          </Link>
          <div className="icons">
            <a
              href="https://facebook.com/AWalkToFreedomCounseling"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/icons/iconmonstr-facebook.png"} alt="facebook logo" />
            </a>
            <a
              href="https://instagram.com/AwalkTo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={"/icons/iconmonstr-instagram.png"}
                alt="instagram logo"
              />
            </a>
          </div>
          <img
            className="title"
            src={"images/awtf-logo.png"}
            alt="A Walk To Freedom"
          />
          <p className="phone-number">Tel: +1 (253) 939-2211</p>
        </header>
        <div className="container about">
          {/* <h3>About Us</h3> */}
          <p>
            We help support the health, well-being and healing of individuals
            and families by making a difference in the lives of the people we
            interact with each day. If you’re interested in becoming{" "}
            <strong>clean</strong> and <strong>sober</strong>,{" "}
            <strong>happier</strong>, and find some <strong>peace</strong>, get
            started and please get in contact today!
          </p>
          <a
            id="awtf-button"
            href="https://awalktofreedom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full information and services here
          </a>
        </div>
        <div className="container services">
          <h3>Services We Provide</h3>
          <ul>
            <li>Intensive Outpatient</li>
            <li>Relapse Prevention</li>
            <li>Outpatient</li>
            <li>Alcohol, Drug information School</li>
            <li>Aftercare</li>
            <li>Consumer Awareness</li>
            <li>Deferred Prosecution</li>
            <li>Family Law Assessments</li>
            <li>Drug and Alcohol Assessments</li>
            <li>Housing Referrals</li>
            <li>Employment Referrals</li>
            <li>Peer Support</li>
            <li>Crisis Help</li>
            <li>DUI Assessments</li>
            <li>Mental Health Counselling</li>
          </ul>
        </div>
        <div className="container team">
          <h3>Meet Our Team</h3>
          <TeamSelector team={team} />
          <div className="separator" />
          <a
            id="awtf-button"
            href="https://awalktofreedom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full information and services here
          </a>
        </div>
      </section>
    </>
  );
};

export default WalkPage;
