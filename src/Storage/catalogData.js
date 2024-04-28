import iphoneBlack from "../images/iphone11-black.png";
import iphoneRed from "../images/iphone11-red.png";
import iphonePurple from "../images/iphone11-purple.png";
import iphoneWhite from "../images/iphone11-white.png";
import proBlack from "../images/iphone-11pro-black.png";
import proSilver from "../images/iphone-11pro-silver.png";
import proGold from "../images/iphone-11pro-gold.png";
import iwatchs3 from "../images/iwatch-s3-38-4.png";
import iwatchs6White from "../images/iwatch-s6-nike-40-3.png";
import iwatchs6Black from "../images/iwatch-s6-nike-40-4.png";
import caseBlue from "../images/case-11pro-blue-1.png";
import caseBlack from "../images/case-11pro-black-1.png";
import casePink from "../images/case-11pro-pink-1.png";
import caseBatteryBlack from "../images/casebattery-xr-black-1.png";
import caseBatteryPink from "../images/casebattery-11pro-pink-1.png";

const catalogData = [
  {
    id: 0,
    img: [iphoneBlack, iphoneRed, iphonePurple, iphoneWhite],
    parametr: ["64 gb", "256 gb", "512 gb"],
    cost: [699, 749, 849],
    name: "IPHONE 11",
  },
  {
    id: 1,
    img: [proBlack, proSilver, proGold],
    parametr: ["64 gb", "256 gb", "512 gb"],
    cost: [1099, 1249, 1449],
    name: "IPHONE11 PRO MAX",
  },
  {
    id: 2,
    img: [iwatchs3],
    cost: [199],
    parametr: [38],
    name: "APPLE WATCH SERIES 3",
  },
  {
    id: 3,
    img: [iwatchs6White, iwatchs6Black],
    parametr: [40, 44],
    cost: [399, 429],
    name: "APPLE WATCH SERIES 6 NIKE",
  },
  {
    id: 4,
    img: [caseBlue, caseBlack, casePink],
    parametr: ["iPhone 11 Pro Max", "iPhone"],
    cost: [39, 39],
    name: "IPHONE SILICONE CASE",
  },
  {
    id: 5,
    img: [caseBatteryBlack, caseBatteryPink],
    parametr: ["iPhone 11 Pro Max", "iPhone"],
    cost: [79, 79],
    name: "SMART BATTERY CASE ",
  },
];
export default catalogData;
