import tw from 'tailwind-styled-components'
import {Link as LinkR} from 'react-scroll'

const Button = tw(LinkR)`
    rounded-3xl whitespace-nowrap outline-none cursor-pointer flex justify-center
    align-middle border-none font-medium
    transition ease-in-out duration-400
    ${p => p.primary ? 'bg-green-600 hover:text-white' : 'bg-black hover:text-green-400'}
    ${p => p.big ? 'py-3 px-12' : 'py-2 px-8'}
    ${p => p.dark ? 'text-black hover:bg-gray-300' : 'text-white hover:bg-black'}
    ${p => p.fontBig ? 'text-xl' : 'text-md'}

`

export default Button
