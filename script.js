const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Promt user to select meedia stream, pass to  video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch error
    console.log("whoops, error here", error);
  }
}

button.addEventListener("click", async () => {
  //disable button
  button.diabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //reset button
  button.diabled = false;
});

//on load
selectMediaStream();
