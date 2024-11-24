// src/components/Loader.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Loader.css"; // Ensure this CSS file is imported

const Loader = ({ onLoadingComplete }) => {
  const letters = "VaultChain".split("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 20; // Increment progress
        } else {
          clearInterval(interval); // Clear interval when complete
          onLoadingComplete(); // Notify that loading is complete
          return prev;
        }
      });
    }, 500); // Adjust interval time as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [onLoadingComplete]);

  return (
    <div className="loader-container">
      <div className="text-container">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="loader-letter"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }} // Adjusted for more pronounced bounce
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="progress-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "../styles/Loader.css"; // Ensure this CSS file is imported
// import FooterImage from "../assets/images/vaultChainImage-min.png";

// const Loader = ({ onLoadingComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

//   useEffect(() => {
//     // Preload the image
//     const img = new Image();
//     img.src = FooterImage;
//     img.onload = () => setImageLoaded(true); // Set imageLoaded to true when the image is loaded

//     // Simulate loading progress with a random number
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const randomIncrement = Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
//         const newProgress = Math.min(prev + randomIncrement, 100); // Ensure it doesn't exceed 100
//         if (newProgress >= 100) {
//           clearInterval(interval); // Clear interval when complete
//           onLoadingComplete(); // Notify that loading is complete
//         }
//         return newProgress;
//       });
//     }, 500); // Adjust interval time as needed

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [onLoadingComplete]);

//   return (
//     <div className="loader-container" style={{ backgroundColor: "black" }}>
//       <div className="image-container">
//         {imageLoaded ? ( // Conditionally render the image
//           <motion.img
//             src={FooterImage} // Use the imported image
//             alt="VaultChain Logo"
//             className="loader-image"
//             style={{ width: "400px", height: "auto" }} // Set size of the image
//             initial={{ y: 0 }}
//             animate={{ y: [0, -20, 0] }} // Adjusted for more pronounced bounce
//             transition={{
//               duration: 0.5,
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//           />
//         ) : (
//           <div className="loader-placeholder">Loading Image...</div> // Placeholder while loading
//         )}
//       </div>
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progress}%` }} />
//         <div className="progress-percentage">{progress}%</div>
//       </div>
//     </div>
//   );
// };

// export default Loader;
