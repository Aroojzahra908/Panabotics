// import { useEffect } from "react";
// import { MapPin, Clock, DollarSign, Users } from "lucide-react";

// const Careers = () => {
//   useEffect(() => {
//     // Scroll-triggered animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in');
//         }
//       });
//     }, observerOptions);

//     // Observe all animated elements
//     document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
//       const htmlElement = element as HTMLElement;
//       htmlElement.style.opacity = '0';
//       htmlElement.style.transform = 'translateY(30px)';
//       htmlElement.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const openPositions = [
//     {
//       title: "Senior AI Research Scientist",
//       department: "Research & Development",
//       location: "San Francisco, CA",
//       type: "Full-time",
//       salary: "$150,000 - $200,000",
//       description: "Lead cutting-edge AI research projects and develop novel machine learning algorithms."
//     },
//     {
//       title: "Machine Learning Engineer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$120,000 - $160,000",
//       description: "Build and deploy ML models at scale to solve real-world business problems."
//     },
//     {
//       title: "Data Scientist",
//       department: "Analytics",
//       location: "New York, NY",
//       type: "Full-time",
//       salary: "$100,000 - $140,000",
//       description: "Extract insights from complex datasets and build predictive models."
//     },
//     {
//       title: "AI Product Manager",
//       department: "Product",
//       location: "Austin, TX",
//       type: "Full-time",
//       salary: "$130,000 - $170,000",
//       description: "Drive the development of AI-powered products from conception to launch."
//     },
//     {
//       title: "Computer Vision Engineer",
//       department: "Engineering",
//       location: "Seattle, WA",
//       type: "Full-time",
//       salary: "$125,000 - $165,000",
//       description: "Develop advanced computer vision systems for various applications."
//     },
//     {
//       title: "DevOps Engineer",
//       department: "Infrastructure",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$110,000 - $150,000",
//       description: "Build and maintain scalable infrastructure for AI/ML workloads."
//     }
//   ];

//   const benefits = [
//     { icon: "💰", title: "Competitive Salary", description: "Market-leading compensation packages" },
//     { icon: "🏥", title: "Health Benefits", description: "Comprehensive medical, dental, and vision coverage" },
//     { icon: "🏖️", title: "Flexible PTO", description: "Unlimited vacation and sick days" },
//     { icon: "📚", title: "Learning Budget", description: "$5,000 annual budget for conferences and courses" },
//     { icon: "🏠", title: "Remote Work", description: "Flexible remote and hybrid work options" },
//     { icon: "💪", title: "Wellness Program", description: "Gym membership and wellness initiatives" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
//             Join Our Team
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Help us shape the future of artificial intelligence. We're looking for passionate individuals 
//             who want to make a meaningful impact through innovative AI solutions.
//           </p>
//         </div>

//         {/* Culture Section */}
//         <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 animate-on-scroll">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Panabotics?</h2>
//             <p className="text-xl text-gray-600">Experience a culture of innovation, growth, and collaboration</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="text-center animate-on-scroll">
//               <div className="text-4xl mb-4">🚀</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation-Driven</h3>
//               <p className="text-gray-600">Work on cutting-edge AI projects that push the boundaries of what's possible.</p>
//             </div>
//             <div className="text-center animate-on-scroll">
//               <div className="text-4xl mb-4">🌱</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Growth-Focused</h3>
//               <p className="text-gray-600">Continuous learning opportunities and career development programs.</p>
//             </div>
//             <div className="text-center animate-on-scroll">
//               <div className="text-4xl mb-4">🤝</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative</h3>
//               <p className="text-gray-600">Work alongside world-class experts in a supportive environment.</p>
//             </div>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="mb-16 animate-on-scroll">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
//             <p className="text-xl text-gray-600">We take care of our team members</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll">
//                 <div className="text-3xl mb-4">{benefit.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Open Positions */}
//         <div className="animate-on-scroll">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
//             <p className="text-xl text-gray-600">Find your next opportunity</p>
//           </div>

//           <div className="space-y-6">
//             {openPositions.map((position, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-on-scroll">
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-4 mb-3">
//                       <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
//                       <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium">
//                         {position.department}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 mb-4">{position.description}</p>
//                     <div className="flex flex-wrap gap-4">
//                       <div className="flex items-center gap-2">
//                         <MapPin className="h-4 w-4 text-gray-400" />
//                         <span className="text-gray-600 text-sm">{position.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Clock className="h-4 w-4 text-gray-400" />
//                         <span className="text-gray-600 text-sm">{position.type}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <DollarSign className="h-4 w-4 text-gray-400" />
//                         <span className="text-gray-600 text-sm">{position.salary}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex gap-3">
//                     <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200 hover:scale-105">
//                       Apply Now
//                     </button>
//                     <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-200">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-white text-center mt-16 animate-on-scroll">
//           <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
//           </p>
//           <button className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
//             Send Your Resume
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Careers;












