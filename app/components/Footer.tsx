import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { PageInfo } from '@/sanity/interface'
import { SocialIcon } from 'react-social-icons'
import { urlForImage } from '@/sanity/lib/image'

interface FooterProps {
  pageInfo: PageInfo
}

const Footer: React.FC<FooterProps> = ({ pageInfo }) => {
  return (
    <footer
      className="
        p-10
        bg-secondaryBackground
        font-tacticsans
      "
    >
      <div
        className="
        flex
        flex-col-4
        justify-between
        mx-auto
        max-w-[1620px]
        min-h-[150px]
        z-20
        p-5
        pb-0
        "
      >
        {/*Footer Logo*/}
        <Link href="#hero">
          <p className="text-[30px] text-secondaryTextColor uppercase tracking-[3px]">
            <span className="text-primaryAccentColor">{`| `}</span>
            {pageInfo.title}
            <span className="text-primaryAccentColor">{` |`}</span>
          </p>
        </Link>

        {/*Navbar Items*/}
        <div className="shrink">
          {pageInfo?.navbar.map(item => (
            <div key={item._id} className="grid grid-cols-2 gap-5 xl:grid-cols-1">
              <Link href={item.link}>
                <button className="heroBtn mr-[50px] text-primaryTextColor">{item.title}</button>
              </Link>
            </div>
          ))}
        </div>

        {/*Contact Information*/}
        <div className="space-y-4 pb-10 text-primaryTextColor">
          <div className="flex items-center space-x-5 justify-left">
            <PhoneIcon className="text-primaryAccentColor h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-left">
            <EnvelopeIcon className="text-primaryAccentColor h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-left">
            <MapPinIcon className="text-primaryAccentColor h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.address}</p>
          </div>
        </div>

        {/*Social Icons*/}
        <div className="md:space-x-5">
          {pageInfo?.socials.map(social => (
            <SocialIcon
              key={social._id}
              url={social.url}
              bgColor="transparent"
              fgColor="secondaryBackground"
              className="
          border
          b-primaryBackground
          fill-iconColor
          rounded-full
          mr-4
          icon-transition
          hover:text-secondaryBackground
          hover:bg-primaryAccentColor
          hover:fill-secondaryBackground
          "
            />
          ))}
        </div>
      </div>

      {/*Copyright*/}
      <p className="flex justify-center text-secondaryTextColor">{pageInfo.copyright}</p>

      <Link href="#hero" className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Image
            src={urlForImage(pageInfo.footerBtnUp)}
            alt={pageInfo.title}
            width={30}
            height={30}
            className="
              hidden
                h-24
                w-24
                fill-[#F7AB0A]
                animate-pulse
                filter
                rounded-full
                border
                p-2
                border-[#F7AB0A]/80"
          />
        </div>
      </Link>
    </footer>
  )
}

export default Footer
