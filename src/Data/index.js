import ImgCardOne from '../images/card1.svg';
import ImgCardTwo from '../images/card2.svg';
import ImgCardThree from '../images/card3.svg';
import ImgCardFour from '../images/card4.svg';
import ImgCardFive from '../images/card5.svg';
import ImgCardSix from '../images/card6.svg';
import ContributeImg  from '../images/contributeImg.svg';
import AboutImg from '../images/applyImg.svg';



export const Data = {
  theme: {
    dark: false
  },
  home: {
    hero: {
      heading: "LEVEL UP YOUR TECHNICAL AND SOFT SKILLS",
      text:
        "A 12-weeks program that helps new developers gain real-world experience by building real projects in a collaborative remote environment",
    },
    goals: {
      text:
        "Help new developers gain real world experience Connect tech firms with talented developers Help NGOs and small businesses to build their online identity Senior engineers (mentors) to improve their leadership skills",
    },
    works: {
      text:
        "We define the goal project, introduce you to the team, and start assigning tasks. project and tasks are well designed to help you gain practical experience with professional ongoing mentorship sessions on a daily basis",
      cards: {
        cardOne: {
          img: ImgCardOne,
          title: "Apply",
          desc:
            "Fill in the application form with a career path of your interest",
          num: "01",
        },
        cardTwo: {
          img: ImgCardTwo,
          title: "Take-home challenge",
          desc:
            "Receive a challenge from m3ntorship which determine whether your current skills matches our minimum criteria",
          num: "02",
        },
        cardThree: {
          img: ImgCardThree,
          title: "Prepare",
          desc:
            "Go through our onboarding and prerequisites list, familiarize yourself with our process/stack",
          num: "03",
        },
        cardFour: {
          img: ImgCardFour,
          title: "Build real projects with a team",
          desc:
            "Gain experience by overcoming real problems that developers face in collaboration with a team",
          num: "04",
        },
        cardFive: {
          img: ImgCardFive,
          title: "Succeed",
          desc:
            "Stick till the end, finish the project and boost your CV with your achievement",
          num: "05",
        },
        cardSix: {
          img: ImgCardSix,
          title: "Become a Mentor",
          desc:
            "If you are interested, give back to the community by mentoring new cohorts in m3ntorship and level-up your leadership skills",
          num: "06",
        },
      },
    },
    cohorts: {
      text:
        "Checkout our Cohorts and find out more about projects they worked on and challenges they faced",
      cards: {
        cardOne: {
          title: "COHORT 0",
          desc:
            "A Group of Junior Developers who graduated from M3ntorship at summer 2020 .",
          btn: "VIEW COHORT",
        },
        cardTwo: {
          title: "JOIN NEXT COHORT",
          desc:
            "tired of endless tutorials ? working alone all the time? Join our next cohort!",
          btn: "APPLY",
        },
      },
    },
    projects: {
      desc:
        "These are some of the latest projects made by our mentees to gain hands-on experience. All projects done in M3ntorship are real projects with real presence that can be found online and accessed by real users.",
      cards: [
        {
          heading: "GHIRAS",
          desc:
            "The goal of Ghiras charity site is to showcase their services, raise funds for their causes, and announce their upcoming events and volunteering opportunities.",
        },
        {
          heading: "M3NTROSHIP",
          desc:
            "This is the current m3ntorship.com site. Technical recruiting is challenging. M3ntorship will help tech companies find the talents by tracking developers' level of proficiency through their progress.",
        },
        {
          heading: "FITNESS",
          desc:
            "Given the PSD of the site ,we translated it to a static website using HTML 5,CSS3 skills.",
        },
      ],
    },
    sponsor: {
      heading: "OUR SPONSORS",
      desc:
        "We need sponsers to help us paying our infrastructure cost, if you or your company can provide infrastructure for us, we would love to talk to you. we also accept donations in any kind.",
    },
    contribute: {
      heading: "WANT TO CONTRIBUTE?",
      desc:
        "have hands-on experience or knowledge that you want to share? apply now as a Mentor!",
      img: ContributeImg,
    },
  },
  about: {
    heading: "M3NTORSHIP",
    smallp: "LEVEL-UP YOUR TECH SKILLS",
    text1:
      "The idea behind m3ntorship is to give an equal opportunity to students or newcomers in Web development to work in a team to build real production ready projects.",
    text2:
      "Technical recruiting is challenging. M3ntorship will help tech companies find the talents by tracking developers level of proficiency through their progress. we are happy to hear any feedback, please contact us at info[at]m3ntorship.com",
  },
  contact: {
    heading: "contact us",
    text1:
      "We would love to hear from you, whether you report any bug, giving us feedback or requesting a new feature in our website/initiative.",
    text2: "Send us an email to info[at]m3ntorship.com",
  },
  sponsors: {
    heading: "Interested to sponser us?",
    text1:
      "We need sponsers to help us paying our infrastructure cost, if your company can provide infrastructure for us, we would love to talk to you. we also accept donations in any kind.",
    text2:
      "Currently, we are working on our payment and donation method, for now, feel free to email us info[at]m3ntorship.com",
  },
  apply: {
    header: {
      heading: "WANT TO JOIN US.",
      desc:
        "Interested in Joining us? Choose whether to apply as a mentor or as a mentee below. Answer a few questions and we will be in touch soon.",
      img: AboutImg,
    },
  },
};