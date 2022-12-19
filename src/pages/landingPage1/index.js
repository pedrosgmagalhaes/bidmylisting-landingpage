import React from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import styles from './landingPage1.module.scss';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import BlueButton from '../../components/blueButton';
import Footer from '../../components/footer';
import TransparentButton from '../../components/transparentButton';
import AgentTestimonial from '../../components/agentTestimonial';
import ListingContainer from '../../components/listingContainer';

import HouseCallToAction from '../../assets/images/house_calltoaction.png';
import MapIcon from '../../assets/images/map_icon.svg';
import Mark from '../../assets/images/mark.svg';
import Stars from '../../assets/images/stars.svg';
import GoogleIcon from '../../assets/images/googleIcon.svg';
import ArrowRightIcon from '../../assets/images/arrowRight.svg';
import ListingIcon from '../../assets/images/listingIcon.svg';
import GetSmartedIcon from '../../assets/images/getSmartedIcon.svg';
import PickWinnerIcon from '../../assets/images/pickWinnerIcon.svg';
import Journals from '../../assets/images/journals.svg';
import PriceIcon from '../../assets/images/iconPrice.svg';
import GetPaidIcon from '../../assets/images/getPaidIcon.svg';
import Arrow from '../../assets/images/arrow.svg';
import VideoSample from '../../assets/images/videoPlaceHolder.png';
import AvatarReca from '../../assets/images/avatarAirRecaWeaver.png';
import HouseListing from '../../assets/images/houseListing.png';
import AvatarSteveDavis from '../../assets/images/avatarSteveDavis.png';
import AvatarBillieAnn from '../../assets/images/avatarBillieAnn.png';

function LandingPage() {
  return (
    <main id={styles.LandingPage}>
      <section className={styles.callToActionSection}>
        <Header />
        <h1 className="mt-4 text-center">Get Paid Cash to Meet Your Match</h1>
        <Container className="mt-2 container d-flex flex-column justify-content-center">
          <img src={HouseCallToAction} alt="BidMyListing matches you with top local real estate agents ready to pay cash upfront to represent your home sale." />
          <div className="mt-5">
            <h2 className="mt-4 text-justify">Welcome to the smartest way to sell your home. BidMyListing matches you with top local real estate agents ready to pay cash upfront to represent your home sale.</h2>
          </div>
        </Container>
        <Container className="mt-2">
          <Form>
            <div className="mt-4">
              <SearchInput icon={MapIcon} text="Enter your home address" />
              <div className="mt-2">
                <BlueButton text="Let's go" />
              </div>
            </div>
          </Form>
        </Container>
      </section>
      <section className={styles.testimonialsSection}>
        <div className={styles.description}>
          <div className="d-flex align-items-start justify-content-start">
            <img src={Mark} alt="Description" />
            <p>
              Receiving cash upfront when I signed my listing agreement was a game-changer.
              I was introduced virtually to multiple agent options and quickly made an
              informed decision on who I
              wanted to work with. I knew that any agent I picked would be committed because of the
              bidding process.
            </p>
          </div>
        </div>
        <div className="mt-2 text-center">
          <span className="text-muted">— Home Seller in Florida</span>
        </div>
        <div className={styles.customerReviews}>
          <div className={styles.customerReviewsTitle}>
            <span>
              <img src={Stars} alt="Stars review" />
            </span>
            <span className={styles.reviewNumber}>
              4.8
            </span>
          </div>
          <div className={styles.customerReviewsText}>
            <span>
              <img src={GoogleIcon} alt="Google icon" />
            </span>
            <span>
              Average of 290+ customer reviews
            </span>
          </div>
        </div>
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
        <Container>
          <img className="mt-5 mb-5" src={VideoSample} alt="How it works" />
        </Container>
      </section>

      <section id={styles.workTopAgents}>
        <Container>
          <h1 className="mt-5 mx-3">Work with Top Agents in Encinitas</h1>
          <div className="mt-5">
            <div className="mt-3">
              <AgentTestimonial
                avatar={AvatarReca}
                name="AirReca Weaver"
                city="Chicago, IL"
                text="I’m a hard worker and
          I also work with one of the top franchises that has the highest support
          and marketing for selling your home!"
              />
            </div>
            <div className="mt-3">
              <AgentTestimonial
                avatar={AvatarBillieAnn}
                name="Billie Ann Figura"
                city="Myrtle Beach, SC"
                text="I am the agent for the job because I am very tech savvy. Meaning
                I know how to reach buyers in and out of this market. My team has billed $50 million in this
                market this year. I reach people through open house advertising.
                I also have extensive negotiating skills through training and experience."
              />
            </div>
            <div className="mt-3">
              <AgentTestimonial
                avatar={AvatarSteveDavis}
                name="Steven Davis"
                city="Beverly Hills, CA"
                text="My name is Steven Davis, I'm a Luxury Estates Director at The Agency in Beverly Hills, an
                innovative and collaborative real estate brokerage with an exceptional history and bright future. Founded by top agents and industry leaders,
                the brokerage represents a portfolio of properties across the world's prime markets and
                celebrated destinations."
              />
            </div>
          </div>
        </Container>
      </section>

      <section id={styles.findPerfectAgent}>
        <Container className="mt-5">
          <h3>Get Paid Upfront to Find Your Perfect Agent</h3>
          <div className="d-flex justify-content-center align-items-center">
            <img src={HouseListing} alt="Get Paid Upfront to Find Your Perfect Agent" />
          </div>
          <div className="d-flex flex-direction-row align-items-center pt-2">
            <span className="d-flex align-items-center">
              <img height="22px" src={PriceIcon} alt="Get Paid Upfront" />
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
        </Container>
      </section>

      <section id={styles.findAgentNextYou}>
        <Container>
          <div className="mt-3 d-flex align-items-center justify-content-center pt-3">
            <h3 className="text-center pt-2">Find a Top Real Estate Agent Near You</h3>
          </div>
          <Image src={Arrow} alt="Enter your home address" />
          <div className="mx-2">
            <SearchInput icon={MapIcon} text="Enter your home address" />
          </div>
          <div className="mx-2 mt-2">
            <BlueButton text="Let's go" />
          </div>
        </Container>
      </section>

      <section id={styles.asSeenIn}>
        <Container className="mt-5">
          <h3 className="text-center">As Seen In</h3>
          <div className="mt-4">
            <Image src={Journals} alt="As Seen In" />
          </div>
        </Container>
      </section>

      <Footer />

    </main>
  );
}

export default LandingPage;
