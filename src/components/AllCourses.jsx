// import React, { useState, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import arrow from "../assets/coursesarrow.png";
// import courses1 from "../assets/courses1.png";
// import courses2 from "../assets/courses2.png";
// import courses3 from "../assets/courses3.png";
// import courses4 from "../assets/courses4.png";
// import trending1 from "../assets/trending1.png";
// import COURSES from "../assets/COURSE.png";
// import dot from "../assets/3dot.png";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Dropdown,
//   Form,
//   Card,
//   Pagination,
//   Nav,
// } from "react-bootstrap";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// function AllCourses() {
//   const [sortOption, setSortOption] = useState("Most Popular");

//   const scrollRef = useRef(null);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const courses = [
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
//       price: "$19.99",
//       rating: 4.8,
//       reviews: 87,
//       mode: "VIDEO",
//       instructor: "Kapil Sharma",
//       updated: "4 March 2025",
//       hours: "16 Total Hours",
//       level: "All Levels",
//       lectures: "64 Lectures",
//       image: courses1,
//     },
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
//       price: "$19.99",
//       rating: 4.8,
//       reviews: 87,
//       mode: "LIVE",
//       instructor: "Kapil Sharma",
//       updated: "4 March 2025",
//       hours: "16 Total Hours",
//       level: "All Levels",
//       lectures: "64 Lectures",
//       image: courses2,
//     },
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       price: "$19.99",
//       p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
//       rating: 4.8,
//       reviews: 87,
//       mode: "HYBRID",
//       instructor: "Kapil Sharma",
//       updated: "4 March 2025",
//       hours: "16 Total Hours",
//       level: "All Levels",
//       lectures: "64 Lectures",
//       image: courses3,
//     },
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       price: "$19.99",
//       p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
//       rating: 4.8,
//       reviews: 87,
//       mode: "LIVE",
//       instructor: "Kapil Sharma",
//       updated: "4 March 2025",
//       hours: "16 Total Hours",
//       level: "All Levels",
//       lectures: "64 Lectures",
//       image: courses4,
//     },
//   ];

//   const coursess = [
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       instructor: "Kapil Sharma",
//       rating: 4.8,
//       price: "$19.99",
//       mode: "LIVE",
//       image: trending1,
//     },
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       instructor: "Kapil Sharma",
//       rating: 4.8,
//       price: "$19.99",
//       mode: "HYBRID",
//       image: trending1,
//     },
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       instructor: "Kapil Sharma",
//       rating: 4.8,
//       price: "$19.99",
//       mode: "LIVE",
//       image: trending1,
//     },
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       instructor: "Kapil Sharma",
//       rating: 4.8,
//       price: "$19.99",
//       mode: "VIDEO",
//       image: trending1,
//     },
//   ];

//   // Scroll Function for Navigation Arrows
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
//     }
//   };

//   const featuredCourses = [
//     {
//       title: "AI AND ML FOR BEGINNERS",
//       description:
//         "Learn to program using the AI & ML. Master AI & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
//       instructor: "Kapil Sharma",
//       updated: "4 March 2025",
//       hours: "16 Total Hours",
//       level: "All Levels",
//       lectures: "64 Lectures",
//       rating: 4.8,
//       reviews: 87,
//       price: "$19.99",
//       badge: "HIGH RATED",
//       image: COURSES,
//     },
//     {
//       title: "Deep Learning with Python",
//       description:
//         "Master deep learning and neural networks with hands-on projects and real-world datasets.",
//       instructor: "Sarah Johnson",
//       updated: "1 March 2025",
//       hours: "20 Total Hours",
//       level: "Advanced",
//       lectures: "50 Lectures",
//       rating: 4.9,
//       reviews: 120,
//       price: "$24.99",
//       badge: "TOP RATED",
//       image: "https://source.unsplash.com/400x250/?ai,machinelearning",
//     },
//   ];

//   // Scroll Functions
//   const nextCourse = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredCourses.length);
//   };

//   const prevCourse = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + featuredCourses.length) % featuredCourses.length
//     );
//   };

