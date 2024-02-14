export const dynamic = "force-dynamic";

// import { Header, Hero, About, Team, Stacks, Projects, Contact } from "../components";
import Link from "next/link";
import Image from "next/image";
import { Header, Hero, About, Team, Stacks  }  from "@/components/index";
import { PageInfo, Social, TeamMember, Stack, Project,  } from "@/sanity/interface";
import { getPageInfo, getSocials, getTeam, getStacks, getProjects } from "@/actions/index";


export default async function Home () {
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();
  const team: TeamMember[] = await getTeam(); 
  const stacks: Stack[] = await getStacks();
  const projects: Project[] = await getProjects();

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
        <Stacks stacks={stacks} />
      </section>
      {/* Projects*/}
      <section id="projects" className="snap-start">
        {/* <Projects /> */}
      </section>
      {/* Contacts*/}
      <section id="contact" className="snap-start">
        {/* <Contact /> */}
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/images/footer/ps_btn.png"
              alt="pixel-studio"
              width={30}
              height={30}
              className="filter grayscale hover:grayscale-0 rounded-full border border-[#F7AB0A]/80"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}