// import { useEffect, useState } from "react";
// import { MapPin, Clock, DollarSign, Users, X, ExternalLink, Mail, Phone, FileText, Menu } from "lucide-react";

// const Careers = () => {
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [showApplicationForm, setShowApplicationForm] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     position: '',
//     resume: null,
//     coverLetter: ''
//   });

//   useEffect(() => {
//     // Enhanced scroll-triggered animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in');
//         }
//       });
//     }, observerOptions);

//     // Observe all animated elements
//     document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
//       const htmlElement = element as HTMLElement;
//       htmlElement.style.opacity = '0';
//       htmlElement.style.transform = 'translateY(30px)';
//       htmlElement.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const openPositions = [
//     {
//       id: 1,
//       title: "Senior AI Research Scientist",
//       department: "Research & Development",
//       location: "San Francisco, CA",
//       type: "Full-time",
//       salary: "$150,000 - $200,000",
//       description: "Lead cutting-edge AI research projects and develop novel machine learning algorithms to solve complex real-world problems.",
//       requirements: ["PhD in Computer Science, AI, or related field", "5+ years of research experience", "Published papers in top-tier conferences", "Experience with deep learning frameworks"],
//       responsibilities: ["Lead research initiatives", "Mentor junior researchers", "Publish research findings", "Collaborate with product teams"]
//     },
//     {
//       id: 2,
//       title: "Machine Learning Engineer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$120,000 - $160,000",
//       description: "Build and deploy ML models at scale to solve real-world business problems and create intelligent applications.",
//       requirements: ["MS in Computer Science or equivalent", "3+ years ML experience", "Python, TensorFlow/PyTorch proficiency", "Cloud platform experience"],
//       responsibilities: ["Design ML pipelines", "Deploy models to production", "Optimize model performance", "Monitor system reliability"]
//     },
//     {
//       id: 3,
//       title: "Data Scientist",
//       department: "Analytics",
//       location: "New York, NY",
//       type: "Full-time",
//       salary: "$100,000 - $140,000",
//       description: "Extract insights from complex datasets and build predictive models to drive business decisions.",
//       requirements: ["MS in Statistics, Mathematics, or related field", "2+ years data science experience", "SQL, Python, R proficiency", "Statistical modeling expertise"],
//       responsibilities: ["Analyze complex datasets", "Build predictive models", "Create data visualizations", "Present insights to stakeholders"]
//     },
//     {
//       id: 4,
//       title: "AI Product Manager",
//       department: "Product",
//       location: "Austin, TX",
//       type: "Full-time",
//       salary: "$130,000 - $170,000",
//       description: "Drive the development of AI-powered products from conception to launch, working with cross-functional teams.",
//       requirements: ["MBA or equivalent experience", "3+ years product management", "Understanding of AI/ML concepts", "Strong analytical skills"],
//       responsibilities: ["Define product strategy", "Manage product roadmap", "Coordinate with engineering teams", "Analyze market trends"]
//     },
//     {
//       id: 5,
//       title: "Computer Vision Engineer",
//       department: "Engineering",
//       location: "Seattle, WA",
//       type: "Full-time",
//       salary: "$125,000 - $165,000",
//       description: "Develop advanced computer vision systems for various applications including autonomous systems and medical imaging.",
//       requirements: ["MS in Computer Vision or related field", "3+ years CV experience", "OpenCV, deep learning expertise", "C++/Python proficiency"],
//       responsibilities: ["Develop CV algorithms", "Implement image processing pipelines", "Optimize model performance", "Collaborate on product integration"]
//     },
//     {
//       id: 6,
//       title: "DevOps Engineer",
//       department: "Infrastructure",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$110,000 - $150,000",
//       description: "Build and maintain scalable infrastructure for AI/ML workloads, ensuring high availability and performance.",
//       requirements: ["BS in Computer Science or equivalent", "3+ years DevOps experience", "AWS/GCP/Azure expertise", "Kubernetes, Docker proficiency"],
//       responsibilities: ["Manage cloud infrastructure", "Implement CI/CD pipelines", "Monitor system performance", "Ensure security compliance"]
//     }
//   ];

