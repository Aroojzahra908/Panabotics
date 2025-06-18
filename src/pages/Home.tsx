import { Link } from "react-router-dom";
import { ArrowRight, Brain, Zap, Eye } from "lucide-react";
import NeuronNetwork from "../components/NeuronNetwork";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Add the spin animation to the style tag
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);

    // Enhanced scroll-triggered animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationType = element.dataset.animation;
          
          switch (animationType) {
            case 'slide-up':
              element.classList.add('animate-slide-up');
              break;
            case 'slide-left':
              element.classList.add('animate-slide-in-left');
              break;
            case 'slide-right':
              element.classList.add('animate-slide-in-right');
              break;
            case 'scale':
              element.classList.add('animate-scale-in');
              break;
            default:
              element.classList.add('animate-fade-in');
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translateY(30px)';
      htmlElement.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50">
        <NeuronNetwork />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll" data-animation="slide-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-black bg-clip-text text-transparent">
                  AI Solutions
                </span>
                <br />
                <span className="text-gray-900">for Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, 
                machine learning, and automation solutions. We create intelligent 
                systems that evolve with your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group btn-hover-effect animate-pulse-glow"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll" data-animation="scale">
              <div className="relative flex items-center justify-center">
                <div className="relative z-20 w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  <div 
                    className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent"
                    style={{ 
                      animation: "spin 15s linear infinite",
                      display: "inline-block",
                      transformOrigin: "center"
                    }}
                  >
                    AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll" data-animation="slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-gradient">
              Powering Innovation with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're at the forefront of artificial intelligence, delivering solutions 
              that transform industries and empower businesses to reach new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover-lift animate-on-scroll" data-animation="slide-up">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-bounce-gentle">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom AI solutions that learn, adapt, and evolve with your business 
                requirements, delivering intelligent automation and decision-making capabilities.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover-lift animate-on-scroll" data-animation="slide-up">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-bounce-gentle">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced ML algorithms and models that extract insights from your data, 
                predict trends, and optimize business processes for maximum efficiency.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover-lift animate-on-scroll" data-animation="slide-up">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-bounce-gentle">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Sophisticated image and video analysis systems for quality control, 
                surveillance, medical imaging, and autonomous systems.
              </p>
            </div>
          </div>
        </div>
      </section>


<section className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl text-white text-center max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 py-12 animate-on-scroll mb-8" data-animation="scale">
  <h2 className="text-3xl font-bold mb-4 animate-float">
    Ready to Transform Your Business?
  </h2>
  <p className="text-lg mb-6 max-w-xl mx-auto">
    Join hundreds of companies already using our AI solutions to drive growth and innovation.
  </p>
  <Link
    to="/contact"
    className="inline-flex items-center px-7 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg group btn-hover-effect"
  >
    Start Your AI Journey
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</section>
    </div>
  );
};

export default Home;

















// part 2

// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Brain, Zap, Eye, ChevronLeft, ChevronRight, Users, TrendingUp, Shield, Award, Play, CheckCircle, Star } from "lucide-react";

// const PanaboticsHome = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const heroSlides = [
//     {
//       title: "AI Solutions",
//       subtitle: "for Tomorrow",
//       description: "Transform your business with cutting-edge artificial intelligence, machine learning, and automation solutions.",
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "Excellence",
//       description: "Advanced algorithms that learn from your data to provide intelligent insights and predictions.",
//       image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Innovation",
//       subtitle: "Meets Intelligence",
//       description: "Pioneering the future with AI-driven solutions that revolutionize how businesses operate.",
//       image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CTO, TechCorp",
//       content: "Panabotics transformed our data processing with their AI solutions. 300% efficiency increase!",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
//     },
//     {
//       name: "Michael Chen",
//       role: "CEO, InnovateLab",
//       content: "Outstanding machine learning implementation. Their team delivered beyond expectations.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
//     },
//     {
//       name: "Emma Williams",
//       role: "Director, DataFlow",
//       content: "The computer vision system revolutionized our quality control process. Remarkable results!",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Projects Completed" },
//     { number: "98%", label: "Client Satisfaction" },
//     { number: "150+", label: "AI Models Deployed" },
//     { number: "24/7", label: "Support Available" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Enhanced Hero Section with Slider */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//           <div className="absolute top-40 right-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
//           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
//         </div>

