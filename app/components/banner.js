export default function Banner() {
    return (
      <div className="container mx-auto relative h-full  flex items-center justify-center bg-black text-white py-12">
        {/* Fixed Size Container */}
        <div className="relative w-[300px] items-center sm:w-[1000px] h-[500px] bg-transparent">
          
          {/* Circle Behind */}
          <div
            className="absolute opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-100 sm:h-100 rounded-full"
            style={{
              background:
                'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
            }}
          ></div>
  
          {/* Circle in Front */}
          <div className="absolute top-[20%] left-[55%] sm:top-[10%] sm:left-[55%] transform -translate-x-1/2 translate-y-[-10px] w-60 h-60 sm:w-100 sm:h-100 rounded-full bg-transparent border-4 border-blue-600 opacity-50 shadow-[0_0_10px_#00e5ff, 0_0_20px_#00e5ff]"></div>


  
       
        </div>
           {/* Text in Front */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
           <p className="mt-4 text-xl sm:text-6xl w-[400px] sm:w-[700px]  font-[5]"    style={{ fontFamily: 'Poppins',lineHeight: '1.2'}} 
            >
  here's a teeny-weeny glimpse of our work. What's coming later is
</p>
<p className="sm:text-7xl text-2xl font-bold" style={{ fontFamily: 'Poppins', }}>
   <span className="text-red-500">even</span> greater
</p>

          </div>
      </div>
    );
  }
  