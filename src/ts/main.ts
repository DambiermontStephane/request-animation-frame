import {Monster} from "./Monster";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";
import {randomFloat, randomInt} from "./framework25/helpers/random";
import {Wall} from "./Wall";

const app = {
    init() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = 'src/img/sprite.png';
        this.walls = [];
        this.addEventListeners();
        this.generateWalls();
        this.monster = new Monster(
            this.sprite,
            this.canvas,
            this.ctx,
            {y: this.canvas.height - settings.monster.height / 2, x: settings.monster.x},
            new Hsl(0, 0, 0),
            settings.monster.width,
            settings.monster.height
        );
    },

    generateWalls() {
        const height = randomInt(settings.rectangle.minHeight, settings.rectangle.maxHeight);
        const width = randomInt(settings.rectangle.minWidth, settings.rectangle.maxWidth);

        this.walls.push(
            new Wall(
                this.canvas,
                this.ctx,
                {y: this.canvas.height - height / 2, x: this.canvas.width + width / 2},
                new Hsl(230, 80, 39),
                width,
                height,
                settings.rectangle.initalSpeed,
            )
        )

        this.walls.push(
            new Wall(
                this.canvas,
                this.ctx,
                {y: this.canvas.height - height / 2, x: this.canvas.width + width * 7},
                new Hsl(230, 80, 39),
                width,
                height,
                settings.rectangle.initalSpeed,
            )
        )
    },

    addEventListeners() {
        this.sprite.addEventListener('load', () => {
            this.update();
            this.monster.draw();
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                this.monster.doJump();
            }
        });
    },

    update() {
        this.clearCanvas();
        this.monster.updateAndDraw();
        this.updateWall();

        requestAnimationFrame(this.update.bind(this));
    },

    updateWall() {
        this.walls.forEach((wall: Wall) => {
            wall.updateAndDraw();
        });
    },

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    checkCollision() {

    }
}
app.init();