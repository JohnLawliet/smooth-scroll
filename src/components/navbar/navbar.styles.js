import tw from "tailwind-styled-components"
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'


export const Nav = tw.nav`
    h-20 flex justify-center align-middle
    sticky top-0 text-base lg:transition duration-75 ease-in-out z-50
    ${p => p.scrollNav ? 'bg-black' : 'bg-opacity-0'}
`

export const NavbarContainer = tw.div`
    flex justify-between w-full px-2 max-w-5xl
`

export const NavLogo = tw(LinkR)`
    text-white justify-start cursor-pointer flex flex-wrap
    ml-2 font-bold no-underline content-center
    md:text-2xl
    xs:text-xl
`

export const MobileIcon = tw.div`
    block
    absolute
    top-0 right-0
    transform -translate-x-full translate-y-2/3
    text-3xl
    cursor-pointer
    text-green-400
    sm:hidden
`

export const NavMenu = tw.ul`
    md:flex
    md:align-middle
    md:list-none
    md:text-center
    md:mr-5
    xs:hidden
`

export const NavItem = tw.li`
    h-20 flex
`

export const NavLinks = tw(LinkScroll)`
    text-white flex align-middle no-underline py-0 px-4 h-full
    cursor-pointer content-center flex-wrap transform scale-100
    rounded-3xl
    hover:text-green-400
    active:scale-125
`

export const NavBtn = tw.nav`
    xs:hidden
    md:flex md:content-center md:flex-wrap
`

export const NavBtnLink = tw(LinkR)`
    rounded-3xl whitespace-nowrap py-2 px-5 border-none bg-green-500
    text-base cursor-pointer animate-move text-black uppercase
    font-semibold
    hover:bg-green-400
`
