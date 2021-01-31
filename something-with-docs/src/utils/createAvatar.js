const M = [
  "chris.jpg",
  "christian.jpg",
  "daniel.jpg",
  "elliot.jpg",
  "joe.jpg",
  "justen.jpg",
  "mark.png",
  "matt.jpg",
  "matthew.png",
  "nom.jpg",
  "steve.jpg",
  "stevie.jpg",
  "tom.jpg"
];
const F = [
  "ade.jpg",
  "helen.jpg",
  "jenny.jpg",
  "laura.jpg",
  "lena.png",
  "lindsay.png",
  "molly.png",
  "nan.jpg",
  "rachel.png",
  "veronika.jpg",
  "zoe.jpg"
];

const getAvatar = gender => {
  var avatar = "";
  if (gender === "M") {
    avatar = M[Math.floor(Math.random() * M.length)];
  } else if (gender === "F") {
    avatar = F[Math.floor(Math.random() * F.length)];
  }

  return avatar;
};

export default getAvatar;
