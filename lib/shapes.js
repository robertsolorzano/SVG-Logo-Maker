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
        return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
}

export class Square extends Shape {
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
}

export class Triangle extends Shape {
    render() {
        return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`;
    }
}
