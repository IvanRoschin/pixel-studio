export const dynamic = "force-dynamic";

import { Header, Hero, About, Team, Technologies, Projects, Contact, Footer }  from "@/components/index";
import { PageInfo, Social, TeamMember, Technology, Project } from "@/sanity/interface";
import { getPageInfo, getSocials, getTeam, getTechnologies, getProjects } from "@/actions/index";

export default async function Home () {
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();
  const team: TeamMember[] = await getTeam(); 
  const projects: Project[] = await getProjects();
  const technologies: Technology[] = await getTechnologies();

  return (
    <div
      className="
        bg-[rgb(36,36,36)]
        text-white
        h-screen
        snap-y
        snap-mandatory
        overflow-y-scroll
        overflow-x-hidden
        z-0
        scrollbar
        scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header pageInfo={pageInfo} socials={socials}  />
      <section id="hero" className="snap-start pb-8">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="team" className="snap-center">
        <Team team={team} />
      </section>
      <section id="stack" className="snap-start">
        <Technologies technologies={technologies} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    <Footer/>
    </div>
  );
}