//   return (
//     <>
//       <Container fluid>
//         {/* Top Navigation */}
//         <Row className="bg-light py-2 uppercase">
//           <Col>
//             <div
//               className="d-flex align-items-center  overflow-auto px-2 justify-content-between font-Roboto Condensed"
//               style={{ whiteSpace: "nowrap", scrollBehavior: "smooth" }}
//             >
//               <Button variant="success"
//                style={{width:"73px", height:"44px", top:"142px",left:"42px", borderRadius:"12px", padding:"10px", gap:"10px", background:"#047670"}}>
//                 AI & ML
//               </Button>

//                 <img src={arrow} style={{width:"32px", height:"67px", top:"131px",opacity:"30%", color:"#706D6E"}}/>

//               <span className="text-uppercase fw-bold" style={{
//           fontFamily: "'Roboto Condensed', sans-serif",
//           fontWeight: 500,
//           fontSize: '16px',
//           lineHeight: '24px',
//           letterSpacing: '0.32px', // 2% of 16px
//         }}>
//                DevOps
//               </span>

//               <span className="text-uppercase fw-bold" style={{
//           fontFamily: "'Roboto Condensed', sans-serif",
//           fontWeight: 500,
//           fontSize: '16px',
//           lineHeight: '24px',
//           letterSpacing: '0.32px', // 2% of 16px
//         }}>
//                No Code
//               </span>

//               <span className="text-uppercase fw-bold" style={{
//           fontFamily: "'Roboto Condensed', sans-serif",
//           fontWeight: 500,
//           fontSize: '16px',
//           lineHeight: '24px',
//           letterSpacing: '0.32px', // 2% of 16px
//         }}>
//                 Cyber Security
//               </span>

//               <span className="text-uppercase fw-bold" style={{
//           fontFamily: "'Roboto Condensed', sans-serif",
//           fontWeight: 500,
//           fontSize: '16px',
//           lineHeight: '24px',
//           letterSpacing: '0.32px', // 2% of 16px
//         }}>
//                 Data Science
//               </span>

//               <span className="text-uppercase fw-bold" style={{
//           fontFamily: "'Roboto Condensed', sans-serif",
//           fontWeight: 500,
//           fontSize: '16px',
//           lineHeight: '24px',
//           letterSpacing: '0.32px', // 2% of 16px
//         }}>
//                 Gaming & Network
//               </span>

//               <span className="text-uppercase fw-bold" style={{
//           fontFamily: "'Roboto Condensed', sans-serif",
//           fontWeight: 500,
//           fontSize: '16px',
//           lineHeight: '24px',
//           letterSpacing: '0.32px', // 2% of 16px
//         }}>
//                 Design & Development
//               </span>

//                 <img src={dot} className="bg-[#FFFFFF]" />

//             </div>
//           </Col>
//         </Row>

//         {/* Page Content */}

//         {/* Filters & Sorting */}

//         <Row className="mb-3 mt-5">
//           <Col md={8}>
//             <h2 className="fw-bold">
//               All AI & ML <span className="text-success">Courses</span>
//             </h2>
//           </Col>
//         </Row>

//         {/* Filters & Sorting */}
//         <Row className="mb-3">
//           <Col md={2}>
//             <Button variant="outline-success" className="w-100">
//               Filter
//             </Button>
//           </Col>
//           <Col md={3}>
//             <Dropdown>
//               <Dropdown.Toggle variant="" className="w-100">
//                 Sort By: {sortOption}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => setSortOption("Most Popular")}>
//                   Most Popular
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => setSortOption("Highest to Lowest")}
//                 >
//                   Highest to Lowest
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => setSortOption("Lowest to Highest")}
//                 >
//                   Lowest to Highest
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSortOption("Latest First")}>
//                   Latest First
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>
//           <Col md={7} className="text-end fw-bold text-muted start-end">
//             500 RESULTS
//           </Col>
//         </Row>

//         <Row>
//           {/* Sidebar Filters */}
//           <Col md={3} className="border-end">
//             <hr />
//             <h5 className="fw-bold">Ratings</h5>
//             <Form>
//               <Form.Check
//                 type="radio"
//                 label="4.5 & UP ⭐⭐⭐⭐⭐ (100)"
//                 name="rating"
//               />
//               <Form.Check
//                 type="radio"
//                 label="4.0 & UP ⭐⭐⭐⭐ (100)"
//                 name="rating"
//               />
//               <Form.Check
//                 type="radio"
//                 label="3.5 & UP ⭐⭐⭐ (100)"
//                 name="rating"
//               />
//               <Form.Check
//                 type="radio"
//                 label="3.0 & UP ⭐⭐ (100)"
//                 name="rating"
//               />
//             </Form>

