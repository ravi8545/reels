const people = [
  {
    name: "Aarav Sharma",
    description: "A passionate software engineer who loves building scalable web applications.",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
  },
  {
    name: "Neha Verma",
    description: "Creative designer with a strong eye for modern UI and user experience.",
    profession: "UI/UX Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWgwSJJrT3cNn45-Hy9ecQuSYQ53L1OwD2Q&s"
  },
  {
    name: "Rohit Mehta",
    description: "Data-driven professional who enjoys turning raw data into insights.",
    profession: "Data Analyst",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    name: "Priya Singh",
    description: "Digital marketing expert focused on brand growth and social media strategy.",
    profession: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Karan Patel",
    description: "Full stack developer skilled in MERN stack and cloud deployment.",
    profession: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  }
];

let sum='';
people.forEach(function(elem){
   sum = sum + `<div class="card">
      <img src=${elem.image}>
      <h2>${elem.name}</h2>
      <h3>${elem.profession}</h3>
      <p>${elem.description}</p>
    </div>`;
})
let main=document.querySelector("main");
main.innerHTML=sum;
