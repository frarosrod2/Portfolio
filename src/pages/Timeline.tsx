import { Element } from 'react-scroll'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const TimelinePage = () => {
  return (
    <Element name="timeline">
    <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pb-64">
      <h2 className="section-title">Timeline</h2>
      <div className="mt-12">
      <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                  date="Febraury 2021 - May 2021"
                  iconStyle={{ background: '#fff' }}
                  icon={<img src='assets/icons/berger.webp' />}
                >
                  <h3 className="vertical-timeline-element-title">Trainee Developer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Berger Levrault</h4>
                  <p>
                    - Backend Development using Spring and JSF.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                  date="September 2021 - January 2023"
                  iconStyle={{ background: '#fff' }}
                  icon={<img src='assets/icons/view.png' />}
                >
                  <h3 className="vertical-timeline-element-title">Art Director</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                  date="September 2021 - January 2023"
                  iconStyle={{ background: '#fff' }}
                  icon={<img src='assets/icons/digital55.png' />}
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>
                    User Experience, Visual Design
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
    </section>
  </Element>
  )
}
