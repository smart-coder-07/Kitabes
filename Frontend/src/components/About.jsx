import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-2xl max-h-screen-xl container mx-auto md:px-32 px-4 ">
      <h1 className="pt-28 text-3xl items-center justify-center text-center font-bold">
        About Us
      </h1>
      <center>
        <img
          className="w-26 h-40 mt-10 object-cover object-center  inline-block border-2 border-gray-200 bg-gray-100"
          src="profile.jpg"
        />
      </center>
      <p className="pt-8 pb-8 items-center justify-center text-center">
        My name is Atul Kumar Tiwari, and I am a dedicated junior software
        developer currently pursuing a Master of Computer Application (MCA)
        degree at Technocrats Institute of Technology, located in Bhopal, Madhya
        Pradesh. My journey in the realm of technology has been driven by an
        insatiable curiosity and a fervent passion for creating impactful
        software solutions. As a software enthusiast, I have cultivated a
        diverse skill set that encompasses various programming languages and
        frameworks, equipping me with the tools necessary to tackle a wide array
        of projects. Among the languages I command are C, Python, HTML, CSS, and
        JavaScript. These languages form the cornerstone of modern software
        development, and my proficiency in each allows me to craft robust and
        efficient applications tailored to specific needs. Moreover, I have
        delved into the realm of frameworks, understanding their pivotal role in
        accelerating development and streamlining processes. In particular, I
        possess hands-on experience with Python-based frameworks such as Django,
        which facilitates rapid development of web applications, and React.js, a
        JavaScript library renowned for its ability to build dynamic user
        interfaces. Additionally, I am adept at utilizing frontend tools like
        Bootstrap and Tailwind CSS to enhance the visual appeal and
        functionality of web projects. My familiarity with Node.js enables me to
        leverage its asynchronous, event-driven architecture for building
        scalable network applications. In tandem with my proficiency in
        programming languages and frameworks, I have cultivated a foundational
        understanding of databases, recognizing their significance in storing
        and managing data effectively. While I am well-versed in traditional SQL
        databases, I also have experience working with MongoDB, a popular NoSQL
        database known for its flexibility and scalability. This breadth of
        knowledge enables me to design database schemas, execute complex
        queries, and optimize database performance to ensure seamless
        application functionality. Beyond technical expertise, I pride myself on
        being a proactive and collaborative team member, capable of thriving in
        fast-paced environments. My tenure as a competitive coder has honed my
        problem-solving skills and instilled in me a keen eye for detail. I am
        constantly seeking new challenges and opportunities to broaden my
        horizons, whether through personal projects or collaborative ventures.
        As I embark on the next phase of my career journey, I am eager to apply
        my skills and knowledge to real-world projects that make a tangible
        impact. I am actively seeking full-time opportunities within
        forward-thinking organizations that value innovation and foster a
        culture of continuous learning and growth. If you'd like to get in touch
        or explore potential collaborations, please feel free to reach out to me
        via email at{" "}
        <span className="text-xl text-pink-500">atultiwarikhj@gmail.com</span>{" "}
        or connect with me directly at{" "}
        <span className="text-xl text-pink-500">+91 7225912707</span>. I look
        forward to the prospect of working together and contributing to the
        advancement of technology. Here is my{" "}
        <a
          className="underline text-xl text-blue-500"
          href="https://drive.google.com/file/d/1qiGwDhF23IoDZG4R5pbdhaE1PzGWIzNu/view?pli=1"
          target="_blank"
        >
          resume link
        </a>{" "}
        Thank you for considering my candidacy.
      </p>
    </div>
  );
};

export default About;
