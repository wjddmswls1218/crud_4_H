let prevPk = "";

const bookDetailhandler = (pk) => {
  if (prevPk !== "") {
    const pervBox = document.getElementById(prevPk);
    pervBox.style.display = "none";
  }

  const box = (document.getElementById = (pk) => {
    box.style.display = "block";

    prevPk = pk;
  });
};
