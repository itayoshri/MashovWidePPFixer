window.onload = function afterWebPageLoad() { 
    const studentProfilePicture = document.getElementsByClassName('mshv-student-thumbnail')[0]

    const pictureOriginalWidth = studentProfilePicture.naturalWidth;
    const pictureOriginalHeight = studentProfilePicture.naturalHeight;

    const pictureWidth = studentProfilePicture.width;

    const ratio = pictureOriginalWidth/pictureWidth;
    const PX = 'px'

    studentProfilePicture.style.height = pictureOriginalHeight/ratio + PX    
}