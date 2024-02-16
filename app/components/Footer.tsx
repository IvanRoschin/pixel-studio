import Link from "next/link"
import Image from "next/image"

type Props = {}

const Footer = (props: Props) => {
  return (
          <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/images/footer/ps_btn.png"
              alt="pixel-studio"
              width={30}
              height={30}
              className="
                hidden
                filter 
                grayscale 
                hover:grayscale-0 
                rounded-full 
                border 
                border-[#F7AB0A]/80"
            />
          </div>
        </footer>
      </Link>
  )
}

export default Footer