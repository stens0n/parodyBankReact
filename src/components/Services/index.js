import React from 'react';

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

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
                <ServicesP> We Help reduce your fees nigga bitch</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP> You can access our platform anywhere nigga</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock Our Special Services you bitch </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services