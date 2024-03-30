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
        snap-start
        scroll-mt-20
        px-4
        h-svh
        flex items-center justify-center"
      >
        <Hero hero={hero} />
      </section>
      <section
        id="about"
        className="
        mb-20
        snap-start
        scroll-mt-20
        px-4
       
      "
      >
        <DynamicAbout about={about} />
      </section>
      <section
        id="services"
        className="
        mb-20
        snap-start
        scroll-mt-24
        px-4
        "
      >
        <Services services={services} />
      </section>
      <section
        id="team"
        className=" 
        mb-20
        snap-start
        scroll-mt-24
        px-4
        "
      >
        <Team team={team} />
      </section>
      <section
        id="stack"
        className="
        mb-20
        snap-start
        scroll-mt-24
        
        "
      >
        <Technologies technologies={technologies} />
      </section>
      <section
        id="projects"
        className=" 
        mb-20
        snap-start
        scroll-mt-24
        "
      >
        <Projects projects={cases} />
      </section>
      <section
        id="price"
        className=" 
        mb-20
        snap-start
        scroll-mt-24
        px-4
        "
      >
        <Prices prices={prices} />
      </section>
      <section
        id="contact"
        className="
        mb-20
        snap-start
        scroll-mt-24
        px-4
        h-svh        
        "
      >
        <Contact contact={contact} />
      </section>
      <section
        className="      
        snap-start
        scroll-mt-24
        "
      >
        <Footer footer={footer} />
      </section>
    </div>
  )
}
