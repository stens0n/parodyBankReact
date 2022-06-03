import React from 'react';

import Icon1 from '../../images/svg-8TYHILTON.svg'
import Icon2 from '../../images/Time.svg'
import Icon3 from '../../images/access.svg'

import {
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesH2, 
    ServicesP,
    ServicesCard,
    ServicesIcon,

    } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP> We Help reduce your fees</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>24/7 Customer Support</ServicesH2>
                <ServicesP>Always stay in contact</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Top tier exclusive benefits </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services