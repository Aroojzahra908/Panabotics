// import { useEffect } from "react";
// import { Brain, Zap, Eye, BarChart3, Cog, Target } from "lucide-react";

// const Services = () => {
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

//   const services = [
//     {
//       icon: Brain,
//       title: "Artificial Intelligence",
//       description: "Custom AI solutions that learn, adapt, and evolve with your business requirements, delivering intelligent automation and decision-making capabilities."
//     },
//     {
//       icon: Zap,
//       title: "Machine Learning",
//       description: "Advanced ML algorithms and models that extract insights from your data, predict trends, and optimize business processes for maximum efficiency."
//     },
//     {
//       icon: Eye,
//       title: "Computer Vision",
//       description: "Sophisticated image and video analysis systems for quality control, surveillance, medical imaging, and autonomous systems."
//     },
//     {
//       icon: BarChart3,
//       title: "Data Analysis",
//       description: "Transform raw data into actionable insights with our comprehensive analytics platform, featuring real-time dashboards and predictive modeling."
//     },
//     {
//       icon: Cog,
//       title: "Automation",
//       description: "Streamline operations with intelligent automation solutions that reduce costs, eliminate errors, and improve operational efficiency."
//     },
//     {
//       icon: Target,
//       title: "Intelligent Agents",
//       description: "Autonomous agents that can perform complex tasks, make decisions, and interact with users in natural, intuitive ways."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
//             Our Services
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive AI and ML solutions tailored to your business needs. We deliver cutting-edge technology 
//             that transforms how you operate and compete in the digital landscape.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {services.map((service, index) => (
//             <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll">
//               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <service.icon className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Process Section */}
//         <div className="bg-white rounded-3xl p-12 shadow-lg animate-on-scroll">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
//             <p className="text-xl text-gray-600">How we deliver exceptional AI solutions</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { step: "01", title: "Discovery", description: "We understand your business challenges and identify AI opportunities." },
//               { step: "02", title: "Design", description: "Our experts design custom AI solutions tailored to your specific needs." },
//               { step: "03", title: "Development", description: "We build and train AI models using the latest technologies and best practices." },
//               { step: "04", title: "Deployment", description: "We deploy, monitor, and continuously optimize your AI solutions." }
//             ].map((item, index) => (
//               <div key={index} className="text-center animate-on-scroll">
//                 <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-lg">{item.step}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Services = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ projects: 0, clients: 0, accuracy: 0, uptime: 0 });

  useEffect(() => {
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
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

    // Stats counter animation
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
        }
      });
    }, { threshold: 0.5 });

    const statsElement = document.querySelector('.stats-section');
    if (statsElement) {
      statsObserver.observe(statsElement);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  // Testimonials slider
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const targets = { projects: 150, clients: 50, accuracy: 99, uptime: 99.9 };
    const start = Date.now();

    const updateStats = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        accuracy: Math.floor(targets.accuracy * progress),
        uptime: parseFloat((targets.uptime * progress).toFixed(1))
      });

      if (progress < 1) {
        requestAnimationFrame(updateStats);
      }
    };

    updateStats();
  };

  const services = [
    {
      title: "Artificial Intelligence",
      description: "Transform your business with cutting-edge AI solutions. Our custom neural networks and deep learning models deliver intelligent automation, predictive analytics, and decision-making capabilities that adapt and evolve with your needs.",
      features: ["Custom Neural Networks", "NLP & Language Models", "Predictive Analytics", "Intelligent Automation"],
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
      ]
    },
    {
      title: "Machine Learning",
      description: "Harness the power of advanced ML algorithms to unlock insights from your data. From recommendation engines to fraud detection, our ML solutions drive efficiency and innovation across your organization.",
      features: ["Recommendation Systems", "Fraud Detection", "Pattern Recognition", "Predictive Modeling"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1518186285589-4636190af475?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
      ]
    },
    {
      title: "Computer Vision",
      description: "Revolutionary image and video analysis powered by state-of-the-art computer vision technology. Perfect for quality control, medical imaging, autonomous systems, and security applications.",
      features: ["Object Detection", "Facial Recognition", "Medical Imaging", "Quality Control"],
      images: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
      ]
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable business intelligence. Our comprehensive analytics platform provides real-time dashboards, advanced visualizations, and predictive insights for data-driven decisions.",
      features: ["Real-time Dashboards", "Business Intelligence", "Data Visualization", "Trend Analysis"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop&crop=center"
      ]
    },
    {
      title: "Robotic Process Automation",
      description: "Streamline operations with intelligent RPA solutions that eliminate manual tasks, reduce errors, and improve efficiency. Our bots work 24/7 to optimize your business processes.",
      features: ["Process Automation", "Workflow Optimization", "Error Reduction", "24/7 Operations"],
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
      ]
    },
    {
      title: "Intelligent Agents",
      description: "Deploy sophisticated AI agents that can understand context, make decisions, and interact naturally with users. Perfect for customer service, virtual assistants, and autonomous task execution.",
      features: ["Conversational AI", "Virtual Assistants", "Decision Making", "Natural Interaction"],
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&crop=center"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Panabotics transformed our manufacturing process with their AI-powered quality control system. We've seen a 40% reduction in defects and 25% increase in efficiency.",
      author: "Sarah Chen",
      position: "Operations Director",
      company: "TechManufacturing Inc."
    },
    {
      quote: "The machine learning solution they developed for our e-commerce platform increased our sales by 35% through better product recommendations and customer insights.",
      author: "Michael Rodriguez",
      position: "CTO",
      company: "RetailTech Solutions"
    },
    {
      quote: "Their computer vision system revolutionized our medical imaging department. Diagnosis accuracy improved by 20% and processing time reduced by 60%.",
      author: "Dr. Emily Watson",
      position: "Chief Medical Officer",
      company: "HealthTech Medical Center"
    }
  ];

  const caseStudies = [
    {
      title: "Smart Manufacturing",
      description: "AI-powered quality control system reducing defects by 40%",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center",
      result: "40% defect reduction"
    },
    {
      title: "Healthcare AI",
      description: "Computer vision for medical imaging with 99.2% accuracy",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
      result: "99.2% accuracy"
    },
    {
      title: "Retail Intelligence",
      description: "ML recommendation engine boosting sales by 35%",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
      result: "35% sales increase"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-[#0D1B2A] via-[#177E89] to-[#3CBAC8] text-transparent bg-clip-text">
              <span className="block">AI Solutions That</span>
              <span className="block">Transform Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Panabotics delivers cutting-edge artificial intelligence and machine learning solutions
              that revolutionize how businesses operate, compete, and thrive in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800">
              <span className="px-4 py-2 rounded-full border border-gray-600" style={{ backgroundColor: '#3CBAC8' }}>🚀 150+ Projects Delivered</span>
              <span className="px-4 py-2 rounded-full border border-gray-600" style={{ backgroundColor: '#3CBAC8' }}>🎯 99% Accuracy Rate</span>
              <span className="px-4 py-2 rounded-full border border-gray-600" style={{ backgroundColor: '#3CBAC8' }}>⚡ 24/7 AI Operations</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid with Image Sliders */}
        <div className="py-20">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B2A] via-[#177E89] to-[#3CBAC8]">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and ML solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-white border-2 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-on-scroll overflow-hidden" style={{ borderColor: '#C0C0C0' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'rgba(60, 186, 200, 0.05)' }}></div>

                <div className="relative z-10">
                  {/* Image Slider replacing icon */}
                  <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {service.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="w-full h-48 relative">
                              <img
                                src={image}
                                alt={`${service.title} ${imgIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-0 shadow-lg" />
                      <CarouselNext className="right-2 bg-white/80 hover:bg-white border-0 shadow-lg" />
                    </Carousel>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:transition-colors" style={{ color: 'inherit' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#3CBAC8' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section py-20 rounded-3xl mb-20 animate-on-scroll" style={{ backgroundColor: '#C0C0C0' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-700">Delivering measurable results across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform" style={{ color: '#3CBAC8' }}>
                {stats.projects}+
              </div>
              <div className="text-gray-800">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform" style={{ color: '#3CBAC8' }}>
                {stats.clients}+
              </div>
              <div className="text-gray-800">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform" style={{ color: '#3CBAC8' }}>
                {stats.accuracy}%
              </div>
              <div className="text-gray-800">Accuracy Rate</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform" style={{ color: '#3CBAC8' }}>
                {stats.uptime}%
              </div>
              <div className="text-gray-800">System Uptime</div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="py-20 animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B2A] via-[#177E89] to-[#3CBAC8]">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real-world AI implementations driving business transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ border: `2px solid #c0c0c0` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{study.result}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="py-20 rounded-3xl animate-on-scroll" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-cyan-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">Hear from industry leaders who trust Panabotics</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg" style={{ border: `2px solid #C0C0C0` }}>
              <div className="text-6xl mb-4" style={{ color: '#3CBAC8' }}>"</div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#3CBAC8' }}>
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                  <div style={{ color: '#3CBAC8' }}>{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'scale-125' : 'hover:opacity-80'
                    }`}
                  style={{
                    backgroundColor: index === currentTestimonial ? '#3CBAC8' : '#C0C0C0'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 animate-on-scroll">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2> */}
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B2A] via-[#177E89] to-[#3CBAC8]">
              Our Process
            </h2>

            <p className="text-xl text-gray-600">A proven methodology for delivering exceptional AI solutions</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We dive deep into your business challenges, analyze your data landscape, and identify the most impactful AI opportunities for your organization."
              },
              {
                step: "02",
                title: "Strategy & Design",
                description: "Our AI experts design custom solutions tailored to your specific needs, creating detailed architectures and implementation roadmaps."
              },
              {
                step: "03",
                title: "Development & Training",
                description: "We build and train AI models using cutting-edge technologies, rigorous testing, and industry best practices to ensure optimal performance."
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "We deploy your AI solutions with continuous monitoring, performance optimization, and ongoing support to maximize ROI and ensure success."
              }
            ].map((item, index) => (
              <div key={index} className="group text-center animate-on-scroll">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg" style={{ backgroundColor: '#3CBAC8' }}>
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5" style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)' }}></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 rounded-3xl text-center animate-on-scroll mb-20" style={{ backgroundColor: '#C0C0C0' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how Panabotics can help you harness the power of AI to drive innovation,
            efficiency, and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 text-white rounded-xl font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg" style={{ backgroundColor: '#3CBAC8' }}>
              Start Your AI Journey
            </button>
            <button className="px-8 py-4 border-2 rounded-xl font-semibold hover:bg-opacity-10 transition-all duration-300" style={{ borderColor: '#3CBAC8', color: '#3CBAC8' }}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;