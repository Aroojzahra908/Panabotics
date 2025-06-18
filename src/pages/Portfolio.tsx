// import { useState, useEffect } from "react";

// const Portfolio = () => {
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

//   const products = [
//     {
//       name: "VisionAI Suite",
//       description: "Complete computer vision platform for real-time object detection, tracking, and analysis.",
//       status: "Available",
//       statusClass: "status-available",
//       bgClass: "vision-bg",
//       tags: ["Python", "TensorFlow", "OpenCV", "React"],
//       code: `import cv2
// from vision_ai import detect

// # Real-time object detection
// objects = detect.analyze(frame)
// confidence = objects.confidence`
//     },
//     {
//       name: "DataMind Analytics",
//       description: "Advanced data analysis platform with AI-powered insights and predictive modeling capabilities.",
//       status: "Available",
//       statusClass: "status-available",
//       bgClass: "analytics-bg",
//       tags: ["Python", "Pandas", "Scikit-learn", "Plotly"],
//       type: "chart"
//     },
//     {
//       name: "AutoFlow Engine",
//       description: "Intelligent automation platform that streamlines business processes with AI-driven workflows.",
//       status: "Beta",
//       statusClass: "status-beta",
//       bgClass: "automation-bg",
//       tags: ["Node.js", "Docker", "MongoDB", "Vue.js"],
//       code: `workflow = AutoFlow()
// .trigger("email_received")
// .analyze_sentiment()
// .route_to_department()
// .send_response()
// .execute()`
//     },
//     {
//       name: "ChatAgent Pro",
//       description: "Advanced conversational AI agents with multi-language support and custom knowledge integration.",
//       status: "Coming Soon",
//       statusClass: "status-coming-soon",
//       bgClass: "chat-bg",
//       tags: ["PyTorch", "Transformers", "FastAPI", "Redis"],
//       type: "neural"
//     },
//     {
//       name: "PredictForward",
//       description: "Machine learning platform for forecasting trends and making data-driven business decisions.",
//       status: "Available",
//       statusClass: "status-available",
//       bgClass: "predict-bg",
//       tags: ["Python", "XGBoost", "Apache Spark", "Jupyter"],
//       type: "predict"
//     },
//     {
//       name: "SecureAI Guardian",
//       description: "AI-powered cybersecurity solution for threat detection and automated security response.",
//       status: "Beta",
//       statusClass: "status-beta",
//       bgClass: "security-bg",
//       tags: ["Python", "TensorFlow", "Kubernetes", "Elasticsearch"],
//       code: `security_scan = {
//   "threats_detected": 0,
//   "confidence": 0.97,
//   "status": "SECURE",
//   "ai_analysis": true
// }`
//     }
//   ];

//   const renderCardContent = (product: any) => {
//     if (product.code) {
//       return (
//         <div className="code-snippet">
//           <pre>{product.code}</pre>
//         </div>
//       );
//     }
    
//     if (product.type === "chart") {
//       return (
//         <div className="chart-visual">
//           <div className="chart-bars">
//             {[30, 45, 60, 35, 70, 50, 80].map((height, index) => (
//               <div key={index} className="bar" style={{ height: `${height}px` }}></div>
//             ))}
//           </div>
//           <div className="chart-label">AI-Powered Analytics</div>
//         </div>
//       );
//     }
    
//     if (product.type === "neural") {
//       return (
//         <div className="neural-network">
//           <div className="connection-lines"></div>
//           <div className="neural-layer">
//             <div className="neuron"></div>
//             <div className="neuron"></div>
//             <div className="neuron"></div>
//           </div>
//           <div className="neural-layer">
//             <div className="neuron"></div>
//             <div className="neuron"></div>
//             <div className="neuron"></div>
//             <div className="neuron"></div>
//           </div>
//           <div className="neural-layer">
//             <div className="neuron"></div>
//             <div className="neuron"></div>
//           </div>
//         </div>
//       );
//     }
    