//   const benefits = [
//     {
//       icon: "💰",
//       image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&crop=face",
//       title: "Competitive Salary",
//       description: "Market-leading compensation packages with equity options"
//     },
//     {
//       icon: "🏥",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
//       title: "Health Benefits",
//       description: "Comprehensive medical, dental, and vision coverage for you and your family"
//     },
//     {
//       icon: "🏖️",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//       title: "Flexible PTO",
//       description: "Unlimited vacation and sick days to maintain work-life balance"
//     },
//     {
//       icon: "📚",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
//       title: "Learning Budget",
//       description: "$5,000 annual budget for conferences, courses, and professional development"
//     },
//     {
//       icon: "🏠",
//       image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
//       title: "Remote Work",
//       description: "Flexible remote and hybrid work options with modern home office stipend"
//     },
//     {
//       icon: "💪",
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
//       title: "Wellness Program",
//       description: "Gym membership, mental health support, and comprehensive wellness initiatives"
//     }
//   ];

//   const handleApplyNow = (position) => {
//     setFormData({ ...formData, position: position.title });
//     setShowApplicationForm(true);
//   };

//   const handleLearnMore = (position) => {
//     setSelectedPosition(position);
//   };

//   const handleFormSubmit = () => {
//     if (!formData.name || !formData.email || !formData.position || !formData.resume) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     // Here you would typically send the form data to your backend
//     alert(`Application submitted for ${formData.position}! We'll be in touch soon.`);
//     setShowApplicationForm(false);
//     setFormData({ name: '', email: '', phone: '', position: '', resume: null, coverLetter: '' });
//   };

//   const handleFormChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-lg fixed w-full top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
//                 Panabotics
//               </h1>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Home</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">About</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Services</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Products</a>
//               <a href="#" className="text-cyan-600 font-semibold">Careers</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Contact</a>
//             </nav>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Home</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">About</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Services</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Products</a>
//                 <a href="#" className="block px-3 py-2 text-cyan-600 font-semibold">Careers</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Contact</a>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="pt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Hero Section with Background Image */}
//           <div
//             className="relative rounded-3xl mb-16 animate-on-scroll overflow-hidden"
//             style={{
//               backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop)',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-cyan-600/80"></div>
//             <div className="relative text-center py-24 px-8">
//               <h1 className="text-6xl font-bold mb-6 text-white">
//                 Join Our Team
//               </h1>
//               <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
//                 Help us shape the future of artificial intelligence. We're looking for passionate individuals
//                 who want to make a meaningful impact through innovative AI solutions.
//               </p>
//               <div className="mt-8">
//                 <button
//                   onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}
//                   className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
//                 >
//                   View Open Positions
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Culture Section */}
//           <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 animate-on-scroll">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Panabotics?</h2>
//               <p className="text-xl text-gray-600">Experience a culture of innovation, growth, and collaboration</p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
//                   <span className="text-3xl">🚀</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven</h3>
//                 <p className="text-gray-600">Work on cutting-edge AI projects that push the boundaries of what's possible in technology.</p>
//               </div>
//               <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
//                   <span className="text-3xl">🌱</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Growth-Focused</h3>
//                 <p className="text-gray-600">Continuous learning opportunities and career development programs tailored to your goals.</p>
//               </div>
//               <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
//                   <span className="text-3xl">🤝</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative</h3>
//                 <p className="text-gray-600">Work alongside world-class experts in a supportive and inclusive environment.</p>
//               </div>
//             </div>
//           </div>

//           {/* Benefits Section with Unsplash Images */}
//           <div className="mb-16 animate-on-scroll">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
//               <p className="text-xl text-gray-600">We take care of our team members with comprehensive benefits</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-on-scroll overflow-hidden group">
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={benefit.image}
//                       alt={benefit.title}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 mb-3">
//                       <span className="text-2xl">{benefit.icon}</span>
//                       <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Open Positions */}
//           <div id="positions" className="animate-on-scroll">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
//               <p className="text-xl text-gray-600">Find your next opportunity and grow with us</p>
//             </div>

