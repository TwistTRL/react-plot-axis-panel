import {memoize_one} from "memoize";

const OFFSETX = 40;

class SecondaryCategoryObject {
  /*
   * Secondary category objects are initialized with name.
   * They should remain unchanged over their life time.
   * The backgroundColor may change, hence, the bg color can/need to be supplied before drawing.
   */
  constructor({name,backgroundColor}) {
    this._name = name;
    this._backgroundColor = backgroundColor;
  }

  getName(){
    return this._name;
  }

  setBackgroundColor(color){
    this._backgroundColor = color; 
  }

  _getBitmap = memoize_one(()=>{
    let text = this._name;
    let font = "bold 12px Sans";
    let fillStyle = "black";
    let canvas =  document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font = font;
    let width = ctx.measureText(text).width;
    let height = 14;
    canvas.width = width;
    canvas.height = height;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text,width/2,height/2);
    return canvas;
  });
  
  draw(ctx,width,height,startDomX,endDomX) {
    let bitmap = this._getBitmap();
    let bgColor = this._backgroundColor;
    let start = Math.round(startDomX);
    let end = Math.round(endDomX);
    let plotHeight = end-start;
    let plotWidth = width - OFFSETX;
    ctx.fillStyle = bgColor;
    ctx.fillRect(OFFSETX,start,plotWidth,plotHeight);
    let srcx = 0;
    let srcy = Math.round(bitmap.height/2-plotHeight/2);
    ctx.drawImage(bitmap,srcx,srcy,plotWidth,plotHeight,
                  OFFSETX+5,start,plotWidth,plotHeight);
  }
}

export default SecondaryCategoryObject;
