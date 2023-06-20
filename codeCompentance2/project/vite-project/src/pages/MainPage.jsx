import Navbar from "../components/Navbar";

import { portfolios, testimonials } from "../dataList";
// import { keyframes } from "tailwindcss/resolveConfig";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AboutUs from "../components/AboutUs";

export default function MainPage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [comment, setComment] = useState("");

   const jobs = ["Student", "Frontend Web", "UI/UX Designer"];
   const [titles, setTitle] = useState(jobs[0]);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTitle(jobs[Math.floor(Math.random() * 3)]);
      }, 1000);
      return () => clearInterval(intervalId);
   }, []);

   const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(firstName, lastName, email, comment);
      if (
         firstName === "" ||
         lastName === "" ||
         email === "" ||
         comment === ""
      ) {
         Swal.fire("All input required");
      } else {
         Swal.fire({
            icon: "success",
            title: `Thank You ${firstName} ${lastName}`,
            text: "We will quickly review and respond to the message 😊",
            width: "24rem",
         });
         setFirstName("");
         setLastName("");
         setEmail("");
         setComment("");
      }
   };

   return (
      <>
         <div className="   w-full relative bg-second-gray-1 px-25 font-[poppins] text-white bg-hero-pattern  bg-no-repeat bg-cover">
            <Navbar />

            <div className="flex py-14  items-center mx-auto max-w-[1440px]">
               <div className=" w-1/2">
                  <p className="font-semibold text-primary-green text-2xl">
                     Hai 👋, I’m Melki Jonathan{" "}
                     <span className="border-b-[5px] border-primary-green text-white">
                        {titles}
                     </span>
                  </p>
                  <p className=" text-5xl font-black mt-3 text  leading-snug">
                     Students of Informatics Engineering University of Mataram
                  </p>
                  <p className=" font-light text-lg mt-3">
                     Order your website today and start competing in the online
                     marketplace take advantage of this amazing opportunity!{" "}
                  </p>
                  <div className=" mt-3">
                     <div className="flex gap-3 items-center">
                        <a href="#contact">
                           <button className="flex gap-2 items-center bg-primary-green px-4 py-2 font-semibold mr-4 rounded-lg hover:bg-green-800">
                              Contact me
                              {/* <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "} */}
                           </button>
                        </a>

                        <a
                           href="https://drive.google.com/drive/folders/1eXBgidvfvXeNtLSkNd3lw_YTtlfgY7B4?usp=sharing"
                           target="_blank"
                           className="underline  underline-offset-8 hover:text-primary-green"
                        >
                           Download cv
                        </a>
                     </div>
                  </div>
               </div>
               <div className="relative mx-auto">
                  <div className="relative">
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Group%2010.png?alt=media&token=452430ac-399c-440e-95e0-bc506d41fb5e"
                        alt="html"
                        className={`absolute w-[85px] animate-moveUpDown `}
                     />
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Group%2011.png?alt=media&token=a0a4c4fd-66c5-4689-8b98-90cbaf6aafa2"
                        alt="tailwind"
                        className="absolute top-52 left-[330px]  w-[85px] animate-moveUpDown"
                     />
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Group%2012.png?alt=media&token=4168e172-6656-4736-9026-27451747fca3"
                        alt="figma"
                        className="absolute top-52 right-[340px]  w-[85px] animate-moveUpDown"
                     />
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Group%206-1.png?alt=media&token=80f97268-153c-451d-964b-14d1458cbc2e"
                        alt="js"
                        className="absolute top-20 right-[320px]  w-[85px] animate-moveUpDown"
                     />
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Group%206.png?alt=media&token=e12e9584-5d3a-45dd-b1c7-8519273d93ef"
                        alt="react"
                        className="absolute  top-20 left-[320px]  w-[85px] animate-moveUpDown"
                     />
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Group%209.png?alt=media&token=cee639fe-dd5e-4e06-87bc-55606d3a87b9"
                        alt="css"
                        className="relative left-56  w-[85px] animate-moveUpDown"
                     />
                  </div>

                  <img
                     src="https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/selly.png?alt=media&token=dd237c96-c6e6-474c-be15-c02ae91ed39d"
                     className="hero-img animate-moveUpDown "
                  />
               </div>
            </div>
         </div>
         <div
            className=" bg-second-gray-2 text-center py-14 px-25"
            id="portfolio"
         >
            <div className="mx-auto max-w-[1440px]">
               <h2 className="text-white text-3xl font-extrabold flex justify-center flex-col items-center gap-2 mb-5">
                  <div>
                     My <span className="text-primary-green ">Portfolio</span>
                  </div>

                  <div className=" w-16 h-[0.35rem] bg-primary-green"></div>
               </h2>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                  {portfolios.map((portfolio) => (
                     <div key={portfolio.id} className="">
                        <div>
                           <div className="relative w-full h-full overflow-hidden bg-cover bg-no-repeat">
                              <img
                                 src={portfolio.image}
                                 className=" rounded-md  w-full h-full"
                                 alt=""
                              />
                           </div>

                           <div className="flex items-center justify-between mt-2">
                              <div>
                                 <a
                                    href="https://www.behance.net/search/projects?search=portfolio+website+design&tracking_source=typeahead_nav_recent_suggestion"
                                    className="text-white border-b-4 border-primary-green "
                                 >
                                    View Detail
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <a href="#contact" className="flex justify-center mt-4">
                  <button className="text-primary-green flex gap-2 items-center border-2 border-primary-green px-4 py-2 font-semibold rounded-lg hover:bg-primary-green hover:text-white">
                     See more
                  </button>
               </a>
            </div>
         </div>

         <AboutUs />

         <div
            className="contact-section bg-second-gray-1 py-12 text-white"
            id="contact"
         >
            <h2 className="text-white text-3xl font-extrabold flex justify-center flex-col items-center gap-2 mb-5">
               <div>
                  Let's get in{" "}
                  <span className="text-primary-green ">Touch</span>
               </div>

               <div className=" w-16 h-[0.35rem] bg-primary-green"></div>
            </h2>
            <div className="container mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                     <p className="font-semibold text-2xl mb-4">
                        Connect with{" "}
                        <span className="text-primary-green">Me</span>
                     </p>
                     <p>
                        Anda telah datang ke tempat yang tepat! Saya menawarkan
                        jasa pembuatan website yang terjangkau dan berkualitas
                        tinggi untuk membantu meningkatkan online presence
                        bisnis Anda. Segera hubungi saya dan kita bisa
                        berdiskusi lebih lanjut tentang bagaimana saya bisa
                        membantu Anda mencapai tujuan online Anda. Terima kasih
                        telah mengunjungi website saya dan saya sangat berharap
                        dapat bekerja sama dengan Anda!
                     </p>
                  </div>
                  <div>
                     <form
                        onSubmit={(e) => handleOnSubmit(e)}
                        className="bg-gray-900 p-6 rounded-md"
                     >
                        <p className="font-semibold text-2xl mb-4">
                           Let's make something{" "}
                           <span className="text-primary-green">crazy</span>
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <div className="mb-3">
                                 <label
                                    className="block mb-1"
                                    htmlFor="firstName"
                                 >
                                    First Name
                                 </label>
                                 <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) =>
                                       setFirstName(e.target.value)
                                    }
                                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-green-500"
                                 />
                              </div>
                           </div>
                           <div>
                              <div className="mb-3">
                                 <label
                                    className="block mb-1"
                                    htmlFor="lastName"
                                 >
                                    Last Name
                                 </label>
                                 <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) =>
                                       setLastName(e.target.value)
                                    }
                                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-green-500"
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="mb-3">
                           <label className="block mb-1" htmlFor="email">
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              placeholder="example@email.co"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-green-500"
                           />
                        </div>
                        <div className="mb-3">
                           <label className="block mb-1" htmlFor="comment">
                              Comment
                           </label>
                           <textarea
                              id="comment"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-green-500"
                           />
                        </div>
                        <button
                           type="submit"
                           className="bg-green-500 text-white px-4 py-2 rounded font-semibold mr-4"
                        >
                           Send <i className="fa-solid fa-paper-plane ms-2"></i>
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         {/* <div
            className="footer-section"
            style={{ backgroundColor: "#272936", padding: "50px 0" }}
         >
            <div className="container mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="mb-5">
                     <div>
                        <a
                           href="#"
                           className="text-4xl font-extrabold text-white no-underline"
                        >
                           <span className="text-primary-green">MEJO</span>DEV.
                        </a>
                     </div>
                     <p className="m-0">
                        With Great Power Comes Great Responsibility
                     </p>
                  </div>
                  <div className="mb-5">
                     <h5 className="font-semibold">Navigation</h5>
                     <div className="mt-3">
                        <a href="#" className="text-white">
                           Home
                        </a>
                     </div>
                     <div className="mt-3">
                        <a href="#" className="text-white">
                           Portfolio
                        </a>
                     </div>
                     <div className="mt-3">
                        <a href="#" className="text-white">
                           About
                        </a>
                     </div>
                  </div>
                  <div className="mb-5">
                     <h5 className="font-semibold">Social Media</h5>
                     <div className="flex items-end gap-4 mt-5">
                        <a href="">
                           <i className="fab fa-instagram fa-2x" />
                        </a>
                        <a href="">
                           <i className="fab fa-behance-square fa-2x" />
                        </a>
                        <a href="">
                           <i className="fab fa-youtube fa-2x" />
                        </a>
                     </div>
                  </div>
                  <div>
                     <h5 className="font-semibold">My Contact</h5>
                     <div className="flex flex-col gap-4 mt-5">
                        <div className="flex items-center gap-2">
                           <p className="m-0">+6281 7752 62221</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <p className="m-0">
                              Jln Melati Raya Blok K No 31 BTN Sweta
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}

         <div className="bg-second-gray-2 flex justify-center py-3">
            <p className="text-white">© 2023 Build with ❤️ by : Melkijo</p>
         </div>
      </>
   );
}
