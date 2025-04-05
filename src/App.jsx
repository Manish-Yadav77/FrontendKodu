import { useState } from "react";
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
  KoduGroup2,
  Group1,
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

  const PlacementImage = [Placement1, Placement2, Placement3, Placement2];

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
      <section className="p-10 pb-0 bg-[#1e293b] text-white">
  <div className="flex flex-col lg:flex-row items-center md:gap-20 mt-10">
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <img src={Kodu} alt="Logo" className="h-24 w-24" />
        <div>
          <h1 className="font-bold text-xl">KODU</h1>
          <h1 className="font-bold text-xl">Code Your Future</h1>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Become a <br />
        <span className="bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
          High-Paid Full Stack Developer –
        </span>
        <br />
        Enroll Now!
      </h1>

      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-gray-300">In Collaboration With</p>
        <img src={Dhurina} alt="SmallLogo" className="h-12" />
      </div>

      <div className="relative w-full max-w-2xl mt-5">
        <img
          src={Group1}
          className="md:w-350 md:h-115 lg:w-150 lg:ml-25 xl:ml-40 sm:mb-88 md:mb-0 object-cover rounded-lg"
        />
      </div>
    </div>

    <div className="self-start w-full max-w-md md:ml-20">
      <Form />
    </div>
  </div>
</section>




      {/* Second Section */}
      <section className="flex justify-center bg-[#2d3748] text-white py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:mt-5 lg:mt-0 lg:gap-6 w-200 lg:w-full max-w-6xl lg:ml-5 ml-5 mr-5">
    {[
      { title: "365 Days+", subtitle: "Duration" },
      { title: "15+ Languages", subtitle: "Skills" },
      { title: "100% Placement", subtitle: "Assistance*" },
      { title: "Scholarship", subtitle: "Get up to 100% scholarship!" },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gradient-to-t from-#1e293b to-slate-800 text-center p-3 lg:p-4 rounded-lg"
      >
        <p className="font-bold text-xl lg:text-2xl">{item.title}</p>
        <p className="text-gray-100">{item.subtitle}</p>
      </div>
    ))}
  </div>
</section>



      {/* Third Section */}
      <section className="py-10 text-center bg-[#1e293b] text-white">
  <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-12">
    Why Choose Kodu Institute?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 max-w-6xl mx-auto px-4 sm:px-8">
    {[
      { text: "Learn from Industry Experts & Top Trainers", icon: <Video className="h-5 w-5 text-white" /> },
      { text: "Work on Live Projects – Gain Real-World Experience", icon: <BookCheck className="h-5 w-5 text-white" /> },
      { text: "Job Assistance & Interview Preparation", icon: <GraduationCap className="h-5 w-5 text-white" /> },
      { text: "Fully AC & WiFi-Enabled Classrooms + Free Lab Access", icon: <Briefcase className="h-5 w-5 text-white" /> },
      { text: "Personality Development (PD) Sessions to Boost Confidence", icon: <BookA className="h-5 w-5 text-white" /> },
      { text: "Industry Certificates", icon: <User className="h-5 w-5 text-white" /> },
      { text: "3 Months Internship from Practical Learnings", icon: <Briefcase className="h-5 w-5 text-white" /> },
      { text: "100% Placement Guidance by Seniors", icon: <BookCheck className="h-5 w-5 text-white" /> },
      { text: "Weekly Practice Test for Evaluation", icon: <GraduationCap className="h-5 w-5 text-white" /> },
    ].map((itm, index) => (
      <div key={index} className="flex items-start sm:items-center gap-4 text-left">
        <span className="min-w-[44px] min-h-[44px] bg-blue-500 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-md">
          {itm.icon}
        </span>
        <p className="font-bold text-base sm:text-[17px] lg:text-lg pr-3 text-gray-200">
          {itm.text}
        </p>
      </div>
    ))}
  </div>
