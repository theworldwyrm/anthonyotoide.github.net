import { Briefcase, Lightbulb, Wrench, Codepen, FileText} from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    
<div className="min-h-screen bg-gray-50">
  <section id="home" className="min-h-screen flex items-center justify-center p-4 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("src/engineering-background-5u1vmh4f67lgz4uf.jpg")' }}>
    <div className="relative">
          <div
            onClick={() => scrollToSection('projects')}
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-48 h-32 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
          >
            <Codepen className="w-8 h-8 text-gray-700 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-gray-800">Personal Projects</h3>
           {/** */}
          </div>
      {/* Top Left Profile Picture */}
      <div className="fixed top-6 left-6 z-50">
        <img
          src="src/profile.png"
          alt="Anthony Otoide"
          className="w-20 h-22 rounded-full border-2 border-gray-300 shadow-md object-cover hover:scale-105 transition-transform"
        />
      </div>
          <div
            onClick={() => scrollToSection('skills')}
            className="absolute top-1/2 -translate-y-1/2 -left-56 w-48 h-32 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
          >
            <Wrench className="w-8 h-8 text-gray-700 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-gray-800">Skills</h3>
          </div>

          <div className="w-96 bg-white border-2 border-gray-300 rounded-xl shadow-xl flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Anthony Otoide</h1>
            <p className="text-lg text-gray-600 mb-4">Computer Engineering Student</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Motivated computer engineering student focused on embedded systems,
              remote sensing, and real world problem solving.
            </p>

<div className="flex gap-4"> <a href="src/Anthony_Otoide_Co_op_Resume (1).pdf" 
className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition" >
   <FileText className="w-4 h-4" /> Resume  </a>
            </div>
          </div>
          <div
            onClick={() => scrollToSection('experience')}
            className="absolute top-1/2 -translate-y-1/2 -right-56 w-48 h-32 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
          >
            <Briefcase className="w-8 h-8 text-gray-700 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-gray-800">My Experience</h3>
          </div>

          <div
            onClick={() => scrollToSection('interests')}
            className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-48 h-32 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
          >
            <Lightbulb className="w-8 h-8 text-gray-700 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-gray-800">Interests & Direction</h3>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Personal Projects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chess Engine</h3>
              <p className="text-gray-600 mb-2">A full working and functional chess engine with move validation and game state management</p>
              <p className="text-sm text-gray-500">Pygame • Chess • Tkinter • Python</p>
              <img src="src/piotr-makowski-27LH_0jXKYI-unsplash.jpg" alt="Chess Engine" width="128" height="128"></img>
            </div>
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Water Quality Monitor</h3>
              <p className="text-gray-600 mb-2">A low cost smart water quality monitoring system that measures PH value, Water Turbidity and temperature</p>
              <p className="text-sm text-gray-500">Embedded Systems • C • Python • esp32</p>
              <img src="src/61RQtPMUFDL._AC_SX679_.jpg" alt="water pollution tester" width="128" height="128"></img>
            </div>
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Clock on FPGA</h3>
              <p className="text-gray-600 mb-2"> Designed and implemented a full digital clock using Verilog, including hours, minutes, and seconds, with FSM-based timing logic and clock division.<br/></p>
              <p className="text-sm text-gray-500">Verilog • FPGA</p>
              <img src="src/OIP (1).webp" alt="Clock" width="128" height="128"></img>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('home')}
            className="mt-12 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mirco-Controllers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ESP 32s</li>
                <li>• Arduino</li>
                <li>• State Management</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Software and Coding</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Python</li>
                <li>• Arduino IDE, FreeRTOS</li>
                <li>• C++</li>
                <li>• Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools & Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• GitHub</li>
                <li>• VS Code</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Problem Solving</li>
                <li>• Team Collaboration</li>
                <li>• Technical Communication</li>
                <li>• Continuous Learning</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('home')}
            className="mt-12 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">My Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">Summer Researcher</h3>
                <span className="text-sm text-gray-500">2025</span>
              </div>
              <p className="text-gray-600 mb-2">University of Manitoba</p>
              <p className="text-gray-600">•
Assisted a Master’s student with hands-on research experiments in precision agriculture.<br/>
• Participated in fieldwork to collect data and observe the practical applications of engineering technologies in agriculture.<br/>
• Operated advanced equipment including Ground Penetrating Radar (GPR) and contributed to the construction of a weather station.<br/>
• Conducted temperature testing of sensors to assess performance in cold environments.<br/>
• Learned and applied new software tools for real-time operating system scheduling (FreeRTOS).<br/>
• Delivered a presentation on a literature review related to optical sensing technologies in agriculture.
• Attended technical workshops led by graduate students to deepen understanding of research methodologies and sensor systems.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">Undergraduate Poster Presentation</h3>
                <span className="text-sm text-gray-500">2025</span>
              </div>
              <p className="text-gray-600 mb-2">University of Manitoba – Undergraduate Research Poster Competition</p>
              <p className="text-gray-600">• Presented a research poster summarizing the "Optical Sensors: Applications in Remote Sensing" project.<br/>
    • Explained research methodology, sensor applications, and findings to faculty, peers, and judges.<br/>
    • Highlighted technical skills in data analysis, sensor integration, and environmental monitoring while engaging with the academic community.<br/></p>
            </div>

<div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">Programming Tutor</h3>
                <span className="text-sm text-gray-500"></span>
              </div>
              <p className="text-gray-600 mb-2">Complete Computers</p>
              <p className="text-gray-600">•
Taught Python programming to children aged 8–10, covering foundational topics such as syntax and introductory coding concepts.<br/>
•
Demonstrated patience and adaptability while working with young learners in a dynamic teaching environment.<br/>
• Reinforced personal programming fundamentals while fostering curiosity and enthusiasm for technology in children.<br/></p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">Python Developer</h3>
                <span className="text-sm text-gray-500"></span>
              </div>
              <p className="text-gray-600 mb-2">FreeLance</p>
              <p className="text-gray-600">•
Worked as a freelance Python programmer, assisting clients in Nigeria with project completion and meeting strict deadlines.<br/>
•
I applied classroom knowledge to real-world programming challenges and honed practical coding skills.<br/>
•
Developed time management abilities by consistently delivering high-quality work within tight schedules.</p>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('home')}
            className="mt-12 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </section>

      <section id="interests" className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Interests & Direction</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Current Focus</h3>
              <p className="text-gray-600 leading-relaxed">
Embedded systems, IoT applications, and remote sensing technologies. <br/> Developing projects involving microcontrollers for environmental monitoring, real-time data collection, and data-driven analysis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Future Goals</h3>
              <p className="text-gray-600 leading-relaxed">
               Aspiring to work on impactful research and engineering projects, contribute to open source,
          mentor students, and take on technical leadership roles that combine hands-on development with strategic vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Beyond Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy playing table tennis, chess, and soccer. Passionate about science, video games, and learning new technologies.
          Actively involved in community and student engagement, and continuously exploring emerging trends in computing and electronics.
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('home')}
            className="mt-12 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </section>
      
      <section className="w-full bg-gray-900 text-gray-300 py-6 flex flex-col items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Anthony Otoide. All rights reserved.</p>
        <p className="text-sm">Designed and built by me using React and Tailwind CSS.</p>
      </section>
    </div>
  );
}

export default App;
