import {BaseEntity, IEntityParameters} from "./BaseEntity";

export class Spinner2 extends BaseEntity {
    public sprite: Phaser.Physics.Matter.Image;
    
    init(): void {
        this.sprite = this._scene.matter.add.sprite(this._params.x, 80, "platform1", null, {});
        this.sprite.setStatic(true);
        this.add(this.sprite);
    }

    draw(cb: any, x: number, y: number) {
        cb(this.sprite, x, y);
    }

    update(): void {
        this.sprite.angle -= 2;
    }
}