//             <hr />

//             <h5 className="fw-bold">Price</h5>
//             <Form.Check type="checkbox" label="Highest to Lowest" />
//             <Form.Check type="checkbox" label="Lowest to Highest" />

//             <hr />

//             <h5 className="fw-bold">New Courses</h5>
//             <Form.Check type="checkbox" label="Latest First" />
//             <Form.Check type="checkbox" label="Last New Course" />

//             <hr />

//             <h5 className="fw-bold">Mode</h5>
//             <Form.Check type="checkbox" label="Live" />
//             <Form.Check type="checkbox" label="Hybrid" />
//             <Form.Check type="checkbox" label="Video" />
//           </Col>

//           {/* Course List */}
//           <Col md={9}>
//             {courses.map((course, index) => (
//               <Card key={index} className="mb-4">
//                 <Row className="g-0">
//                   <Col md={4}>
//                     <Card.Img
//                       src={course.image}
//                       className="img-fluid"
//                       alt="Course Thumbnail"
//                     />
//                   </Col>
//                   <Col md={8}>
//                     <Card.Body>
//                       <h5 className="fw-bold">{course.title}</h5>
//                       <p className="text-muted fw-bold">{course.p}</p>
//                       <p className="text-muted">
//                         {course.instructor} | Updated {course.updated}
//                       </p>
//                       <p>
//                         {course.hours} | {course.level} | {course.lectures}
//                       </p>
//                       <p>
//                         RATING ⭐⭐⭐⭐ ({course.rating}) ({course.reviews}{" "}
//                         reviews) &nbsp;
//                         <Button
//                           size="sm"
//                           variant={
//                             course.mode === "VIDEO"
//                               ? "danger"
//                               : course.mode === "LIVE"
//                               ? "success"
//                               : course.mode === "HYBRID"
//                               ? "dark"
//                               : "success"
//                           }
//                         >
//                           {course.mode}
//                         </Button>
//                       </p>
//                       <h4 className="text-end fw-bold text-success">
//                         {course.price}
//                       </h4>
//                     </Card.Body>
//                   </Col>
//                 </Row>
//               </Card>
//             ))}

//             {/* Pagination */}
//             <Pagination className="justify-content-center">
//               <Pagination.Prev />
//               <Pagination.Item active>{1}</Pagination.Item>
//               <Pagination.Item>{2}</Pagination.Item>
//               <Pagination.Item>{3}</Pagination.Item>
//               <Pagination.Ellipsis />
//               <Pagination.Item>{67}</Pagination.Item>
//               <Pagination.Next />
//             </Pagination>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col>
//             <h1 className="fw-bold">AI AND ML COURSES</h1>
//             <p className="text-muted">Courses to get you started</p>
//             <p className="text-muted">
//               Explore courses from experienced, real-world experts.
//             </p>
//           </Col>
//         </Row>

//         {/* Tabs for Most Popular / Trending */}
//         <Nav variant="tabs" defaultActiveKey="popular" className="mb-3">
//           <Nav.Item>
//             <Nav.Link eventKey="popular" className="fw-bold">
//               Most Popular
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="trending" className="fw-bold text-muted">
//               Trending
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>

//         {/* Scrollable Course List */}
//         <div className="position-relative d-flex flex-column">
//           <Button
//             variant="dark"
//             className="position-absolute start-0 top-50 translate-middle-y z-2 d-none d-md-inline"
//             onClick={() => scroll("left")}
//           >
//             <FaArrowLeft />
//           </Button>

//           <div
//             ref={scrollRef}
//             className="d-flex overflow-auto pb-3 px-2 px-md-4"
//             style={{
//               scrollBehavior: "smooth",
//               marginLeft: "0",
//               gap: "1rem",
//             }}
//           >
//             {coursess.map((course, index) => (
//               <Card
//                 key={index}
//                 className="flex-shrink-0"
//                 style={{
//                   minWidth: "250px",
//                   width: "100%",
//                   maxWidth: "280px",
//                   marginLeft: "21px",
//                 }}
//               >
//                 <Card.Img variant="top" src={course.image} />
//                 <Card.Body>
//                   <h6 className="fw-bold">{course.title}</h6>
//                   <p className="text-muted mb-1">BY {course.instructor}</p>
//                   <p className="mb-1">RATING {course.rating} ⭐⭐⭐⭐⭐</p>
//                   <h5 className="fw-bold">{course.price}</h5>
//                   <Button
//                     variant={
//                       course.mode === "VIDEO"
//                         ? "danger"
//                         : course.mode === "LIVE"
//                         ? "success"
//                         : "warning"
//                     }
//                     size="sm"
//                   >
//                     {course.mode}
//                   </Button>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>