</section>



      {/* Fourth Section */}
      <section className="py-10 bg-[#1e293b] text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl ml-5 w-11/12 sm:ml-0 sm:w-full sm:text-4xl lg:text-5xl font-bold text-center mb-8">
      What our learners say →
    </h2>

    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 px-3 sm:px-5 md:px-6">
      {[
        "https://www.youtube.com/embed/lQ61Py-yK_g?si=sjZskYAnHR5WG4ls",
        "https://www.youtube.com/embed/H1wJ65CHjHg?si=_uShHVjTRt4FwoZK",
        "https://www.youtube.com/embed/ii56gROfb80?si=4YaO1oXUkmzhMHhD",
      ].map((link, idx) => (
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-3">
          <iframe
            className="w-full h-64 rounded-xl border border-slate-600 shadow-lg"
            src={link}
            title={`YouTube video ${idx + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Fifth Section */}
      <section className="py-10 bg-[#1e293b] text-white">
  <div className="flex flex-col items-center text-center text-4xl w-11/12 ml-5 md:text-5xl md:w-full md:ml-0">
    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
      Curriculum Jo Banaye Apko Skill Ready
    </h2>
    <p className="font-semibold mt-4 text-lg text-gray-300">
      With new & updated modules!
    </p>

    {/* Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-3 lg:gap-6 lg:max-w-6xl mx-auto mt-8 px-3 sm:px-6">
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

  <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-12 px-4 sm:px-8">
    {[
      { number: " 8,760+", label: "Learning Hours" },
      { number: "13+", label: "Live Projects" },
      { number: "3", label: "Months Internship" },
    ].map((itm, idx) => (
      <div
        key={idx}
        className="bg-slate-800 w-60 h-32 flex flex-col items-center justify-center rounded-lg shadow-md"
      >
        <h3 className="font-bold text-5xl text-white">{itm.number}</h3>
        <p className="font-semibold text-lg text-gray-300">{itm.label}</p>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-10"></div>
</section>


      {/* Sixth Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f172a] text-white">
  <div className="flex flex-col items-center">
    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center leading-tight tracking-tight mb-12">
      Join this program if you are a →
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl w-full -ml-42 md:ml-0 mr-7">
      {[
        {
          title: "Student & Recent Graduate",
          description:
            "Grab your first job with the help of our expert trainers and confidently kickstart your career.",
          icons: <GraduationCap className="text-cyan-400 w-7 h-7" />,
        },
        {
          title: "Entrepreneur",
          description:
            "Grow your business with hands-on strategies, marketing insights, and your own professional website.",
          icons: <Handshake className="text-green-400 w-7 h-7" />,
        },
        {
          title: "Freelancer",
          description:
            "Boost your freelancing income with targeted skills, client-ready portfolios, and smart workflows.",
          icons: <BadgeDollarSign className="text-yellow-400 w-7 h-7" />,
        },
        {
          title: "Homemaker",
          description:
            "Turn your passion into a profitable skill by learning to build websites, apps, and creative tech solutions.",
          icons: <LucideHome className="text-pink-400 w-7 h-7" />,
        },
      ].map((itm, idx) => (
        <Card
          key={idx}
          title={itm.title}
          description={itm.description}
          icon={itm.icons}
          className="bg-[#1e293b] hover:bg-[#334155] text-white transition duration-300 p-6 sm:p-7 md:p-8 rounded-xl text-balance leading-relaxed"
        />
      ))}
    </div>
  </div>
</section>


      {/* Seventh Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f172a] text-white">
  <div className="flex flex-col items-center">
    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-10 text-white">
      Experience Se Seekho, Sirf Theory Se Nahi! →
    </h1>

    <div className="w-full max-w-7xl shadow-xl shadow-black/30 rounded-xl p-4 sm:p-6 md:p-8 bg-[#1e293b]">
      <ImageSlider images={images} />
    </div>
  </div>
</section>


      {/* Eighth Section */}

      {/* Ninth Section */}
      <section className="py-14 bg-[#0f172a] text-white">
  <div className="text-center px-4">
    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-12">
      Baniye Kodu Academy Ke Sath Career-Ready →
    </h1>
  </div>

  {/* Main Content Block */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-14 max-w-7xl mx-auto px-6 py-8 bg-gradient-to-r from-blue-700/40 to-blue-900/30 rounded-3xl shadow-xl">

    {/* Left Column */}
    <div className="flex flex-col gap-10 max-w-sm text-center">
      <div>
        <h4 className="text-2xl font-bold">Industry-Driven Projects</h4>
        <p className="text-gray-300 mt-3">
          Get hands-on experience through projects sponsored by industry leaders for your career.
        </p>
      </div>
      <div>
        <h4 className="text-2xl font-bold">Mentorship Program</h4>
        <p className="text-gray-300 mt-3">
          Receive guidance from industry mentors who provide valuable advice, ensuring you have the best support.
        </p>
      </div>
    </div>

    {/* Image Center - Fixed */}
    <div className="w-72 h-auto lg:w-80 flex-shrink-0">
      <img
        src={AloneTeacher1}
        alt="Mentor"
        className="w-full h-auto rounded-xl shadow-2xl"
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-10 max-w-sm text-center">
      <div>
        <h4 className="text-2xl font-bold">Internship Opportunities</h4>
        <p className="text-gray-300 mt-3">
          Access strategic internships for career-boosting hands-on experience and professional growth.
        </p>
      </div>
      <div>
        <h4 className="text-2xl font-bold">1 to 1 Career Counseling</h4>
        <p className="text-gray-300 mt-3">
          Receive personalized career counseling sessions to identify your strengths, interests, and career goals.
        </p>
      </div>
    </div>
  </div>

  {/* Brand Section */}
  <div className="mt-24 text-center px-4">
  <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
    Our Brands →
  </h2>

  <div className="w-full overflow-hidden">
    <ImageSlider
      images={brandImage}
      className="h-28 w-40 sm:h-32 sm:w-44 md:h-36 md:w-48 lg:h-40 lg:w-52 object-contain rounded-xl shadow-lg mx-4"
    />
  </div>
</div>

</section>



      {/* Tenth Section */}
      <section className="py-14 bg-[#0f172a] text-white">
  <div className="flex flex-col items-center justify-center text-center px-4">
    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
      Internships & Placements for Your Success →
    </h2>
    <p className="font-medium max-w-5xl text-gray-300 text-base sm:text-lg leading-relaxed text-balance">
      We go beyond education—we build careers! Our students have successfully secured
      internships and placements in top companies, gaining hands-on experience and industry
      insights. With our strong network and dedicated support, we ensure you get the right
      opportunities to grow and succeed. Start your journey with us and step into a brighter
      future!
    </p>
  </div>

  <div className="mt-16">
    <div className="w-full overflow-hidden">
      <ImageSlider
        images={PlacementImage}
        className="h-36 w-52 sm:h-40 sm:w-60 md:h-48 md:w-72 lg:h-66 lg:w-90 object-contain rounded-xl shadow-black shadow-xl mx-2 "
      />
    </div>
  </div>
</section>



      {/* Eleventh Section */}
      <section className="py-14 bg-[#0f172a] text-white">
  <div className="flex flex-col items-center mb-10 px-4">
    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center leading-snug mb-4">
      Master 20+ Languages →
    </h2>
    <p className="font-semibold text-gray-300 text-center text-base sm:text-lg mb-8">
      And become a pro Coder...
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-7 w-full max-w-6xl">
      {imagesLang.map((itm, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-gray-600 to-gray-900 shadow-black shadow-md border border-gray-800 flex justify-center items-center rounded-2xl p-4"
        >
          <img
            src={itm}
            alt={`Language-${idx}`}
            className="h-16 w-20 sm:h-20 sm:w-24 object-contain rounded-xl"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Twelth Section */}
      <section className="w-full px-4">
  <div className="flex flex-col items-center justify-center min-h-[24rem] sm:min-h-[22rem] bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] mt-12 rounded-2xl text-white max-w-7xl mx-auto text-center px-4 sm:px-8 py-10 sm:py-12 shadow-xl shadow-slate-800">
    
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-2">
      Join Kodu Institute & Land Your Dream Tech Job!
    </h2>

    <p className="text-lg sm:text-xl font-serif text-slate-300 mt-1">
      Register Today!
    </p>

    <div className="mt-6">
      <Button
        text="Enquire Now"
        className="text-xl sm:text-2xl bg-gray-300 text-black px-6 py-3 rounded-full hover:bg-white transition duration-300 flex items-center gap-2"
        icon={<CheckCircle className="w-5 h-5 text-green-600" />}
      />
    </div>

    <p className="font-semibold mt-4 text-sm sm:text-base text-yellow-300">
      Last 16 Seats Left
    </p>
  </div>
</section>

      {/* Thirteenth Section */}
      <section>
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mt-12 mb-8">
          Jo Seekh Chuke Hain, Unhi Se Suno!
        </h2>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-1 md:gap-3 lg:gap-12 lg:mr-12">
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
      <section className="px-4 py-16 bg-slate-800 text-white shadow-sm shadow-white mb-8 sm:mb-0">
  <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center text-slate-100 mb-4">
    Learn from Top Industry Experts →
  </h2>

  <div className="flex flex-col items-center mt-6">
    <h4 className="flex flex-wrap gap-2 text-2xl sm:text-3xl mb-8">
      Our <span className="font-bold text-2xl sm:text-3xl">Mentors</span>
    </h4>

    <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-26 max-w-7xl mx-auto">
      {mentors.map((itm, idx) => (
        <div key={idx} className="w-[280px] sm:w-[250px] md:w-[230px]">
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
  className="text-lg sm:text-xl text-white bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3 rounded-full mt-8 flex items-center gap-3 hover:brightness-110 transition-all duration-300"
  icon={<Download className="mt-0.5" />}
/>

        </div>
      </section>

      {/* Seventeenth Section */}
      <section>
  <div className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] h-72 sm:h-80 md:h-96 pt-8 sm:pt-10 md:pt-16 px-4">
    <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 text-white max-w-3xl">
      Start your Coder Success Journey Today
    </h2>
    <Button
      text={"Book My Seat"}
      className="text-xl sm:text-2xl bg-gradient-to-r from-violet-700 to-blue-700 px-6 py-3 rounded-full flex items-center gap-3 text-white hover:brightness-110 transition-all duration-300"
      icon={<CheckCircle className="mt-0.5" />}
    />
  </div>
</section>

    </div>
  );
}

export default App;
