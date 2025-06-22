// Hàm trả về dữ liệu member detail (thay cho fetch hoặc import JSON)
const memberDetail = {
  name: "Phan Luân",
  role: "MEMBER",
  avatar: "",
  email: "bancongngheSLS@gmail.com",
  facebook: "facebook.com/bancongnghe.it.uh",
  skills: [
    "HTML", "CSS", "Frontend Developer", "JavaScript", "UI/UX Design", "Figma", "User"
  ],
  about: "Hi, my name is Phan Luan, and I'm a passionate software developer with a strong interest in building efficient and user-friendly web applications. I specialize in frontend development using HTML, CSS, JavaScript, and React, and I enjoy turning complex problems into clean, functional designs. I'm always eager to learn new technologies and improve my skills to create impactful digital experiences.",
  projects: [
    {
      thumbnail: "/ShoppingCard/thumbnail.jpg",
      projectName: "PROJECT 1",
      projectDes: "This project focuses on creating a simple, effective solution to enhance user interaction. Our goal is to deliver a smooth and satisfying experience for all users.",
      numberStar: 999,
      numberView: 999,
      startDate: "02/01/2025",
      finishDate: "27/03/2025",
      technologies: ["HTML", "CSS", "JS", "REACT"]
    },
    {
      thumbnail: "/ShoppingCard/thumbnail.jpg",
      projectName: "PROJECT 2",
      projectDes: "A different project for testing horizontal scroll. Try clicking the arrows to see this card move.",
      numberStar: 888,
      numberView: 555,
      startDate: "03/2025",
      finishDate: "06/2025",
      technologies: ["HTML", "CSS", "JS"]
    },
    {
      thumbnail: "/ShoppingCard/thumbnail.jpg",
      projectName: "PROJECT 3",
      projectDes: "Another project card for demo. You can scroll to see this card as well.",
      numberStar: 777,
      numberView: 333,
      startDate: "07/2025",
      finishDate: "12/2025",
      technologies: ["REACT", "JS"]
    },
    {
      thumbnail: "/ShoppingCard/thumbnail.jpg",
      projectName: "PROJECT 4",
      projectDes: "Extra project for horizontal scroll test.",
      numberStar: 666,
      numberView: 222,
      startDate: "01/2026",
      finishDate: "06/2026",
      technologies: ["HTML", "CSS"]
    },
    {
      thumbnail: "/ShoppingCard/thumbnail.jpg",
      projectName: "PROJECT 5",
      projectDes: "Fifth project for overflow and scroll demo.",
      numberStar: 555,
      numberView: 111,
      startDate: "07/2026",
      finishDate: "12/2026",
      technologies: ["REACT"]
    }
  ]
};

export function getMemberDetail() {
  return memberDetail;
}