//           <Button
//             variant="dark"
//             className="position-absolute end-0 top-50 translate-middle-y z-2 d-none d-md-inline"
//             onClick={() => scroll("right")}
//           >
//             <FaArrowRight />
//           </Button>
//         </div>

//         <Row className="mb-3">
//           <Col>
//             <h2 className="fw-bold">
//               Featured <span className="text-success">Courses</span>
//             </h2>
//             <p className="text-muted">
//               Explore courses from experienced, real-world experts.
//             </p>
//           </Col>
//         </Row>

//         <Row className="position-relative">
//           <Col md={12}>
//             <Card className="p-3 shadow">
//               <Row className="g-0 align-items-center">
//                 <Col md={5}>
//                   <Card.Img
//                     src={featuredCourses[currentIndex].image}
//                     className="img-fluid rounded"
//                     alt="Course"
//                   />
//                 </Col>
//                 <Col md={7}>
//                   <Card.Body>
//                     <h4 className="fw-bold">
//                       {featuredCourses[currentIndex].title}
//                     </h4>
//                     <p className="text-muted">
//                       {featuredCourses[currentIndex].description}
//                     </p>
//                     <p>
//                       <strong>
//                         BY {featuredCourses[currentIndex].instructor}
//                       </strong>{" "}
//                       | Updated {featuredCourses[currentIndex].updated}
//                     </p>
//                     <p className="text-muted small">
//                       {featuredCourses[currentIndex].hours} |{" "}
//                       {featuredCourses[currentIndex].level} |{" "}
//                       {featuredCourses[currentIndex].lectures}
//                     </p>
//                     <p>
//                       Rating: ⭐ {featuredCourses[currentIndex].rating} (
//                       {featuredCourses[currentIndex].reviews} reviews)
//                       <Button size="sm" variant="danger" className="ms-2">
//                         {featuredCourses[currentIndex].badge}
//                       </Button>
//                     </p>
//                     <h4 className="fw-bold text-success">
//                       {featuredCourses[currentIndex].price}
//                     </h4>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>

//           {/* <Button variant="dark" className="position-absolute  translate-middle-y w-25 top-100 text-center align-center" onClick={nextCourse}>
//           <FaArrowRight />
//         </Button> */}
//         </Row>

//         {/* Popular Courses */}
//         <Row className="mt-5">
//           <Col>
//             <h2 className="fw-bold">
//               Popular <span className="text-success">Courses</span>
//             </h2>
//           </Col>
//         </Row>

//         <Row className="mt-3 ">
//           {[
//             "AI & ML",
//             "Devops",
//             "Cyber Security And Testing",
//             "Software Development",
//             "Data Science And Engineering",
//             "Gaming And Network",
//             "Design And Development",
//             "Business And Leadership",
//             "No Code",
//             "Founder Connect",
//           ].map((category, index) => (
//             <Col key={index} xs={6} md={3} lg={2} className="mb-3">
//               <Button variant="outline-dark" className="w-100 fw-bold">
//                 {category}
//               </Button>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default AllCourses;

// import React from "react";
// import arrow from "../assets/coursesarrow.png";
// import dot from "../assets/3dot.png";

// const CategoryBar = () => {
//   return (
//     <div className="w-[1440px] bg-white">
//       {/* Top Category Bar */}
//       <div className="h-[67px] border-b border-gray-300 flex items-center px-4 overflow-x-auto whitespace-nowrap scroll-smooth">
//         {/* AI & ML Button */}
//         <button className="bg-[#047670] text-white font-bold text-[16px] leading-[24px] tracking-[0.02em] uppercase rounded-[12px] px-4 py-2 min-w-[73px] min-h-[44px] mr-4 font-['Roboto_Condensed']">
//           AI & ML
//         </button>

