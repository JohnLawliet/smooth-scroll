import tw from 'tailwind-styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = tw.div`
    bg-gray-900
`

export const FooterWrap = tw.div`
    flex flex-col mx-auto
`

export const FooterLinksContainer = tw.div`
    flex justify-evenly
`

// md
export const FooterLinksWrapper = tw.div`
    flex
    md:flex-row
    xs:flex-col
`

export const FooterLinkItems = tw.div`
    flex flex-col items-start my-4 text-left box-border text-white
    xs:mx-0 xs:p-3 xs:w-30
`

export const FooterLinkTitle = tw.h1`
    text-sm mb-4
`

export const FooterLink = tw(Link)`
    text-white no-underline mb-2 text-sm

    hover:text-green-400 hover:transition hover:duration-300 hover:ease-out
`

export const SocialMedia = tw.section`
    w-full bg-black
`

export const SocialMediaWrap = tw.div`
    flex justify-evenly items-center mx-auto py-2
    md:flex-row
    xs:flex-col
`

export const SocialLogo = tw(Link)`
    text-white justify-self-start cursor-pointer no-underline text-xl
    aligm-middle font-bold
`

export const WebsiteRights = tw.small`
    text-white xs:mb-2 md:mb-0
`

export const SocialIcons = tw.div`
    flex justify-between items-center w-60
`

export const SocialIconLink = tw.a`
    text-white text-lg
    hover:text-green-400
`





