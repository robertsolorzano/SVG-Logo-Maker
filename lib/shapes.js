class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color
    }
}

export class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

export class Square extends Shape {
    render() {
        const size = 200;
        const x = (300 - size) / 2; 
        const y = (200 - size) / 2; 
        return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />`;
    }
}

export class Triangle extends Shape {
    render() {
        return `<polygon points="150,10 290,190 10,190" fill="${this.color}" />`;
    }
}
