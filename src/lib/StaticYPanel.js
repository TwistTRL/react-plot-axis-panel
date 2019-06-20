import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import PrimaryCategoryObject from "./PrimaryCategoryObject";
import SecondaryCategoryObject from "./SecondaryCategoryObject";

class StaticYPanel extends PureComponent{
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
    let { categoryStructure, /* [{name,backgroundColor,children:[{name,backgroundColor}]}] */
          rowHeight, width, height,
          } = this.props;
    this.draw_memo = this.draw_memo ||{};
    let memo = this.draw_memo;
    // Cache categoryStructure change
    if (memo.categoryStructure!==categoryStructure) {
      memo.categoryStructure = categoryStructure;
      memo.categoryStructureClone = [];
      for (let i=0; i<categoryStructure.length; i++){
        let p = categoryStructure[i];
        let newP = new PrimaryCategoryObject(p);
        newP.children = [];
        for (let j=0; j<p.children.length; j++) {
          let s = p.children[j];
          let newS = new SecondaryCategoryObject(s);
          newP.children.push(newS);
        }
        memo.categoryStructureClone.push(newP);
      }
    }
    // Draw
    let canvas = this.ref.current;
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,width,height);
    for (let i=0,rowNum=0; i<memo.categoryStructureClone.length; i++) {
      let p = memo.categoryStructureClone[i];
      let rowStart = rowNum;
      for (let s of p.children) {
        s.draw(ctx,width,height,rowNum*rowHeight,(rowNum+1)*rowHeight);
        rowNum+=1;
      }
      if (rowNum !== rowStart) {
        p.draw(ctx,width,height,rowStart*rowHeight,rowNum*rowHeight);
      }
    }
  }
}

StaticYPanel.propTypes = {
  categoryStructure: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default StaticYPanel;
