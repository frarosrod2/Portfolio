import { Element } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import berger from "../assets/images/berger.png";
import viewnext from "../assets/images/view.png";
import digital55 from "../assets/images/digital55.png";

export const TimelinePage = () => {
  return (
    <Element name="timeline">
      <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pb-64">
        <h2 className="section-title">02. Timeline</h2>
        <div className="mt-12">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date="Febraury 2021 - May 2021"
              iconStyle={{ background: "#fff" }}
              icon={<img alt="berger" src={berger} />}
            >
              <h3 className="vertical-timeline-element-title">
                Trainee Developer -
                <span className="text-gray-500"> Berger Levrault</span>
              </h3>

              <p>- Backend Development using Spring and JSF.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date="September 2021 - January 2023"
              iconStyle={{ background: "#fff" }}
              icon={<img alt="viewnext" src={viewnext} />}
            >
              <h3 className="vertical-timeline-element-title">
                FullStack Developer -
                <span className="text-gray-500"> Viewnext</span>
              </h3>
              <p>
                - Assigned to IBM development group for various frontend and
                backend projects, using Angular, Express and PostgreSQL.
              </p>
              <p>
                - Implementation of Saml authentication via Docker in several
                projects.
              </p>
              <p>
                - Maintenance and development of several React projects for
                Naturgy.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date="January 2023 - current"
              iconStyle={{ background: "#fff" }}
              icon={<img alt="digital55" src={digital55} />}
            >
              <h3 className="vertical-timeline-element-title">
                FullStack Developer -
                <span className="text-gray-500"> Digital55</span>
              </h3>
              <p>
                - Development of several projects using Angular and Express, one
                of them a large hospital management tool.
              </p>
              <p>- In-depth use of libraries such as TypeORM, RxJs and ngRx.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </Element>
  );
};
