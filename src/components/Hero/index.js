import React , {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent,HeroBtn, HeroP,HeroH1, HeroItems  } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Most Aromatic Coffee Ever!</HeroH1>
                <HeroP>
                    Ready in 15 minutes
                </HeroP>
                <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
