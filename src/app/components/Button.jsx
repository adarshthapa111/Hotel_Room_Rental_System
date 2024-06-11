import { motion } from "framer-motion";

const Button = ({ buttonText }) => {
  return (
    <div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white customBg rounded-full font-david-libre p-4 text-sm shadow-lg shadow-gray-200"
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default Button;