import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
          {time}|{place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="Alpha MLSA "
            time="Oct 2023 - Present"
            place="Micosoft"
            info="In my journey with MLSA (Microsoft Learn Student Ambassadors), achieving the ALPHA level is a major accomplishment. It means I've made significant progress, gained expertise, and actively contributed to the MLSA community. This milestone reflects my commitment and growth within the program. "
          />
          <Details
            type="Co Lead "
            time="Aug 2023 - Present "
            place="GDSC - National Forensic Sciences University Delhi"
            info="I am excited to be the Google Developer Student Clubs Lead at National Forensic Sciences University - Delhi. In this role, I will be responsible for starting and growing a community of students interested in Google developer technologies. I will also be organizing workshops and events to help students learn about these technologies and build their skills."
          />
          <Details
            type="Cybersecurity Intern (GPCSSI24)"
            time="Jun 2024 - Jul 2024"
            place="Haryana Police"
            info="- Participated in real-world cybercrime investigations, learning the latest methods and techniques.Gained expertise in Dark Web OSINT, digital forensics, and the modes of operation for various cybercrimes.Collaborated with central government agencies on cybersecurity initiatives.Developed and implemented a CDR Analysis System project to assist in criminal investigations.Explored cutting-edge technologies such as blockchain and quantum computing for cybersecurity applications.Acquired practical knowledge in bug hunting and cyber law enforcement"
          />
          <Details
            type="AI and Cloud Intern"
            time="Jun 2024 - Jul 2024 "
            place="Edunet Foundation"
            info="- IBM SkillsBuild & Cloud Platform: Leveraged the IBM SkillsBuild e-Learning Platform for industry-relevant courses in AI and Cloud technologies.Collaborative Project: Developed a predictive analysis project on TED Talk views using Python, IBM Watson, and IBM Cloud, working in a team with mentor guidance.Technical Skills Development: Utilized data analysis and machine learning techniques, cloud computing, and API integration to solve real-world challenges.Industry Tools: Gained proficiency in tools such as Jupyter Notebooks, IBM Watson Studio, and IBM Cloud services."
          />
          <Details
            type="Webacy Web3 Security Data Analytics Externship"
            time="Jun 2024 - Jul 2024 "
            place="Extern"
            info="Conducted detailed analysis and labeling of smart contract vulnerabilities, enhancing skills in data categorization and risk assessment.Validated peers' data labels to ensure accuracy and reliability of data sets.Performed frequency and correlation analysis of risk tags to identify the most prevalent vulnerabilities and their associations, gaining proficiency in data manipulation and statistical tools.Utilized unsupervised machine learning techniques for cluster analysis, discovering patterns and commonalities among smart contracts to profile risks effectively."
          />
          <Details
            type="InSIG'23 Fellow "
            time="Sep 2023 - Oct 2023 "
            place="Internet Society"
            info="InSIG is a distinguished platform that offers an in-depth learning experience in the field of Internet Governance. The program covers a wide range of global Internet Governance topics, regional perspectives, and India-specific insights, equipping participants with the knowledge and skills to actively engage in the global Internet Governance landscape."
          />
          <Details
            type="Cybersecurity Intern"
            time="May 2023 - Jun 2023 "
            place="Bhumi iTech Pvt. Ltd."
            info="I had the incredible opportunity to work on an engaging project focused on deploying the SOAR (Security Orchestration, Automation, and Response) framework as a part of the Blue Team."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
