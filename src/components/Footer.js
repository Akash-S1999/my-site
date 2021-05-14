import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Akash Singh</h1>
          <PText>
            A freelance web designer and developer from Kolkata, India. I always
            make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                link: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                link: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                link: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'imakashsingh2410@gmail.com',
                link: 'mailto:imakashsingh2410@gmail.com',
              },
              {
                title: 'Kolkata, West Bengal, India',
                link: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                link: 'https://www.facebook.com/akkuishere2410/',
              },
              {
                title: 'Twitter',
                link: 'https://twitter.com/Akku_2410',
              },
              {
                title: 'Instagram',
                link: 'https://instagram.com/connectedakash2410',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Akash Singh | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.instagram.com/connectedakash2410"
            >
              Akash Sngh
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
