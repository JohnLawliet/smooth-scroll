import tw from 'tailwind-styled-components'

export const ServicesContainer = tw.div`
    flex flex-col justify-center items-center bg-black py-12
`

export const ServicesWrapper = tw.div`
    max-w-full my-0 mx-auto grid items-center
    gap-4

    xs:grid-cols-1 xs:py-0 xs:px-5
    md:grid-cols-2 md:py-0 md:px-12
    lg:grid-cols-3
`

//to use hover effect, have to apply transform initial prop then hover:new prop. Also, can use transition
// animation doesn't work for hover
export const ServicesCard = tw.div`
    bg-white flex flex-col justify-start items-center rounded-2xl p-8 shadow-xl
    cursor-pointer transition duration-200 ease-in-out transform scale-100
    hover:scale-105
`

export const ServicesIcon = tw.img`
    h-40 w-40 mb-3
`

export const ServicesH1 = tw.h1`
    text-white mb-16

    xs:text-3xl sm:text-4xl
`

export const ServicesH2 = tw.h2`
    mb-3 font-semibold
`

export const ServicesP = tw.p`
    text-base text-center
`