//         {/* Arrow */}
//         <img
//           src={arrow}
//           alt="arrow"
//           className="w-[32px] h-[67px] opacity-30 mr-4"
//         />

//         {/* Category List */}
//         {[
//           "DEVOPS",
//           "NO CODE",
//           "CYBER SECURITY AND TESTING",
//           "DATA SCIENCE AND ENGINEERING",
//           "GAMING AND NETWORK",
//           "DESIGN AND DEVLOPMENT",
//         ].map((category, index) => (
//           <span
//             key={index}
//             className="min-w-fit font-['Roboto_Condensed'] font-medium text-[16px] leading-[24px] tracking-[0.02em] uppercase text-[#2B2F34] px-4"
//           >
//             {category}
//           </span>
//         ))}
//       </div>

//       {/* Heading */}
//       <div className="mt-[43px] ml-[45px]">
//         <p className="w-[334px] h-[40px] font-['Jost'] font-semibold text-[36px] leading-[40px] tracking-[0.005em]">
//           All AI & ML <span className="text-[#047670]">Courses</span>
//         </p>
//       </div>

//       {/* Filter + Sort + Results */}
//       <div className="flex items-center justify-between w-full px-[45px] mt-[40px]">
//         <div className="flex gap-[19px]">
//           {/* Filter Box */}
//           <div className="w-[136px] h-[80px] border border-gray-300 bg-white p-[20px] flex items-center gap-[10px] text-sm font-semibold text-gray-700">
//             <span>🧠 Filter</span>
//           </div>

//           {/* Sort By Box */}
//           <div className="w-[136px] h-[80px] border border-[#047670] bg-white p-[20px] flex flex-col justify-center text-sm font-semibold text-gray-700">
//             <span className="text-xs text-gray-500 mb-1">Sort By</span>
//             <div className="flex justify-between items-center">
//               <span>Most Popular</span>
//               <span className="text-[#047670]">▼</span>
//             </div>
//           </div>
//         </div>

//         {/* Results */}
//         <div className="text-sm font-bold text-gray-600">500 RESULTS</div>
//       </div>
//     </div>
//   );
// };

// export default CategoryBar;

// import React from "react";
// import arrow from "../assets/coursesarrow.png";
// import dot from "../assets/3dot.png";

// const CategorySection = () => {
//   return (
//     <div className="w-[1440px] bg-[#FDFCF9]">
//       {/* Top Breadcrumb & Categories */}
//       <div className="h-[67px] border-b border-[#C9C9C9] flex items-center px-8 overflow-x-auto whitespace-nowrap scroll-smooth">
//         {/* AI & ML Button */}
//         <button className="bg-[#047670] text-white font-['Roboto_Condensed'] font-bold text-[16px] leading-[24px] tracking-[0.02em] uppercase rounded-[12px] px-4 py-2 min-w-[73px] min-h-[44px] mr-2">
//           AI & ML
//         </button>

//         {/* Arrow Image */}
//         <img
//           src={arrow}
//           alt="arrow"
//           className="w-[32px] h-[67px] opacity-30 mr-4"
//         />

//         {/* Category List */}
//         {[
//           "DEVOPS",
//           "NO CODE",
//           "CYBER SECURITY AND TESTING",
//           "DATA SCIENCE AND ENGINEERING",
//           "GAMING AND NETWORK",
//           "DESIGN AND DEVLOPMENT",
//         ].map((category, index) => (
//           <span
//             key={index}
//             className="min-w-fit font-['Roboto_Condensed'] font-medium text-[16px] leading-[24px] tracking-[0.02em] uppercase text-[#2B2F34] px-4"
//           >
//             {category}
//           </span>
//         ))}

//         {/* 3 Dot Image */}
//         <img
//           src={dot}
//           alt="3-dot"
//           className="w-[5px] h-[35px]  border-[#047670] ml-40"
//         />
//       </div>

//       {/* Heading + Filter Section */}
//       <div className="px-[45px] pt-[40px]">
//         {/* Heading */}
//         <h1 className="w-[334px] h-[40px] font-['Jost'] font-semibold text-[36px] leading-[40px] tracking-[0.005em] text-black">
//           All AI & ML <span className="text-[#047670]">Courses</span>
//         </h1>

