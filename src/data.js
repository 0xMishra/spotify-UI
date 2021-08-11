import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import GTranslateIcon from "@material-ui/icons/GTranslate";
const gender = ["Male", "Female", "Non-binary"];

const date = [
  {
    id: 1,
    heading: "Year",
    placeholder: "YYYY",
    type: "text",
    width: "w-14 sm:w-20",
  },
  {
    id: 2,
    heading: "Month",
    placeholder: "Month",
    type: "month",
    width: "w-20 sm:w-36",
  },
  {
    id: 3,
    type: "text",
    placeholder: "DD",
    width: "w-14 sm:w-24",
    heading: "Day",
  },
];
const options = [
  {
    id: 1,
    text: "FACEBOOK",
    textColor: "text-white",
    bgColor: "bg-blue-450",
    icon: <FacebookIcon />,
    hoverBgcolor: "hover:bg-blue-500",
    hoverTextColor: "hover:text-white",
    borderColor: "border-transparent",
    borderWidth: "border-0",
  },

  {
    id: 2,
    textColor: "text-white",
    icon: <AppleIcon />,
    text: "APPLE",
    hoverTextColor: "hover:text-white",
    bgColor: "bg-black-900",
    hoverBgcolor: "hover:bg-gray-700",
    borderColor: "border-transparent",
    borderWidth: "border-0",
  },

  {
    id: 3,
    icon: <GTranslateIcon />,
    text: "GOOGLE",
    textColor: "text-gray-500",
    bgColor: "bg-white",
    hoverBgcolor: "hover:bg-gray-600",
    hoverTextColor: "hover:text-white",
    borderColor: "border-black-900",
    borderWidth: "border-2",
  },

  {
    id: 4,
    text: "PHONE NUMBER",
    bgColor: "bg-white",
    icon: "",
    textColor: "text-gray-500",
    hoverTextColor: "hover:text-white",
    hoverBgcolor: "hover:bg-gray-600",
    borderColor: "border-black-900",
    borderWidth: "border-2",
  },
];

const photos1 = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Linkin_Park_-_Numb_CD_cover.jpg/220px-Linkin_Park_-_Numb_CD_cover.jpg",
    title: "Linkin Park Hits",
    desc: "Numb",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwXissqqG7TWBkvlo-BXfgsmh7AdzJqA5og&usqp=CAU",
    title: "The best albums",
    desc: "Hybrid theory",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/aaVAFZiWGpA/maxresdefault.jpg",
    title: "Top Hits Ever",
    desc: "In the end",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aTdJ-5dpgTEXFtYP8GMp-6Kt5hkeudF3Mg&usqp=CAU",
    title: "Linkin Park UK live 2021",
    desc: "Castle of Glass",
  },
];
const photos2 = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/e/e0/Twentyonepilotsheathens.jpg",
    title: "Twenty One Pilots Hits",
    desc: "Heathens",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/de/7e/6f/de7e6f9bd417739c44a84d596f0ae961.jpg",
    title: "The best albums",
    desc: "Blurry Face",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Twenty_One_Pilots_%E2%80%93_Ride.jpg",
    title: "Top Hits Ever",
    desc: "Ride",
  },
  {
    id: 4,
    img: "https://www.nme.com/wp-content/uploads/2019/08/NME_TwentyOnePilots_AF-5193.jpg",
    title: "21 Pilots in UK ",
    desc: " chlorine",
  },
];

const photos3 = [
  {
    id: 1,
    img: "https://i2.wp.com/cornellsun.com/wp-content/uploads/2016/02/the-chainsmokers-drop.jpg?resize=768%2C410&ssl=1",
    title: "The chainsmokers hits",
    desc: "Don't Let Me Down",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/d/d1/The_Chainsmokers_Side_Effects.png",
    title: "The best albums",
    desc: "Side Effects",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/WsptdUFthWI/maxresdefault.jpg",
    title: "Top Hits Ever",
    desc: "Closer",
  },
  {
    id: 4,
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4268fa49241035.58aed366094a4.jpg",
    title: " Best Collab Ever ",
    desc: "Something Just Like This",
  },
];
const photos4 = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Yellow_cover_art.JPG",
    title: "Coldplay Hits",
    desc: "Yellow",
  },
  {
    id: 2,
    img: "https://e.snmc.io/i/600/w/2fd7d07ea2ef994740389e7cb6a3ab37/8915093/coldplay-parachutes-cover-art.jpg",
    title: "The best albums",
    desc: "Parachutes",
  },
  {
    id: 3,
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4268fa49241035.58aed366094a4.jpg",
    title: "Best Collab",
    desc: "Something just like this",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KLuercquRvfFVQjBEBPWV2ZmjGNUgVKuIQ&usqp=CAU",
    title: "Coldplay Live  ",
    desc: "Scientist",
  },
];

const photos5 = [
  {
    id: 1,
    img: "https://1.bp.blogspot.com/-rIK1fSxr8Lw/Xb9PWSeAe2I/AAAAAAAAIfA/BU7xtpm35Jg3HCmmaIbD1RUMODHS2DgpACLcBGAsYHQ/w1200-h630-p-k-no-nu/Memories.jpg",
    title: "Maroon 5 hits",
    desc: "Memories",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/This_Love_cover.png/220px-This_Love_cover.png",
    title: "The best song",
    desc: "This Love",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/5/57/Girls_like_You_cover.png",
    title: "Top Hits Ever",
    desc: "Girls Like You",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/f9/de/ad/f9dead08aaa6ef74e1382d11473f94dd.jpg",
    title: " Best albums ",
    desc: "Overexposed",
  },
];
const albumLists = [
  {
    id: 1,
    Heading: "Best Of Linkin Park",
    para: "Linkin Park's Iconic Releases",
    photoIndex: photos1,
  },
  {
    id: 2,
    Heading: "Twenty One Pilots",
    para: "Best of Twenty One Pilots",
    photoIndex: photos2,
  },
  {
    id: 3,
    Heading: "Bangers By The Chainsmokers",
    para: "Hits by Chainsmokers",
    photoIndex: photos3,
  },
  {
    id: 4,
    Heading: "Coldplay Music",
    para: "Melodies by coldplay",
    photoIndex: photos4,
  },
  {
    id: 5,
    Heading: "Songs by Maroon 5",
    para: "Maroon 5 top four",
    photoIndex: photos5,
  },
];

export {
  gender,
  date,
  options,
  photos1,
  photos2,
  photos3,
  albumLists,
  photos4,
  photos5,
};
