import {memoize_one} from "memoize";
import {getRotatedAxisCoordinate} from "plot-utils";

const WIDTH = 40;

class PrimaryCategoryObject {
  /*
   * Primary category objects are initialized with name, backgroundColor.
   * They should remain unchanged over their life time.
   */
  constructor({name,backgroundColor}) {
    this._name = name;
    this._backgroundColor = backgroundColor;
  }

  _getBitmap = memoize_one(()=>{
    let text = this._name;
    let font = "bold 18px Sans";
    let fillStyle = "white";
    let strokeStyle = "#878787";
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font = font;
    let width = 18;
    let height = ctx.measureText(text).width;
    canvas.width = width;
    canvas.height = height;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.rotate(-Math.PI/2);
    let {x,y} = getRotatedAxisCoordinate(width/2,height/2,-Math.PI/2);
    ctx.fillText(text,x,y);
    ctx.strokeText(text,x,y);
    return canvas;
  });
  
  draw(ctx,width,height,startDomX,endDomX) {
    let bitmap = this._getBitmap();
    let start = Math.round(startDomX);
    let end = Math.round(endDomX);
    let plotWidth = WIDTH;
    let plotHeight = end-start;
    let srcx = Math.round(bitmap.width/2-plotWidth/2);
    let srcy = Math.round(bitmap.height/2-plotHeight/2);
    ctx.fillStyle = this._backgroundColor;
    ctx.fillRect( 0,start,
                  plotWidth,plotHeight);
    try {
      ctx.drawImage(bitmap,srcx,srcy,plotWidth,plotHeight,
                    0,start,plotWidth,plotHeight);
    } catch(error) {
      // Mose likely, when string is empty, drawing a empty bitmap will cause InvalidStateError 
    }
  }
}

export default PrimaryCategoryObject;
