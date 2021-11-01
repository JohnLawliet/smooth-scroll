import tw from 'tailwind-styled-components'

// ${p => p.lightBg? 'bg-gray-100' : 'bg-black'}
export const InfoContainer = tw.div`
    text-white py-24 md:px-16
    ${p => p.lightBg? 'bg-gray-100' : 'bg-black'}

`

export const InfoWrapper = tw.div`
    z-10 w-full mx-auto px-6 justify-center
`

// grid template area here
// ${p => p.imgStart? 'gridTemplateAreas' : ''}
export const InfoRow = tw.div`
    grid auto-cols-fr grid-flow-col
    ${p => p.imgStart?
        'md:grid-areas-imgStart grid-areas-imgStartCondensed' :
        'md:grid-areas-imgStartReverse grid-areas-imgStartReverseCondensed'}

`

export const Column1 = tw.div`
    mb-4 py-0 px-4 grid-in-shit1
`

// export const hiddenColumn = tw.div`

// `

export const Column2 = tw.div`
    mb-4 py-0 px-4 grid-in-shit2
`

export const TextWrapper = tw.div`
    pt-0 md:px-8 xs:px-0
`

export const TopLine = tw.p`
    text-green-400 text-lg leading-4 font-bold tracking-wider
    uppercase mb-4
`

// ${p => p.lightText ? 'text-gray-100' : 'text-black'}
export const Heading = tw.h1`
    mb-6 leading-4 font-bold
    ${p => p.lightText ? 'text-gray-100' : 'text-black'}
    md:text-3xl
    xs:text-2xl
`

//     ${p => p.darkText? 'text-black' : 'text-white'}
export const Subtitle = tw.p`
    mb-9 text-xl leading-6
    ${p => p.darkText? 'text-black' : 'text-white'}
    md:text-xl
    xs:text-lg
`

export const BtnWrap = tw.div`
    flex justify-start
`

export const ImgWrap = tw.div`
    h-full
`

export const Img = tw.img`
    w-full mb-3 pr-0 mt-0 mr-0 ml-0
`
