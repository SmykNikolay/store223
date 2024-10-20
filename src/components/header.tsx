import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between ">
      <span>Главная</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        defaultValue={"minimalizm-studio"}
      >
        minimalizm-studio{" "}
      </motion.button>
      <div className="flex gap-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          defaultValue={"minimalizm-studio"}
        >
          <span>Войти</span>{" "}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          defaultValue={"minimalizm-studio"}
        >
          <span>Корзина</span>{" "}
        </motion.button>
      </div>
    </header>
  );
}
