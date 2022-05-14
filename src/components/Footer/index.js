import React from 'react';

import {FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap> 
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to= '/signin'>How it works</FooterLink>
                            <FooterLink to= '/signin'>testimonials</FooterLink>
                            <FooterLink to= '/signin'>careers</FooterLink>
                            <FooterLink to= '/signin'>Investors</FooterLink>
                            <FooterLink to= '/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to= '/signin'>Contact</FooterLink>
                            <FooterLink to= '/signin'>Support</FooterLink>
                            <FooterLink to= '/signin'>Destinations</FooterLink>
                            <FooterLink to= '/signin'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to= '/signin'>Submit Videos</FooterLink>
                            <FooterLink to= '/signin'>Ambassardors</FooterLink>
                            <FooterLink to= '/signin'>Agency</FooterLink>
                            <FooterLink to= '/signin'>Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to= '/signin'>Instagram</FooterLink>
                            <FooterLink to= '/signin'>Facebook</FooterLink>
                            <FooterLink to= '/signin'>Youtube</FooterLink>
                            <FooterLink to= '/signin'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;