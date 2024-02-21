import {Rectangles} from "./shapes/Rectangles";
import {random} from "./shapes/helper";

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');

const rect = new Rectangles(20, 10, 'pink', ctx, canvasElement)

rect.draw()

function animate() {
    rect.animate()
    requestAnimationFrame(animate)
}

canvasElement.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
        rect.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    }
})



animate()

/*
const shapes = [
    new Rectangles(50, 200, 'white', ctx, canvasElement),
    new Rectangles(200, 50, 'white', ctx, canvasElement),
]

ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvasElement.width, canvasElement.height)

shapes.forEach((shape) => {
    //shape.draw()
})
*/

/* Démonstration du save et restore.
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 20, 10)
ctx.save();
ctx.translate(canvasElement.width/2, canvasElement.height/2);
ctx.fillRect(0, 0, 20, 10)
ctx.restore();
ctx.fillStyle = 'blue';
ctx.fillRect(20, 0, 20, 10)
*/
