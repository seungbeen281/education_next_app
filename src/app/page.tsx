"use client";

import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Users, 
  MapPin, 
  Shield, 
  Trophy, 
  Star, 
  ChevronDown,
  ChevronUp,
  Download,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin as LocationIcon,
  Clock,
  Heart,
  Target,
  Zap,
  Award
} from "lucide-react";

const RunningCrewLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "12,847", label: "가입자 수" },
    { number: "234", label: "활성 크루" },
    { number: "1,203", label: "이번 주 러닝" },
    { number: "98%", label: "만족도" }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "쉬운 크루 매칭",
      description: "취향과 실력에 맞는 크루를 찾아드려요"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "다양한 코스",
      description: "동네부터 마라톤까지, 원하는 코스로"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "안전한 만남",
      description: "검증된 멤버들과 안심하고 달려요"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "성장 기록",
      description: "함께 달린 기록을 남기고 성취감을 느껴요"
    }
  ];

  const popularCrews = [
    {
      name: "한강 새벽러닝단",
      description: "새벽 6시 한강에서 만나는 건강한 시작",
      members: 45,
      tags: ["새벽", "한강", "초보환영"],
      image: "🌅"
    },
    {
      name: "종로 직장인 러닝",
      description: "직장인들을 위한 저녁 러닝 모임",
      members: 32,
      tags: ["직장인", "저녁", "5km"],
      image: "🏃‍♂️"
    },
    {
      name: "초보 환영 5km",
      description: "러닝 초보자들을 위한 친근한 모임",
      members: 28,
      tags: ["초보", "친근", "5km"],
      image: "🌱"
    },
    {
      name: "마라톤 도전단",
      description: "마라톤 완주를 목표로 하는 도전자들",
      members: 18,
      tags: ["마라톤", "도전", "장거리"],
      image: "🏅"
    }
  ];

  const testimonials = [
    {
      name: "김민수",
      role: "회사원, 29세",
      content: "혼자서는 절대 못했을 5K 완주를 러닝크루 덕분에 달성했습니다. 함께 달리니까 정말 즐거워요!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "이지은",
      role: "디자이너, 26세",
      content: "운동 초보였는데 크루원들이 정말 친절하게 도와주셔서 지금은 러닝이 취미가 되었어요!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "박준호",
      role: "대학생, 23세",
      content: "마라톤 완주가 꿈이었는데 러닝크루 덕분에 꿈을 이룰 수 있었습니다. 감사합니다!",
      rating: 5,
      avatar: "👨‍🎓"
    }
  ];

  const faqs = [
    {
      question: "러닝 초보자도 참여할 수 있나요?",
      answer: "네, 물론입니다! 러닝크루는 초보자부터 고급자까지 모든 수준의 러너를 환영합니다. 각자의 수준에 맞는 크루를 찾아드리고, 초보자 전용 프로그램도 운영하고 있어요."
    },
    {
      question: "크루 활동은 언제 하나요?",
      answer: "각 크루마다 다른 시간대에 활동합니다. 새벽 러닝, 저녁 러닝, 주말 러닝 등 다양한 시간대의 크루가 있어서 본인 일정에 맞는 크루를 선택할 수 있어요."
    },
    {
      question: "비용은 얼마나 드나요?",
      answer: "크루 활동은 대부분 무료입니다. 일부 특별 프로그램이나 개인 코칭의 경우 별도 비용이 있을 수 있지만, 기본적인 크루 활동은 무료로 참여하실 수 있어요."
    },
    {
      question: "안전은 어떻게 보장되나요?",
      answer: "모든 크루원은 신원 확인을 거치며, 안전한 코스에서 활동합니다. 응급상황에 대비한 안전 교육도 정기적으로 실시하고 있어요."
    },
    {
      question: "크루를 직접 만들 수도 있나요?",
      answer: "네, 가능합니다! 본인이 크루 리더가 되어 새로운 크루를 만들 수 있어요. 크루 만들기 가이드와 지원을 제공합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏃</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  RunTogether
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => handleScrollToSection("home")}
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  크루찾기
                </button>
                <button
                  onClick={() => handleScrollToSection("features")}
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  모집하기
                </button>
                <button
                  onClick={() => handleScrollToSection("testimonials")}
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  후기
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  로그인
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
                aria-label="메뉴 열기"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
                <button
                  onClick={() => handleScrollToSection("home")}
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  크루찾기
                </button>
                <button
                  onClick={() => handleScrollToSection("features")}
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  모집하기
                </button>
                <button
                  onClick={() => handleScrollToSection("testimonials")}
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  후기
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full text-base font-medium w-full text-center mt-2">
                  로그인
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              함께 달리면<br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                더 멀리 갈 수 있어요
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              당신의 러닝 메이트를 찾아보세요.<br />
              혼자서는 어려운 러닝, 함께라면 즐겁습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => handleScrollToSection("popular-crews")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                크루 찾기
              </button>
              <button
                onClick={() => handleScrollToSection("features")}
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                크루 만들기
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              RunTogether만의 특별한 장점
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              러닝크루와 함께라면 더 즐겁고 안전하게 달릴 수 있어요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Crews Section */}
      <section id="popular-crews" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              인기 러닝크루
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              지금 가장 활발한 러닝크루들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCrews.map((crew, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-6xl">
                  {crew.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{crew.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{crew.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-orange-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{crew.members}명</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {crew.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              더 많은 크루 보기
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              회원들의 생생한 후기
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              RunTogether와 함께한 회원들의 진솔한 이야기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex text-orange-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                모바일에서 더 편리하게
              </h2>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                RunTogether 앱으로 언제 어디서나 크루 활동을 관리하고<br />
                새로운 러닝 메이트를 만나보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </button>
                <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문들
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              러닝크루에 대해 궁금한 점들을 확인해보세요
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => handleFAQToggle(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openFAQ === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className={`text-gray-600 leading-relaxed transition-all duration-300 delay-100 ${
                      openFAQ === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-2 opacity-0'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏃</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  RunTogether
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                함께 달리는 즐거움을 경험하세요.<br />
                당신의 러닝 메이트를 찾아보세요.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">서비스</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">크루 찾기</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">크루 만들기</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">러닝 코스</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">개인 코칭</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">고객지원</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">이용 가이드</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">문의하기</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">고객센터</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>&copy; 2024 RunTogether. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-orange-400 transition-colors">이용약관</a>
                <a href="#" className="hover:text-orange-400 transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-orange-400 transition-colors">사업자정보</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RunningCrewLanding;