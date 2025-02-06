export const formatOptionsLabel = (option) => {
  switch (option) {
    case "ITALIANA":
      return "Noche Italiana con BARAZZA";
    case "MEDITERRANEA":
      return "Noche Mediterránea con BEKO y DELONGHI";
    case "TAPAS":
      return "Noche de tapas y cócteles con MONOGRAM";
    case "BRUNCH":
      return "Brunch Americano con KITCHENAID";
    case "PIZZA":
      return "Tarde de pizzas y BBQ con WEBBER, ONNI y NAPOLEON";
    default:
      return "";
  }
};
