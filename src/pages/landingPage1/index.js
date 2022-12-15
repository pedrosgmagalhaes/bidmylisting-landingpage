import React from "react"
import styles from "./landingPage1.module.scss"
import HouseCallToAction from "../../assets/images/house_calltoaction.png"
import { Container, InputGroup, Form, FormControl, Button } from 'react-bootstrap'
import Header from "../../components/header"
import MapIcon from "../../assets/images/map_icon.svg"
import Mark from "../../assets/images/mark.svg"

function LandingPage() {
  return (
    <main id={styles.LandingPage}>
      <section className={styles.callToActionSection}>
        <Header />
        <h1 className="mt-4">Get Paid Cash to Meet Your Match</h1>
        <Container className="mt-2">
          <img src={HouseCallToAction} alt="BidMyListing matches you with top local real estate agents ready to pay cash upfront to represent your home sale." />
          <div className="mt-5">
            <h2>Welcome to the smartest way to sell your home. BidMyListing matches you with top local real estate agents ready to pay cash upfront to represent your home sale.</h2>
          </div>
        </Container>
        <Container className="mt-2">
          <Form>
            <div className="mt-4">
              <InputGroup className={styles.inputGroup}>
                <InputGroup.Text className={styles.inputIcon}>
                  <img src={MapIcon} alt="Map Icon" />
                </InputGroup.Text>
                <FormControl placeholder="Enter your home address" className={styles.input} />
              </InputGroup>
              <div className="mt-2">
                <Button
                  variant="primary"
                  className={styles.buttonCallToAction}
                >
                  Let's go
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </section>
      <section className={styles.testimonialsSection}>
        <div className={styles.description}>
          <img src={Mark} alt="Description" />
          <p>
            Receiving cash upfront when I signed my listing agreement was a game-changer.
            I was introduced virtually to multiple agent options and quickly made an informed decision on who I
            wanted to work with. I knew that any agent I picked would be committed because of the bidding process.
          </p>
        </div>
        <div className="mt-2 text-center">
          <span className="text-muted">— Home Seller in Florida</span>
        </div>
        <div className={styles.customerReviews}>
          TESTE
        </div>
      </section>
    </main>
  )
}

export default LandingPage
