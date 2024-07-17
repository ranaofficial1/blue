function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("../empPhoto"));

export const clientlogo = importAll(require.context("../clientPic"));

export const empArr = [
  {
    name: "Niljit Singh",
    post: "Operations Manager",
    text: "From being the first intern in the team to heading the operations of the company, Niljit has been a core member of the company since its inception.",
    img: images["NiljitSingh.JPG"],
  },
  {
    name: "Christopher Subba",
    post: "Design Head",
    text: "Christopher joined Blue Minch with 7+ years of experience and great design skills to become the backbone of Blue Minch.",
    img: images["ChristopherSubba.JPG"],
  },
  {
    name: "Victoria lalngainzuali",
    post: "Copywriting Head",
    text: "With professional experience of 3 years and a history of academic excellence, a strong team of writers is already flourishing under her guidance",
    img: images["Victorialalngainzuali.JPG"],
  },
  {
    name: "Harshita Agarwal",
    post: "Social Media Head",
    text: "Harshita joined herself as an inexperienced social media manager. However, today she helps others learn the trade through her own experiences.",
    img: images["HarshitaAgarwal.JPG"],
  },
  {
    name: "Abhishek Mahato",
    post: "",
    text: "",
    img: images["AbhishekMahato.JPG"],
  },
  {
    name: "Akanksha Gupta",
    post: "",
    text: "",
    img: images["AkankshaGupta.JPG"],
  },
  {
    name: "Anannya Chakraborty",
    post: "",
    text: "",
    img: images["AnannyaChakraborty.JPG"],
  },
  {
    name: "Chandan",
    post: "",
    text: "",
    img: images["Chandan.JPG"],
  },
  {
    name: "Chewang Sherpa",
    post: "",
    text: "",
    img: images["ChewangSherpa.JPG"],
  },
  {
    name: "Dipik Gupta",
    post: "",
    text: "",
    img: images["DipikGupta.JPG"],
  },
  {
    name: "Elma Zarin",
    post: "",
    text: "",
    img: images["ElmaZarin.JPG"],
  },

  {
    name: "Ishika Chaudhary",
    post: "",
    text: "",
    img: images["IshikaChaudhary.JPG"],
  },
  {
    name: "Ishika Shah",
    post: "",
    text: "",
    img: images["IshikaShah.JPG"],
  },
  {
    name: "Ishita Gupta",
    post: "",
    text: "",
    img: images["IshitaGupta.JPG"],
  },
  {
    name: "Jatin Singha",
    post: "",
    text: "",
    img: images["JatinSingha.JPG"],
  },
  {
    name: "Khushi Agarwal",
    post: "",
    text: "",
    img: images["KhushiAgarwal.JPG"],
  },
  {
    name: "MD Akram",
    post: "",
    text: "",
    img: images["MDAkram.JPG"],
  },
  {
    name: "Md. Siraj",
    post: "",
    text: "",
    img: images["Md.Siraj.JPG"],
  },
  {
    name: "Monika Gurung",
    post: "",
    text: "",
    img: images["MonikaGurung.JPG"],
  },
  {
    name: "Nausheen Rehman",
    post: "",
    text: "",
    img: images["NausheenRehman.JPG"],
  },
  {
    name: "Paresh Sarkar",
    post: "",
    text: "",
    img: images["PareshSarkar.JPG"],
  },
  {
    name: "Prathana Alumpuria",
    post: "",
    text: "",
    img: images["PrathanaAlumpuria.JPG"],
  },
  {
    name: "Priyanshu Dey",
    post: "",
    text: "",
    img: images["PriyanshuDey.JPG"],
  },
  {
    name: "Radhika Saraf",
    post: "",
    text: "",
    img: images["RadhikaSaraf.JPG"],
  },
  {
    name: "Rajeev bhaiya",
    post: "",
    text: "",
    img: images["Rajeevbhaiya.JPG"],
  },
  {
    name: "Sahel Ghosh",
    post: "",
    text: "",
    img: images["SahelGhosh.JPG"],
  },
  {
    name: "Saheli Karmakar",
    post: "",
    text: "",
    img: images["SaheliKarmakar.JPG"],
  },
  {
    name: "Sameul Kami",
    post: "",
    text: "",
    img: images["SameulKami.JPG"],
  },
  {
    name: "Shrabani Sarkar",
    post: "",
    text: "",
    img: images["ShrabaniSarkar.JPG"],
  },
  {
    name: "Siddharth Bose",
    post: "",
    text: "",
    img: images["SiddharthBose.JPG"],
  },
  {
    name: "Sneha Karmakar",
    post: "",
    text: "",
    img: images["SnehaKarmakar.JPG"],
  },
  {
    name: "Sushmita Sarkar",
    post: "",
    text: "",
    img: images["Sushmita Sarkar.JPG"],
  },
  {
    name: "Tausifafaizi",
    post: "",
    text: "",
    img: images["Tausifafaizi.JPG"],
  },
];
