//pixi is not imported, it is used in a script tag in the html file so you need to copy it manualy to the destination folder. I have not yet found a solution to this...
const app = new PIXI.Application();
// Add the view to the DOM
document.body.appendChild(app.view);

// // ex, add display objects
// app.stage.addChild(PIXI.Sprite.from('something.png'));


// const app = new PIXI.Application({
//     width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
// });
// document.body.appendChild(app.view);

// const container = new PIXI.Container();

// app.stage.addChild(container);