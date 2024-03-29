import React from 'react';


import { animateScroll as scroll } from 'react-scroll';


import {FaFacebook, 
        
        FaInstagram, 
        
        FaLinkedin} from 'react-icons/fa'


import {FooterContainer,
        
        FooterWrap,
        
        FooterLinksContainer,
        
        FooterLinksWrapper, 
        
        FooterLinkItems,
    
        FooterLinkTitle,
    
        FooterLink,
    
        SocialMedia,
        
        SocialMediaWrap,
    
        SocialLogo,
    
        WebsiteRights,
    
        SocialIcons,
    
        SocialIconLink} from './FooterElements';

        
const Footer = () => {
  
    const toggleHome = () => {
      scroll.scrollToTop();
  };


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
            <SocialMedia>
                <SocialMediaWrap> 
                    <SocialLogo to='/' onClick={toggleHome}>
                        Stenson
                    </SocialLogo>
                    <WebsiteRights>Stenson © {new Date().getFullYear()}
                     <br/>All rights reserved</WebsiteRights>
                    <SocialIcons> 
                        <SocialIconLink href='//www.Facebook.com' target='_blank' 
                        aria-label='Facebook'> 
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='//www.Instagram.com' target='_blank' 
                        aria-label='Instagram'> 
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/in/anthony-stenson-b33472217/' target='_blank' 
                        aria-label='Linkedin'> 
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;