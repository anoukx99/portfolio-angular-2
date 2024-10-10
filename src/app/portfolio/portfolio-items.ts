export const PortfolioItems = [
    {
        name: "Content management system",
        description: `I have worked at creating a cloud platform to manage content on digital screens. The screens are connected to WiFi and using the 
        cloud application, it is possible to change the content on the screens. The front-end is build using Nuxt, Vue, Primevue and TailwindCSS. One of the 
        challenges was that the customer wanted configurable roles with its own permissions. Based on the permissions, certain pages and buttons were shown or 
        hidden. The content management system is currently being tested with end users.`,
        imgUrl: 'cms/cms1.PNG',
        expertise: ['Vue.js', 'Tailwind CSS', "UI Design", "HTML", "CSS", "Javascript", "Figma", "Docker", "Gitlab"],
        tags: ["Front-end"],
        weblink: "CMS",
        slides: [
            { id: 0,
                src: "/images/cms/cms1.PNG",
                subtitle: "Page to change content on the screen."
            },
        ]
    },
    {
        name: "FAT PLAYER UI",
        description: `The FAT Player is a raspberry pi media player. The configuration of the media player is done using a XML file. 
        However, editing an XML file is not a userfriendly method to configure the media player. Therefore, I was asked to design a user interface. 
        I have created different mock-ups and discussed these with the company. After refining the UI, I made an application to configure the media player. 
        The application converts the graphical representation of the media into a working XML file which can be uploaded to the media player.`,
        imgUrl: 'fatplayer/fatplayer.png',
        expertise: ['XML', "Github", "UI Design", "HTML", "CSS", "Javascript"],
        tags: ["Front-end"],
        weblink: "fat-player",
        slides: [
            {   id: 0,
                src: "/images/fatplayer/fatplayer.png",
                subtitle: "The final design for the UI to configure the FAT player."
            },
            {   id: 1,
                src: "/images/fatplayer/GUI1.png",
                subtitle: "One of the first designs for the UI."
            },
            {   id: 1,
                src: "/images/fatplayer/GUI2.png",
                subtitle: "One of the first designs for the UI."
            },
        ]
    },
    {
        name: "Skeuvel.nl",
        description: `Skeuvel is a student iceskating associated located in Enschede. The website of Skeuvel was very old, so it was ready to be updated. 
        I have worked on the frontend of the website. One of the challenges of the website is there is a big change in members of Skeuvel each year, considering
        that the every member has a membership for approximately 3 years. Moreover, the board of Skeuvel changes every year, which means that each year another person
        is responsible for maintaining the website. Therefore, it was important to make a website which was super easy to maintain. Therefore, it was chosen to make
        the website in Wordpress combined with Elementor. This way, editing the website can be done in a very visual way.`,
        imgUrl: 'skeuvel/skeuvel1.PNG',
        expertise: ['Web design', "UI Design", "Wordpress", "Elementor"],
        tags: ["Front-end"],
        weblink: 'skeuvel',
        slides: [
            { id: 0,
                src: "/images/skeuvel/skeuvel1.PNG",
                subtitle: "Front page of the Skeuvel website."
            },
        ]
    },
    {
        name: "Wearable to improve Inline Skating posture",
        description: `For my graduation project for Interaction Technology, I have developed a wearable which improves posture during inline skating using
        haptic feedback. During the graduation project, I have research where, when and how haptic feedback should be given to an inline skater. Next,
        I created a prototype which an inline skater could wear and which gives feedback based on the posture of the skaters. This prototype was tested
        with multiple inline skaters to see whether the use of such a wearable has a positive influence on the posture. `,
        imgUrl: 'inline-skating/skating1.jpg',
        expertise: ['Arduino', 'Haptic Feedback', 'IMU', "UX Design", "ESP32", "C++"],
        tags: ["Hardware"],
        weblink: "inline-skating",
        slides: [
            { id: 0,
                src: "/images/inline-skating/total.jpeg",
                subtitle: "The wearable worn by one of the skaters."
            },
            { id: 0,
                src: "/images/inline-skating/knee-measuring.jpeg",
                subtitle: "On the legs, two inertial measurement units were placed to measure the knee angle."
            },
            { id: 0,
                src: "/images/inline-skating/motors-back.jpeg",
                subtitle: "Vibration motors on the back provide feedback to the skater."
            },
        ]
    },
    {
        name: "OMNI: A reaction game for visually impaired people",
        description: `Together with a project group I have worked on the designed OMNI. The aim of the project was to research a target group and to develop
        a sport or game activity for this target group. We have interviewed visually impaired people on their needs when playing a game. Based on these
        interviews, we realised that there a no reaction games for visually impaired people. This is why we came up with OMNI. OMNI is a reaction game 
        based on vibrations. It works with 5 different cups which are connected to a Hub. This Hub sends signals to the cup, which can vibrate. Based
        on the vibrations, the users can play games. I have continued working on OMNI during my graduation project for Creative Technology by interviewing
        a therapist at Visio to get more insights in the target group. Based on these insights, I have developed new game modes for OMNI.`,
        imgUrl: 'omni/omni1.JPG',
        expertise: ['Arduino', 'Haptic Feedback', "User research", "Human Centered Design", "C++"],
        tags: ["Hardware"],
        weblink: "omni",
        slides: [
            { id: 0,
                src: "/images/omni/omni1.JPG",
                subtitle: "Omni consists out of 4 vibrating cups connected to a hub."
            },
            { id: 1,
              src: "/images/omni/omni_ddw.jpg",
              subtitle: "At Dutch Design Week 2018, we got the chance to display OMNI! We got a lot of positive reactions."
            },
            { id: 1,
                src: "/images/omni/omni.jpg",
                subtitle: "A visitor of Dutch Design Week playing with the game."
            },
        ]
    },

    {
        name: "Portfolio",
        description: `To display my work, I have created the portfolio you are currently on. This was written in Angular combined with Tailwind CSS. 
        If you are excited about my portfolio or have feedback, contact me!`,
        imgUrl: 'portfolio/portfolio1.png',
        expertise: ['Angular', 'Tailwind CSS', "HTML", "CSS", "Javascript"],
        tags: ['Front-end'],
        weblink: 'angular-portfolio',
        slides: [
            { id: 0,
                src: "/images/portfolio/portfolio1.png",
                subtitle: "A screenshot of my portfolio!"
            },
        ]
    },
]