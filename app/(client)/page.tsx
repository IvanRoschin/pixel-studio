import dynamic from 'next/dynamic'

import {
  getAbout,
  getHeader,
  getHero,
  getPageInfo,
  getPrices,
  getProjects,
  getTeam,
  getTechnologies,
} from '@/actions/index'
import { Contact, Footer, Header, Hero, Prices, Projects, Team, WhatWeDo } from '@/components/index'
import {
  AboutInterface,
  HeaderInterface,
  HeroInterface,
  PageInfo,
  Price,
  Project,
  TeamMember,
  Technology,
} from '@/sanity/interface'

const DynamicAbout = dynamic(() => import('../components/About.tsx'), {
  ssr: false,
})

export default async function Home() {
  const header: HeaderInterface = await getHeader()
  const hero: HeroInterface = await getHero()
  const about: AboutInterface = await getAbout()

  const pageInfo: PageInfo = await getPageInfo()
  const team: TeamMember[] = await getTeam()
  const projects: Project[] = await getProjects()
  const technologies: Technology[] = await getTechnologies()
  const prices: Price[] = await getPrices()

  return (
    <div
      className="
        bg-primaryBackground
        text-textColor
        h-full
        snap-y
        snap-mandatory
        z-0
        m-auto
        px-4
        relative
        w-[360px]
        md:w-[768px]
        lg:w-[1440px]
        xl:w-[1920px]
        "
    >
      <Header header={header} />
      <section id="hero" className="snap-center pb-8 scroll-mt-16">
        <Hero hero={hero} />
      </section>
      <section id="about" className="snap-start pb-8 scroll-mt-16">
        <DynamicAbout about={about} />
      </section>
      <section id="services" className="snap-start pb-8 scroll-mt-16">
        <WhatWeDo pageInfo={pageInfo} />
      </section>
      <section id="team" className="snap-center pb-8 scroll-mt-16">
        <Team team={team} />
      </section>
      {/* <section id="stack" className="snap-start">
        <Technologies technologies={technologies} />
      </section> */}
      <section id="projects" className="snap-start pb-8 scroll-mt-16">
        <Projects projects={projects} />
      </section>
      <section id="price" className="snap-start pb-8 scroll-mt-16">
        <Prices price={prices} />
      </section>
      <section id="contact" className="snap-start pb-8 scroll-mt-16">
        <Contact />
      </section>
      <section className="snap-start pb-8 scroll-mt-16">
        <Footer pageInfo={pageInfo} />
      </section>
    </div>
  )
}