//         {/* Floating Neural Network Animation */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 2}s`
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="transform transition-all duration-1000 ease-out">
//                 <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-6 animate-bounce">
//                   <Zap className="w-4 h-4 mr-2" />
//                   Leading AI Innovation Company
//                 </div>
                
//                 <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
//                   <span className="bg-gradient-to-r from-cyan-500 to-black bg-clip-text text-transparent">
//                     {heroSlides[currentSlide].title}
//                   </span>
//                   <br />
//                   <span className="text-gray-900">{heroSlides[currentSlide].subtitle}</span>
//                 </h1>
                
//                 <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
//                   {heroSlides[currentSlide].description}
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
//                     Get Started Today
//                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105 group">
//                     <Play className="mr-2 h-5 w-5" />
//                     Watch Demo
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Image Slider */}
//             <div className="relative">
//               <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                 <div 
//                   className="flex transition-transform duration-700 ease-in-out"
//                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                   {heroSlides.map((slide, index) => (
//                     <div key={index} className="w-full flex-shrink-0">
//                       <img 
//                         src={slide.image} 
//                         alt={`AI Innovation ${index + 1}`}
//                         className="w-full h-96 object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Slider Controls */}
//                 <button 
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-gray-700" />
//                 </button>
//                 <button 
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
//                 >
//                   <ChevronRight className="h-6 w-6 text-gray-700" />
//                 </button>
                
//                 {/* Slide Indicators */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                   {heroSlides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         index === currentSlide ? 'bg-cyan-500 scale-125' : 'bg-white/70'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
//                 <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Services Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               <span className="bg-gradient-to-r from-cyan-500 to-gray-900 bg-clip-text text-transparent">
//                 Our AI Expertise
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Cutting-edge artificial intelligence solutions designed to transform your business operations and drive unprecedented growth.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Brain className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   Custom AI solutions that learn, adapt, and evolve with your business requirements, delivering intelligent automation and decision-making capabilities.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Natural Language Processing
//                   </li>
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Predictive Analytics
//                   </li>
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Intelligent Automation
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Zap className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   Advanced ML algorithms and models that extract insights from your data, predict trends, and optimize business processes for maximum efficiency.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Deep Learning Models
//                   </li>
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Pattern Recognition
//                   </li>
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Real-time Processing
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Eye className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   Sophisticated image and video analysis systems for quality control, surveillance, medical imaging, and autonomous systems.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Object Detection
//                   </li>
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Facial Recognition
//                   </li>
//                   <li className="flex items-center text-sm text-gray-600">
//                     <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
//                     Quality Inspection
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Why Choose <span className="text-cyan-500">Panabotics?</span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 We're not just another AI company. We're your strategic partner in digital transformation, bringing years of expertise and cutting-edge technology to every project.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
//                     <Users className="h-6 w-6 text-cyan-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
//                     <p className="text-gray-600">Our team of PhD researchers and industry veterans brings unparalleled expertise to every project.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
//                     <TrendingUp className="h-6 w-6 text-cyan-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
//                     <p className="text-gray-600">Track record of delivering measurable ROI and transformational outcomes for our clients.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
//                     <Shield className="h-6 w-6 text-cyan-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
//                     <p className="text-gray-600">Bank-grade security and compliance standards to protect your most sensitive data.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=500&fit=crop" 
//                 alt="AI Technology" 
//                 className="rounded-3xl shadow-2xl"
//               />
//               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="flex items-center space-x-3">
//                   <Award className="h-8 w-8 text-cyan-500" />
//                   <div>
//                     <div className="text-sm font-semibold text-gray-900">Industry Leader</div>
//                     <div className="text-sm text-gray-600">AI Innovation 2024</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Slider */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               What Our <span className="text-cyan-500">Clients Say</span>
//             </h2>
//             <p className="text-xl text-gray-600">
//               Don't just take our word for it - hear from our satisfied clients
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
//                 <div className="flex items-center">
//                   <img 
//                     src={testimonial.avatar} 
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
//             <div className="relative z-10">
//               <h2 className="text-4xl font-bold mb-4">
//                 Ready to Transform Your Business with AI?
//               </h2>
//               <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//                 Join hundreds of forward-thinking companies that trust Panabotics to deliver cutting-edge AI solutions that drive real results.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
//                   Start Your AI Journey
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:scale-105">
//                   Schedule Consultation
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0px) rotate(0deg); }
//           33% { transform: translate(30px, -30px) rotate(120deg); }
//           66% { transform: translate(-20px, 20px) rotate(240deg); }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PanaboticsHome;







// part 3
