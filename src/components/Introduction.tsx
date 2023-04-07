import { Logo } from './Logo';
export const Introduction = () => {

  const techSkills = [
  {
    name: 'JS',
    icon: '/assets/icons/js.png',
  },
  {
    name: 'TS',
    icon: '/assets/icons/typescript.png',
  },
  {
    name: 'Angular',
    icon: '/assets/icons/angular.png',
  },
  {
    name: 'CSS',
    icon: '/assets/icons/css-3.png',
  },
  {
    name: 'Node',
    icon: '/assets/icons/node-js.png',
  },
]


  return (
    <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pt-32 pb-16">
      <div className="flex basis-full sm:basis-3/5 flex-wrap">
        <div className="basis-full md:basis-7/12 items-center">
          <div className="headings">
            <h2 className="name">Francisco Javier Rosa</h2>
            <h3 className="role">Full Stack Developer</h3>
          </div>
          <div className="presentation text-lg">
            Hi, my name is Francisco Javier Rosa, a young Full Stack Software Developer
            trying to improve his programming skills everyday. I have a Software Engineering
            Degree.
          </div>
          <div className="languages h-24">
          {techSkills.map(skill => <Logo img={skill.icon} />)}
          </div>
        </div>
        <div className="mt-10 lg-mt-0 basis-full md:basis-5/12">
          <img
            src="assets/icons/developer.svg"
            className="developer-img"
            alt="developer-img"
          />
        </div>
      </div>
    </section>
  )
}