//     if (product.type === "predict") {
//       return (
//         <div className="chart-visual">
//           <div className="predict-label">Predictive Modeling</div>
//           <div className="accuracy-bars">
//             <div className="accuracy-item">
//               <div className="accuracy-bar" style={{ width: '60px' }}></div>
//               <span>94% Accuracy</span>
//             </div>
//             <div className="accuracy-item">
//               <div className="accuracy-bar-green" style={{ width: '45px' }}></div>
//               <span>87% Precision</span>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
//             Our Products
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Innovative AI products designed to solve real-world problems and empower businesses with cutting-edge technology solutions.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <div key={index} className="product-card animate-on-scroll">
//               <div className={`card-image ${product.bgClass}`}>
//                 <div className={`status-badge ${product.statusClass}`}>
//                   {product.status}
//                 </div>
//                 <div className="image-content">
//                   {renderCardContent(product)}
//                 </div>
//               </div>
//               <div className="card-content">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-description">{product.description}</p>
//                 <div className="tech-tags">
//                   {product.tags.map((tag, tagIndex) => (
//                     <span key={tagIndex} className="tech-tag">{tag}</span>
//                   ))}
//                 </div>
//                 <div className="card-actions">
//                   <button className="btn btn-primary">Learn More</button>
//                   <button className="btn btn-secondary">
//                     {product.status === "Coming Soon" ? "Join Waitlist" : 
//                      product.status === "Beta" ? "Request Access" : "View Demo"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;













import React, { useState, useEffect } from 'react';
import { Eye, Brain, Zap, Shield, TrendingUp, MessageSquare, ChevronRight, Play, Download, ExternalLink, Star, Users, Clock, Award, CheckCircle, ArrowRight, Filter, Search } from "lucide-react";

const PanaboticsPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 8 },
    { id: 'computer-vision', name: 'Computer Vision', count: 2 },
    { id: 'analytics', name: 'Analytics', count: 2 },
    { id: 'automation', name: 'Automation', count: 2 },
    { id: 'security', name: 'Security', count: 1 },
    { id: 'conversational', name: 'Conversational AI', count: 1 }
  ];

  const products = [
    {
      id: 1,
      name: "VisionAI Suite",
      subtitle: "Advanced Computer Vision Platform",
      description: "Revolutionary computer vision platform enabling real-time object detection, facial recognition, and intelligent video analytics with 99.7% accuracy.",
      longDescription: "Our flagship computer vision platform combines state-of-the-art deep learning models with real-time processing capabilities. Trusted by Fortune 500 companies for security, retail analytics, and industrial automation.",
      status: "Available",
      statusColor: "green",
      category: "computer-vision",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      icon: Eye,
      tags: ["Python", "TensorFlow", "OpenCV", "CUDA", "React"],
      features: ["Real-time Processing", "99.7% Accuracy", "Multi-object Tracking", "Edge Computing Ready"],
      metrics: {
        accuracy: "99.7%",
        speed: "60 FPS",
        clients: "250+",
        uptime: "99.9%"
      },
      pricing: "Enterprise",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Reduced security incidents by 85% for major retail chain",
      testimonial: {
        text: "VisionAI Suite transformed our security operations completely.",
        author: "Sarah Chen, CTO at RetailTech",
        rating: 5
      }
    },
    {
      id: 2,
      name: "DataMind Analytics",
      subtitle: "AI-Powered Business Intelligence",
      description: "Comprehensive analytics platform that transforms raw data into actionable insights using advanced machine learning algorithms and predictive modeling.",
      longDescription: "Transform your business data into competitive advantage with our AI-powered analytics platform. Features automated insights, predictive modeling, and interactive dashboards.",
      status: "Available",
      statusColor: "green",
      category: "analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      icon: TrendingUp,
      tags: ["Python", "Pandas", "Scikit-learn", "D3.js", "Apache Spark"],
      features: ["Automated Insights", "Predictive Models", "Real-time Dashboards", "Custom Reports"],
      metrics: {
        accuracy: "94.2%",
        speed: "Real-time",
        clients: "180+",
        dataPoints: "10B+"
      },
      pricing: "From $99/month",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Increased revenue by 32% through predictive customer analytics",
      testimonial: {
        text: "DataMind helped us uncover insights we never knew existed.",
        author: "Michael Rodriguez, Data Director",
        rating: 5
      }
    },
    {
      id: 3,
      name: "AutoFlow Engine",
      subtitle: "Intelligent Process Automation",
      description: "Revolutionary automation platform that uses AI to streamline complex business workflows, reducing manual work by up to 90%.",
      longDescription: "Eliminate repetitive tasks and optimize workflows with our intelligent automation engine. Features drag-and-drop workflow builder, AI decision making, and seamless integrations.",
      status: "Beta",
      statusColor: "blue",
      category: "automation",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      icon: Zap,
      tags: ["Node.js", "Docker", "MongoDB", "Vue.js", "Kubernetes"],
      features: ["Drag & Drop Builder", "AI Decision Making", "300+ Integrations", "Real-time Monitoring"],
      metrics: {
        efficiency: "90%",
        timesSaved: "40hrs/week",
        clients: "120+",
        workflows: "5000+"
      },
      pricing: "Beta Access",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Automated 90% of document processing for financial services firm",
      testimonial: {
        text: "AutoFlow saved us 40 hours per week in manual processing.",
        author: "Lisa Wang, Operations Manager",
        rating: 5
      }
    },
    {
      id: 4,
      name: "ChatAgent Pro",
      subtitle: "Advanced Conversational AI",
      description: "Next-generation conversational AI platform with multi-language support, custom knowledge integration, and human-like interactions.",
      longDescription: "Create sophisticated AI assistants that understand context, maintain conversation flow, and provide personalized responses. Perfect for customer service, sales, and internal support.",
      status: "Coming Soon",
      statusColor: "orange",
      category: "conversational",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      icon: MessageSquare,
      tags: ["PyTorch", "Transformers", "FastAPI", "Redis", "NLP"],
      features: ["Multi-language Support", "Context Awareness", "Custom Knowledge", "Voice Integration"],
      metrics: {
        languages: "25+",
        accuracy: "96.8%",
        responseTime: "<100ms",
        satisfaction: "94%"
      },
      pricing: "Q2 2024",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "In development - Early access available",
      testimonial: {
        text: "Early preview shows incredible potential for customer service.",
        author: "James Thompson, Customer Success Lead",
        rating: 5
      }
    },
    {
      id: 5,
      name: "PredictForward",
      subtitle: "Machine Learning Forecasting",
      description: "Advanced forecasting platform that uses ensemble machine learning models to predict business trends with unprecedented accuracy.",
      longDescription: "Make data-driven decisions with confidence using our advanced forecasting platform. Combines multiple ML algorithms to deliver highly accurate predictions for sales, demand, and market trends.",
      status: "Available",
      statusColor: "green",
      category: "analytics",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      icon: TrendingUp,
      tags: ["Python", "XGBoost", "Apache Spark", "Jupyter", "TensorFlow"],
      features: ["Ensemble Models", "Time Series Analysis", "Uncertainty Quantification", "Automated Retraining"],
      metrics: {
        accuracy: "92.5%",
        predictions: "1M+",
        clients: "95+",
        industries: "12"
      },
      pricing: "From $199/month",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Improved demand forecasting accuracy by 45% for manufacturing client",
      testimonial: {
        text: "PredictForward's accuracy exceeded our expectations significantly.",
        author: "David Park, Supply Chain Director",
        rating: 5
      }
    },
    {
      id: 6,
      name: "SecureAI Guardian",
      subtitle: "AI-Powered Cybersecurity",
      description: "Cutting-edge cybersecurity platform that uses AI to detect, analyze, and respond to security threats in real-time.",
      longDescription: "Protect your organization with AI-powered threat detection and automated response. Our platform identifies zero-day attacks, insider threats, and advanced persistent threats.",
      status: "Beta",
      statusColor: "blue",
      category: "security",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
      icon: Shield,
      tags: ["Python", "TensorFlow", "Kubernetes", "Elasticsearch", "Kafka"],
      features: ["Real-time Monitoring", "Automated Response", "Threat Intelligence", "Compliance Reporting"],
      metrics: {
        detection: "99.3%",
        falsePositives: "<0.1%",
        responseTime: "30sec",
        coverage: "24/7"
      },
      pricing: "Enterprise",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Prevented 12 major security breaches in first month of deployment",
      testimonial: {
        text: "SecureAI Guardian is our first line of defense against cyber threats.",
        author: "Alex Kumar, CISO",
        rating: 5
      }
    },
    {
      id: 7,
      name: "NeuralOCR Pro",
      subtitle: "Intelligent Document Processing",
      description: "Advanced OCR and document understanding platform that extracts and processes information from any document type with AI precision.",
      longDescription: "Transform unstructured documents into structured data with our AI-powered OCR platform. Handles handwriting, complex layouts, and multiple languages with exceptional accuracy.",
      status: "Available",
      statusColor: "green",
      category: "computer-vision",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      icon: Eye,
      tags: ["Python", "PyTorch", "OpenCV", "Tesseract", "NLP"],
      features: ["Handwriting Recognition", "Layout Understanding", "Multi-language Support", "Data Extraction"],
      metrics: {
        accuracy: "98.7%",
        languages: "40+",
        documents: "10M+",
        clients: "150+"
      },
      pricing: "From $49/month",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Digitized 50,000 historical documents for government archive",
      testimonial: {
        text: "NeuralOCR Pro handles our most complex documents flawlessly.",
        author: "Maria Santos, Document Manager",
        rating: 5
      }
    },
    {
      id: 8,
      name: "SmartFlow RPA",
      subtitle: "Robotic Process Automation",
      description: "Intelligent RPA platform that combines traditional automation with AI capabilities for complex decision-making and adaptability.",
      longDescription: "Next-generation RPA that goes beyond simple task automation. Our platform can handle exceptions, make decisions, and adapt to changes in your business processes.",
      status: "Available",
      statusColor: "green",
      category: "automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      icon: Zap,
      tags: ["Python", "Selenium", "UiPath", "Azure", "Machine Learning"],
      features: ["Exception Handling", "Cognitive Automation", "Process Mining", "Scalable Deployment"],
      metrics: {
        efficiency: "95%",
        errorReduction: "99%",
        processes: "2000+",
        clients: "200+"
      },
      pricing: "From $79/month",
      demoUrl: "#",
      documentation: "#",
      caseStudy: "Automated invoice processing with 95% straight-through rate",
      testimonial: {
        text: "SmartFlow RPA transformed our back-office operations completely.",
        author: "Robert Chen, Operations Director",
        rating: 5
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const StatusBadge = ({ status, statusColor }) => {
    const colors = {
      green: 'bg-green-100 text-green-800 border-green-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colors[statusColor]}`}>
        <div className={`w-2 h-2 rounded-full mr-2 ${statusColor === 'green' ? 'bg-green-500' : statusColor === 'blue' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
        {status}
      </span>
    );
  };

  const ProductCard = ({ product, index }) => {
    const Icon = product.icon;
    
    return (
      <div 
        className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
        onMouseEnter={() => setHoveredCard(product.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <StatusBadge status={product.status} statusColor={product.statusColor} />
          </div>
          
          {/* Icon */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-cyan-500/90 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center text-white">
              <Play className="h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold">View Demo</p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-cyan-600 font-medium text-sm uppercase tracking-wide">
              {product.subtitle}
            </p>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          
          {/* Features */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <CheckCircle className="h-3 w-3 mr-1 text-cyan-500" />
                  {feature}
                </span>
              ))}
              {product.features.length > 3 && (
                <span className="inline-flex items-center px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium">
                  +{product.features.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
            {Object.entries(product.metrics).slice(0, 4).map(([key, value], idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-gray-900">{value.toString()}</div>
                <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mb-6 p-4 bg-cyan-50 rounded-2xl">
            <div className="flex items-center mb-2">
              {[...Array(product.testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-700 italic mb-2">"{product.testimonial.text}"</p>
            <p className="text-xs text-gray-600 font-medium">{product.testimonial.author}</p>
          </div>
          
          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <span className="flex items-center justify-center">
                {product.status === "Coming Soon" ? "Join Waitlist" : 
                 product.status === "Beta" ? "Request Access" : "Try Demo"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 hover:scale-105">
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-cyan-500 bg-clip-text text-transparent">
                Our AI Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered products, each designed to solve complex business challenges and drive innovation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-cyan-500" />
                  <span>500+ Enterprise Clients</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-400" />
                  <span>4.9/5 Customer Rating</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-cyan-500" />
                  <span>Industry Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, features, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Experience Our AI Solutions?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of companies already transforming their operations with Panabotics AI products. Get started with a personalized demo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  Schedule Demo
                  <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PanaboticsPortfolio;