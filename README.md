# Mashov Wide Profile Picture Fixer
A simple Chromium extension that fixes the problem of wide profile pictures in Mashov
<p align="center">
  <img width="300" src="https://github.com/itayoshri/MashovWidePPFixer/blob/main/assets/img/wide%20profile%20picture.png?raw=true" alt="An example of the problem">
</p>

### A simple script that can be written in the console and fixes the problem:
```js
const studentProfilePicture = document.getElementsByClassName('mshv-student-thumbnail')[0]

const pictureOriginalWidth = studentProfilePicture.naturalWidth;
const pictureOriginalHeight = studentProfilePicture.naturalHeight;

const pictureWidth = studentProfilePicture.width;

const ratio = pictureOriginalWidth/pictureWidth;
const PX = 'px'

studentProfilePicture.style.height = pictureOriginalHeight/ratio + PX    
```