//         {/* Filter / Sort / Result Count */}
//         <div className="flex items-center justify-between mt-[40px]">
//           {/* Filter & Sort */}
//           <div className="flex gap-[19px]">
//             {/* Filter Box */}
//             <div className="w-[136px] h-[80px] border border-gray-300 bg-white p-[20px] flex items-center text-sm font-semibold text-gray-700">
//               <span>🧠 Filter</span>
//             </div>

//             {/* Sort Box */}
//             <div className="w-[136px] h-[80px] border border-[#047670] bg-white p-[20px] flex flex-col justify-center text-sm font-semibold text-gray-700">
//               <span className="text-xs text-gray-500 mb-1">Sort By</span>
//               <div className="flex justify-between items-center">
//                 <span>Most Popular</span>
//                 <span className="text-[#047670]">▼</span>
//               </div>
//             </div>
//           </div>

//           {/* Results */}
//           <div className="text-sm font-bold text-gray-600">500 RESULTS</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategorySection;

import React from "react";
import arrow from "../assets/coursesarrow.png";

import courses1 from "../assets/courses1.png";
import courses2 from "../assets/courses2.png";
import courses3 from "../assets/courses3.png";
import courses4 from "../assets/courses4.png";
import trending1 from "../assets/trending1.png";
import COURSES from "../assets/COURSE.png";
import dot from "../assets/3dot.png";

