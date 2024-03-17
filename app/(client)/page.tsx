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
    <div className="container">
      <Header header={header} />
      <section id="hero" className="section">
        <Hero hero={hero} />
      </section>
      <section id="about" className="section">
        <DynamicAbout about={about} />
      </section>
      <section id="services" className="section">
        <Services services={services} />
      </section>
      <section
        id="team"
        className=" 
        h-screen
        snap-start
        scroll-mt-16"
      >
        <Team team={team} />
      </section>
      <section id="stack" className="section">
        <Technologies technologies={technologies} />
      </section>
      <section
        id="projects"
        className=" 
        h-screen
        snap-start
        scroll-mt-16"
      >
        <Projects projects={cases} />
      </section>
      <section
        id="price"
        className=" 
        h-screen
        snap-start
        scroll-mt-16"
      >
        <Prices prices={prices} />
      </section>
      <section id="contact" className="section">
        <Contact contact={contact} />
      </section>
      <section className="section">
        <Footer footer={footer} />
      </section>
    </div>
  )
}
