import tw from 'tailwind-styled-components'
import {Link} from 'react-router-dom'

export const Container = tw.div`
    min-h-2/3 fixed bottom-0 left-0 right-0 top-0 z-0 overflow-hidden
    bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
`

export const FormWrap = tw.div`
    flex flex-col justify-center
    xs:h-4/5
    md:h-full
`

export const Icon = tw(Link)`
    no-underline text-white font-bold text-2xl
    xs:ml-4 xs:mt-2
    md:ml-8 md:mt-8
`

export const FormContent = tw.div`
    h-full flex flex-col justify-center
    xs:p-2
    md:p-0
`

export const Form = tw.div`
    bg-black max-w-1/3 h-auto w-full z-10 grid my-0 mx-auto
    rounded-2xl shadow-xl
    xs:py-8 xs:px-8
    md:py-20 md:px-8
`

export const FormH1 = tw.h1`
    mb-10 text-white text-xl font-medium text-center
`

export const FormLabel = tw.label`
    mb-2 text-lg text-white
`

export const FormInput = tw.input`
    p-4 mb-8 border-none rounded-xl
`

export const FormButton = tw.button`
    bg-green-400 py-4 px-0 border-none rounded-xl text-white text-xl cursor-pointer
`

export const Text = tw.span`
    text-center mb-6 text-white text-lg
`
