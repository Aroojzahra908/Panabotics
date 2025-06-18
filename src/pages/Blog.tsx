import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, Heart, Eye, MessageCircle, ArrowLeft, Share2, Bookmark } from "lucide-react";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  useEffect(() => {
    // Auto-slide for featured posts
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleLike = (index, e) => {
    e?.stopPropagation();
    const newLiked = new Set(likedPosts);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedPosts(newLiked);
  };

  const toggleBookmark = (index, e) => {
    e?.stopPropagation();
    const newBookmarked = new Set(bookmarkedPosts);
    if (newBookmarked.has(index)) {
      newBookmarked.delete(index);
    } else {
      newBookmarked.add(index);
    }
    setBookmarkedPosts(newBookmarked);
  };

  const featuredPosts = [
    {
      title: "Breakthrough in Neural Network Architecture",
      excerpt: "Our research team has developed a novel neural network architecture that achieves unprecedented accuracy in complex pattern recognition tasks.",
      author: "Dr. Alex Martinez",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      comments: 42,
      views: "3.5k",
      likes: 156,
      fullContent: `
        <h2>Revolutionary Neural Network Architecture</h2>
        <p>In a groundbreaking development, our research team has successfully created a novel neural network architecture that represents a significant leap forward in artificial intelligence capabilities.</p>
        
        <h3>The Innovation</h3>
        <p>Our new architecture, dubbed "NeuroFlow", combines the best aspects of transformer networks with novel attention mechanisms that we've developed over the past two years. The result is a system that can process complex patterns with unprecedented accuracy.</p>
        
        <h3>Key Achievements</h3>
        <ul>
          <li>95% accuracy improvement in pattern recognition tasks</li>
          <li>60% reduction in computational requirements</li>
          <li>Enhanced ability to handle multi-modal data inputs</li>
          <li>Improved interpretability of decision-making processes</li>
        </ul>
        
        <h3>Real-World Applications</h3>
        <p>This breakthrough has immediate applications in healthcare diagnostics, autonomous vehicle navigation, and natural language understanding. We're already seeing promising results in early trials with medical imaging analysis.</p>
        
        <h3>What's Next?</h3>
        <p>Our team is now working on scaling this architecture for enterprise applications. We expect to release a public research paper within the next month, followed by open-source implementations.</p>
        
        <p>This represents just the beginning of what we believe will be a new era in artificial intelligence capabilities.</p>
      `
    },
    {
      title: "AI Revolution in Creative Industries",
      excerpt: "Discover how artificial intelligence is transforming art, music, and creative content generation across multiple industries.",
      author: "Sarah Johnson",
      date: "March 18, 2024",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop",
      fullContent: `
        <h2>AI's Creative Renaissance</h2>
        <p>The creative industries are experiencing an unprecedented transformation as artificial intelligence tools become more sophisticated and accessible to artists, musicians, and content creators worldwide.</p>
        
        <h3>Digital Art Revolution</h3>
        <p>AI-powered art generation tools have democratized digital art creation, allowing anyone to produce stunning visuals with simple text prompts. Artists are now collaborating with AI to push creative boundaries.</p>
        
        <h3>Music Composition</h3>
        <p>AI composers are creating original music across all genres, from classical symphonies to modern pop hits. These tools are becoming valuable collaborators rather than replacements for human creativity.</p>
        
        <h3>Content Creation</h3>
        <p>Video production, graphic design, and marketing content creation have been revolutionized by AI tools that can generate, edit, and optimize content at scale.</p>
        
        <h3>The Human Touch</h3>
        <p>Despite AI's capabilities, human creativity remains irreplaceable. The most successful creative projects combine AI efficiency with human insight and emotional intelligence.</p>
      `
    },
    {
      title: "Quantum Computing Meets AI",
      excerpt: "Exploring the intersection of quantum computing and artificial intelligence for next-generation problem solving.",
      author: "Dr. Michael Chen",
      date: "March 16, 2024",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
      fullContent: `
        <h2>The Quantum AI Frontier</h2>
        <p>The convergence of quantum computing and artificial intelligence represents one of the most exciting frontiers in modern technology, promising to solve problems that are currently intractable.</p>
        
        <h3>Quantum Advantage</h3>
        <p>Quantum computers can process certain types of calculations exponentially faster than classical computers, making them ideal for complex AI algorithms that require massive parallel processing.</p>
        
        <h3>Current Applications</h3>
        <p>Early quantum AI applications include drug discovery, financial modeling, and optimization problems that would take classical computers years to solve.</p>
        
        <h3>Challenges Ahead</h3>
        <p>Quantum decoherence, error rates, and the need for extremely low temperatures remain significant challenges that researchers are actively working to overcome.</p>
        
        <h3>Future Possibilities</h3>
        <p>As quantum computers become more stable and accessible, we expect to see breakthroughs in climate modeling, cryptography, and artificial general intelligence.</p>
      `
    }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Healthcare",
      excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment with real-world case studies.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      category: "Healthcare",
      readTime: "5 min read",
      views: "2.4k",
      likes: 124,
      comments: 23,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
      fullContent: `
        <h2>AI Transforming Healthcare</h2>
        <p>Artificial Intelligence is revolutionizing healthcare in ways we never imagined possible. From early disease detection to personalized treatment plans, AI is becoming an indispensable tool for medical professionals.</p>
        
        <h3>Diagnostic Revolution</h3>
        <p>AI-powered diagnostic tools can now detect diseases like cancer, diabetes, and heart conditions with accuracy rates exceeding human specialists in many cases. Medical imaging analysis has particularly benefited from deep learning algorithms.</p>
        
        <h3>Personalized Medicine</h3>
        <p>Machine learning algorithms analyze patient data to create personalized treatment plans, considering genetic factors, lifestyle, and medical history to optimize outcomes.</p>
        
        <h3>Drug Discovery</h3>
        <p>AI is accelerating drug discovery processes that traditionally took decades, reducing development time from 10-15 years to potentially 3-5 years for certain treatments.</p>
        
        <h3>Challenges and Ethics</h3>
        <p>Despite the promise, healthcare AI faces challenges including data privacy, algorithmic bias, and the need for regulatory approval. Ensuring AI systems are transparent and accountable remains crucial.</p>
        
        <h3>Looking Forward</h3>
        <p>The future of AI in healthcare includes predictive health monitoring, AI-powered surgical robots, and virtual health assistants that could make healthcare more accessible globally.</p>
      `
    },
    {
      title: "Machine Learning in Financial Services",
      excerpt: "How ML algorithms are transforming fraud detection and risk assessment in banking with cutting-edge techniques.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "Finance",
      readTime: "7 min read",
      views: "1.8k",
      likes: 98,
      comments: 15,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      fullContent: `
        <h2>ML Revolution in Finance</h2>
        <p>Machine Learning is transforming the financial services industry, from fraud detection to algorithmic trading, creating more secure and efficient financial systems.</p>
        
        <h3>Fraud Detection</h3>
        <p>Advanced ML algorithms can detect fraudulent transactions in real-time by analyzing patterns and anomalies that would be impossible for humans to identify at scale.</p>
        
        <h3>Risk Assessment</h3>
        <p>ML models evaluate creditworthiness and investment risks by processing vast amounts of data, including traditional financial metrics and alternative data sources.</p>
        
        <h3>Algorithmic Trading</h3>
        <p>High-frequency trading algorithms use ML to make split-second decisions, analyzing market conditions and executing trades faster than human traders ever could.</p>
        
        <h3>Customer Experience</h3>
        <p>Chatbots and virtual assistants powered by natural language processing are revolutionizing customer service in banking, providing 24/7 support and personalized recommendations.</p>
      `
    },
    {
      title: "Computer Vision Applications in Manufacturing",
      excerpt: "Real-world applications of computer vision for quality control and automation in modern manufacturing.",
      author: "Dr. James Wilson",
      date: "March 5, 2024",
      category: "Manufacturing",
      readTime: "6 min read",
      views: "3.1k",
      likes: 156,
      comments: 31,
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=300&fit=crop",
      fullContent: `
        <h2>Computer Vision in Manufacturing</h2>
        <p>Computer vision technology is revolutionizing manufacturing processes, enabling unprecedented levels of quality control and automation efficiency.</p>
        
        <h3>Quality Control Revolution</h3>
        <p>AI-powered visual inspection systems can detect defects smaller than the human eye can see, ensuring product quality while reducing waste and improving efficiency.</p>
        
        <h3>Predictive Maintenance</h3>
        <p>Computer vision systems monitor equipment health in real-time, predicting failures before they occur and scheduling maintenance to minimize downtime.</p>
        
        <h3>Safety Enhancement</h3>
        <p>Vision systems monitor workplace safety, detecting when workers enter dangerous areas or fail to wear proper protective equipment.</p>
        
        <h3>Process Optimization</h3>
        <p>Real-time analysis of manufacturing processes allows for immediate adjustments to optimize efficiency and reduce waste.</p>
      `
    },
    {
      title: "Natural Language Processing Breakthroughs",
      excerpt: "Latest advances in NLP and their impact on conversational AI systems and human-computer interaction.",
      author: "Emily Zhang",
      date: "February 28, 2024",
      category: "Technology",
      readTime: "8 min read",
      views: "2.7k",
      likes: 203,
      comments: 45,
      image: "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D?w=600&h=300&fit=crop",
      fullContent: `
        <h2>NLP Breakthroughs Reshaping AI</h2>
        <p>Natural Language Processing has reached new heights with transformer architectures and large language models, fundamentally changing how computers understand and generate human language.</p>
        
        <h3>Transformer Revolution</h3>
        <p>The attention mechanism in transformer models has enabled AI systems to understand context and nuance in ways that were previously impossible.</p>
        
        <h3>Multimodal Understanding</h3>
        <p>Modern NLP systems can now process text alongside images, audio, and video, creating more comprehensive understanding of content.</p>
        
        <h3>Real-world Applications</h3>
        <p>From customer service chatbots to content generation and translation services, NLP breakthroughs are being deployed across industries.</p>
        
        <h3>Ethical Considerations</h3>
        <p>As NLP systems become more powerful, questions about bias, misinformation, and responsible AI development become increasingly important.</p>
      `
    },
    {
      title: "Ethical AI Development",
      excerpt: "Building responsible AI systems that benefit society and respect privacy while maintaining innovation.",
      author: "Dr. Robert Kim",
      date: "February 20, 2024",
      category: "Ethics",
      readTime: "10 min read",
      views: "1.9k",
      likes: 87,
      comments: 28,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      fullContent: `
        <h2>Building Ethical AI Systems</h2>
        <p>As AI becomes more prevalent in society, the importance of developing ethical, transparent, and accountable AI systems cannot be overstated.</p>
        
        <h3>Core Principles</h3>
        <p>Ethical AI development centers around fairness, transparency, accountability, and respect for human autonomy and privacy.</p>
        
        <h3>Bias Mitigation</h3>
        <p>Identifying and reducing algorithmic bias requires diverse teams, comprehensive testing, and ongoing monitoring of AI system outputs.</p>
        
        <h3>Privacy Protection</h3>
        <p>Implementing privacy-preserving techniques like differential privacy and federated learning helps protect user data while enabling AI innovation.</p>
        
        <h3>Regulatory Landscape</h3>
        <p>Governments worldwide are developing AI governance frameworks to ensure responsible development and deployment of AI technologies.</p>
      `
    },
    {
      title: "AI-Powered Automation Success Stories",
      excerpt: "Case studies of successful AI implementations across various industries with measurable results.",
      author: "Lisa Thompson",
      date: "February 15, 2024",
      category: "Case Studies",
      readTime: "9 min read",
      views: "2.2k",
      likes: 134,
      comments: 19,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      fullContent: `
        <h2>AI Automation Success Stories</h2>
        <p>Real-world case studies demonstrate how AI-powered automation is delivering tangible benefits across diverse industries.</p>
        
        <h3>Retail Revolution</h3>
        <p>Major retailers have implemented AI for inventory management, demand forecasting, and personalized recommendations, resulting in 15-30% increases in efficiency.</p>
        
        <h3>Manufacturing Excellence</h3>
        <p>Automotive manufacturers using AI for predictive maintenance have reduced downtime by up to 50% while improving product quality.</p>
        
        <h3>Healthcare Transformation</h3>
        <p>Hospitals using AI for patient flow optimization have reduced wait times by 40% and improved patient satisfaction scores significantly.</p>
        
        <h3>Lessons Learned</h3>
        <p>Successful AI implementations require clear objectives, quality data, stakeholder buy-in, and continuous monitoring and improvement.</p>
      `
    }
  ];

  if (selectedBlog !== null) {
    const blog = selectedBlog < 0 ? featuredPosts[Math.abs(selectedBlog) - 1] : blogPosts[selectedBlog];

    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setSelectedBlog(null)}
            className="flex items-center gap-2 mb-8 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-cyan-600 font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </button>

          {/* Blog Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-8">
            <div className="relative h-96 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-4xl font-bold mb-4 leading-tight">{blog.title}</h1>
                <div className="flex items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Actions */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button
                    onClick={(e) => toggleLike(selectedBlog, e)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 transition-all duration-300 ${likedPosts.has(selectedBlog)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-400 hover:text-red-400'
                        }`}
                    />
                    <span className="text-gray-600 font-medium">
                      {(blog.likes || 0) + (likedPosts.has(selectedBlog) ? 1 : 0)}
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 font-medium">{blog.comments || 0}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 font-medium">{blog.views || "1.2k"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleBookmark(selectedBlog, e)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Bookmark
                      className={`h-5 w-5 transition-all duration-300 ${bookmarkedPosts.has(selectedBlog)
                        ? 'text-cyan-500 fill-cyan-500'
                        : 'text-gray-400 hover:text-cyan-400'
                        }`}
                    />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-8">
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.fullContent }}
              />
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.slice(0, 2).map((post, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedBlog(index)}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 rounded-xl object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">
            AI Insights Blog
          </h1> */}
          <div className="pb-5">  {/* or mb-6 instead of mb-4 on h1 */}
            <h1 className="text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">
              AI Insights Blog
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and breakthroughs in artificial intelligence
            and machine learning from our team of experts.
          </p>
        </div>

        {/* Featured Post Slider */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96 overflow-hidden">
              <img
                src={featuredPosts[currentSlide].image}
                alt={featuredPosts[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

              <div className="absolute inset-0 p-8 flex items-center">
                <div className="max-w-2xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-bold">
                      ⭐ Featured
                    </span>
                    <div className="flex space-x-2">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold mb-4 leading-tight">
                    {featuredPosts[currentSlide].title}
                  </h2>
                  <p className="text-xl mb-6 text-white/90 leading-relaxed">
                    {featuredPosts[currentSlide].excerpt}
                  </p>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{featuredPosts[currentSlide].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{featuredPosts[currentSlide].date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedBlog(-(currentSlide + 1))}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    Read Full Article
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              onClick={() => setSelectedBlog(index)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-cyan-600 rounded-full text-xs font-bold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button
                    onClick={(e) => toggleBookmark(index, e)}
                    className="p-2 bg-white/90 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
                  >
                    <Bookmark
                      className={`h-4 w-4 transition-colors ${bookmarkedPosts.has(index) ? 'text-cyan-500 fill-cyan-500' : 'text-gray-600'
                        }`}
                    />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-500 text-sm font-medium">{post.readTime}</span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Eye className="h-4 w-4" />
                    {post.views}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => toggleLike(index, e)}
                      className="flex items-center gap-1 hover:scale-110 transition-transform"
                    >
                      <Heart
                        className={`h-4 w-4 transition-colors ${likedPosts.has(index)
                          ? 'text-red-500 fill-red-500'
                          : 'text-gray-400 hover:text-red-400'
                          }`}
                      />
                      <span className="text-sm text-gray-500">
                        {post.likes + (likedPosts.has(index) ? 1 : 0)}
                      </span>
                    </button>

                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="relative mt-20">
          <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&auto=format"
                alt="Newsletter background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Stay in the AI Loop</h3>
              <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
                Get the latest AI insights, research breakthroughs, and industry trends delivered straight to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                />
                <button className="px-8 py-4 bg-white text-cyan-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                  Subscribe Now
                </button>
              </div>
              <p className="text-sm text-cyan-100 mt-4">
                Join 10,000+ AI professionals and enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Blog;
