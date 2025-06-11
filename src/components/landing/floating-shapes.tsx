export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Red circles */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-red-100 opacity-20 animate-float"></div>
      <div
        className="absolute bottom-1/3 left-[5%] w-48 h-48 rounded-full bg-red-200 opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Rings */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 border-2 border-red-100 rounded-full opacity-20 animate-spin-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-red-200 rounded-full opacity-10 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      ></div>

      {/* Dots pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[30%] left-[30%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[40%] left-[40%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[60%] left-[60%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[70%] left-[70%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[80%] left-[80%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[90%] left-[90%] w-2 h-2 bg-red-500 rounded-full"></div>

        <div className="absolute top-[10%] right-[10%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[40%] right-[40%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[50%] right-[50%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[60%] right-[60%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[70%] right-[70%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[80%] right-[80%] w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-[90%] right-[90%] w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
    </div>
  )
}
