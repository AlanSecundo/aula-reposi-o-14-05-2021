export const getColorByType = (type) => {
  switch (type) {
    case "grass":
      return "#8BBE8A";
    case "fire":
      return "#FFA756";
    case "bug":
      return "#8BD674";
    case "fairy":
      return "#EBA8C3";
    case "dark":
      return "#6F6E78";
    case "dragon":
      return "#7383B9";
    case "fighting":
      return "#EB4971";
    case "water":
      return "#58ABF6";
    case "electric":
      return "#F2CB55";
    case "flying":
      return "#83A2E3";
    case "ice":
      return "#91D8DF";
    case "ground":
      return "#F78551";
    case "ghost":
      return "#8571BE";
    case "normal":
      return "#B5B9C4";
    case "poison":
      return "#9F6E97";
    case "steel":
      return "#4C91B2";
    case "psychic":
      return "#FF6568";
    case "rock":
      return "#D4C294";
    default:
      return "white";
  }
};
