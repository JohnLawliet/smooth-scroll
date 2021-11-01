import tw from 'tailwind-styled-components'
import {MdArrowForward,MdKeyboardArrowRight } from 'react-icons/md'

// align-middle = content-center

export const HeroContainer = tw.div`
    flex justify-center content-center flex-wrap py-0 px-8 relative
    z-20 h-screen -mt-20
`

export const HeroBg = tw.div`
    absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden
`

export const VideoBg = tw.video`
    w-full h-full object-cover bg-cover
`

export const BlackFilter = tw.div`
    absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black bg-opacity-60
`


export const HeroContent = tw.div`
    flex z-20 py-2 flex-col content-center flex-wrap -mt-16
    md: w-3/5
    xs: w-4/5
`

export const HeroH1 = tw.h1`
    text-white text-center font-bold
    md:text-5xl
    xs:text-3xl
`

export const HeroP = tw.p`
    mt-6 text-white text-center
    md:text-3xl md: px-8
    xs:text-xl xs: px-0
`

export const HeroBtnWrapper = tw.div`
    mt-8 flex mx-auto
`

export const ArrowForward = tw(MdArrowForward)`
    ml-1 mt-1 text-xl bold
    md:text-xl
    xs:text-lg
`

export const ArrowRight = tw(MdKeyboardArrowRight)`
    ml-1 mt-1 text-xl bold
    md:text-xl
    xs:text-lg
`
