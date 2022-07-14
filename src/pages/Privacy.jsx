import React from "react";
import { Card, Container } from "react-bootstrap";

const Privacy = () => {
  return (
    <Container>
      <Card>
        <Card.Header as="h3">Privacy Policy</Card.Header>
        <Card.Body>
          <ol>
            <h5>
              <li>Who does this privacy policy apply to?</li>
            </h5>
            <p>
              This privacy policy applies to each consumer who visits the
              Fintech website or otherwise provides us with personal
              information, even if the user does not hire our services.
            </p>
            <h5>
              <li>What personal information do we collect?</li>
            </h5>
            <p>
              We collect and retain information about your actions on this
              website. In order to provide our services to you, We may obtain
              your full name, your e-mail address or your phone numbers, as
              required.
              <br />
              <br />
              In addition, we may obtain information about you from other third
              parties in connection with providing you with the services that
              you request and to help us better serve our customers. For
              example, we may obtain information about you from sources such as
              public record vendors, technology providers, the Internet and
              other sources.
            </p>
            <h5>
              <li>
                Do we collect information about your visit to this website,
                including using cookies and other technologies?
              </li>
            </h5>
            <p>
              We retain, on a long-term basis, personally identifiable
              information about you if you volunteer information to us online
              (for example filling a contact form). Doing so permits us to
              understand and accommodate your online preferences and manage your
              relationship with us.
              <br />
              <br />
              We also use various technologies to collect and retain information
              about visits to our website. This website, for example, may use
              first and third party cookies. Cookies are small bits of computer
              code that we or third parties with whom we have a relationship may
              install on your computer when it accesses our website. <br />
              <br />
              Please understand that if you refuse to accept cookies from our
              website, you may not be able to use some portions of the website.
              <br />
              <br />
              Our website also may collect information when someone visits the
              website. For example, as you browse our website we may collect
              information about your visit, but not identifiers such as your
              name, phone number or e-mail address. Via Web server logs, for
              example, we may monitor statistics such as: the number of people
              that visit our site, the date and time of the visit, geographic
              location information about the visitor, which page(s) are visited
              on our site, from which domain visitors come (e.g., google.com,
              hotmail.com, etc.), and the type of Internet browsers people use
              to visit the site. We also may use tools that allow us to monitor
              which links visitors are using, what content on our site is being
              viewed, or how a visitor is accessing content through the site.
              <br />
              <br />
              We may also use other third-party services to assist us in
              analyzing the activity of visitors, users or customers to our
              website(s) that rely on cookies and other technologies. This may
              collect information about you such as whether you are a returning
              visitor, without collecting personally identifying information
              such as your name. <br />
              <br />
              Lastly, our website may include links to third party websites. We
              do not control the information, through cookies or otherwise, that
              third parties may obtain from the user if the user follows links
              to visit their websites, nor do we control their use and sharing
              of that personal information.
            </p>
            <h5>
              <li>How do we use the information that we collect from you?</li>
            </h5>
            <p>
              We use personal information of users for our everyday business
              purposes, such as quality assurance and testing the website.
              Further, we use your information to market our services to you and
              to serve our services in a better way.
            </p>
            <h5>
              <li>What information do we share?</li>
            </h5>
            <p>
              We do not share personally identifiable information about you with
              any third parties.
            </p>
            <h5>
              <li>Do you have any question?</li>
            </h5>
            <p>
              If you have questions or comments or queries about our privacy
              policy, please contact us at{" "}
              <a href="mailto:info@fintechindia.net ">info@fintechindia.net </a>
            </p>
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Privacy;
