const reelsData = [
  {
    username: "neha_sharma23",
    likeCount: 23400,
    isLiked: false,
    commentCount: 2100,
    caption: "Morning vibes ✨ #reels #daily",
    video: "https://cdn.pixabay.com/video/2025/10/04/307864_large.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/1.jpg",
    shareCount: 120,
    isFollowed: false,
  },
  {
    username: "rahul_verma",
    likeCount: 18900,
    isLiked: true,
    commentCount: 980,
    caption: "Weekend mood 😎 #chill",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/2.jpg",
    shareCount: 85,
    isFollowed: true,
  },
  {
    username: "aarti_k",
    likeCount: 45200,
    isLiked: false,
    commentCount: 3400,
    caption: "Travel diaries 🌍 #wanderlust",
    video: "https://cdn.pixabay.com/video/2022/08/18/128315-741195832_large.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/3.jpg",
    shareCount: 260,
    isFollowed: false,
  },
  {
    username: "aman_singh",
    likeCount: 15600,
    isLiked: false,
    commentCount: 890,
    caption: "Coding all night 💻 #developer",
    video: "https://cdn.pixabay.com/video/2021/01/28/63241-505964153_large.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/6.jpg",
    shareCount: 75,
    isFollowed: false,
  },
  {
    username: "pooja_jain",
    likeCount: 27800,
    isLiked: true,
    commentCount: 1600,
    caption: "Coffee first ☕ #morningroutine",
    video: "https://cdn.pixabay.com/video/2025/07/23/293085_large.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/7.jpg",
    shareCount: 110,
    isFollowed: true,
  },
  {
    username: "kavya_m",
    likeCount: 39900,
    isLiked: true,
    commentCount: 3100,
    caption: "Dance practice 💃🔥 #reels",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/9.jpg",
    shareCount: 240,
    isFollowed: true,
  },
  {
    username: "arjun_rawat",
    likeCount: 8700,
    isLiked: false,
    commentCount: 540,
    caption: "Sunset views 🌅 #nature",
    video: "https://cdn.pixabay.com/video/2020/03/25/34260-400974076_large.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/10.jpg",
    shareCount: 60,
    isFollowed: false,
  },
    {
    username: "pooja_jain",
    likeCount: 27800,
    isLiked: true,
    commentCount: 1600,
    caption: "Coffee first ☕ #morningroutine",
    video: "https://cdn.pixabay.com/video/2025/07/23/293085_large.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/7.jpg",
    shareCount: 110,
    isFollowed: true,
  }
];
let sum = 0;
reelsData.forEach(function (ele) {
  sum =
    sum +
    `  <div class="reels">
      <video autoplay muted loop src=${ele.video}></video>
      <div class="bottom">
        <div class="profile">
          <img src="https://24thspoke.in/cdn/shop/files/IMG-20240824-WA0197.jpg?v=1725372282">
          <p>${ele.username}</p>
          <button>${ele.isFollowed ? 'Unfollow' : 'follow'}</button>
        </div>
        <p class="desc">${ele.caption}</p>
      </div>

      <div class="left">
        <div> ${ele.isLiked ? '<i class="love fa-regular fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
          <p>${ele.likeCount}</p>
        </div>
        <div><i class="fa-regular fa-comment"></i>
          <p>${ele.commentCount}</p>
        </div>
        <div><i class="fa-solid fa-share"></i>
          <p>${ele.shareCount}</p>
        </div>
        <div><i class="ri-more-2-line"></i></div>
      </div>
    </div>`;
});

let main = document.querySelector('main');
main.innerHTML=sum;
