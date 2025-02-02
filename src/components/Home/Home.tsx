import React from 'react';
import Type from './Type';
import '../../App.css';
import { motion } from 'framer-motion';
import officeBg from '../../assets/office-bg.png';

function Home() {
    return (
        <section className="min-h-screen w-full bg-[url('./assets/home-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
            <div className="flex flex-col md:flex-row w-full items-center justify-center">
                {/* ส่วนข้อความ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="heading pb-4 text-3xl md:text-4xl font-bold text-white">
                            Hi There!{" "}
                            <span role="img" aria-labelledby="wave" className="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h1 className="heading-name text-4xl md:text-5xl font-semibold text-white">
                            I'M <strong className="main-name text-5xl font-extrabold text-red-500"> Nattawat Saetung</strong>
                        </h1>

                        <div className="py-6 md:py-12 text-2xl md:text-3xl font-oswald font-extrabold text-white">
                            <Type />
                        </div>
                    </div>
                </motion.div>

                {/* ส่วนรูปภาพ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex items-center justify-center mt-8 md:mt-0">
                    <img src={officeBg} className="object-contain w-full max-w-sm md:max-w-md" alt="Office background" />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
