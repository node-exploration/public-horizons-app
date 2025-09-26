import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>D&D Scheduler - Home (test push)</title>
        <meta
          name="description"
          content="Welcome to the D&D Scheduler. Organize your campaigns, schedule sessions, and manage your characters all in one place."
        />
      </Helmet>
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <img
            className="relative rounded-full h-48 w-48 md:h-64 md:w-64 object-cover border-4 border-background shadow-2xl"
            alt="A majestic dragon emblem for a D&D scheduling website"
            src="https://images.unsplash.com/photo-1675855547526-c24d4b60d268"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400"
        >
          Gather Your Party
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-muted-foreground md:text-lg"
        >
          Organize your campaigns, schedule sessions, and manage your characters
          all in one place. Your next legendary adventure starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link to="/campaigns">Manage Campaigns</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/schedule">View Schedule</Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
