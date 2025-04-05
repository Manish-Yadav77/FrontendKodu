import { useState } from "react";
import {
  Download,
  CheckCircle,
  GraduationCap,
  Handshake,
  BadgeDollarSign,
  Video,
  BookCheck,
  Briefcase,
  User,
  BookA,
  LucideHome,
  Code,
  Code2,
  FileCode2Icon,
} from "lucide-react";
import Form from "./component/Form";
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
} from "./data/ImgData";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const certificateImages = [Certificate];

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

  const PlacementImage = [Placement1, Placement2, Placement3, Placement4];

  const images = [singlTeacher, Kodu4, KoduMamSir, KoduGroup];

  const ReviewsArray = [
    {
      name: "Ananya Sharma ",
      description:
        '"I really loved how easy and structured the learning experience is on Kodu. The interface is clean and the content feels personalized. Super helpful for beginners like me!"',
      img: St1,
    },
    {
      name: "Rohit Mehta ",
      description: `"Kodu helped me understand React and backend development in such a simple way. The projects and real-time support made a big difference in my learning journey."`,
      img: St2,
    },
    {
      name: "Aditya Verma",
      description: `"As someone who’s already done BCA, I found Kodu’s content refreshingly practical. It’s not just theory — you actually build cool stuff!"`,
      img: St3,
    },
  ];

  const mentors = [
    {
      name: "Ram Mohan ",
      title: "IIT Kanpur",
      img: RamSir,
    },
    {
      name: "Seema Mam",
      title: "Sr. coding Expert",
      img: SeemaMam,
    },
    {
      name: "Deepanshu ",
      title: "CTO Delaine",
      img: DeepanshuSir,
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
    <div className="h-full w-screen bg-gray-800 text-white overflow-x-hidden">
      {/* First Section */}
      <section className="p-10 pb-0">
        <div className="flex flex-col lg:flex-row items-center md:gap-20 mt-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Logo and Featured Section */}
            <div className="flex items-center gap-4">
              <img src={Kodu} alt="Logo" className="h-24 w-24" />
              <div>
                <h1 className="font-bold text-xl">KODU</h1>
                <h1 className="font-bold text-xl">Code Your Future</h1>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Become a <br />
              <span className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                {" "}
                High-Paid Full Stack Developer –{" "}
              </span>
              <br />
              Enroll Now!
            </h1>

            {/* Collaboration Section */}
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold">In Collaboration With</p>
              <img src={Dhurina} alt="SmallLogo" className="h-12" />
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl mt-5">
              <img
                src={KoduGroup1}
                className="md:w-350 md:h-110 lg:ml-25 sm:mb-88 md:mb-0 object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Form Component */}
          <div className="self-start w-full max-w-md md:ml-20">
            <Form />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:mt-5 lg:mt-0 lg:gap-6 w-200 lg:w-full max-w-6xl lg:ml-5 ml-5 mr-5">
          {[
            { title: "365 Days+", subtitle: "Duration" },
            { title: "15+ Languages", subtitle: "Skills" },
            { title: "100% Placement", subtitle: "Assistance*" },
            { title: "Scholarship", subtitle: "Get up to 100% scholarship!" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-purple-600 to-blue-600 text-center p-3 lg:p-4 rounded-lg"
            >
              <p className="font-bold text-xl lg:text-2xl">{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section */}
      <section className="py-10 text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-12">
          {" "}
          Why Choose Kodu Institute?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-6xl mx-auto ml-8 sm:ml-12 lg:ml-50 md:ml-10 md:mr-8 lg:mr-0 justify-center ">
          {[
            {
              text: "Learn from Industry Experts & Top Trainers",
              icon: <Video className="hover:cursor-pointer h-full w-fit m-2" />,
            },
            {
              text: "Work on Live Projects – Gain Real-World Experience",
              icon: (
                <BookCheck className="hover:cursor-pointer h-full w-fit m-2" />
              ),
            },
            {
              text: "Job Assistance & Interview Preparation",
              icon: (
                <GraduationCap className="h-full w-fit m-2 hover:cursor-pointer" />
              ),
            },
            {
              text: "Fully AC & WiFi-Enabled Classrooms + Free Lab Access",
              icon: (
                <Briefcase className="hover:cursor-pointer h-full w-fit m-2" />
              ),
            },
            {
              text: "Personality Development (PD) Sessions to Boost Confidence",
              icon: <BookA className="hover:cursor-pointer h-full w-fit m-2" />,
            },
            {
              text: "Industry Certificates",
              icon: <User className="hover:cursor-pointer h-full w-fit m-2" />,
            },
            {
              text: "3months Internship  from Practical Learnings",
              icon: (
                <Briefcase className="hover:cursor-pointer h-full w-fit m-2" />
              ),
            },
            {
              text: "100% Placement Guidance by Seniors ",
              icon: (
                <BookCheck className="h-full w-fit m-2 hover:cursor-pointer" />
              ),
            },
            {
              text: "Weekly Practice Test  for Evaluation ",
              icon: (
                <GraduationCap className="h-full w-fit m-2 hover:cursor-pointer" />
              ),
            },
          ].map((itm, index) => (
            <div key={index} className="flex items-center gap-3  ml-5">
              {/* Icon Placeholder */}
              <span className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                {itm.icon}
              </span>
              <p className="font-bold lg:text-lg pt-5 mr-5">{itm.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fourth Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 font-bold text-center mb-8">
            What our learners say →
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {/* Video 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/lQ61Py-yK_g?si=sjZskYAnHR5WG4ls"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/H1wJ65CHjHg?si=_uShHVjTRt4FwoZK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/ii56gROfb80?si=4YaO1oXUkmzhMHhD"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="py-10">
        <div className="flex flex-col items-center text-center text-4xl w-90 ml-5 md:text-5xl md:w-full md:ml-0">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Curriculum Jo Banaye Apko Skill Ready
          </h2>
          <p className="font-semibold mt-4 text-lg">
            With new & updated modules!
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-2 lg:gap-6 lg:max-w-6xl mx-auto mt-8">
            {[
              "Full Stack Development",
              "Mern Stack Development",
              "Introduction to Coding",
              "WordPress Development",
              "Data Structures & Algorithms (DSA)",
              "Become a Chat GPT Pro",
              "Python",
              "Java",
              "Mobile App Development",
            ].map((itm, idx) => (
              <Card
                key={idx}
                title={itm}
                buttonText={"Read More"}
                onClick={() => setShowPopup(true)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-12 ml-2 mr-2 lg:ml-0 lg:mr-0">
          {[
            { number: " 8,760+", label: "Learning Hours" },
            { number: "13+", label: "Live Projects" },
            { number: "3", label: "Months Internship" },
          ].map((itm, idx) => (
            <div
              key={idx}
              className="bg-gray-900 w-60 h-32 flex flex-col items-center justify-center rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-5xl">{itm.number}</h3>
              <p className="font-semibold text-lg">{itm.label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10"></div>
      </section>

      {/* Sixth Section */}
      <section>
        <div className="flex flex-col items-center ">
          <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 md:text-center">
            Join this program if you are a →
          </h2>

          <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2  gap-7 justify-center text-center">
            {[
              {
                title: "Student & Recent Graduate",
                description:
                  "Grab Your 1st Job with the help of our trainers  and kickstart your career now",
                icons: <GraduationCap className="mt-1" />,
              },
              {
                title: "Entrepreneur",
                description:
                  "Don’t wait anymore, grow your business success with practical insights and actionable strategies to make your own wesbites.",
                icons: <Handshake className="mt-1" />,
              },
              {
                title: "Freelancer",
                description:
                  "Maximize your freelancing revenue with our specialized strategies and expert guidance to upscale your tech - knowledge",
                icons: <BadgeDollarSign className="mt-1" />,
              },
              {
                title: "Homemaker",
                description:
                  " Transform your passion into profit with our proven record and hacks to achieve the success in coding world…",
                icons: <LucideHome className="mt-1" />,
              },
            ].map((itm, idx) => (
              <div key={idx} className="">
                <Card
                  title={itm.title}
                  description={itm.description}
                  icon={itm.icons}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seventh Section */}
      <section>
        <div className="flex flex-col items-center mt-10 text-4xl w-90 ml-5 md:text-5xl md:w-full md:ml-0 ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-5 mt-5">
            Experience Se Seekho, Sirf Theory Se Nahi! →
          </h1>
          <div className="flex mt-8 gap-8 pb-5 w-3xl md:w-full flex-wrap justify-center shadow-gray-700 shadow-lg md:mr-6 pl-3 m-5 pt-3 pr-5 ">
            <ImageSlider images={images} />
          </div>
        </div>
      </section>

      {/* Eighth Section */}

      {/* Ninth Section */}
      <section className="py-10 ">
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 mb-12 mt-5 md:text-center">
            Baniye Kodu Academy Ke Sath Career-Ready →
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto bg-gradient-to-r from-blue-600 bg-transparent rounded-2xl">
          {/* Left Side */}
          <div className="flex flex-col items-center text-center gap-6 max-w-sm">
            <div>
              <h4 className="text-2xl font-bold pt-8 md:pt-8 lg:pt-0">
                Industry-Driven Projects
              </h4>
              <p className="text-gray-300 mt-2 mr-8 ml-5 md:mr-0 md:ml-0">
                Get hands-on experience through projects sponsored by industry
                leaders for your career.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Mentorship Program</h4>
              <p className="text-gray-300 mt-2 mr-8 ml-5 md:mr-0 md:ml-0">
                Receive guidance from industry mentors who provide valuable
                advice, ensuring you have the best support.
              </p>
            </div>
          </div>

          {/* Image in Center */}
          <div className="w-60 h-60 flex-shrink-0">
            <img
              src={AloneTeacher1}
              alt="Teacher"
              className="w-80 h-95 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center text-center gap-6 max-w-sm">
            <div>
              <h4 className="text-2xl font-bold mt-19 md:mt-20 lg:mt-0">
                Internship Opportunities
              </h4>
              <p className="text-gray-300 mt-2 mr-8 ml-5 md:mr-0 md:ml-0">
                Access strategic internships for career-boosting hands-on
                experience and professional growth.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">1 to 1 Career Counseling</h4>
              <p className="text-gray-300 mt-2 mb-12 md:mb-8 lg:mb-0 mr-8 ml-5 md:mr-0 md:ml-0">
                Receive personalized career counseling sessions to identify your
                strengths, interests, and career goals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center mt-28">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Our Brands →
            </h2>
          </div>
          <div className="flex justify-center gap-7 mt-5 animate-pulse flex-wrap">
            <ImageSlider
              images={brandImage}
              className={"h-35 w-50 m-7 shadow-black shadow-lg p-6"}
            />
          </div>
        </div>
      </section>

      {/* Tenth Section */}
      <section>
        <div className="flex flex-col items-center mt-3 justify-center ">
          <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 md:text-center">
            Internships & Placements for Your Success →
          </h2>
          <p className="font-semibold md:w-210 lg:w-250 mt-7 text-balance md:text-center mr-12 ml-7 md:mr-0 md:ml-0">
            We go beyond education—we build careers! Our students have
            successfully secured internships and placements in top companies,
            gaining hands-on experience and industry insights. With our strong
            network and dedicated support, we ensure you get the right
            opportunities to grow and succeed. Start your journey with us and
            step into a brighter future!
          </p>
        </div>

        <div>
          <div className="flex justify-center gap-5 mt-15 flex-wrap">
            <ImageSlider
              images={PlacementImage}
              className={
                "md:h-85 md:w-120 h-35 w-50 m-7 shadow-black shadow-lg p-6"
              }
            />
          </div>
        </div>
      </section>

      {/* Eleventh Section */}
      <section>
        <div className="flex flex-col items-center mb-8 gap-5">
          <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 mt-5 md:text-center">
            Master 20+ Languages →
          </h2>
          <p className="font-semibold mt-5 mb-5">And become a pro Coder... </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7 mr-5 md:mr-0 ">
            {imagesLang.map((itm, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-600 to-gray-900  shadow-black shadow-lg border border-black flex justify-center items-center rounded-2xl md:w-30 lg:w-35 "
              >
                <img
                  src={itm}
                  alt="Tools Logo"
                  className="h-15 w-20 lg:h-25 -p-2 lg:w-25 rounded-2xl "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Twelth Section */}
      <section>
        <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-r from-violet-700 to-sky-700 mt-12 rounded-2xl w-screen">
          <h2 className="font-serif text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-180 lg:w-280 md:ml-0  text-center">
            Join Kodu Institute & Land Your Dream Tech Job!
            <p className="mt-3 font-serif">Register Today!</p>
          </h2>
          <Button
            text={"Enquire Now"}
            className={"text-2xl mt-8 hover:cursor-pointer"}
            icon={<CheckCircle className="mt-1.5 " />}
          />
          <p className="font-semibold mt-5">Last 16 Seats Left</p>
        </div>
      </section>

      {/* Thirteenth Section */}
      <section>
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mt-12 mb-8">
          Jo Seekh Chuke Hain, Unhi Se Suno!
        </h2>
        <div className="flex flex-wrap justify-center sm:gap-1 md:gap-3 lg:gap-12 lg:mr-12">
          {ReviewsArray.map((itm, idx) => (
            <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 lg:mr-8">
              <Reviews
                name={itm.name}
                description={itm.description}
                img={itm.img}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Fourteenth Section */}
      <section>
        <div className="lg:max-h-fit xl:h-110 h-170 md:h-200 bg-gray-800 shadow-white shadow-[0px_-2px_5px_rgba(34,197,94,0.6)]">
          <div className="flex justify-center mt-7 pt-9 gap-8 flex-wrap">
            <div className="flex flex-col w-122 gap-5 ">
              <h2 className="font-bold text-4xl w-90 ml-5 md:text-5xl md:w-full md:ml-0 pt-12">
                Get certified with a verifiable certificates →
              </h2>
              <p className="font-serif ml-5 md:ml-0">
                We will also assist you with getting certificates from Google,
                Meta, Semrush, and more.
              </p>
              <div className="flex flex-col w-52 items-center gap-5 ml-4">
                <Button
                  text={"Download Brochure"}
                  onClick={() => setShowPopup(true)}
                  className={
                    "bg-gradient-to-r from-violet-600 to-green-500 text-xl w-68 h-13 flex pt-3 lg:mb-12 ml-18 md:ml-0 hover:cursor-pointer "
                  }
                  icon={<Download className="mr-3" />}
                />
                <PopupForm
                  isOpen={showPopup}
                  onClose={() => setShowPopup(false)}
                />
              </div>
            </div>
            <div className="h-50 w-150">
              <ImageSlider
                images={certificateImages}
                className={
                  "h-70 w-90 md:h-90 md:w-130 shadow-black shadow-2xl "
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fifteenth Section */}
      <section>
        <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 text-center text-slate-100 mt-70 md:mt-8">
          Learn from top Industry Experts →
        </h2>
        <div className="flex flex-col items-center mt-5">
          <h4 className="flex gap-5 text-3xl mb-5 mt-1 md:mt-3">
            Our <p className="text-3xl font-bold">Mentors</p>
          </h4>
          <div className="flex flex-wrap justify-center ml-12 md:ml-0 gap-12 lg:gap-15">
            {mentors.map((itm, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/4">
                <MentorCard name={itm.name} title={itm.title} img={itm.img} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixtinth Section */}
      <section>
        <div className="flex flex-col items-center mb-8 gap-5 ">
          <h1 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 md:text-center">
            Frequently Asked Questions →
          </h1>
          {quesArray.map((itm, idx) => (
            <div key={idx}>
              <QuestionCard title={itm.title} discription={itm.discription} />
            </div>
          ))}
          <Button
            text={"Download Brochure"}
            onClick={() => setShowPopup(true)}
            className={
              "text-xl bg-gradient-to-r from-violet-500 to-blue-600 flex flex-row gap-3 hover:cursor-pointer"
            }
            icon={<Download className="mt-0.5" />}
          />
        </div>
      </section>

      {/* Seventeenth Section */}
      <section>
        <div className="flex flex-col items-center bg-gradient-to-r from-violet-600 to-blue-500 h-65 md:h-80 pt-5 md:pt-15">
          <h2 className="text-center font-bold text-4xl w-90 ml-5 md:text-5xl md:ml-0 mb-8 md:w-180">
            Start your Coder Success Journey Today
          </h2>
          <Button
            text={"Book My Seat"}
            className={
              "text-2xl bg-gradient-to-r from-violet-700 to-blue-700 flex flex-row gap-3 hover:cursor-pointer"
            }
            icon={<CheckCircle className="mt-1.5" />}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
