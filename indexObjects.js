
//lets think that we are building an app for drawing differents kinds of shapes



//Object-oriented Programing (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();