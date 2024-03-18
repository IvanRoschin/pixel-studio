import dynamic from 'next/dynamic'

import {
  getAbout,
  getCases,
  getContact,
  getFooter,
  getHeader,
  getHero,
  getPrices,
  getServices,
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
  Services,
  Team,
  Technologies,
} from '@/components/index'
import {
  AboutInterface,
  CasesInterface,
  ContactInterface,
  FooterInterface,
  HeaderInterface,
  HeroInterface,
  PricesInterface,
  ServiсesInterface,
  TeamInterface,
  TechnologiesInterface,
} from '@/sanity/interface'

const DynamicAbout = dynamic(() => import('../components/About.tsx'), {
  ssr: false,
})

export default async function Home() {
  const header: HeaderInterface = await getHeader()
  const hero: HeroInterface = await getHero()
  const about: AboutInterface = await getAbout()
  const team: TeamInterface = await getTeam()
  const services: ServiсesInterface = await getServices()
  const technologies: TechnologiesInterface = await getTechnologies()
  const cases: CasesInterface = await getCases()
  const prices: PricesInterface = await getPrices()
  const contact: ContactInterface = await getContact()
  const footer: FooterInterface = await getFooter()

  return (
    <div className="overflow">
      <Header header={header} />
      <section
        id="hero"
        className="
      section 
      min-h-screen"
      >
        <Hero hero={hero} />
      </section>
      <section
        id="about"
        className="
      section 
      min-h-screen
      "
      >
        <DynamicAbout about={about} />
      </section>
      <section
        id="services"
        className="
      section 
      min-h-screen"
      >
        <Services services={services} />
      </section>
      <section
        id="team"
        className=" 
        md:mb-20
        snap-start
        scroll-mt-20
        px-4
        min-h-screen"
      >
        <Team team={team} />
      </section>
      <section
        id="stack"
        className="
      section
      min-h-screen"
      >
        <Technologies technologies={technologies} />
      </section>
      <section
        id="projects"
        className=" 
        md:mb-20
        snap-start
        scroll-mt-24
        px-4 
        min-h-screen"
      >
        <Projects projects={cases} />
      </section>
      <section
        id="price"
        className=" 
        md:mb-20
        snap-start
        scroll-mt-24
        px-4
        min-h-screen"
      >
        <Prices prices={prices} />
      </section>
      <section
        id="contact"
        className="
      section
      min-h-screen"
      >
        <Contact contact={contact} />
      </section>
      <section
        className="      
        md:mb-0
        snap-start
        scroll-mt-24
        
        "
      >
        <Footer footer={footer} />
      </section>
    </div>
  )
}
