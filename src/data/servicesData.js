/* eslint-disable */
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer,  FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper,FaAppStore,FaExclamationCircle,FaMoneyCheckAlt,FaCloud,FaFileCode } from "react-icons/fa";

import { IoLogoFirebase } from "react-icons//io5";
import { MdDeveloperMode } from "react-icons/md";
import { TiSocialAtCircular } from "react-icons/ti";


 

export const servicesData = [
    // {
    //     id: 1,
    //     title: 'Marketing',
    //     icon: <BiShoppingBag/>
    // },
    {
        id: 2,
        title: "App deployments",
        icon: <FaAppStore  
         style={{color: "white"} }
        /> 
    },
    {
        id: 3,
        title: 'UI/UX design implementation',
        icon: <BsCodeSlash />
    },
    // {
    //     id: 4,
    //     title: 'Internet Research',
    //     icon: <FaInternetExplorer />
    // },
    // {
    //     id: 5,
    //     title: 'Tutoring',
    //     icon: <FaChalkboardTeacher />
    // },

    {
        id: 6,
        title: 'Third-party API integration',
        icon: <FaExclamationCircle />
    },
    {
        id: 7,
        title: 'Native module development',
        icon: <MdDeveloperMode />
    },
    {
        id: 8,
        title: 'Third-Party SDK Integration and Implementation',
        icon: <FaFileCode />
    }, 
    {
        id: 9,
        title: 'In-app purchases and subscription',
        icon: <FaMoneyCheckAlt />
    },
    {
        id: 10,
        title: 'OAuth Social Authentication Implementation', 
        icon: <TiSocialAtCircular/>
    },
    // {
    //     id: 11,
    //     title: 'Ebook Writing',
    //     icon: <FaTabletAlt />
    // },
    // {
    //     id: 12,
    //     title: 'Audio Transcription',
    //     icon: <AiFillAudio />
    // },
    {
        id: 13,
        title: 'Firebase integration',
        icon: <IoLogoFirebase />
    },
     {
        id: 12,
        title: 'Firebase Cloud Functions development',
        icon: <FaCloud />
    },

]

// Uncomment your required service.
// Couldn't find the required services? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
// You can also add on your own 😉.