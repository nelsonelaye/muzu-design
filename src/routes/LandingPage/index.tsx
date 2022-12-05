import { useState, useCallback } from "react";
import style from "./index.module.scss";
import "./index.module.scss";
import {
  product as ProductType,
  team as TeamType,
  facts as FactsType,
  job as JobType,
  testimonial as TestimonialType,
} from "./types";

// COMPONENTS
import Header from "../../components/Header";
import Button from "../../components/Button";
import IconCircle from "../../components/IconCircle";
import ItemsIcons from "../../components/items_with_icons";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";

// IMAGES
import pd1 from "../../assets/images/pd1.jpg";
import pd2 from "../../assets/images/pd2.jpg";
import pd3 from "../../assets/images/pd3.jpg";
import team1 from "../../assets/images/team/team1.jpg";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";
import gl1 from "../../assets/images/gl1.jpg";
import gl2 from "../../assets/images/gl2.jpg";
import gl3 from "../../assets/images/gl3.jpg";
import gl4 from "../../assets/images/gl4.jpg";
import gl5 from "../../assets/images/gl5.jpg";
import gl6 from "../../assets/images/gl6.jpg";
import c1 from "../../assets/images/customer1.jpg";
import c2 from "../../assets/images/customer2.jpg";
import c3 from "../../assets/images/customer3.jpg";
import contactImage from "../../assets/images/customer care.jpg";

/***********************************
 ************************ LIST OF DATA IMPLEMENTED IN THIS COMPONENTS **********************************/

const products: Array<ProductType> = [
  {
    id: "1",
    photo: pd2,
    title: "Something great About your company",
    description:
      "Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent alienum est.Nam tantas latine admodum at, ea etiam nobis pri. Paulo alienum recusabo vis ad, eam simul perpetua in. Ludus aliquid officiis sed te, vix stet disputationi ex, nec ex quaeque signiferumque mediocritatem",
  },
  {
    id: "2",
    photo: pd1,
    title: "Another great info here",
    description:
      "Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent alienum est.Nam tantas latine admodum at, ea etiam nobis pri. Paulo alienum recusabo vis ad, eam simul perpetua in. Ludus aliquid officiis sed te, vix stet disputationi ex, nec ex quaeque signiferumque mediocritatem",
  },
  {
    id: "3",
    photo: pd3,
    title: "Something great About your company",
    description:
      "Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent alienum est.Nam tantas latine admodum at, ea etiam nobis pri. Paulo alienum recusabo vis ad, eam simul perpetua in. Ludus aliquid officiis sed te, vix stet disputationi ex, nec ex quaeque signiferumque mediocritatem",
  },
];

const team: Array<TeamType> = [
  {
    id: "1",
    photo: team1,
    name: "David Idris",
    role: "Software Engineer",
    description: "Solve problems while building sustainable solutions",
  },
  {
    id: "2",
    photo: team2,
    name: "Tope Alaba",
    role: "Business  Developer",
    description:
      "An amazing executive who helps drive productivity through top-level business management and operation",
  },
  {
    id: "3",
    photo: team3,
    name: "Kareem Johnson",
    role: "Product Manager",
    description:
      "Kareem helps drive team efficiency and 100% product deliverable",
  },
];

const facts: Array<FactsType> = [
  { id: "1", title: "clients", figure: "15+" },
  { id: "2", title: "awards", figure: "1K" },
  { id: "3", title: "clients", figure: "15+" },
  { id: "4", title: "awards", figure: "1K" },
];

