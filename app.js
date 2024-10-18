const { exec } = require('child_process');
const screenshot = require('screenshot-desktop');

screenshot({ filename: 'screenshot.png' })
  .then((imgPath) => {
    console.log("Screenshot saved to:", imgPath);
  })
  .catch((err) => {
    console.error("Error taking screenshot:", err);
  });


// Open a new terminal window on macOS or Linux
exec('open -a Terminal');
