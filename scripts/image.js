let currentIndex = 0;

function changeImageSource() {
  const imageElement = document.getElementById("imageElement");

  const imageSources = [
    "https://cdn.discordapp.com/attachments/1163162704387784824/1163342890450296832/illa.png?ex=653f3a7e&is=652cc57e&hm=8769f213cffa255f212371709913f557cadf3d0d8474234b3bb2d83a5a2c4275&",
    "https://cdn.discordapp.com/attachments/1163162704387784824/1163342891024920576/wlr.jpg?ex=653f3a7f&is=652cc57f&hm=5523f6c3d25bcd175d46803362ec2cdb063740ea9fc9cdbe04e9deb188a4e63a&",
    "https://cdn.discordapp.com/attachments/1163162704387784824/1163342891427565658/skedular.png?ex=653f3a7f&is=652cc57f&hm=101caf733fe16988adf6fe50911e954c9d7498153b0ba44e8b018867642c0703&",
  ];

  imageElement.src = imageSources[currentIndex];

  currentIndex = (currentIndex + 1) % imageSources.length;
}

setInterval(changeImageSource, 2000);