//             <div className="space-y-8">
//               {openPositions.map((position, index) => (
//                 <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-on-scroll border border-gray-100">
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-4 mb-4">
//                         <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
//                         <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 rounded-full text-sm font-semibold">
//                           {position.department}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
//                       <div className="flex flex-wrap gap-6">
//                         <div className="flex items-center gap-2">
//                           <MapPin className="h-5 w-5 text-cyan-500" />
//                           <span className="text-gray-700 font-medium">{position.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="h-5 w-5 text-cyan-500" />
//                           <span className="text-gray-700 font-medium">{position.type}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <DollarSign className="h-5 w-5 text-cyan-500" />
//                           <span className="text-gray-700 font-medium">{position.salary}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex gap-4">
//                       <button
//                         onClick={() => handleApplyNow(position)}
//                         className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
//                       >
//                         Apply Now
//                       </button>
//                       <button
//                         onClick={() => handleLearnMore(position)}
//                         className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
//                       >
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-white text-center mt-16 animate-on-scroll shadow-2xl">
//             <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//               We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
//             </p>
//             <button
//               onClick={() => setShowApplicationForm(true)}
//               className="px-10 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
//             >
//               Send Your Resume
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
//                 Panabotics
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 Leading the future of artificial intelligence with innovative solutions that transform industries and improve lives worldwide.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <span className="sr-only">Facebook</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <span className="sr-only">LinkedIn</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
//                 <li><a href="#" className="text-cyan-400 font-medium">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Contact</h4>
//               <ul className="space-y-2">
//                 <li className="text-gray-400">
//                   <Mail className="h-4 w-4 inline mr-2" />
//                   careers@panabotics.com
//                 </li>
//                 <li className="text-gray-400">
//                   <Phone className="h-4 w-4 inline mr-2" />
//                   +1 (555) 123-4567
//                 </li>
//                 <li className="text-gray-400">
//                   San Francisco, CA
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 mt-8 text-center">
//             <p className="text-gray-400">
//               © 2024 Panabotics. All rights reserved. | Privacy Policy | Terms of Service
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Position Details Modal */}
//       {selectedPosition && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-3xl max-w-4xl w-full max-h-screen overflow-y-auto p-8">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPosition.title}</h2>
//                 <p className="text-cyan-600 font-semibold">{selectedPosition.department}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedPosition(null)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Job Description</h3>
//                 <p className="text-gray-600 leading-relaxed">{selectedPosition.description}</p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
//                 <ul className="space-y-2">
//                   {selectedPosition.requirements.map((req, index) => (
//                     <li key={index} className="text-gray-600 flex items-start gap-2">
//                       <span className="text-cyan-500 mt-1">•</span>
//                       {req}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h3>
//                 <ul className="space-y-2">
//                   {selectedPosition.responsibilities.map((resp, index) => (
//                     <li key={index} className="text-gray-600 flex items-start gap-2">
//                       <span className="text-cyan-500 mt-1">•</span>
//                       {resp}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex gap-4 pt-6">
//                 <button
//                   onClick={() => {
//                     setSelectedPosition(null);
//                     handleApplyNow(selectedPosition);
//                   }}
//                   className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
//                 >
//                   Apply for This Position
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Application Form Modal */}
//       {showApplicationForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-3xl max-w-2xl w-full max-h-screen overflow-y-auto p-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-3xl font-bold text-gray-900">Apply for Position</h2>
//               <button
//                 onClick={() => setShowApplicationForm(false)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Position *</label>
//                 <select
//                   name="position"
//                   value={formData.position}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                 >
//                   <option value="">Select a position</option>
//                   {openPositions.map(position => (
//                     <option key={position.id} value={position.title}>{position.title}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Resume *</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFormChange}
//                   accept=".pdf,.doc,.docx"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, or DOCX)</p>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
//                 <textarea
//                   name="coverLetter"
//                   value={formData.coverLetter}
//                   onChange={handleFormChange}
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Tell us why you're interested in this position..."
//                 />
//               </div>

//               <div className="flex gap-4 pt-6">
//                 <button
//                   onClick={handleFormSubmit}
//                   className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
//                 >
//                   Submit Application
//                 </button>
//                 <button
//                   onClick={() => setShowApplicationForm(false)}
//                   className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CSS for animations */}
//       <style jsx>{`
//         .animate-fade-in {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Careers;


// import { useEffect, useState } from "react";
// import { MapPin, Clock, DollarSign, Users, X, ExternalLink, Mail, Phone, FileText, Menu } from "lucide-react";

// const Careers = () => {
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [showApplicationForm, setShowApplicationForm] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     position: '',
//     resume: null,
//     coverLetter: ''
//   });

//   useEffect(() => {
//     // Enhanced scroll-triggered animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in');
//         }
//       });
//     }, observerOptions);

