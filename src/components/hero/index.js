import React, { useState } from 'react'
import { ArrowForward, ArrowRight, BlackFilter, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './hero.styles'
import Video from '../../videos/video.mp4'
import Button from '../ButtonElement'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer className="">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
                <BlackFilter/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper className="">
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
