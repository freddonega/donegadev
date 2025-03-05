interface iCross {
  side: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const Cross = ({ side }: iCross) => {
  const getPositionClasses = (side: iCross["side"]) => {
    switch (side) {
      case "top-left":
        return "-top-2.5 -left-2.5";
      case "top-right":
        return "-top-2.5 -right-2.5";
      case "bottom-left":
        return "-bottom-2.5 -left-2.5";
      case "bottom-right":
        return "-bottom-2.5 -right-2.5";
      default:
        return "";
    }
  };

  return (
    <span
      className={`absolute ${getPositionClasses(side)} h-5 w-5 transform before:absolute before:top-1/2 before:left-0
        before:w-full before:h-px before:bg-white before:opacity-30 after:absolute after:opacity-30
        after:top-0 after:left-1/2 after:w-px after:h-full after:bg-white`}
    />
  );
};
