import { FocusCards } from "./ui/focus-cards";


export function FocusCardsDemo() {
  const cards = [
    {
      title: "Mathematics",
      src: "https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=2048x2048&w=is&k=20&c=xYaA5zzoTksaUA4A_qZYkZkEAzH4VmuIwLB7_EB0838=",
      description:"Strengthen your skills in Algebra, Geometry, Trigonometry, Statistics, and Probability. This course provides in-depth explanations, problem-solving techniques, and exam preparation tips.",
      price:"$18.88"
    },
    {
      title: "Science",
      src: "https://media.istockphoto.com/id/1169711473/photo/ai-concept-communication-network.jpg?s=2048x2048&w=is&k=20&c=u926r8Fzr-FX6S4VS0xj3roomihQblprpn1zS_goYHU=",
      description:"Explore Physics, Chemistry, and Biology with practical examples and experiments. This course covers concepts like chemical reactions, laws of motion, and life processes in detail.",
      price:"$280"
    },
    {
      title: "English",
      src: "https://media.istockphoto.com/id/1288019626/vector/english-language-learning-concept-vector.jpg?s=2048x2048&w=is&k=20&c=KPUuqSlluDFD3p8VLAsA1fmItOEZoqVT4_7ukxqGk3E=",
      description:"Enhance your language and literature skills. Focus on grammar, writing, and comprehension, along with in-depth study of the prescribed literature texts.",
      price:"$180"
    },
    {
      title: "Social Science",
      src: "https://media.istockphoto.com/id/172213848/photo/magnified-america.jpg?s=2048x2048&w=is&k=20&c=btx4FmGWrHcL_Gby3we9b9Mo2KMN_OtEzkwQPVZTlnY=",
      description:"Understand History, Geography, Civics, and Economics. This course offers detailed insights into the past, the physical world, governance, and economic systems.",
      price:"$140"
    },
    {
      title: "Hindi",
      src: "https://media.istockphoto.com/id/953423154/photo/hindi-language-and-culture-concept.jpg?s=2048x2048&w=is&k=20&c=-1hum7LfDypn5CgBRKLtXn7x8GYx0GUvJmI15IjTKNQ=",
      description:"Master Hindi language and literature, including grammar, essay writing, and an analysis of the syllabus's prose and poetry sections.",
      price:"$110"
    },
    {
      title: "Computer Applications",
      src: "https://media.istockphoto.com/id/1175176375/photo/mid-adult-male-teacher-teaching-the-lecture-in-computer-lab.jpg?s=2048x2048&w=is&k=20&c=EW7FOEQDHt2E-p8SLnp8P7EbwpgAn2lYhyZKFAeB-Og=",
      description:"Learn the basics of programming, web development, and database management. This course is aligned with the Class 10 curriculum and emphasizes practical applications.",
      price:"$160"
    },
    
      
  ];

  return <FocusCards cards={cards} />;
}

