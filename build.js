const sass = require('sass');
const fs = require('fs-extra');

const buildStyle = async(styleSheet) => {
  console.time(`🎨 Building ${styleSheet}.css`);

  const style = await sass.compileAsync(`./src/scss/${styleSheet}.scss`);
  fs.writeFileSync(`dist/${styleSheet}.css`, style.css);

  console.timeEnd(`🎨 Building ${styleSheet}.css`);
}

const copyAsset = async(assetPath) => {
  console.log(`🪞 Copying ./src/${assetPath}`);
  fs.copyFileSync(`./src/${assetPath}`, `dist/${assetPath}`);
}

const copyFolder = async(folderPath) => {
  console.log(`🪞 Copying ./src/${folderPath}`);
  fs.cpSync(`./src/${folderPath}`, `./dist/${folderPath}`, {
    recursive: true
  });
}

(async() => {
  try {
    console.log(`👷🏻‍♀️ Building Qhuery`);

    if (!fs.existsSync('dist')) {
      console.log(`📂 Making dist folder`);
      fs.mkdirSync('dist');
    }

    await buildStyle('style');
    await copyAsset('index.html');
    await copyAsset('app.js');
    await copyFolder('assets');

    console.log(`✅ Finished building successfully`);
  } catch (e) {
    console.log(`⛔️ Something went wrong`);
    console.log(e);
  }
})();