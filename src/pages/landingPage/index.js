import React from 'react';
import {
  Container, Form, Image, Row, Col,
} from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';

import styles from './landingPage.module.scss';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import Footer from '../../components/footer';
import TransparentButton from '../../components/transparentButton';
import AgentTestimonial from '../../components/agentTestimonial';
import ListingContainer from '../../components/listingContainer';

import {
  HouseCallToAction,
  HouseCallToActionWeb,
  MapIcon,
  Mark,
  Stars,
  GoogleIcon,
  ArrowRightIcon,
  ListingIcon,
  GetSmartedIcon,
  PickWinnerIcon,
  Journals,
  JournalsWeb,
  PriceIcon,
  GetPaidIcon,
  Arrow,
  VideoSample,
  AvatarReca,
  HouseListing,
  AvatarSteveDavis,
  AvatarBillieAnn,
  TrustPilot,
} from './images';

function LandingPage() {
  const welcomeText = 'Welcome to the smartest way to sell your home. BidMyListing matches you with top local real estate agents ready to pay cash upfront to represent your home sale.';

  return (
    <>
      <Header />
      <main id={styles.LandingPage}>
        <section className={styles.callToActionSection}>
          <Container className={styles.callToActionSectionContainer}>
            <Row>
              <Col md={6} sm={12}>
                <h1 className="mt-4">Get Paid Cash to Meet Your Match</h1>
                {isBrowser && (
                  <>
                    <h2 className="mt-4 text-justify">
                      {welcomeText}
                    </h2>
                    <Form className={styles.callToActionSectionForm}>
                      <SearchInput icon={MapIcon} text="Enter your home address" />
                    </Form>
                  </>
                )}
              </Col>
              <Col md={6} sm={12} className={styles.imageActionSection}>
                <Image
                  src={isMobile ? HouseCallToAction : HouseCallToActionWeb}
                  className={styles.imageAction}
                  alt="BidMyListing matches you with top local real estate agents ready to
                pay cash upfront to represent your home sale."
                />
                {isMobile && (
                  <>
                    <h2 className="mt-4 text-justify">
                      {welcomeText}
                    </h2>
                    <Form className={styles.callToActionSectionForm}>
                      <SearchInput icon={MapIcon} text="Enter your home address" />
                    </Form>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.testimonialsSection}>
          <div className={styles.description}>
            <div className="d-flex align-items-start justify-content-start">
              <img src={Mark} alt="Description" />
              <p>
                Receiving cash upfront when I signed my listing agreement was a game-changer.
                I was introduced virtually to multiple agent options and quickly made an
                informed decision on who I wanted to work with. I knew that any agent I picked
                would be committed because of the bidding process.
              </p>
            </div>
          </div>
          <div className={styles.testimonialsSectionSubTitle}>
            <span className="text-muted">— Home Seller in Florida</span>
          </div>
          <Container className={styles.customerReviewsSection}>
            <Row>
              {isBrowser && <Col className={styles.customerReviewsHr}><hr /></Col>}
              <Col md={6} sm={12}>
                <div className={styles.customerReviews}>
                  <div className={styles.customerReviewsTitle}>
                    <span>
                      <Image src={Stars} alt="Stars review" />
                    </span>
                    <span className={styles.reviewNumber}>
                      4.8
                    </span>
                  </div>
                  <div className={styles.customerReviewsText}>
                    <span>
                      <Image src={GoogleIcon} alt="Google icon" />
                    </span>
                    <span>
                      Average of 290+ customer reviews
                    </span>
                  </div>
                </div>
                {isBrowser && (
                  <div className="d-flex justify-content-center align-items-center">
                    <Image src={TrustPilot} alt="Trustpilot" />
                  </div>
                )}
              </Col>
              {isBrowser && <Col className={styles.customerReviewsHr}><hr /></Col>}
            </Row>
          </Container>
        </section>

        <section className={styles.getStarted}>
          <Container>
            <span className="text-left">
              <h3>Getting Started with BidMyListing® Is Simple</h3>
            </span>
            <hr className="mt-4" />

            {/* Create Your Listing box */}
            <ListingContainer
              icon={ListingIcon}
              title="Create Your Listing"
              description=" Top real estate agents from our 10,000+ agent network bid for the right
          to sell your property. Each bid includes an upfront cash offer, commission rate, marketing plan
          for your property, and more."
            />
            <hr className="mt-4" />

            {/* Get Smart Matched  */}
            <ListingContainer
              icon={GetSmartedIcon}
              title="Get Smart Matched"
              description="Tell us about your home and when you’re looking to sell, then
          connect with your white glove listing specialist to activate your listing."
            />
            <hr className="mt-4" />

            {/* Pick a Winner  */}
            <ListingContainer
              icon={PickWinnerIcon}
              title="Pick a Winner"
              description="Review the bids and find your perfect agent. Choose the highest cash offer,
            lowest commission rate, shortest term – whatever works best for you."
            />
            <hr className="mt-4" />

            {/* Get Paid  */}
            <ListingContainer
              icon={GetPaidIcon}
              title="Get Paid"
              description="Meet with your agent, sign a listing agreement, and get paid! Enjoy the extra
            money in your pocket while you work with your agent to sell your home."
            />
            <hr className="mt-4" />
          </Container>

        </section>

        <section className={styles.howItWorks}>
          <Container className="p-3">
            <Image className="mt-5 mb-3" src={VideoSample} alt="How it works" />
          </Container>
        </section>

        <section id={styles.workTopAgents}>
          <Container>
            <h1 className="mt-5 mx-4">Work with Top Agents in Encinitas</h1>
            <Row>
              <Col md={4} sm={12}>
                <span className="mt-3" />
                <AgentTestimonial
                  avatar={AvatarReca}
                  name="AirReca Weaver"
                  city="Chicago, IL"
                  text="I’m a hard worker and
          I also work with one of the top franchises that has the highest support
          and marketing for selling your home!"
                />
              </Col>
              <Col md={4} sm={12}>
                <span className="mt-3" />
                <AgentTestimonial
                  avatar={AvatarBillieAnn}
                  name="Billie Ann Figura"
                  city="Myrtle Beach, SC"
                  text="I am the agent for the job because I am very tech savvy. Meaning
                I know how to reach buyers in and out of this market. My team has billed $50 million in this
                market this year. I reach people through open house advertising.
                I also have extensive negotiating skills through training and experience."
                />
              </Col>
              <Col md={4} sm={12}>
                <span className="mt-3" />
                <AgentTestimonial
                  avatar={AvatarSteveDavis}
                  name="Steven Davis"
                  city="Beverly Hills, CA"
                  text="My name is Steven Davis, I'm a Luxury Estates Director at The Agency in Beverly Hills, an
                innovative and collaborative real estate brokerage with an exceptional history and bright future. Founded by top agents and industry leaders,
                the brokerage represents a portfolio of properties across the world's prime markets and
                celebrated destinations."
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section id={styles.findPerfectAgent}>
          <Container className="mt-5 p-3">
            <h3>Get Paid Upfront to Find Your Perfect Agent</h3>
            <Row>
              <Col md={8} xs={12}>
                <div className="d-flex justify-content-center align-items-center">
                  <Image
                    className={styles.findPerfectAgentImage}
                    src={HouseListing}
                    alt="Get Paid Upfront to Find Your Perfect Agent"
                  />
                </div>
              </Col>
              <Col md={4} xs={12} className={styles.getPaidUpFront}>
                <div className="d-flex flex-direction-row align-items-center pt-2">
                  <span className="d-flex align-items-center">
                    <Image height="22px" src={PriceIcon} alt="Get Paid Upfront" />
                  </span>
                  <div className={styles.findPerfectAgentTitle}>
                    <span className="px-2">
                      $1,440
                    </span>
                  </div>
                </div>
                <div>
                  <span className={styles.textMuted}>Homeowner Received at List</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                  <span className={styles.findPerfectAgentSubTitle}>10 Bids</span>
                  <span className={styles.textMuted}>Received</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                  <span className={styles.findPerfectAgentSubTitle}>$589,000</span>
                  <span className={styles.textMuted}>Listed for</span>
                  <hr />
                </div>
                <TransparentButton text="Next Listing" icon={ArrowRightIcon} />
              </Col>
            </Row>
          </Container>
        </section>

        <section id={styles.findAgentNextYou}>
          <Container className={styles.findAgentNextYouContainer}>
            <div className="mt-3 d-flex align-items-center justify-content-center pt-3">
              <h3>Find a Top Real Estate Agent Near You</h3>
            </div>
            <Image src={Arrow} alt="Enter your home address" />
            <div className="mx-2">
              <SearchInput icon={MapIcon} text="Enter your home address" />
            </div>
          </Container>
        </section>

        <section id={styles.asSeenIn}>
          <Container className="mt-5">
            <h3 className="text-center">As Seen In</h3>
            <div className="mt-4">
              <Image src={isMobile ? Journals : JournalsWeb} alt="As Seen In" />
            </div>
          </Container>
        </section>

        <Footer />

      </main>
    </>
  );
}

export default LandingPage;