//     // Observe all animated elements
//     document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
//       const htmlElement = element as HTMLElement;
//       htmlElement.style.opacity = '0';
//       htmlElement.style.transform = 'translateY(30px)';
//       htmlElement.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const openPositions = [
//     {
//       id: 1,
//       title: "Senior AI Research Scientist",
//       department: "Research & Development",
//       location: "San Francisco, CA",
//       type: "Full-time",
//       salary: "$150,000 - $200,000",
//       description: "Lead cutting-edge AI research projects and develop novel machine learning algorithms to solve complex real-world problems.",
//       requirements: ["PhD in Computer Science, AI, or related field", "5+ years of research experience", "Published papers in top-tier conferences", "Experience with deep learning frameworks"],
//       responsibilities: ["Lead research initiatives", "Mentor junior researchers", "Publish research findings", "Collaborate with product teams"]
//     },
//     {
//       id: 2,
//       title: "Machine Learning Engineer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$120,000 - $160,000",
//       description: "Build and deploy ML models at scale to solve real-world business problems and create intelligent applications.",
//       requirements: ["MS in Computer Science or equivalent", "3+ years ML experience", "Python, TensorFlow/PyTorch proficiency", "Cloud platform experience"],
//       responsibilities: ["Design ML pipelines", "Deploy models to production", "Optimize model performance", "Monitor system reliability"]
//     },
//     {
//       id: 3,
//       title: "Data Scientist",
//       department: "Analytics",
//       location: "New York, NY",
//       type: "Full-time",
//       salary: "$100,000 - $140,000",
//       description: "Extract insights from complex datasets and build predictive models to drive business decisions.",
//       requirements: ["MS in Statistics, Mathematics, or related field", "2+ years data science experience", "SQL, Python, R proficiency", "Statistical modeling expertise"],
//       responsibilities: ["Analyze complex datasets", "Build predictive models", "Create data visualizations", "Present insights to stakeholders"]
//     },
//     {
//       id: 4,
//       title: "AI Product Manager",
//       department: "Product",
//       location: "Austin, TX",
//       type: "Full-time",
//       salary: "$130,000 - $170,000",
//       description: "Drive the development of AI-powered products from conception to launch, working with cross-functional teams.",
//       requirements: ["MBA or equivalent experience", "3+ years product management", "Understanding of AI/ML concepts", "Strong analytical skills"],
//       responsibilities: ["Define product strategy", "Manage product roadmap", "Coordinate with engineering teams", "Analyze market trends"]
//     },
//     {
//       id: 5,
//       title: "Computer Vision Engineer",
//       department: "Engineering",
//       location: "Seattle, WA",
//       type: "Full-time",
//       salary: "$125,000 - $165,000",
//       description: "Develop advanced computer vision systems for various applications including autonomous systems and medical imaging.",
//       requirements: ["MS in Computer Vision or related field", "3+ years CV experience", "OpenCV, deep learning expertise", "C++/Python proficiency"],
//       responsibilities: ["Develop CV algorithms", "Implement image processing pipelines", "Optimize model performance", "Collaborate on product integration"]
//     },
//     {
//       id: 6,
//       title: "DevOps Engineer",
//       department: "Infrastructure",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$110,000 - $150,000",
//       description: "Build and maintain scalable infrastructure for AI/ML workloads, ensuring high availability and performance.",
//       requirements: ["BS in Computer Science or equivalent", "3+ years DevOps experience", "AWS/GCP/Azure expertise", "Kubernetes, Docker proficiency"],
//       responsibilities: ["Manage cloud infrastructure", "Implement CI/CD pipelines", "Monitor system performance", "Ensure security compliance"]
//     }
//   ];

//   const benefits = [
//     {
//       icon: "💰",
//       image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&crop=face",
//       title: "Competitive Salary",
//       description: "Market-leading compensation packages with equity options"
//     },
//     {
//       icon: "🏥",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
//       title: "Health Benefits",
//       description: "Comprehensive medical, dental, and vision coverage for you and your family"
//     },
//     {
//       icon: "🏖️",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//       title: "Flexible PTO",
//       description: "Unlimited vacation and sick days to maintain work-life balance"
//     },
//     {
//       icon: "📚",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
//       title: "Learning Budget",
//       description: "$5,000 annual budget for conferences, courses, and professional development"
//     },
//     {
//       icon: "🏠",
//       image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
//       title: "Remote Work",
//       description: "Flexible remote and hybrid work options with modern home office stipend"
//     },
//     {
//       icon: "💪",
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
//       title: "Wellness Program",
//       description: "Gym membership, mental health support, and comprehensive wellness initiatives"
//     }
//   ];

//   const handleApplyNow = (position) => {
//     setFormData({ ...formData, position: position.title });
//     setShowApplicationForm(true);
//   };

//   const handleLearnMore = (position) => {
//     setSelectedPosition(position);
//   };

