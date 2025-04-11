import { useEffect, useState } from "react";
import {
  Download,
  CheckCircle,
  GraduationCap,
  Handshake,
  BadgeDollarSign,
  BookCheck,
  Briefcase,
  User,
  BookA,
  LucideHome,
  Code,
  Code2,
  FileCode2Icon,
  Video,
  Laptop2,
  UserCheck,
  Wifi,
  Smile,
  BadgeCheck,
  ClipboardList,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Form from "./component/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import PopupForm from "./component/PopupForm";
import Card from "./component/card/Card";
import Button from "./component/Button";
import Reviews from "./component/card/Reviews";
import ImageSlider from "./component/ImageSlider";
import MentorCard from "./component/card/MentorCard";
import QuestionCard from "./component/card/QuestionCard";

import {
  singlTeacher,
  Dhurina,
  Kodu,
  Kodu4,
  KoduMamSir,
  KoduGroup,
  KoduGroup1,
  AloneTeacher1,
  Certificate,
  AlgoSeeds,
  ApniKitab,
  aryavart_Academy,
  delainelogo,
  dhurina_logo,
  kodu_logo,
  RBDpublisher,
  C,
  CPP,
  java,
  HTML,
  JS,
  React,
  NodeJS,
  MongoDB,
  SQL,
  Python,
  St1,
  St2,
  St3,
  RamSir,
  SeemaMam,
  DeepanshuSir,
  Placement1,
  Placement2,
  Placement3,
  Placement4,
  KoduGroup2,
  Group1,
  KoduMam2,
  Placement5,
  Placement6,
  Placement7,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  main1,
  event1,
  event2,
  event3,
} from "./data/ImgData";
import SeatsLeft from "./component/SeatsLeft";
import BookMySeatButton from "./component/BookMySeatButton";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const pdfUrl =
    "https://drive.google.com/file/d/1RC03Qkv2_cTAdXsGvBAz7QiO6jQX_ec2/view?usp=drivesdk";

  const certificateImages = [Certificate];

  const [bookedCount, setBookedCount] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    const launchDate = new Date("2025-04-01T00:00:00");
    const resetIntervalDays = 30;
  
    const interval = setInterval(() => {
      const now = new Date();
      const msInDay = 1000 * 60 * 60 * 24;
      const daysPassed = Math.floor((now - launchDate) / msInDay);
  
      if (daysPassed > 0 && daysPassed % resetIntervalDays === 0) {
        setResetTrigger((prev) => !prev);
      }
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);
  

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/918950214425?text=Hi, I'm interested in your services!"
    );
  };

  const handleSite = () => {
    window.open(pdfUrl, "_blank");
  };

  const imagesLang = [
    C,
    CPP,
    java,
    HTML,
    JS,
    React,
    NodeJS,
    MongoDB,
    SQL,
    Python,
  ];

  const brandImage = [
    AlgoSeeds,
    ApniKitab,
    aryavart_Academy,
    delainelogo,
    dhurina_logo,
    kodu_logo,
    RBDpublisher,
  ];

  const PlacementImage = [
    Placement7,
    Placement5,
    event1,
    Placement3,
    Placement6,
    event3,
  ];

  const images = [singlTeacher, Kodu4, KoduMamSir, KoduGroup];

  const ReviewsArray = [
    {
      name: "Bhanu pahal ",
      description:
        '"I really loved how easy and structured the learning experience is on Kodu. The interface is clean and the content feels personalized. Super helpful for beginners like me!"',
      img: St1,
    },
    {
      name: "Piyush Mehta",
      description: `"Kodu helped me understand React and backend development in such a simple way. The projects and real-time support made a big difference in my learning journey."`,
      img: St2,
    },
    {
      name: "Jaswant",
      description: `"As someone who’s already done BCA, I found Kodu’s content refreshingly practical. It’s not just theory — you actually build cool stuff!"`,
      img: St3,
    },
  ];

  const mentors = [
    {
      name: "Ram Mohan ",
      title: "Web Development Expert (WDE)",
      img: RamSir,
      className: "",
    },
    {
      name: "Seema Mam",
      title: "Sr. coding Expert",
      img: SeemaMam,
      className: "",
    },
    {
      name: "Deepanshu ",
      title: "CTO Delaine",
      img: DeepanshuSir,
      className: "",
    },
  ];

  const quesArray = [
    {
      title: "What kind of courses does Kodu offer? ",
      discription:
        "Kodu offers beginner to advanced full stack web development courses, covering both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) technologies.",
    },
    {
      title: "Do I need any prior coding experience to start?",
      discription:
        "Not at all! Kodu is beginner-friendly. Whether you're completely new or want to brush up your skills after graduation, the content is easy to follow with plenty of hands-on practice.",
    },
    {
      title: "Is there a certificate after course completion?",
      discription:
        "Yes, upon successfully finishing a course, you'll receive a digital certificate which you can showcase on LinkedIn or your resume.",
    },
    {
      title: "Is job placement support available after completing the course?",
      discription:
        "Yes, Kodu provides career guidance, resume-building tips, interview prep, and placement assistance through its network of hiring partners.",
    },
  ];

  return (
    <div
      className="text-white overflow-hidden"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#1f2937",
        overflowX: "hidden",
        marginTop: "-2rem",
      }}
    >
      {/* First Section */}
      <section className="text-white" style={{ backgroundColor: "#1e293b" }}>
        <div className="container">
          <div className="row  mt-4 mt-md-5 g-5 ms-0 ms-md-4 ms-lg-0">
            {/* Left Section */}
            <div className="col-12 col-lg-7 d-flex flex-column gap-4">
              {/* Logo and Name */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src={Kodu}
                  alt="Logo"
                  style={{ height: "6rem", width: "6rem" }}
                />
                <div>
                  <h1 className="fw-bold fs-4 m-0">KODU</h1>
                  <h1 className="fw-bold fs-4 m-0">Code Your Future</h1>
                </div>
              </div>

              {/* Heading */}
              <h1 className="fw-bold lh-tight" style={{ fontSize: "2.2rem" }}>
                Become a <br />
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f87171, #60a5fa, #4ade80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  High-Paid Full Stack Developer –
                </span>
                <br />
                Enroll Now!
              </h1>

              {/* Collaboration */}
              <div className="d-flex align-items-center gap-3">
                <p className="fs-5 fw-bold text-secondary m-0">
                  In Collaboration With
                </p>
                <img src={Dhurina} alt="SmallLogo" style={{ height: "3rem" }} />
              </div>

              {/* Image */}
              <div
                className="position-relative w-100 mt-3"
                style={{ maxWidth: "42rem" }}
              >
                <img
                  src={main1}
                  className="img-fluid rounded"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                  alt="Group Visual"
                />
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="col-12 col-lg-5">
              <div style={{ maxWidth: "28rem", width: "100%" }}>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="d-flex justify-content-center bg-gray text-white py-4 py-md-5">
        <div className="container px-3 px-md-4">
          <div className="row g-2 g-lg-4">
            {[
              { title: "365 Days+", subtitle: "Duration" },
              { title: "15+ Languages", subtitle: "Skills" },
              { title: "100% Placement", subtitle: "Assistance*" },
              { title: "Scholarship", subtitle: "Get up to 100% scholarship!" },
            ].map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <div
                  className="text-center p-3 p-lg-4 rounded"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, #1e293b, #334155)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <p className="fw-bold fs-4 fs-lg-3">{item.title}</p>
                  <p className="text-light">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section
        className="py-5 text-center text-white p-4"
        style={{ backgroundColor: "#1e293b" }}
      >
        <h2 className="fw-bold display-6 mb-4 mb-md-5">
          Why Choose Kodu Institute?
        </h2>

        <div className="container px-3 px-sm-4 px-md-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {[
              {
                text: "Learn from Industry Experts & Top Trainers",
                icon: (
                  <Video
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "Work on Live Projects – Gain Real-World Experience",
                icon: (
                  <BookCheck
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "Job Assistance & Interview Preparation",
                icon: (
                  <GraduationCap
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "Fully AC & WiFi-Enabled Classrooms + Free Lab Access",
                icon: (
                  <Briefcase
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "Personality Development (PD) Sessions to Boost Confidence",
                icon: (
                  <BookA
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "Industry Certificates",
                icon: (
                  <User
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "3 Months Internship from Practical Learnings",
                icon: (
                  <Briefcase
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "100% Placement Guidance by Seniors",
                icon: (
                  <BookCheck
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
              {
                text: "Weekly Practice Test for Evaluation",
                icon: (
                  <GraduationCap
                    className="text-white"
                    style={{ width: 20, height: 20 }}
                  />
                ),
              },
            ].map((itm, index) => (
              <div
                className="d-flex align-items-start gap-3 text-start"
                key={index}
              >
                <span
                  className="d-flex justify-content-center align-items-center bg-primary rounded-circle shadow"
                  style={{
                    minWidth: 44,
                    minHeight: 44,
                    transition: "transform 0.2s",
                  }}
                >
                  {itm.icon}
                </span>
                <p
                  className="fw-bold text-light mb-0"
                  style={{ fontSize: "1rem" }}
                >
                  {itm.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#1e293b" }}
      >
        <div className="container">
          <h2
            className="fw-bold text-center mb-4 mb-sm-5 px-3"
            style={{ fontSize: "2rem" }}
          >
            What our learners say →
          </h2>

          <div className="row justify-content-center gx-4 gy-4 px-2 px-sm-3">
            {[
              "https://www.youtube.com/embed/lQ61Py-yK_g?si=sjZskYAnHR5WG4ls",
              "https://www.youtube.com/embed/H1wJ65CHjHg?si=_uShHVjTRt4FwoZK",
              "https://www.youtube.com/embed/ii56gROfb80?si=4YaO1oXUkmzhMHhD",
            ].map((link, idx) => (
              <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                <div className="p-2">
                  <iframe
                    className="w-100 rounded border border-secondary shadow"
                    style={{ height: "260px" }}
                    src={link}
                    title={`YouTube video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div className="text-center">
            <h2 className="fw-bold fs-1 mb-3">
              Curriculum Jo Banaye Apko Skill Ready
            </h2>
            <p className="fw-semibold fs-5 text-secondary text-white">
              With new & updated modules!
            </p>
          </div>

          {/* Card Grid */}
          <div className="row justify-content-center mt-4 gx-0 gy-1">
            {[
              { title: "Full Stack Development", img: banner1 },
              { title: "Mern Stack Development", img: banner2 },
              { title: "Introduction to Coding", img: banner3 },
              { title: "WordPress Development", img: banner4 },
              { title: "Data Structures & Algorithms (DSA)", img: banner5 },
              { title: "Become a Chat GPT Pro", img: banner6 },
              { title: "Python", img: banner7 },
              { title: "Java", img: banner8 },
              { title: "Mobile App Development", img: banner9 },
            ].map((itm, idx) => (
              <div
                className="col-12 col-sm-6 col-md-4 d-flex justify-content-center px-1 mb-2"
                key={idx}
                style={{ maxWidth: "330px" }}
              >
                <Card
                  title={itm.title}
                  buttonText={"Read More"}
                  onClick={handleSite}
                  img={itm.img}
                />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="row justify-content-center mt-5 g-4">
            {[
              { number: "8,760+", label: "Learning Hours" },
              { number: "13+", label: "Live Projects" },
              { number: "3", label: "Months Internship" },
            ].map((item, idx) => (
              <div key={idx} className="col-10 col-sm-6 col-md-3">
                <div
                  className="rounded-4 py-4 px-3 h-100 d-flex flex-column justify-content-center align-items-center shadow"
                  style={{ backgroundColor: "#1f2939" }}
                >
                  <h3 className="fw-bold display-6 text-white">
                    {item.number}
                  </h3>
                  <p className="fw-semibold fs-5 text-secondary text-white">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Spacer */}
          <div className="d-flex justify-content-center mt-5"></div>
        </div>
      </section>

      {/* Sixth Section */}
      <section
        className="py-5 px-3 px-sm-4 px-md-5 px-lg-5 text-white"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="d-flex flex-column align-items-center p-1">
          <h2
            className="fw-bold text-center mb-5"
            style={{
              fontSize: "2rem",
              lineHeight: "1.3",
              letterSpacing: "-0.5px",
            }}
          >
            Join this program if you are a →
          </h2>

          <div
            className="row gx-2 gy-3 justify-content-center"
            style={{ maxWidth: "1500px" }}
          >
            {[
              {
                title: "Student & Recent Graduate",
                description:
                  "Grab your first job with the help of our expert trainers and confidently kickstart your career.",
                icons: (
                  <GraduationCap
                    className="bi bi-mortarboard-fill text-info"
                    style={{ fontSize: "1.5rem" }}
                  />
                ),
              },
              {
                title: "Entrepreneur",
                description:
                  "Grow your business with hands-on strategies, marketing insights, and your own professional website.",
                icons: (
                  <Handshake
                    className="bi bi-briefcase-fill text-success"
                    style={{ fontSize: "1.5rem" }}
                  />
                ),
              },
              {
                title: "Freelancer",
                description:
                  "Boost your freelancing income with targeted skills, client-ready portfolios, and smart workflows.",
                icons: (
                  <BadgeDollarSign
                    className="bi bi-currency-dollar text-warning"
                    style={{ fontSize: "1.5rem" }}
                  />
                ),
              },
              {
                title: "Homemaker",
                description:
                  "Turn your passion into a profitable skill by learning to build websites, apps, and creative tech solutions.",
                icons: (
                  <LucideHome
                    className="bi bi-house-fill text-danger"
                    style={{ fontSize: "1.5rem" }}
                  />
                ),
              },
            ].map((itm, idx) => (
              <div className="col-12 col-md-6 col-lg-5 mb-3" key={idx}>
                <div
                  className="card text-white rounded-4 p-4 shadow"
                  style={{
                    backgroundColor: "#1e293b",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span
                      className="d-flex justify-content-center align-items-center rounded-circle shadow"
                      style={{
                        minWidth: "44px",
                        minHeight: "44px",
                        fontSize: "1.5rem",
                      }}
                    >
                      {itm.icons}
                    </span>
                    <h5 className="fw-bold mb-0">{itm.title}</h5>
                  </div>
                  <p className="text-light">{itm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seventh Section */}
      <section
        className="py-5 px-3 px-sm-4 px-md-5 px-lg-5 text-white"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="d-flex flex-column align-items-center">
          <h1
            className="fw-bold text-center mb-4"
            style={{
              fontSize: "2rem",
              color: "white",
            }}
          >
            Experience Se Seekho, Sirf Theory Se Nahi! →
          </h1>

          <div
            className="w-100 rounded-4 shadow"
            style={{
              maxWidth: "1300px",
              padding: "2rem",
              backgroundColor: "#1e293b",
              boxShadow: "0px 15px 35px rgba(0,0,0,0.3)",
              display: "grid",
            }}
          >
            <ImageSlider images={images} />
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="text-center px-3">
          <h1 className="fw-bold mb-5" style={{ fontSize: "2rem" }}>
            Baniye Kodu Academy Ke Sath Career-Ready →
          </h1>
        </div>

        {/* Main Content Block */}
        <div
          className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-lg-5 px-3 py-4 mx-auto"
          style={{
            maxWidth: "1280px",
            background:
              "linear-gradient(to right, rgba(29,78,216,0.4), rgba(30,64,175,0.3))",
            borderRadius: "2rem",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Left Column */}
          <div
            className="d-flex flex-column gap-4 text-center"
            style={{ maxWidth: "20rem" }}
          >
            <div>
              <h4 className="fw-bold" style={{ fontSize: "1.5rem" }}>
                Industry-Driven Projects
              </h4>
              <p className="text-secondary mt-2" style={{ color: "#f8fafc" }}>
                Get hands-on experience through projects sponsored by industry
                leaders for your career.
              </p>
            </div>
            <div>
              <h4 className="fw-bold" style={{ fontSize: "1.5rem" }}>
                Mentorship Program
              </h4>
              <p className="text-secondary mt-2" style={{ color: "#f8fafc" }}>
                Receive guidance from industry mentors who provide valuable
                advice, ensuring you have the best support.
              </p>
            </div>
          </div>

          {/* Image Center */}
          <div className="flex-shrink-0" style={{ width: "18rem" }}>
            <img
              src={KoduMam2}
              alt="Mentor"
              className="img-fluid rounded-4 shadow"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Right Column */}
          <div
            className="d-flex flex-column gap-4 text-center"
            style={{ maxWidth: "20rem" }}
          >
            <div>
              <h4 className="fw-bold" style={{ fontSize: "1.5rem" }}>
                Internship Opportunities
              </h4>
              <p className="text-secondary mt-2" style={{ color: "#f8fafc" }}>
                Access strategic internships for career-boosting hands-on
                experience and professional growth.
              </p>
            </div>
            <div>
              <h4 className="fw-bold" style={{ fontSize: "1.5rem" }}>
                1 to 1 Career Counseling
              </h4>
              <p className="text-secondary mt-2" style={{ color: "#f8fafc" }}>
                Receive personalized career counseling sessions to identify your
                strengths, interests, and career goals.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="mt-5 text-center px-3">
          <h2 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>
            Our Brands →
          </h2>

          <div className="w-100 overflow-hidden">
            <ImageSlider
              images={brandImage}
              className="img-fluid rounded-4 shadow mx-3"
              style={{
                height: "7rem",
                width: "10rem",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* Ninth Section */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="d-flex flex-column align-items-center text-center px-3">
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "2rem",
              lineHeight: "1.3",
            }}
          >
            Internships & Placements for Your Success →
          </h2>
          <p
            className="fw-medium"
            style={{
              maxWidth: "900px",
              color: "#d1d5db", // Tailwind's text-gray-300
              fontSize: "1rem", // base
              lineHeight: "1.75rem",
            }}
          >
            We go beyond education—we build careers! Our students have
            successfully secured internships and placements in top companies,
            gaining hands-on experience and industry insights. With our strong
            network and dedicated support, we ensure you get the right
            opportunities to grow and succeed. Start your journey with us and
            step into a brighter future!
          </p>
        </div>

        <div className="mt-5">
          <div className="w-100 overflow-hidden">
            <ImageSlider
              images={PlacementImage}
              className="mx-2 shadow"
              style={{
                height: "22rem",
                width: "25rem",
                objectFit: "contain",
                borderRadius: "1rem",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Tenth Section */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="text-center mb-4 px-3">
          <h2 className="fw-bold display-5 mb-3">Master 20+ Languages →</h2>
          <p className="fw-semibold text-secondary mb-4 text-white">
            And become a pro Coder...
          </p>
        </div>

        <div className="container">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
            {imagesLang.map((itm, idx) => (
              <div className="col" key={idx}>
                <div
                  className="d-flex justify-content-center align-items-center rounded-4 shadow-lg p-3"
                  style={{
                    background: "linear-gradient(to right, #4b5563, #1f2937)",
                    border: "1px solid #1f2937",
                  }}
                >
                  <img
                    src={itm}
                    alt={`Language-${idx}`}
                    className="img-fluid rounded"
                    style={{
                      height: "80px",
                      width: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eleventh Section */}
      <section
        className="py-5 text-white p-4"
        style={{
          background: "linear-gradient(to right, #4b5563, #0f172a)",
        }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center mx-auto px-3 p-5 rounded-4 shadow-lg"
          style={{
            maxWidth: "900px",
            minHeight: "24rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#1e3a8a",
          }}
        >
          <h2 className="font-serif fw-bold display-5 mb-3">
            Join Kodu Institute & Land Your Dream Tech Job!
          </h2>

          <p className="text-light fs-5 mb-4">Register Today!</p>

          <div className="mt-4">
            <Button
              text="Enquire Now"
              className="fs-5 bg-light text-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2"
              icon={<CheckCircle className="text-success" />}
              onClick={openWhatsapp}
            />
          </div>

          <p className="fw-semibold mt-3 text-warning d-flex gap-2">
            Last <SeatsLeft bookedCount={bookedCount} resetTrigger={resetTrigger}/> Seats Left
          </p>
        </div>
      </section>

      {/* Twelth Section */}
      <section className="p-5">
        <h2 className="text-center fw-bold display-5 mb-4">
          Jo Seekh Chuke Hain, Unhi Se Suno!
        </h2>
        <div className="container">
          <div className="row justify-content-center g-4">
            {ReviewsArray.map((itm, idx) => (
              <div className="col-12 col-sm-6 col-lg-3" key={idx}>
                <Reviews
                  name={itm.name}
                  description={itm.description}
                  img={itm.img}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thirteenth Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#1f2937",
          boxShadow: "0px -2px 5px rgba(34,197,94,0.6)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center g-4 p-3">
            {/* Left Column */}
            <div className="col-12 col-lg-6 " style={{ maxWidth: "500px" }}>
              <h2 className="fw-bold display-5 mb-3">
                Get certified with a verifiable certificates →
              </h2>
              <p className="font-serif">
                We will also assist you with getting certificates from Google,
                Meta, Semrush, and more.
              </p>
              <div className="d-flex flex-column align-items-center gap-3 mt-4">
                <Button
                  text="Download Brochure"
                  onClick={() => setShowPopup(true)}
                  className="btn btn-success text-white px-4 py-2 rounded-4"
                  style={{ fontSize: "1.2rem", height: "3.5rem" }}
                  icon={<Download className="me-2" />}
                />
                <PopupForm
                  isOpen={showPopup}
                  onClose={() => setShowPopup(false)}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-lg-6">
              <ImageSlider
                images={certificateImages}
                className="rounded shadow-lg"
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fourteenth Section */}
      <section
        className="py-5 bg-dark text-white shadow-sm mb-4 p-5"
        style={{ backgroundColor: "#1e293b" }}
      >
        <div className="container">
          <h2 className="fw-bold text-center display-5 mb-4 text-light">
            Learn from Top Industry Experts →
          </h2>

          <div className="text-center mt-4">
            <h4 className="fw-bold fs-4 mb-4">
              Our <span className="text-primary">Mentors</span>
            </h4>
          </div>

          <div className="row justify-content-center g-4">
            {mentors.map((itm, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <MentorCard
                  name={itm.name}
                  title={itm.title}
                  img={itm.img}
                  className={itm.className}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fifteenth Section */}
      <section>
        <div className="container text-center p-5">
          <h1 className="fw-bold display-5 mb-4">
            Frequently Asked Questions →
          </h1>
          <div
            className="d-flex flex-column align-items-center gap-4"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {quesArray.map((itm, idx) => (
              <div key={idx} className="w-100">
                <QuestionCard title={itm.title} discription={itm.discription} />
              </div>
            ))}
            <Button
              text="Download Brochure"
              onClick={() => setShowPopup(true)}
              className="btn btn-primary text-white px-4 py-3 rounded-pill mt-4 d-flex align-items-center gap-2"
              icon={<Download className="me-2" />}
            />
          </div>
        </div>
      </section>

      {/* Sixteenth Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(to right, #1e3a8a, #0f172a)",
          minHeight: "18rem",
        }}
      >
        <div className="d-flex flex-column align-items-center justify-content-center h-100 px-4">
          <h2
            className="fw-bold display-5 mb-4 text-white"
            style={{ maxWidth: "36rem" }}
          >
            Start your Coder Success Journey Today
          </h2>
          <BookMySeatButton
        bookedCount={bookedCount}
        setBookedCount={setBookedCount}
        resetTrigger={resetTrigger}
      />
        </div>
      </section>
    </div>
  );
}

export default App;
