
export const CanvasController =
    { 
        apply(canvas : HTMLCanvasElement) {
            canvas.onmousemove = mousemove
        }
    }

function mousemove(e : MouseEvent) {
    console.log(e.offsetX, e.offsetY)
}