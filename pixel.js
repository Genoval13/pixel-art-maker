document.addEventListener('DOMContentLoaded', () => {
    //Create Big Divver
    const containerSquare = document.createElement('div');
    containerSquare.className = "bigSquare";
    document.body.appendChild(containerSquare);

    //Create Pallete Div
    const bigPalleteSquare = document.createElement('div');
    bigPalleteSquare.className = "bigPallete";
    document.body.appendChild(bigPalleteSquare);

    //Create CanvasSquares
    for (i = 0; i <= 1034; i++)  {
        const canvasSquares = document.createElement('div');
        canvasSquares.setAttribute('class', 'canvas');
        containerSquare.appendChild(canvasSquares);
        
        canvasSquares.addEventListener('click', (ev) => {
            setCanvasColor(ev);
        })
    }
    
    //Create Pallete Circles
    for (i = 0; i <= 11; i++)  {
        const palleteCircle = document.createElement('div');
        palleteCircle.className = "palleteColor";;
        bigPalleteSquare.appendChild(palleteCircle);

        palleteCircle.addEventListener('click', (ev) => {
            setBrushColor(ev);
        })
    }
    
    //Setting Color IDs
    let id = ['white', 'black', 'red', 'blue', 'yellow', 'green', 'orange', 'purple', 'gray', 'pink', 'brown', 'currentColor'];
    for (let i = 0; i < id.length; i++) {
        document.getElementsByClassName('palleteColor')[i].setAttribute('id', id[i]);
    }
    
    //Set Brush Color
    function setBrushColor  (ev)  {
        document.getElementById('currentColor').style.backgroundColor = ev.target.id;
    }

    //Set Canvas Color
    function setCanvasColor (ev) {
        ev.target.style.backgroundColor = document.getElementById('currentColor').style.backgroundColor;
    }
})