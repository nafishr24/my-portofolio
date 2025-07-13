import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import { Button } from "@/components/ui/button";
import Animasi from "@/components/Animasi";

const HomeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Animasi delay={200}>
      <section 
        id="home"
        className="min-h-screen flex items-center pt-16 scroll-mt-16 bg-[#e7f4fe]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <h1 data-animate className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hello, I'm{" "}
                  <span className="font-bold text-[#0e1079]">
                    Moh. Nafis Husen R.
                  </span>
                </h1>
                
                <h2 data-animate className="text-xl md:text-3xl text-gray-600">
                  I'm a{" "}
                  <span className="font-bold text-[#0a6181]">
                    <Typewriter
                      words={['Math Tutor', 'Web Developer', 'Data Scientist']}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                      typeSpeed={120}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                
                <p data-animate className="text-lg text-gray-700 leading-relaxed">
                  Selamat datang di portofolio saya! Saya berkomitmen untuk menciptakan solusi cerdas melalui pemrograman dan menggali wawasan berharga dari data — siap berkontribusi nyata untuk mendukung pertumbuhan dan inovasi di perusahaan Anda.
                </p>

                {/* Expandable Content */}
                <div
                  data-animate
                  className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-4 pt-4">
                    <p className="text-gray-700">
                      Dengan latar belakang kuat di dunia data dan pemrograman, saya terbiasa membangun solusi digital yang efisien dan berbasis kebutuhan nyata. Sebagai web developer, saya merancang aplikasi yang responsif, bersih, dan mudah digunakan. Di sisi lain, sebagai data enthusiast, saya mengolah data mentah menjadi wawasan yang bernilai melalui analisis, visualisasi, dan machine learning — membantu mendukung pengambilan keputusan yang lebih cerdas. Setiap proyek saya dilandasi rasa ingin tahu, ketelitian, dan keinginan untuk menciptakan dampak nyata melalui teknologi.
                    </p>
                  </div>
                </div>

                <Button
                  data-animate
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold" 
                >
                  {isExpanded ? (
                    <>
                      Show Less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Click to More
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Picture */}
            <div data-animate className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-1 ring-white/30">
                  <img
                    src={`${import.meta.env.BASE_URL}images/p3.webp`}
                    alt="Profile"
                    className="w-full h-full object-cover animate-pulse"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Animasi>
  );
};

export default HomeSection;
