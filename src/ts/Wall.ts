import {Rectangle} from "./framework25/shapes/Rectangle";
import {iPosition} from "./framework25/types/iPosition";
import {iColor} from "./framework25/types/iColor";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";

export class Wall extends Rectangle {
    canvas: HTMLCanvasElement;
    private speed: number;
    maxLevelSpeed: number;
    gap: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: iPosition, color: iColor, width: number, height: number, speed: number, rotation?: number) {
        super(ctx, position, color, width, height, rotation);
        this.speed = speed;
        this.maxLevelSpeed = settings.rectangle.maxLevelSpeed;
        this.canvas = canvas;
        this.gap = settings.rectangle.wallGap;
    }

    updateAndDraw() {
        // La vitesse du initial 'wall'.
        this.position.x -= this.speed;

        // Re-générer un 'wall' quand il arrive à la fin du canvas.
        if (this.position.x <= 0) {
            this.replaceWall();
            this.changeColor();
            this.increaseSpeed();
        }
        super.draw();
    }

    replaceWall() {
        this.position.x = this.canvas.width + this.width / 2;
        this.height = randomInt(settings.rectangle.minHeight, settings.rectangle.maxHeight);
        this.position.y = this.canvas.height - this.height / 2;
    }

    changeColor() {
        this.color = new Hsl(randomInt(0, 360), randomInt(0, 100), randomInt(0, 100));
    }

    increaseSpeed() {
        this.speed += 0.2;
        if (this.speed >= this.maxLevelSpeed) {
            this.speed = this.maxLevelSpeed;
        }
        this.position.x = this.position.x + this.gap;
        if (this.speed > 7) {
            this.position.x = this.position.x + this.gap * 2;
        }
    }
}