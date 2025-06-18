// import { useEffect } from "react";
// import { Users, Award, Lightbulb, Globe } from "lucide-react";

// const About = () => {
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

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
//             About Panabotics
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Founded with a vision to democratize artificial intelligence, we bridge the gap between 
//             cutting-edge AI research and practical business solutions.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-on-scroll">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Our team of world-class engineers, data scientists, and AI researchers combines decades 
//               of experience with fresh innovation to deliver transformative technology solutions.
//             </p>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               We specialize in creating intelligent systems that not only automate processes but also 
//               learn, adapt, and evolve with your business needs. From startups to Fortune 500 companies, 
//               we've helped organizations harness the power of AI to drive growth, efficiency, and innovation.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               At Panabotics, we believe AI should augment human intelligence, not replace it. Our solutions 
//               are designed to empower your team, enhance decision-making, and unlock new possibilities for your business.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             {[
//               { number: "500+", label: "Projects Completed" },
//               { number: "50+", label: "Enterprise Clients" },
//               { number: "99%", label: "Client Satisfaction" },
//               { number: "24/7", label: "Support Available" }
//             ].map((stat, index) => (
//               <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center animate-on-scroll">
//                 <div className="text-3xl font-bold text-cyan-500 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 animate-on-scroll">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-xl text-gray-600">The principles that guide everything we do</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Lightbulb, title: "Innovation First", description: "We push the boundaries of what's possible with AI." },
//               { icon: Users, title: "Ethical AI", description: "We develop responsible AI systems that benefit society." },
//               { icon: Award, title: "Excellence", description: "We maintain the highest standards in everything we do." },
//               { icon: Globe, title: "Global Impact", description: "We believe AI can solve humanity's greatest challenges." }
//             ].map((value, index) => (
//               <div key={index} className="text-center animate-on-scroll">
//                 <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <value.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="text-center animate-on-scroll">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Innovation in AI</h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
//             At Panabotics, we don't just follow AI trends – we create them. Our research and development 
//             team works on breakthrough technologies that will shape the future of artificial intelligence.
//           </p>
//           <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
//             <div className="grid md:grid-cols-4 gap-6">
//               <div>
//                 <div className="text-3xl font-bold">🏆</div>
//                 <div className="mt-2">AI Excellence Award 2024</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold">🚀</div>
//                 <div className="mt-2">Tech Innovation Leader</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold">⭐</div>
//                 <div className="mt-2">Best AI Startup 2023</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold">📚</div>
//                 <div className="mt-2">50+ Research Publications</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import { useEffect, useRef } from "react";
import { Users, Award, Lightbulb, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Team slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      bio: "PhD in Machine Learning from MIT. Former Google Brain researcher."
    },
    {
      name: "James Rodriguez",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "15+ years experience building scalable AI systems."
    },
    {
      name: "Priya Patel",
      role: "Director of Product",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      bio: "Product visionary with expertise in AI-driven UX."
    },
    {
      name: "Michael Johnson",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Published over 50 papers on neural networks and deep learning."
    }
  ];

  // Client logos
  const clientLogos = [
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent">
            About Panabotics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to democratize artificial intelligence, we bridge the gap between
            cutting-edge AI research and practical business solutions.
          </p>
        </motion.div>

        {/* Background floating elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-cyan-100 rounded-full opacity-30 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-1/4 w-20 h-20 bg-blue-100 rounded-full opacity-30 blur-xl"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of world-class engineers, data scientists, and AI researchers combines decades
              of experience with fresh innovation to deliver transformative technology solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in creating intelligent systems that not only automate processes but also
              learn, adapt, and evolve with your business needs. From startups to Fortune 500 companies,
              we've helped organizations harness the power of AI to drive growth, efficiency, and innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Panabotics, we believe AI should augment human intelligence, not replace it. Our solutions
              are designed to empower your team, enhance decision-making, and unlock new possibilities for your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "500+", label: "Projects Completed", bg: "bg-gradient-to-br from-cyan-500 to-blue-500" },
              { number: "50+", label: "Enterprise Clients", bg: "bg-gradient-to-br from-purple-500 to-indigo-500" },
              { number: "99%", label: "Client Satisfaction", bg: "bg-gradient-to-br from-green-500 to-teal-500" },
              { number: "24/7", label: "Support Available", bg: "bg-gradient-to-br from-orange-500 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                className={`${stat.bg} p-6 rounded-2xl shadow-lg text-center text-white`}
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl mb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-30 z-0"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Lightbulb, title: "Innovation First", description: "We push the boundaries of what's possible with AI." },
                { icon: Users, title: "Ethical AI", description: "We develop responsible AI systems that benefit society." },
                { icon: Award, title: "Excellence", description: "We maintain the highest standards in everything we do." },
                { icon: Globe, title: "Global Impact", description: "We believe AI can solve humanity's greatest challenges." }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class talent driving AI innovation forward
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-cyan-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with organizations across industries to deliver transformative AI solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-4"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] opacity-10"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industry Recognition</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our work has been recognized by leading organizations and publications worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "AI Excellence Award 2024",
                  description: "Recognized for breakthrough in natural language processing"
                },
                {
                  icon: "🚀",
                  title: "Tech Innovation Leader",
                  description: "Ranked #1 AI startup by TechCrunch"
                },
                {
                  icon: "⭐",
                  title: "Best AI Startup 2023",
                  description: "Awarded by AI Business Review"
                },
                {
                  icon: "📚",
                  title: "50+ Research Papers",
                  description: "Published in top-tier conferences"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss how Panabotics can help you harness the power of artificial intelligence to drive growth and innovation.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",  // white on hover
              color: "#0891b2"            // cyan-600 text on hover
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-cyan-500 hover:border-cyan-600"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;