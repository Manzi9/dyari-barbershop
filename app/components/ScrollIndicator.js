"use client";

export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator-container">
      <div className="scroll-indicator">
        <span className="scroll-indicator-dot"></span>
      </div>
      <style jsx>{`
        .scroll-indicator-container {
          position: absolute;
          bottom: -25vh;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .scroll-indicator {
          width: 24px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          animation: bounce 2s infinite;
        }
        .scroll-indicator-dot {
          width: 8px;
          height: 8px;
          background-color: #fff;
          border-radius: 50%;
          margin-top: 4px;
          animation: dotBounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes dotBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(10px);
          }
          60% {
            transform: translateY(5px);
          }
        }
      `}</style>
    </div>
  );
}