//   const handleFormSubmit = () => {
//     if (!formData.name || !formData.email || !formData.position || !formData.resume) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     // Here you would typically send the form data to your backend
//     alert(`Application submitted for ${formData.position}! We'll be in touch soon.`);
//     setShowApplicationForm(false);
//     setFormData({ name: '', email: '', phone: '', position: '', resume: null, coverLetter: '' });
//   };

//   const handleFormChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-lg fixed w-full top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
//                 Panabotics
//               </h1>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Home</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">About</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Services</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Products</a>
//               <a href="#" className="text-cyan-600 font-semibold">Careers</a>
//               <a href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">Contact</a>
//             </nav>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Home</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">About</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Services</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Products</a>
//                 <a href="#" className="block px-3 py-2 text-cyan-600 font-semibold">Careers</a>
//                 <a href="#" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Contact</a>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow pt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Hero Section with Background Image */}
//           <div
//             className="relative rounded-3xl mb-16 animate-on-scroll overflow-hidden"
//             style={{
//               backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop)',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-cyan-600/80"></div>
//             <div className="relative text-center py-24 px-8">
//               <h1 className="text-6xl font-bold mb-6 text-white">
//                 Join Our Team
//               </h1>
//               <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
//                 Help us shape the future of artificial intelligence. We're looking for passionate individuals
//                 who want to make a meaningful impact through innovative AI solutions.
//               </p>
//               <div className="mt-8">
//                 <button
//                   onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}
//                   className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
//                 >
//                   View Open Positions
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Culture Section */}
//           <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 animate-on-scroll">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Panabotics?</h2>
//               <p className="text-xl text-gray-600">Experience a culture of innovation, growth, and collaboration</p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
//                   <span className="text-3xl">🚀</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven</h3>
//                 <p className="text-gray-600">Work on cutting-edge AI projects that push the boundaries of what's possible in technology.</p>
//               </div>
//               <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
//                   <span className="text-3xl">🌱</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Growth-Focused</h3>
//                 <p className="text-gray-600">Continuous learning opportunities and career development programs tailored to your goals.</p>
//               </div>
//               <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
//                   <span className="text-3xl">🤝</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative</h3>
//                 <p className="text-gray-600">Work alongside world-class experts in a supportive and inclusive environment.</p>
//               </div>
//             </div>
//           </div>

//           {/* Benefits Section with Unsplash Images */}
//           <div className="mb-16 animate-on-scroll">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
//               <p className="text-xl text-gray-600">We take care of our team members with comprehensive benefits</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-on-scroll overflow-hidden group">
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={benefit.image}
//                       alt={benefit.title}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 mb-3">
//                       <span className="text-2xl">{benefit.icon}</span>
//                       <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Open Positions */}
//           <div id="positions" className="animate-on-scroll">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
//               <p className="text-xl text-gray-600">Find your next opportunity and grow with us</p>
//             </div>

