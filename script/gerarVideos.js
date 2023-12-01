function displayVideos() {
  var videoContainer = document.getElementById("video-container");
  var button = document.getElementById("button");
  var button_Text = document.getElementById("button-text");
  const video1 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/2QVI6HAKpHE?si=fYewHPEy1QJDe41Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  const video2 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/AYPkTvH8hGs?si=xUtwhQA_GBqUvwG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  const video3 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZK5vwrLthl0?si=N7s0SXHHKAOUkTWZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  videoContainer.innerHTML = video1 + video2 + video3;

  if (videoContainer.style.display === "flex") {
    button.innerText = "Mostrar vídeos explicativos";
    videoContainer.style.display === "none";
  } else {
    button_Text.innerText = "Ocultar Vídeos";
    videoContainer.style.display === "flex";
  }
}

function displayVideos2() {
  var videoContainer = document.getElementById("video-container");
  var button = document.getElementById("button");
  var button_Text = document.getElementById("button-text");
  const video1 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/px78nnsPNpc?si=ugNbkqWegElk6Lpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  const video2 = 
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/tsjXBBull40?si=iR3hLSKpvp_556M_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  videoContainer.innerHTML = video1 + video2 ;

  if (videoContainer.style.display === "flex") {
    button.innerText = "Mostrar vídeos explicativos";
    videoContainer.style.display === "none";
  } else {
    button_Text.innerText = "Ocultar Vídeos";
    videoContainer.style.display === "flex";
  }
}

function displayVideos3() {
  var videoContainer = document.getElementById("video-container");
  var button = document.getElementById("button");
  var button_Text = document.getElementById("button-text");
  const video1 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/_46qYt8cETc?si=Ua4kSXYS4yhuPEJh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  const video2 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/j9ysbOLC7xU?si=ittUg1yIMjVZ_EzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  videoContainer.innerHTML = video1 + video2;

  if (videoContainer.style.display === "flex") {
    button.innerText = "Mostrar vídeos explicativos";
    videoContainer.style.display === "none";
  } else {
    button_Text.innerText = "Ocultar Vídeos";
    videoContainer.style.display === "flex";
  }
}

function displayVideos4() {
  var videoContainer = document.getElementById("video-container");
  var button = document.getElementById("button");
  var button_Text = document.getElementById("button-text");
  const video1 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/QR-spg4aBJs?si=Xl5rUeg-_beewAN3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  const video2 =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/nt8s87tOQN8?si=Pp1AYXwQMvAHw9Pj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  videoContainer.innerHTML = video1 + video2;

  if (videoContainer.style.display === "flex") {
    button.innerText = "Mostrar vídeos explicativos";
    videoContainer.style.display === "none";
  } else {
    button_Text.innerText = "Ocultar Vídeos";
    videoContainer.style.display === "flex";
  }
}


