import tw from 'tailwind-styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const SidebarContainer =  tw.aside`
    fixed z-40 w-full h-full bg-black grid
    content-center top-0 left-0 top-0
    ${p => p.isOpen? 'top-0 opacity-90' : '-top-full opacity-0'}
    transition ease-in-out duration-500
`

export const CloseIcon = tw(FaTimes)`
    text-white
    hover:text-green-500
`

export const Icon = tw.div`
    absolute top-5 right-6 bg-opacity-0 text-3xl cursor-pointer
    outline-none
`


export const SidebarWrapper = tw.div`
    text-white mt-16
`

export const SidebarMenu = tw.ul`
    grid grid-cols-1 grid-rows grid-rows-6 text-center
`


export const SidebarLink = tw(LinkScroll)`
    flex content-center justify-center text-3xl no-underline
    list-none text-white cursor-pointer my-3 py-1 rounded-3xl
    tranistion ease-in-out duration-200

    hover:bg-green-600 hover:tranistion hover:ease-in-out hover:duration-200
`

export const SideBtnWrap = tw.div`
    flex justify-center
`

export const SidebarRoute = tw(LinkR)`
    rounded-3xl bg-green-600 whitespace-nowrap py-4 px-16
    text-3xl outline-none border-none cursor-pointer no-underline
    tranistion ease-in-out duration-200

    hover:bg-green-500 hover:transition hover:ease-in-out hover:duration-200
`