//             <div className="space-y-8">
//               {openPositions.map((position, index) => (
//                 <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-on-scroll border border-gray-100">
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-4 mb-4">
//                         <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
//                         <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 rounded-full text-sm font-semibold">
//                           {position.department}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
//                       <div className="flex flex-wrap gap-6">
//                         <div className="flex items-center gap-2">
//                           <MapPin className="h-5 w-5 text-cyan-500" />
//                           <span className="text-gray-700 font-medium">{position.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="h-5 w-5 text-cyan-500" />
//                           <span className="text-gray-700 font-medium">{position.type}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <DollarSign className="h-5 w-5 text-cyan-500" />
//                           <span className="text-gray-700 font-medium">{position.salary}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex gap-4">
//                       <button
//                         onClick={() => handleApplyNow(position)}
//                         className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
//                       >
//                         Apply Now
//                       </button>
//                       <button
//                         onClick={() => handleLearnMore(position)}
//                         className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
//                       >
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-white text-center mt-16 animate-on-scroll shadow-2xl">
//             <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//               We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
//             </p>
//             <button
//               onClick={() => setShowApplicationForm(true)}
//               className="px-10 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
//             >
//               Send Your Resume
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
//                 Panabotics
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 Leading the future of artificial intelligence with innovative solutions that transform industries and improve lives worldwide.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <span className="sr-only">Facebook</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <span className="sr-only">LinkedIn</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
//                 <li><a href="#" className="text-cyan-400 font-medium">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Contact</h4>
//               <ul className="space-y-2">
//                 <li className="text-gray-400">
//                   <Mail className="h-4 w-4 inline mr-2" />
//                   careers@panabotics.com
//                 </li>
//                 <li className="text-gray-400">
//                   <Phone className="h-4 w-4 inline mr-2" />
//                   +1 (555) 123-4567
//                 </li>
//                 <li className="text-gray-400">
//                   San Francisco, CA
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 mt-8 text-center">
//             <p className="text-gray-400">
//               © 2024 Panabotics. All rights reserved. | Privacy Policy | Terms of Service
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Position Details Modal */}
//       {selectedPosition && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-3xl max-w-4xl w-full max-h-screen overflow-y-auto p-8">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPosition.title}</h2>
//                 <p className="text-cyan-600 font-semibold">{selectedPosition.department}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedPosition(null)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Job Description</h3>
//                 <p className="text-gray-600 leading-relaxed">{selectedPosition.description}</p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
//                 <ul className="space-y-2">
//                   {selectedPosition.requirements.map((req, index) => (
//                     <li key={index} className="text-gray-600 flex items-start gap-2">
//                       <span className="text-cyan-500 mt-1">•</span>
//                       {req}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h3>
//                 <ul className="space-y-2">
//                   {selectedPosition.responsibilities.map((resp, index) => (
//                     <li key={index} className="text-gray-600 flex items-start gap-2">
//                       <span className="text-cyan-500 mt-1">•</span>
//                       {resp}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex gap-4 pt-6">
//                 <button
//                   onClick={() => {
//                     setSelectedPosition(null);
//                     handleApplyNow(selectedPosition);
//                   }}
//                   className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
//                 >
//                   Apply for This Position
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Application Form Modal */}
//       {showApplicationForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-3xl max-w-2xl w-full max-h-screen overflow-y-auto p-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-3xl font-bold text-gray-900">Apply for Position</h2>
//               <button
//                 onClick={() => setShowApplicationForm(false)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Position *</label>
//                 <select
//                   name="position"
//                   value={formData.position}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                 >
//                   <option value="">Select a position</option>
//                   {openPositions.map(position => (
//                     <option key={position.id} value={position.title}>{position.title}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Resume *</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFormChange}
//                   accept=".pdf,.doc,.docx"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, or DOCX)</p>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
//                 <textarea
//                   name="coverLetter"
//                   value={formData.coverLetter}
//                   onChange={handleFormChange}
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="Tell us why you're interested in this position..."
//                 />
//               </div>

//               <div className="flex gap-4 pt-6">
//                 <button
//                   onClick={handleFormSubmit}
//                   className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
//                 >
//                   Submit Application
//                 </button>
//                 <button
//                   onClick={() => setShowApplicationForm(false)}
//                   className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

     
//     </div>
//   );
// };

// export default Careers;





