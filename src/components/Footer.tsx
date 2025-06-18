
// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// const Footer = () => {
//   const footerSections = [
//     {
//       title: "Services",
//       links: [
//         { name: "Artificial Intelligence", href: "/services" },
//         { name: "Machine Learning", href: "/services" },
//         { name: "Computer Vision", href: "/services" },
//         { name: "Data Analysis", href: "/services" },
//         { name: "Automation", href: "/services" },
//         { name: "Intelligent Agents", href: "/services" }
//       ]
//     },
//     {
//       title: "Industries",
//       links: [
//         { name: "Healthcare", href: "/portfolio" },
//         { name: "Finance", href: "/portfolio" },
//         { name: "Manufacturing", href: "/portfolio" },
//         { name: "Retail", href: "/portfolio" },
//         { name: "Transportation", href: "/portfolio" },
//         { name: "Education", href: "/portfolio" }
//       ]
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About Us", href: "/about" },
//         { name: "Our Team", href: "/about" },
//         { name: "Careers", href: "/careers" },
//         { name: "Case Studies", href: "/portfolio" },
//         { name: "Blog", href: "/blog" },
//         { name: "News", href: "/blog" }
//       ]
//     },
//     {
//       title: "Support",
//       links: [
//         { name: "Documentation", href: "/contact" },
//         { name: "API Reference", href: "/contact" },
//         { name: "Help Center", href: "/contact" },
//         { name: "Contact Support", href: "/contact" },
//         { name: "Privacy Policy", href: "/contact" },
//         { name: "Terms of Service", href: "/contact" }
//       ]
//     }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Instagram, href: "#", label: "Instagram" }
//   ];

//   return (
//     <footer className="bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Footer Content */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
//           {/* Brand Section */}
//           <div className="lg:col-span-2">
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//               <div className="text-2xl font-bold">
//                 <span className="text-cyan-400">Pana</span>
//                 <span className="text-gray-300">botics</span>
//               </div>
//             </Link>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Transforming businesses through innovative AI and ML solutions. 
//               We're your partners in building the future of intelligent technology.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 group"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           {footerSections.map((section) => (
//             <div key={section.title}>
//               <h3 className="text-lg font-semibold mb-4 text-cyan-400">
//                 {section.title}
//               </h3>
//               <ul className="space-y-2">
//                 {section.links.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       to={link.href}
//                       className="text-gray-300 hover:text-white transition-colors duration-200"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-300 text-sm">
//             © 2025 Panabotics. All rights reserved. | Designed with ❤️ for the future of AI
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
//               Privacy Policy
//             </Link>
//             <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
//               Terms of Service
//             </Link>
//             <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
//               Cookie Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Artificial Intelligence", href: "/services" },
        { name: "Machine Learning", href: "/services" },
        { name: "Computer Vision", href: "/services" },
        { name: "Data Analysis", href: "/services" },
        { name: "Automation", href: "/services" },
        { name: "Intelligent Agents", href: "/services" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "/portfolio" },
        { name: "Finance", href: "/portfolio" },
        { name: "Manufacturing", href: "/portfolio" },
        { name: "Retail", href: "/portfolio" },
        { name: "Transportation", href: "/portfolio" },
        { name: "Education", href: "/portfolio" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Case Studies", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "News", href: "/blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "/contact" },
        { name: "API Reference", href: "/contact" },
        { name: "Help Center", href: "/contact" },
        { name: "Contact Support", href: "/contact" },
        { name: "Privacy Policy", href: "/contact" },
        { name: "Terms of Service", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-tr from-[#0f172a] via-[#0e7490] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-cyan-400">Pana</span>
                <span className="text-gray-200">botics</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative AI and ML solutions. 
              We're your partners in building the future of intelligent technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-cyan-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © 2025 Panabotics. All rights reserved. | Designed with ❤️ for the future of AI
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
