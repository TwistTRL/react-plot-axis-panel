import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import {toDomYCoord_Linear} from "plot-utils"; 
import PrimaryCategoryObject from "./PrimaryCategoryObject";
import SecondaryCategoryObject from "./SecondaryCategoryObject";

const SECONDARY_COLOR_CYCLE = ["#feefce","#fffbe7"];

class LinearSpaceYPanel extends PureComponent{
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }
  render(){
    let { width, height,
          } = this.props;
    return (
      <canvas ref={this.ref} width={width} height={height} style={{width:width,height:height,display:"block"}}></canvas>
    );
  }

  componentDidMount(){
    this.draw();
  }

  componentDidUpdate(){
    this.draw();
  }

  draw(){
    let { categoryStructure, /* [{name,color,start,end,children:[{name,start,end}]}] */
          minY, maxY,
          width, height,
          } = this.props;
    this.draw_memo = this.draw_memo ||{};
    let memo = this.draw_memo;
    // Cache categoryStructure change
    if (memo.categoryStructure!==categoryStructure) {
      memo.categoryStructure = categoryStructure;
      memo.categoryStructureClone = [];
      for (let i=0,rowNum=0; i<categoryStructure.length; i++){
        let p = categoryStructure[i];
        let newP = new PrimaryCategoryObject(p);
        newP.start = p.start;
        newP.end = p.end;
        newP.children = [];
        for (let j=0; j<p.children.length; j++) {
          let s = p.children[j];
          let newS = new SecondaryCategoryObject({...s,backgroundColor:SECONDARY_COLOR_CYCLE[rowNum%SECONDARY_COLOR_CYCLE.length]});
          newS.start = s.start;
          newS.end = s.end;
          newP.children.push(newS);
          rowNum+=1;
        }
        memo.categoryStructureClone.push(newP);
      }
    }
    // Draw
    let canvas = this.ref.current;
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,width,height);
    let rowNum = 0;
    for (let p of memo.categoryStructureClone) {
      for (let s of p.children) {
        if (s.end<minY || s.start>maxY) {
          continue;
        }
        else {
          let startDomX = Math.round( toDomYCoord_Linear(height,minY,maxY,s.end) );
          let endDomX = Math.round( toDomYCoord_Linear(height,minY,maxY,s.start) );
          s.draw(ctx,width,height,startDomX,endDomX);
          rowNum+=1;
        }
      }
      //
      if (p.end<minY || p.start>maxY) {
        continue;
      }
      else {
        let startDomX = Math.round( toDomYCoord_Linear(height,minY,maxY,p.end) );
        let endDomX = Math.round( toDomYCoord_Linear(height,minY,maxY,p.start) );
        console.log(minY,maxY,p.end,startDomX);
        p.draw(ctx,width,height,startDomX,endDomX);
      }
    }
  }
}

LinearSpaceYPanel.propTypes = {
  categoryStructure: PropTypes.array.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default LinearSpaceYPanel;
