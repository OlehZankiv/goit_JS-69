const guidGenerator = () => {
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4() + S4() + S4()}`;
};

const books = [
  {
    id: guidGenerator(),
    name: "Product Ledership",
    url: "https://www.bringthedonuts.com/img/books/81W-nkY9Y-L.jpg",
  },
  {
    id: guidGenerator(),
    name: "The Influential",
    url: "https://productcollective.com/wp-content/uploads/2021/03/51Gbe7zH50L._SX348_BO1204203200_.jpg",
  },
  {
    id: guidGenerator(),
    name: "Continuous Discovery Habits",
    url: "https://images.ctfassets.net/lh3zuq09vnm2/1LLpKnARQNYDlV0p4bZ7De/5f76e773fd38bebfb6f8b28b9f8d71f9/Continuous_Discovery_Habits.jpg",
  },
  {
    id: guidGenerator(),
    name: "Product Management",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWljSFr5ztn3hCqp8x6MsJJMJw9wdqf-UM6TOulNZ6qg6MSwZkV9hiXz3IizNO-2-mec&usqp=CAU",
  },
  {
    id: guidGenerator(),
    name: "API Product Management",
    url: "https://d2sofvawe08yqg.cloudfront.net/apiproductmanagement/s_hero2x?1620561555",
  },
  {
    id: guidGenerator(),
    name: "The Product Samurai",
    url: "https://m.media-amazon.com/images/I/41C9M-qw6UL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    id: guidGenerator(),
    name: "Crossing the Chasm",
    url: "https://images.ctfassets.net/lh3zuq09vnm2/5zrOoE9zeJCHWQTwkspqX7/ae9c5ed50c214c9bfd0ec4dc7f2ac35b/Crossing_the_Chasm.jpg",
  },
  {
    id: guidGenerator(),
    name: "Start at the end",
    url: "https://m.media-amazon.com/images/I/81VaDa-uRDL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: guidGenerator(),
    name: "Getting things done",
    url: "https://www.bringthedonuts.com/img/books/81trXFlSkCL.jpg",
  },
];
