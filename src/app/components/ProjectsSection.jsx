"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "it is an ecommerce app with React 18 , Strapi and Stripe. Here, user can search , select and buy any product also user can add any product in cart. user-friendly online stores with a focus on intuitive navigation and secure payment systems with stripe.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/my-store",
    previewUrl: "https://youtu.be/zHjQPNzuYUA?si=SOIAyJJ3MlFAG2tL",
  },
  {
    id: 2,
    title: "Stack-Overflow Website",
    description: "This is a Stack Overflow clone project built using the MERN stack. The project replicates the core functionalities of Stack Overflow, allowing users to ask questions, provide answers, upvote/downvote questions and answers, and comment on posts.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/stack-overflow",
    previewUrl: "https://youtu.be/VILu1HylkOM",
  },
 
  {
    id: 3,
    title: "Youtube",
    description: "it is a youtube clone with React js and web API. Incorporated a robust search functionality using keywords, enabling users to find videos of interest easily.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/akshay-kumar-singh/youtube-clone/tree/master",
    previewUrl: "https://youtu.be/vaIhxnyGBbI?si=5_f7TdXBH2kYQtA6",
  },
  {
    id: 4,
    title: "Unsplash-image-search",
    description: "This is a simple web app which is used to search your interested images.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/unsplash-image-search",
    previewUrl: "https://youtu.be/OcGin7tiVVI?si=BbN2GA6f66HgbaXO",
  },
  {
    id: 5,
    title: "Expense-Tracker",
    description: "Expanse Tracker: Manage, visualize, and analyze your financial expenditures with this open-source budget and expense tracking tool.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/expanse-tracker",
    previewUrl: "https://youtu.be/KU6FX5-GWkE",
  },
  {
    id: 6,
    title: "Zomato App",
    description: "it is a simple food delivery app with React js and Web Api",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/zomato",
    previewUrl: "https://youtu.be/Rz9qgUe2C6s",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