import { useEffect, useState } from "react";
import { MapPin, Clock, DollarSign, Users, X, ExternalLink, Mail, Phone, FileText, Menu } from "lucide-react";

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  useEffect(() => {
    // Enhanced scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translateY(30px)';
      htmlElement.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Research Scientist",
      department: "Research & Development",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150,000 - $200,000",
      description: "Lead cutting-edge AI research projects and develop novel machine learning algorithms to solve complex real-world problems.",
      requirements: ["PhD in Computer Science, AI, or related field", "5+ years of research experience", "Published papers in top-tier conferences", "Experience with deep learning frameworks"],
      responsibilities: ["Lead research initiatives", "Mentor junior researchers", "Publish research findings", "Collaborate with product teams"]
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $160,000",
      description: "Build and deploy ML models at scale to solve real-world business problems and create intelligent applications.",
      requirements: ["MS in Computer Science or equivalent", "3+ years ML experience", "Python, TensorFlow/PyTorch proficiency", "Cloud platform experience"],
      responsibilities: ["Design ML pipelines", "Deploy models to production", "Optimize model performance", "Monitor system reliability"]
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100,000 - $140,000",
      description: "Extract insights from complex datasets and build predictive models to drive business decisions.",
      requirements: ["MS in Statistics, Mathematics, or related field", "2+ years data science experience", "SQL, Python, R proficiency", "Statistical modeling expertise"],
      responsibilities: ["Analyze complex datasets", "Build predictive models", "Create data visualizations", "Present insights to stakeholders"]
    },
    {
      id: 4,
      title: "AI Product Manager",
      department: "Product",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130,000 - $170,000",
      description: "Drive the development of AI-powered products from conception to launch, working with cross-functional teams.",
      requirements: ["MBA or equivalent experience", "3+ years product management", "Understanding of AI/ML concepts", "Strong analytical skills"],
      responsibilities: ["Define product strategy", "Manage product roadmap", "Coordinate with engineering teams", "Analyze market trends"]
    },
    {
      id: 5,
      title: "Computer Vision Engineer",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$125,000 - $165,000",
      description: "Develop advanced computer vision systems for various applications including autonomous systems and medical imaging.",
      requirements: ["MS in Computer Vision or related field", "3+ years CV experience", "OpenCV, deep learning expertise", "C++/Python proficiency"],
      responsibilities: ["Develop CV algorithms", "Implement image processing pipelines", "Optimize model performance", "Collaborate on product integration"]
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      description: "Build and maintain scalable infrastructure for AI/ML workloads, ensuring high availability and performance.",
      requirements: ["BS in Computer Science or equivalent", "3+ years DevOps experience", "AWS/GCP/Azure expertise", "Kubernetes, Docker proficiency"],
      responsibilities: ["Manage cloud infrastructure", "Implement CI/CD pipelines", "Monitor system performance", "Ensure security compliance"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&crop=face",
      title: "Competitive Salary",
      description: "Market-leading compensation packages with equity options"
    },
    {
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage for you and your family"
    },
    {
      icon: "🏖️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Flexible PTO",
      description: "Unlimited vacation and sick days to maintain work-life balance"
    },
    {
      icon: "📚",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      title: "Learning Budget",
      description: "$5,000 annual budget for conferences, courses, and professional development"
    },
    {
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      title: "Remote Work",
      description: "Flexible remote and hybrid work options with modern home office stipend"
    },
    {
      icon: "💪",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Wellness Program",
      description: "Gym membership, mental health support, and comprehensive wellness initiatives"
    }
  ];

  const handleApplyNow = (position) => {
    setFormData({ ...formData, position: position.title });
    setShowApplicationForm(true);
  };

  const handleLearnMore = (position) => {
    setSelectedPosition(position);
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email || !formData.position || !formData.resume) {
      alert('Please fill in all required fields.');
      return;
    }
    // Here you would typically send the form data to your backend
    alert(`Application submitted for ${formData.position}! We'll be in touch soon.`);
    setShowApplicationForm(false);
    setFormData({ name: '', email: '', phone: '', position: '', resume: null, coverLetter: '' });
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section with Background Image */}
          <div
            className="relative rounded-3xl mb-16 animate-on-scroll overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-cyan-600/80"></div>
            <div className="relative text-center py-24 px-8">
              <h1 className="text-6xl font-bold mb-6 text-white">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                Help us shape the future of artificial intelligence. We're looking for passionate individuals
                who want to make a meaningful impact through innovative AI solutions.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>

          {/* Culture Section */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Panabotics?</h2>
              <p className="text-xl text-gray-600">Experience a culture of innovation, growth, and collaboration</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven</h3>
                <p className="text-gray-600">Work on cutting-edge AI projects that push the boundaries of what's possible in technology.</p>
              </div>
              <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth-Focused</h3>
                <p className="text-gray-600">Continuous learning opportunities and career development programs tailored to your goals.</p>
              </div>
              <div className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative</h3>
                <p className="text-gray-600">Work alongside world-class experts in a supportive and inclusive environment.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section with Unsplash Images */}
          <div className="mb-16 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-600">We take care of our team members with comprehensive benefits</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-on-scroll overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{benefit.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div id="positions" className="animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">Find your next opportunity and grow with us</p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-on-scroll border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 rounded-full text-sm font-semibold">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-cyan-500" />
                          <span className="text-gray-700 font-medium">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-cyan-500" />
                          <span className="text-gray-700 font-medium">{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-cyan-500" />
                          <span className="text-gray-700 font-medium">{position.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleApplyNow(position)}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => handleLearnMore(position)}
                        className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-white text-center mt-16 animate-on-scroll shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <button
              onClick={() => setShowApplicationForm(true)}
              className="px-10 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Send Your Resume
            </button>
          </div>
        </div>
      </main>

      {/* Position Details Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-screen overflow-y-auto p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPosition.title}</h2>
                <p className="text-cyan-600 font-semibold">{selectedPosition.department}</p>
              </div>
              <button
                onClick={() => setSelectedPosition(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedPosition.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedPosition.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedPosition.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  onClick={() => {
                    setSelectedPosition(null);
                    handleApplyNow(selectedPosition);
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Apply for This Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-screen overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Apply for Position</h2>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Position *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a position</option>
                  {openPositions.map(position => (
                    <option key={position.id} value={position.title}>{position.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFormChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, or DOCX)</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleFormChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  onClick={handleFormSubmit}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Submit Application
                </button>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;