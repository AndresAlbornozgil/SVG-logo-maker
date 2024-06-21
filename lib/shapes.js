// Shapes class
class Shapes {
    constructor() {
        this.color = ""
    }

    setColor(color) {
        this.color = color;
    }
}

// Circle class
class Circle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return ''
    }
}

// Square class
class Square extends Shapes {
    constructor() {
        super();
    }
    render() {
        return ''
    }
}

// Triangle class
class Triangle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return ''
    }
}

// Exports shapes file
module.exports = Shapes;