const AllCourses = () => {
  return (
    <div className="bg-gray-50 font-inter">
      <div className="w-[1440px] bg-white">
        {/* Top Category Bar */}
        <div className="h-[67px] border-b border-gray-300 flex items-center px-4 overflow-x-auto whitespace-nowrap scroll-smooth">
          {/* AI & ML Button */}
          <button className="bg-[#047670] text-white font-bold text-[16px] leading-[24px] tracking-[0.02em] uppercase rounded-[12px] px-4 py-2 min-w-[73px] min-h-[44px] mr-4 font-['Roboto_Condensed']">
            AI & ML
          </button>
          {/* Arrow */}
          <img
            src={arrow}
            alt="arrow"
            className="w-[32px] h-[67px] opacity-30 mr-4"
          />
          Category List
          {[
            "DEVOPS",
            "NO CODE",
            "CYBER SECURITY AND TESTING",
            "DATA SCIENCE AND ENGINEERING",
            "GAMING AND NETWORK",
            "DESIGN AND DEVLOPMENT",
          ].map((category, index) => (
            <span
              key={index}
              className="min-w-fit font-['Roboto_Condensed']  text-[16px] leading-[24px] tracking-[0.02em] uppercase text-[#2B2F34] px-4"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
            <h1 className="font-['Jost']  text-[36px] leading-[40px] tracking-[0.5px] text-[#000000]">
              All AI &amp; ML <span className="text-[#047670]">Courses</span>
            </h1>

            <span className="text-gray-500 text-sm sm:text-base">
              500 RESULTS
            </span>
          </header>

          <div className="flex gap-8">
            {/* Sidebar */}

            <aside className="w-64 flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button className="top-[366px] left-[43px] w-[136px] h-[80px] border border-gray-300 p-[20px] flex items-center justify-center gap-[19px] bg-white text-[#000000] hover:bg-gray-50 font-['Jost'] text-[16px] leading-[24px] tracking-[0.5px] capitalize">
                  <i className="fas fa-filter"></i>
                  Filter
                </button>

                <div className="top-[366px] left-[192px] w-[202px] h-[80px] border border-gray-300 p-[10px] flex flex-col gap-[7px] bg-white rounded-button">
                  <p className="font-['Jost']  text-[16px] leading-[24px] tracking-[0.5px] capitalize text-[#000000]">
                    Sort by
                  </p>

                  <div className="relative w-full h-[40px]">
                    <select className="w-full h-full appearance-none bg-white border border-gray-300 pl-4 pr-10 text-[#000000] focus:ring-2 focus:ring-custom focus:border-custom font-['Jost'] font-normal text-[16px] leading-[24px] tracking-[0.5px] capitalize rounded-button">
                      <option>Most Popular</option>
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>

                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[12px] bg-[#FFFFFF] opacity-80 text-[#047670] pointer-events-none flex items-center justify-center rounded-sm"></i>
                  </div>
                </div>
              </div>
              <div className="w-[369px] h-px bg-[#D9D9D9] mb-6"></div>
              <div className="space-y-6">
                {/* Ratings Section */}
                <FilterSection
                  title="Ratings"
                  options={[
                    { stars: 5, label: "4.5 & up (290)" },
                    { stars: 4, label: "4.0 & up (195)" },
                    { stars: 3, label: "3.5 & up (105)" },
                  ]}
                />
                <div className="w-[369px] h-px bg-[#D9D9D9]"></div>

                {/* Price Section */}
                <FilterCheckbox
                  title="Price"
                  options={["Highest to Lowest", "Lowest to Highest"]}
                />
                <div className="w-[369px] h-px bg-[#D9D9D9]"></div>

                {/* New Courses Section */}
                <FilterCheckbox
                  title="New Courses"
                  options={["Latest First", "Last New Course"]}
                />
                <div className="w-[369px] h-px bg-[#D9D9D9]"></div>

                {/* Mode Section */}
                <FilterCheckbox
                  title="Mode"
                  options={["Live", "Hybrid", "Video"]}
                />
                <div className="w-[369px] h-px bg-[#D9D9D9]"></div>
              </div>
            </aside>

            {/* Main Course Section */}
            <main className="flex-1">
              <div className="grid grid-cols-1 gap-4">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  className="!rounded-button px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  disabled
                >
                  <i className="fas fa-chevron-left mr-2"></i> Previous
                </button>
                <div className="flex items-center gap-1">
                  <button className="!rounded-button w-10 h-10 flex items-center justify-center bg-custom text-white">
                    1
                  </button>
                  <button className="!rounded-button w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="!rounded-button w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="!rounded-button w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50">
                    67
                  </button>
                </div>
                <button className="!rounded-button px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Next <i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterSection = ({ title, options }) => (
  <div>
    {/* Title with chevron-up */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-['Jost'] font-semibold text-[20px] leading-[24px] tracking-[0.5px] capitalize text-[#000000]">
        {title}
      </h3>
      <i className="fas fa-chevron-up text-[#047670] text-[14px]"></i>
    </div>

    {/* Checkboxes below */}
    <div className="space-y-3">
      {options.map((opt, idx) => (
        <label className="flex items-center gap-3" key={idx}>
          <input
            type="checkbox"
            className="w-[15px] h-[15px] border border-[#000000] rounded-full"
          />
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(opt.stars)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
              {[...Array(5 - opt.stars)].map((_, i) => (
                <i className="far fa-star" key={i}></i>
              ))}
            </div>
            <span className="ml-2 text-sm text-[#1E1E1E]">{opt.label}</span>
          </div>
        </label>
      ))}
    </div>
  </div>
);

const FilterCheckbox = ({ title, options }) => (
  <div>
    <h3 className="font-['Jost'] text-[20px] leading-[24px] tracking-[0.5px] capitalize text-[#000000] mb-4">
      {title}
    </h3>

    <div className="space-y-3">
      {options.map((label, i) => (
        <label className="flex items-center gap-3" key={i}>
          <input
            type="checkbox"
            className="w-[15px] h-[15px] border-[1px] border-[#000000] rounded-full text-custom focus:ring-custom"
          />

          <span className="text-sm text-[#1E1E1E]">{label}</span>
        </label>
      ))}
    </div>
  </div>
);

const CourseCard = ({
  title,
  price,
  description,
  instructor,
  hours,
  lectures,
  rating,
  ratingCount,
  image,
}) => (
  // <div className="bg-white rounded-lg shadow-sm p-6">
  //   <div className="flex gap-4">
  //     <div className="w-48 h-32 flex-shrink-0 overflow-hidden">
  //       <img
  //         src={image}
  //         className="w-full h-full object-cover rounded-lg"
  //         alt="Course thumbnail"
  //       />
  //     </div>
  //     <div className="flex-1">
  //       <div className="flex items-start justify-between mb-2">
  //         <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
  //         <span className="text-2xl font-bold text-gray-900">{price}</span>
  //       </div>
  //       <p className="text-gray-600 mb-4">{description}</p>
  //       <div className="flex items-center gap-6 mb-4">
  //         <div className="flex items-center gap-2">
  //           <i className="fas fa-user text-gray-400"></i>
  //           <span className="text-sm text-gray-600">By {instructor}</span>
  //         </div>
  //         <div className="flex items-center gap-2">
  //           <i className="fas fa-clock text-gray-400"></i>
  //           <span className="text-sm text-gray-600">{hours} Total Hours</span>
  //         </div>
  //         <div className="flex items-center gap-2">
  //           <i className="fas fa-book text-gray-400"></i>
  //           <span className="text-sm text-gray-600">{lectures} Lectures</span>
  //         </div>
  //       </div>
  //       <div className="flex items-center justify-between">
  //         <div className="flex items-center gap-2">
  //           <div className="flex text-yellow-400">
  //             {[...Array(Math.floor(rating))].map((_, i) => (
  //               <i className="fas fa-star" key={i}></i>
  //             ))}
  //             {rating % 1 >= 0.5 && <i className="fas fa-star-half-alt"></i>}
  //             {[...Array(5 - Math.ceil(rating))].map((_, i) => (
  //               <i className="far fa-star" key={i}></i>
  //             ))}
  //           </div>
  //           <span className="text-sm text-gray-600">
  //             {rating} ({ratingCount})
  //           </span>
  //         </div>
  //         <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2 transition-colors duration-200">
  //           Enroll Now
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  <div className="top-[470px] left-[481px] w-[916px] h-[214px] bg-white rounded-lg shadow-sm p-6">
    <div className="flex gap-4">
      {/* <div className="w-48 h-32 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover rounded-lg"
          alt="Course thumbnail"
        />
      </div> */}
      <div className=" top-[470px] left-[481px] w-[365px] h-[214px] overflow-hidden rounded-[4px]">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt="Course thumbnail"
        />
      </div>

      {/* <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <span className="text-2xl font-bold text-gray-900">{price}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-user text-gray-400"></i>
              <span className="text-sm text-gray-600">By {instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-400"></i>
              <span className="text-sm text-gray-600">{hours} Total Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-book text-gray-400"></i>
              <span className="text-sm text-gray-600">{lectures} Lectures</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
              {rating % 1 >= 0.5 && <i className="fas fa-star-half-alt"></i>}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <i className="far fa-star" key={i}></i>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {rating} ({ratingCount})
            </span>
          </div>
          <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2 transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      </div> */}
      <div className="top-[470px] left-[868px] w-[529px] h-[164px] flex flex-col justify-between gap-[76px]">
        <div>
          <div className="flex items-start justify-between mb-2">
            {/* <h2 className="text-xl font-semibold text-gray-900">{title}</h2> */}
            <h2 className="font-['Roboto_Condensed'] font-bold text-[30px] leading-[24px] tracking-[2%] uppercase text-gray-900">
              {title}
            </h2>

            <span className="text-2xl  text-gray-900">{price}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-user text-gray-400"></i>
              <span className="text-sm text-gray-600">By {instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-400"></i>
              <span className="text-sm text-gray-600">{hours} Total Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-book text-gray-400"></i>
              <span className="text-sm text-gray-600">{lectures} Lectures</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
              {rating % 1 >= 0.5 && <i className="fas fa-star-half-alt"></i>}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <i className="far fa-star" key={i}></i>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {rating} ({ratingCount})
            </span>
          </div>
          <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2 transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

const courses = [
  {
    title: "AI and ML for Beginners",
    price: "$19.99",
    description:
      "Learn to program using the AI & ML Master AI & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    instructor: "Kapil Sharma",
    hours: 15,
    lectures: 64,
    rating: 4.5,
    ratingCount: 87,
    image: courses1,
  },
  {
    title: "Advanced Machine Learning",
    price: "$19.99",
    description:
      "Master advanced ML concepts including deep learning, neural networks, and computer vision through hands-on projects and real-world applications.",
    instructor: "Sarah Johnson",
    hours: 20,
    lectures: 78,
    rating: 4.8,
    ratingCount: 125,
    image: courses2,
  },
  {
    title: "Deep Learning Specialization",
    price: "$19.99",
    description:
      "Dive deep into neural networks, CNN, RNN, and transformers. Build cutting-edge AI models and understand the mathematics behind deep learning.",
    instructor: "Michael Chen",
    hours: 25,
    lectures: 92,
    rating: 4.2,
    ratingCount: 93,
    image: courses3,
  },
];

export default AllCourses;
