import goals from "@images/about/about-goals.webp";
import hobbies from "@images/about/about-hobbies.webp";
import presentation from "@images/about/about-presentation.webp";
import mercedes from "@images/experiences/experience-mercedes.webp";
import mshimizu from "@images/experiences/experience-mshimizu.webp";
import tolle from "@images/experiences/experience-tolle.webp";
import profile from "@images/general/profile-pic.webp";
import calc from "@images/projects/normal/project-calc.webp";
import kitsu from "@images/projects/normal/project-kitsu.webp";
import thumbCalc from "@images/projects/thumbnail/project-thumb-calc.webp";
import thumbKitsu from "@images/projects/thumbnail/project-thumb-kitsu.webp";
import backend from "@images/skills/skills-back.webp";
import frontend from "@images/skills/skills-front.webp";
import tools from "@images/skills/skills-tools.webp";

import MongoDB from "@assets/icons/mongodb.svg";
import MySQL from "@assets/icons/mysql.svg";
import Typescript from "@assets/icons/typescript.svg";
import BrazilFlag from "@assets/svgs/flag-brazil.svg";
import EnglishFlag from "@assets/svgs/flag-english.svg";
import {
  RiArrowDownLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowUpLine,
  RiBrainAi3Fill,
  RiBriefcase4Fill,
  RiCellphoneFill,
  RiCloseFill,
  RiCss3Fill,
  RiFigmaFill,
  RiFileUserFill,
  RiFoldersFill,
  RiFootballFill,
  RiGitForkFill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavaFill,
  RiJavascriptFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiShieldUserFill,
  RiStarFill,
  RiTailwindCssFill,
  RiTargetFill,
  RiVercelFill,
} from "@remixicon/react";

export const IMAGES = {
  profile,
  about: {
    goals,
    hobbies,
    presentation,
  },
  experiences: {
    mercedes,
    mshimizu,
    tolle,
  },
  projects: {
    normal: {
      calc,
      kitsu,
    },
    thumbnails: {
      thumbCalc,
      thumbKitsu,
    },
    skills: {
      backend,
      frontend,
      tools,
    },
  },
};

export const ICONS_SVGS = {
  flags: {
    brazil: BrazilFlag,
    english: EnglishFlag,
  },
  icons: {
    common: {
      close: RiCloseFill,
      hobbies: RiFootballFill,
      mail: RiMailFill,
      presentation: RiShieldUserFill,
      star: RiStarFill,
      goals: RiTargetFill,
    },
    arrows: {
      normal_down: RiArrowDownLine,
      caret_down: RiArrowDownSLine,
      normal_up: RiArrowUpLine,
      caret_left: RiArrowLeftSLine,
      caret_right: RiArrowRightSLine,
    },
    sections: {
      about: RiFileUserFill,
      experiences: RiBriefcase4Fill,
      skills: RiBrainAi3Fill,
      projects: RiFoldersFill,
      contacts: RiCellphoneFill,
    },
    skills: {
      css: RiCss3Fill,
      figma: RiFigmaFill,
      git: RiGitForkFill,
      html: RiHtml5Fill,
      java: RiJavaFill,
      javascript: RiJavascriptFill,
      nextjs: RiNextjsFill,
      nodejs: RiNodejsFill,
      mongo_db: MongoDB,
      mysql: MySQL,
      reactjs: RiReactjsFill,
      tailwind_css: RiTailwindCssFill,
      typescript: Typescript,
      vercel: RiVercelFill,
    },
    brands: {
      linkedin: RiLinkedinBoxFill,
      github: RiGithubFill,
    },
  },
};
