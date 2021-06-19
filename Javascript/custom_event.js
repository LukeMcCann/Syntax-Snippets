/**
 * @param {File} file
 */
function handleFileUpload(file) {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", (event) => {
    // Dispatch an event to the profile card containing the updated profile.
    dispatchCardEvent({
      image: event.target.result,
    });
  });
  fileReader.readAsDataURL(file);
}

const profileCard = document.querySelector(".profile-card");
const CARD_UPDATE_EVENT_NAME = "cardupdate";
