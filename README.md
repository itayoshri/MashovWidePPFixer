# Mashov Wide Profile Picture Fixer
A simple Chromium extension that fixes the problem of wide profile pictures in Mashov
<p align="center">
  <img width="300" src="https://github.com/itayoshri/MashovWidePPFixer/blob/main/wide%20profile%20picture.png" alt="An example of the problem">
</p>

### A simple code that fixes the problem:
```js
const studentProfilePicture = document.getElementsByClassName('mshv-student-thumbnail')[0]

const pictureOriginalWidth = studentProfilePicture.naturalWidth;
const pictureOriginalHeight = studentProfilePicture.naturalHeight;

const pictureWidth = studentProfilePicture.width;

const ratio = pictureOriginalWidth/pictureWidth;
const PX = 'px'

studentProfilePicture.style.height = pictureOriginalHeight/ratio + PX    
```
