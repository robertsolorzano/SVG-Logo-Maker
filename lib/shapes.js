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
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

export class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

export class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 200,150 100,150" fill="${this.color}" />`;
    }
}
