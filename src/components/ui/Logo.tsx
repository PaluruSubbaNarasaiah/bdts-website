// import React from 'react';

// interface LogoProps {
//   className?: string;
// }

// const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
//   return (
//     <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="250" cy="250" r="220" stroke="url(#goldGradient)" strokeWidth="5" />
//       <path d="M150 150 H 300 Q 350 150 350 200 V 230 Q 350 280 300 280 H 150 V 150 Z" fill="#FF9D26" />
//       <path d="M150 300 H 300 Q 350 300 350 350 V 350 Q 350 400 300 400 H 150 V 300 Z" fill="#FF9D26" />
//       <path d="M150 280 V 300 H 300 Q 320 300 330 290 Q 340 280 340 260 V 240 Q 340 220 330 210 Q 320 200 300 200 H 150 V 280 Z" fill="#FF9D26" />
//       <path d="M100 150 V 400 H 150 V 150 H 100 Z" fill="#FF9D26" />
//       <ellipse cx="250" cy="250" rx="200" ry="100" stroke="url(#goldGradient)" strokeWidth="15" fill="none" transform="rotate(30, 250, 250)" />
//       <defs>
//         <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#FFCC26" />
//           <stop offset="100%" stopColor="#FF9D26" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };

// export default Logo;


// import React from 'react';

// interface LogoProps {
//   className?: string;
// }

// const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
//   return (
//     <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
//       {/* <!-- Outer Circular Border --> */}
//       <circle cx="250" cy="250" r="240" stroke="url(#goldGradient)" strokeWidth="3" fill="none" />

//       {/* <!-- Main Text Path --> */}
//       <path id="topTextPath" d="M100,250 a150,150 0 1,1 300,0" fill="none" />
//       <path id="bottomTextPath" d="M100,250 a150,150 0 1,0 300,0" fill="none" />

//       {/* <!-- Top Circular Text --> */}
//       <text font-size="12" font-family="Arial" fill="#FF9D26" letter-spacing="2">
//         <textPath href="#topTextPath" startOffset="7%">
//           BASEL DYNAMICS TECH SOLUTIONS PRIVATE LIMITED
//         </textPath>
//       </text>

//       {/* <!-- Bottom Circular Text --> */}
//       <text font-size="12" font-family="Arial" fill="#FF9D26" letter-spacing="2">
//         <textPath href="#bottomTextPath" startOffset="15%">
//           IT BUILT TO PERFECTION
//         </textPath>
//       </text>

//       {/* <!-- BDT Logo Text --> */}
//       <text x="150" y="270" font-size="80" font-weight="bold" font-family="Arial" fill="#FF9D26">BDT</text>

//       {/* <!-- Swoosh Path --> */}
//       <path d="M150 230 C50 100, 450 100, 350 290" stroke="url(#goldGradient)" stroke-width="12" fill="none" />

//       {/* <!-- Gradient Definition --> */}
//       <defs>
//         <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stop-color="#FFCC26" />
//           <stop offset="100%" stop-color="#FF9D26" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };

// export default Logo;


import React from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10 w-auto', 
  alt = 'Basel Dynamics Tech Solutions Private Limited Logo' 
}) => {
  return (
    <img 
      src="/logo.png" 
      alt={alt} 
      className={className}
      // Optional: Add these attributes for better performance and SEO
      width="auto"
      height="auto"
      loading="lazy"
    />
  );
};

export default Logo;