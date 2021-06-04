import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 mx-auto">
      <div className='mx-auto justify-center flex flex-col items-center'>
        <Image src="/img/Logo.png" alt="TAP Logo" width="215" height="105" className='mx-auto-0' />
        <h1 className="text-center text-8xl md:text-6xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Product Updates
        </h1>
      </div>
    </section>
  )
}