const services = [
  {
    id: "1",
    title: "web design",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
  {
    id: "2",
    title: "web development",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
  {
    id: "3",
    title: "graphics design",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
  {
    id: "4",
    title: "presentation design",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
];

const core_values = [
  {
    id: "1",
    title: "Vision statement",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
  {
    id: "2",
    title: "Mission statement",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
  {
    id: "3",
    title: "Core values",
    description:
      "We help businesses achieve outstanding solutions by applying industry standard tools and solutions.",
  },
];

const gallery_images: string[] = [gl1, gl2, gl3, gl4, gl5, gl6];

const experience_list: Array<JobType> = [
  {
    id: "1",
    role: "graphics designer",
    company: "muzu",
    description:
      "handled the design of the website builder, designing themes amd improving the pre-existing designs",
    years: "2020-2021",
  },
  {
    id: "2",
    role: "graphics designer",
    company: "muzu",
    description:
      "handled the design of the website builder, designing themes amd improving the pre-existing designs",
    years: "2020-2021",
  },
  {
    id: "3",
    role: "graphics designer",
    company: "muzu",
    description:
      "handled the design of the website builder, designing themes amd improving the pre-existing designs",
    years: "2020-2021",
  },
  {
    id: "4",
    role: "graphics designer",
    company: "muzu",
    description:
      "handled the design of the website builder, designing themes amd improving the pre-existing designs",
    years: "2020-2021",
  },
];

const testimonials: Array<TestimonialType> = [
  {
    id: "1",
    name: "Janet Jackson",
    photo: c1,
    testimonial:
      "It all begins with an idea. Maybe you want to lauch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",

    roleAndCompany: "Digital Marketer, Smiley Coffee",
  },
  {
    id: "2",
    name: "Nelson Telleman",
    photo: c2,
    testimonial:
      "It all begins with an idea. Maybe you want to lauch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",

    roleAndCompany: "CEO, Complex Inc.",
  },
  {
    id: "3",
    name: "Daniella Chidebere",
    photo: c3,
    testimonial:
      "It all begins with an idea. Maybe you want to lauch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",

    roleAndCompany: "CFO, New Origin",
  },
];

export default function LandingPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const IncreaseCount = useCallback(() => {
    setCount((count + 1) % testimonials.length);
  }, [count]);

  const DecreaseCount = useCallback(() => {
    if (count === 0) {
      setCount(testimonials.length - 1);
    } else {
      setCount((count - 1) % testimonials.length);
    }
  }, [count]);

  return (
    <>
      <Header />

      <div className={style["hero"]}>
        <div className={style["hero_details"]}>
          <h1>The future of automobile african community</h1>
        </div>
        <Button text="Get Started">
          <HiOutlineArrowSmRight
            style={{ marginLeft: "10px", fontSize: "25px" }}
          />
        </Button>
      </div>

      <section className={style["products_section"]}>
        <h2>Our Products</h2>
        <div className={style["products_hold"]}>
          {products?.map((prop, index: number) =>
            index === 1 ? (
              <div className={style["flip"]} key={prop.id}>
                <div
                  className={style["product_image"]}
                  style={{ marginRight: 0 }}
                >
                  <img src={prop.photo} alt="product" />
                </div>

                <div>
                  <div className={style["product_text"]}>
                    <h3>{prop.title}</h3>
                    <span>{prop.description}</span>
                  </div>
                  <Button text="Action">{null}</Button>
                </div>
              </div>
            ) : (
              <div className={style["product_details"]} key={prop.id}>
                <div className={style["product_image"]}>
                  <img src={prop.photo} alt="product" />
                </div>

                <div>
                  <div className={style["product_text"]}>
                    <h3>{prop.title}</h3>
                    <span>{prop.description}</span>
                  </div>
                  <Button text="Action">{null}</Button>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className={style["team_section"]}>
        <div className={style["top"]}>
          <h2>Our Team</h2>
          <span style={{ lineHeight: "1.35em" }}>
            We have an interesting team of professionals and seasoned business
            experts
          </span>
        </div>
        <div className={style["team_hold"]}>
          {team?.map((prop, index) => (
            <div className={style["member_details"]} key={prop.id}>
              <div className={style["member_image"]}>
                <img src={prop.photo} alt="team member" />
              </div>

              <div>
                <h4>{prop.name}</h4>
                <span className={style["role"]}>{prop.role}</span>
                <span className={style["description"]}>{prop.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={style["facts_section"]}>
        <h2>FACTS &amp; FIGURES</h2>
        <div className={style["facts_hold"]}>
          {facts?.map((prop, index) => (
            <div className={style["fact_details"]} key={prop.id}>
              <h4>{prop.figure}</h4>
              <span className={style["title"]}>{prop.title}</span>
            </div>
          ))}
        </div>
      </section>

      <ItemsIcons data={core_values} heading="core values" />

      <section className={style["about_us"]}>
        <h2>About us</h2>
        <div className={style["hold_details"]}>
          <span>
            Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
            te zril urbanitas scribentur. In utamur impedit feugait nec, ex
            putent alienum est. Nam tantas latine admodum at, ea etiam nobis
            pri.
          </span>
        </div>
      </section>

      <section className={style["experience"]}>
        <div className={style["experience_brief"]}>
          <h2>My job experience</h2>
          <div>
            I am well experienced in the field of deisgn and development, below
            is a brief of my career progress so far.
          </div>
        </div>
        <div className={style["experience_list"]}>
          {experience_list?.map((prop, index) => (
            <div className={style["experience_details"]} key={prop.id}>
              <IconCircle Icon={<FaShoppingBag />} />
              <div className={style["experience_content"]}>
                <h3>{prop.role}</h3>
                <div className={style["duration"]}>
                  <span>{prop.company}</span>
                  <span>{prop.years}</span>
                </div>
                <span>{prop.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Services data={services} heading="Services" />

      <section className={style["gallery"]}>
        <h2>Gallery</h2>
        <div className={style["gallery_list"]}>
          {gallery_images?.map((prop, index) => (
            <div className={style["gallery_image"]} key={prop}>
              <img src={prop} alt={prop} />
            </div>
          ))}
        </div>
      </section>

      <section className={style["testimonial"]}>
        <h2>What people say</h2>
        <div className={style["slide"]}>
          {testimonials ? (
            <div
              className={style["testimonial_details"]}
              key={testimonials[count].id}
            >
              <img
                src={testimonials[count].photo}
                alt={testimonials[count].name}
              />
              <div className={style["customer_testimonial"]}>
                <p>{testimonials[count].testimonial}</p>
                <div className={style["customer_identity"]}>
                  {testimonials[count].name} -{" "}
                  {testimonials[count].roleAndCompany}
                </div>
              </div>
            </div>
          ) : null}
          <div className={style["testimonial_controls"]}>
            <div>
              <IoIosArrowBack onClick={DecreaseCount} />
            </div>
            <div>
              <IoIosArrowForward onClick={IncreaseCount} />
            </div>
          </div>
        </div>
      </section>

      <section className={style["contact_us"]}>
        <div className={style["hold_contact"]}>
          <img src={contactImage} alt="customer care " />
          <h2>Contact us</h2>
          <div className={style["contact_details"]}>
            <div style={{ marginBottom: "30px" }}>
              <div className={style["email"]}>Email@example.com</div>
              <span>
                123 Demo Street <br /> Nigeria, NG 12345
              </span>
            </div>
            <form>
              <input type="text" placeholder="Fullname" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" className={style["message"]} />
              <button>Contact</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
