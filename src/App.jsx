export default function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative animate-float">

        {/* stem */}
        <div className="w-2 h-72 bg-green-400 mx-auto rounded-full shadow-[0_0_20px_#4ade80]"></div>

        {/* leaves */}
        <div className="absolute bottom-32 -left-10 w-20 h-10 bg-green-300 rounded-full rotate-[-30deg] opacity-80 shadow-[0_0_20px_#86efac]"></div>

        <div className="absolute bottom-48 left-6 w-20 h-10 bg-green-300 rounded-full rotate-[30deg] opacity-80 shadow-[0_0_20px_#86efac]"></div>

        {/* flower */}
        <div className="absolute top-[-110px] left-1/2 -translate-x-1/2">
          
          <div className="relative w-44 h-44">

            <div className="petal rotate-0"></div>
            <div className="petal rotate-45"></div>
            <div className="petal rotate-90"></div>
            <div className="petal rotate-[135deg]"></div>
            <div className="petal rotate-[22deg]"></div>
            <div className="petal rotate-[67deg]"></div>
            <div className="petal rotate-[112deg]"></div>
            <div className="petal rotate-[157deg]"></div>

            {/* center */}
            <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-yellow-300 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_#fde047] border-4 border-yellow-100"></div>

          </div>
        </div>
      </div>

      <style>{`
        .petal {
          position: absolute;
          width: 70px;
          height: 140px;
          background: linear-gradient(to top, #f9a8d4, #fbcfe8);
          border-radius: 9999px;
          left: 50%;
          top: 50%;
          transform-origin: center bottom;
          opacity: 0.95;
          box-shadow: 0 0 25px #f9a8d4;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
          transform-origin: bottom center;
        }

        @keyframes float {
          0% {
            transform: rotate(-2deg) translateY(0px);
          }

          50% {
            transform: rotate(2deg) translateY(-10px);
          }

          100% {
            transform: rotate(-2deg) translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}