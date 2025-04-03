import { useState } from "react";
import { Home, Download, CheckCircle, GraduationCap, Brain, Handshake, UserCheck, DollarSign, BadgeDollarSign, Video, BookCheck, Briefcase, User, CreativeCommons, CreditCardIcon, Book, BookA, Building, UserCog, PersonStanding, PersonStandingIcon, User2 } from "lucide-react";
import Form from "./component/Form";
import Card from "./component/card/Card";
import Button from "./component/Button";
import Reviews from "./component/card/Reviews";
import MentorCard from "./component/card/MentorCard";
import QuestionCard from "./component/card/QuestionCard";
import { singlTeacher, Dhurina, Kodu, Kodu4, KoduMamSir, KoduGroup, KoduGroup1, AloneTeacher1 } from "./data/ImgData";

function App() {

  const pdfUrl = 'https://drive.google.com/file/d/1OiYkDwwWBhU5KCY699GokvSBnKEloSi1/view?usp=drivesdk';

  const downloadButton = ()=>{
    window.open(pdfUrl, '_blank');

  }
  const toolsArray = [
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Adobe_Photoshop_CC_icon.svg.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-1.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/rank.png",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-1-1.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/e.webp",
    'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-3.png',
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-2.png",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/meta-icon.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/174881.png",
  ];

  const ReviewsArray = [
    {
      name: 'Rajesh Kumar',
      description: 'Enrolling in Digital Chaabi Academy was the best decision for my business. The strategies I learned helped me increase my revenue by 50% within just six months. My business became profitable for the first time, and I owe it all to the expert guidance and practical insights from the academy.',
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-1.webp'
    },
    {
      name: 'Anil Mehta',
      description: "I was able to implement advanced digital marketing techniques that boosted my client base and significantly increased my earnings. The academy's comprehensive training not only helped me grow my business but also paved the way for continuous career growth. A game-changer for digital entrepreneurs",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-3.webp'
    },
    {
      name: 'Suresh Ray',
      description: "The courses are incredibly detailed and hands-on, providing me with the tools and knowledge to effectively market my business online. I've seen a substantial increase in both traffic and sales, making my business more profitable than I ever imagined. This academy is a must for anyone serious about success",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-2.webp'
    },
    
  ];

  const mentors = [
    {
      name: "Ankush Mehta",
      title: "Multipreneur, Founder- Digital Chaabi Brands",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Ankush-Mehta.webp',
    },
    {
      name: "Sunil Mehta",
      title: "Admin, Healthcare & Influencer Marketing Practitioner",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/rohit-sir.webp',
    },
    {
      name: "Aryan Tiwari",
      title: "Growth Catalyst Brand Marketer",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Harsh-sir-1.webp'
    }
  ];

  const quesArray = [
    {
      title: 'What sets apart the Digital Marketing program in Hisar from other programs? ',
      discription: 'The Digital Marketing program in Hisar is different because it’s all about what works right here. You’ll learn practical stuff that you can use in businesses around Hisar. Plus, you’ll actually do things, not just talk about them. It’s like learning by doing, which makes it way easier to understand and remember. So, when you finish, you’ll be ready to confidently tackle any digital marketing job.',
    },
    {
      title: 'How is AI technology integrated into the Digital Marketing curriculum?',
      discription: 'In our Digital Marketing program, we show you how to use AI to make your marketing super effective. You’ll learn to understand data, know your customers better, and create ads that really work. It’s like having a super-smart helper by your side! So, when you finish, you’ll be ahead of the pack and impress everyone with your awesome skills.',
    },
    {
      title: 'Is prior marketing experience necessary to enroll in the Digital Marketing program?',
      discription: 'No, you don’t need any marketing experience to join our Digital Marketing program. We welcome beginners who are just starting, as well as those with some experience looking to level up their skills. Our program is designed to meet you where you are and help you succeed, no matter your background.',
    },
    {
      title: 'What are the potential career paths after completing a Digital Marketing program in Hisar?',
      discription: 'Upon completion, graduates can pursue various career paths, including direct positions such as Digital Marketing Specialist, Social Media Manager, SEO Analyst, Content Marketer, Email Marketing Manager, Paid Advertising Specialist, and Digital Marketing Strategist.',
    }
  ];

  const trainers = [
    {
      name: "Shushmita goyal",
      title: "Multipreneur, Founder - Digital Chaabi Brands",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/a.webp',
    },
    {
      name: "Tammana Rathi",
      title: "Admin, Healthcare & Influencer Marketing Practitioner",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/renu-300x300-1.webp',
    },
    {
      name: "Rahul Jhangra",
      title: "Growth Catalyst Brand Marketer",
      img: 'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Monu-Saharan-SEO-1-1.webp',
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
              <img
                src={Kodu}
                alt="Logo"
                className="h-24 w-24"
              />
              <div>
                <h1 className="font-bold text-xl">KODU</h1>
                <h1 className="font-bold text-xl">Code Your Future</h1>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bano Ek <br />
              <span className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent">Skilled Digital Marketer </span><br />
              Sirf 100 Dino Mai
            </h1>

            {/* Collaboration Section */}
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold">In Collaboration With</p>
              <img
                src={Dhurina}
                alt="SmallLogo"
                className="h-12"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl mt-5">
              <img
                src={KoduGroup1}
                className="md:w-350 md:h-110 lg:ml-25  object-cover rounded-lg"
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
            { title: "100 Days", subtitle: "Duration" },
            { title: "15+ AI Tools", subtitle: "Features" },
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
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-12">Learn from Experts!</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ml-8 sm:ml-12 lg:ml-65 md:ml-10 md:mr-8 lg:mr-0 justify-center ">
          {[
            { text: "Access to Recorded Classes", icon: <Video className="hover:cursor-pointer"/> },
            { text: "Expert Live Sessions", icon: <BookCheck className="hover:cursor-pointer"/> },
            { text: "Hands-on Projects", icon: <GraduationCap className="hover:cursor-pointer"/> },
            { text: "100% Job Placement Assistance", icon: <Briefcase className="hover:cursor-pointer"/> },
            { text: "Industry Certifications", icon: <BookA className="hover:cursor-pointer"/> },
            { text: "Lifetime Access", icon: <User  className="hover:cursor-pointer"/> },
          ].map((itm, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Icon Placeholder */}
              <span className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">{itm.icon}</span>
              <p className="font-bold text-xl">{itm.text}</p>
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
              "WordPress Website",
              "SEO",
              "Content and Copywriting",
              "Shopify and E-Commerce",
              "Google Ads",
              "Meta Ads",
              "Influencer Marketing",
              "Communication Skills",
              "AI Integration",
            ].map((itm, idx) => (
              <Card key={idx} title={itm} buttonText={"Read More"} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-12 ml-2 mr-2 lg:ml-0 lg:mr-0">
          {[
            { number: "180+", label: "Learning Hours" },
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

        {/* Download Brochure Button */}
        <div className="flex justify-center mt-10">
          <Button
            className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-3 px-6 rounded-lg text-2xl 
                 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1 flex flex-row gap-3 hover:cursor-pointer"
            text="Download Brochure" onClick={downloadButton} icon={<Download className="mt-1" />}
          />
        </div>
      </section>

      {/* Sixth Section */}
      <section>
        <div className="flex flex-col items-center ">
          <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 md:text-center">Join this program if you are a →</h2>

          <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2  gap-7 justify-center text-center">
            {[
              {
                title: "Student & Recent Graduate",
                description:
                  "Grab Your 1st Job with the help of our AI-powered marketing course and kickstart your career now",
                icons: <GraduationCap className="mt-1" />,
              },
              {
                title: "Marketing Enthusiast",
                description:
                  "Level up your skills and master advanced marketing strategies with our practical skill-based course",
                icons: <Brain className="mt-1" />,
              },
              {
                title: "Entrepreneur",
                description:
                  "Don’t wait anymore, grow your business success with practical insights and actionable strategies.",
                icons: <Handshake className="mt-1" />,
              },
              {
                title: "Freelancer",
                description:
                  "Maximize your freelancing revenue with our specialized strategies and expert guidance.",
                icons: <BadgeDollarSign className="mt-1" />,
              },
            ].map((itm, idx) => (
              <div key={idx} className="">
                <Card title={itm.title} description={itm.description} icon={itm.icons} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seventh Section */}
      <section>
        <div className="flex flex-col items-center mt-10 text-4xl w-90 ml-5 md:text-5xl md:w-full md:ml-0 ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-5 mt-5">
            Pleasure to Meet Few Known Faces →
          </h1>
          <div className="flex mt-8 gap-8 flex-wrap justify-center shadow-black shadow-lg">
            <img
              src={Kodu4}
              alt=""
              className="h-80 w-90 rounded-2xl shadow-black shadow-2xl"
            />
            <img
              src={KoduMamSir}
              alt=""
              className="h-80 w-80 rounded-2xl shadow-black shadow-2xl"
            />
            <img
              src={singlTeacher}
              alt=""
              className="h-80 w-90 md:mb-8 lg:mb-0 rounded-2xl shadow-black shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section>
        <div className="flex flex-col items-center mt-12 ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl ml-12 md:ml-0">Expected Outcomes →</h1>
          <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 justify-center items-center">
            {[
              {
                title: "State Your Own Business",
                description:
                  "Have the freedom to make decisions, set your direction, and start a business that is your dream and inspires you most.",
                  icon:<Building />
              },
              {
                title: "Get Your First Job",
                description:
                  "With 100% Job Placement Assistance, you’re not just preparing for a job but opening your door for endless career opportunities.",
                  icon:<UserCog />

              },
              {
                title: "Be A Transformed Personality",
                description:
                  "Transform Your Personality and become corporate-ready. We focus on training you with essential soft skills and interview-cracking hacks.",
                  icon:<Brain />

              },
              {
                title: "Start Your Career as an Influencer",
                description:
                  "Become a famous face and learn how to create engaging content that helps you build an audience and personal brand.",
                  icon:<User2 />

              },
            ].map((itm, idx) => (
              <div key={idx}>
                <Card
                  title={itm.title}
                  icon={itm.icon}
                  description={itm.description}
                  className={"hover:border-1"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h4 className="text-2xl font-bold pt-8 md:pt-8 lg:pt-0">Industry-Driven Projects</h4>
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
              <h4 className="text-2xl font-bold mt-19 md:mt-20 lg:mt-0">Internship Opportunities</h4>
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
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Our Brands →</h2>
          </div>
          <div className="flex justify-center gap-5 mt-5 animate-pulse flex-wrap">
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-55.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-57.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-52.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-51.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-53.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-54.png"
              alt=""
              className="h-25 w-50"
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
          <div className="flex justify-center gap-5 mt-15 animate-pulse flex-wrap">
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-55.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-57.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-52.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-51.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-53.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-54.png"
              alt=""
              className="h-25 w-50"
            />
          </div>
        </div>
      </section>

      {/* Eleventh Section */}
      <section>
        <div className="flex flex-col items-center mb-8 gap-5">
          <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 mt-5 md:text-center">Master 20+ Tools →</h2>
          <p className="font-semibold mt-5 mb-5">And become a pro digital marketer </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7 mr-5 md:mr-0 ">
            {toolsArray.map((itm, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-600 to-gray-900 p-3 md:p-5 shadow-black shadow-lg border border-black flex justify-center items-center rounded-2xl md:w-30 lg:w-35 "
              >
                <img src={itm} alt="Tools Logo" className="h-15 w-20 lg:h-20 lg:w-25 rounded-2xl " />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Twelth Section */}
      <section>
        <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-r from-violet-700 to-sky-700 mt-12 rounded-2xl w-screen">
          <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-180 lg:w-280 md:ml-0  text-center">Special Discount 30% Off on Fees only for today, if you enquire now</h2>
          <Button text={'Enquire Now'} className={'text-2xl mt-8 hover:cursor-pointer'} icon={<CheckCircle className="mt-1.5 " />} />
          <p className="font-semibold mt-5">Last 16 Seats Left</p>
        </div>
      </section>

      {/* Thirteenth Section */}
      <section>
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mt-12 mb-8">What our students say!</h2>
        <div className="flex flex-wrap justify-center sm:gap-1 md:gap-3 lg:gap-12 lg:mr-12">
          {
            ReviewsArray.map((itm, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 lg:mr-8">
                <Reviews name={itm.name} description={itm.description} img={itm.img} />
              </div>
            ))
          }
        </div>
      </section>

      {/* Fourteenth Section */}
      <section>
        <div className="lg:h-120 md:h-200 bg-gray-800 shadow-white shadow-[0px_-2px_5px_rgba(34,197,94,0.6)]">
          <div className="flex justify-center mt-7 pt-9 gap-8 flex-wrap">
            <div className="flex flex-col w-122 gap-5">
              <h2 className="font-bold text-4xl w-90 ml-5 md:text-5xl md:w-full md:ml-0 pt-12">Get certified with a verifiable certificates →</h2>
              <p className="font-serif ml-5 md:ml-0">We will also assist you with getting certificates from Google, Meta, Semrush, and more.</p>
              <div className="flex flex-col w-52 items-center gap-5 ml-4">
                <Button text={'Download Brochure'} onClick={downloadButton} className={'bg-gradient-to-r from-violet-600 to-green-500 text-xl w-68 h-13 flex pt-3 ml-18 md:ml-0 hover:cursor-pointer'} icon={<Download className="mr-3" />} />
              </div>
            </div>
            {/* Certificate Section */}
            <img src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-63-1.webp" alt="Certificate"
              className="h-90 w-130 shadow-black shadow-2xl " />
          </div>
        </div>
      </section>

      {/* Fifteenth Section */}
      <section>
        <h2 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 text-center text-slate-100 mt-70 md:mt-8">Learn from top Industry Experts →</h2>
        <div className="flex flex-col items-center mt-5">
          <h4 className="flex gap-5 text-3xl mb-5 mt-1 md:mt-3">Our <p className="text-3xl font-bold">Mentors</p></h4>
          <div className="flex flex-wrap justify-center ml-12 md:ml-0 gap-12 lg:gap-15">
            {
              mentors.map((itm, idx) => (
                <div key={idx} className="w-full sm:w-1/2 md:w-1/4">
                  <MentorCard name={itm.name} title={itm.title} img={itm.img} />
                </div>
              ))
            }
          </div>
          <h4 className="flex gap-5 text-3xl mb-5 ">Our <p className="text-3xl font-bold">Trainers</p></h4>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-15 ml-12 md:ml-0">
            {
              trainers.map((itm, idx) => (
                <div key={idx} className="w-full sm:w-1/2 md:w-1/4">
                  <MentorCard name={itm.name} title={itm.title} img={itm.img} />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Sixtinth Section */}
      <section>
        <div className="flex flex-col items-center mb-8 gap-5 ">
          <h1 className="font-bold text-3xl w-90 ml-5 md:text-4xl lg:text-5xl md:w-full md:ml-0 md:text-center">Frequently Asked Questions →</h1>
          {
            quesArray.map((itm, idx) => (
              <div key={idx}>
                <QuestionCard title={itm.title} discription={itm.discription} />
              </div>
            ))
          }
          <Button text={'Download Brochure'} onClick={downloadButton} className={'text-xl bg-gradient-to-r from-violet-500 to-blue-600 flex flex-row gap-3 hover:cursor-pointer'} icon={<Download className="mt-0.5" />} />
        </div>
      </section>

      {/* Seventeenth Section */}
      <section>
        <div className="flex flex-col items-center bg-gradient-to-r from-violet-600 to-blue-500 h-65 md:h-80 pt-5 md:pt-15">
          <h2 className="text-center font-bold text-4xl w-90 ml-5 md:text-5xl md:ml-0 mb-8 md:w-180">Start your Coder Success Journey Today</h2>
          <Button text={'Book My Seat'} className={'text-2xl bg-gradient-to-r from-violet-700 to-blue-700 flex flex-row gap-3 hover:cursor-pointer'} icon={<CheckCircle className="mt-1.5" />} />
        </div>
      </section>
    </div>
  );
}

export default App;