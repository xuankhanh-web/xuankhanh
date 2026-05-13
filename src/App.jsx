export default function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative flower">
        
        {/* stem */}
        <div className="w-2 h-72 bg-cyan-400 mx-auto rounded-full animate-sway"></div>

        {/* leaves */}
        <div className="absolute bottom-32 -left-10 w-20 h-10 bg-cyan-300 rounded-full rotate-[-30deg] opacity-80"></div>

        <div className="absolute bottom-48 left-6 w-20 h-10 bg-cyan-300 rounded-full rotate-[30deg] opacity-80"></div>

        {/* petals */}
        <div className="absolute top-[-70px] left-1/2 -translate-x-1/2">
          
          <div className="relative w-32 h-32">
            
            <div className="petal rotate-0"></div>
            <div className="petal rotate-45"></div>
            <div className="petal rotate-90"></div>
            <div className="petal rotate-[135deg]"></div>

            {/* center */}
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_30px_#fde68a]"></div>

          </div>
        </div>

      </div>

      <style>{`
        .petal {
          position: absolute;
          width: 50px;
          height: 100px;
          background: #a5f3fc;
          border-radius: 9999px;
          left: 50%;
          top: 50%;
          transform-origin: center bottom;
          opacity: 0.9;
          box-shadow: 0 0 25px #67e8f9;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: bottom center;
        }

        @keyframes sway {
          0% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
          100% {
            transform: rotate(-3deg);
          }
        }
      `}</style>
    </div>
  )
}