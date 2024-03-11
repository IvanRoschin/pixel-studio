import dynamic from 'next/dynamic'

import {
  getHeader,
  getHero,
  getAbout,
  getPageInfo,
  getPrices,
  getProjects,
  getTeam,
  getTechnologies,
} from '@/actions/index'
import {
  Contact,
  Footer,
  Header,
  Hero,
  Prices,
  Projects,
  Team,
  Technologies,
  WhatWeDo,
} from '@/components/index'
import {
  HeaderInterface,
  HeroInterface,
  AboutInterface,
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
        w-[360px]
        md:w-[768px]
        lg:w-[1440px]
        xl:w-[1920px]
        m-auto
        px-4
        relative
        "
    >
      <Header header={header} />
      <section id="hero" className="snap-center pb-8">
        <Hero hero={hero} />
      </section>
      <section id="about" className="snap-start pb-8">
        <DynamicAbout about={about} />
      </section>
      <section id="services" className="snap-start pb-8">
        <WhatWeDo pageInfo={pageInfo} />
      </section>
      <section id="team" className="snap-center">
        <Team team={team} />
      </section>
      {/* <section id="stack" className="snap-start">
        <Technologies technologies={technologies} />
      </section> */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="price" className="snap-start">
        <Prices price={prices} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <section className="snap-start">
        <Footer pageInfo={pageInfo} />
      </section>
    </div>
  )
}
