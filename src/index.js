import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from "react-router-dom";

import {LinearSpaceYPanel,CollapsibleYPanel, StaticYPanel} from "./lib";

// CSS
import "./index.css";

function getRandomElements(array){
  let ret = [];
  for (let elem of array){
    if (Math.random()<0.5) {
      ret.push(elem);
    }
  }
  return ret;
}

class StaticYPanelBundle extends Component {
  constructor(props) {
    super(props);
    this.categoryStructure = [{ name:'a',backgroundColor:"#efdb96",
                                children:[{name:'a1',backgroundColor:"#fffbe8"},
                                          {name:'a2',backgroundColor:"#ffeed0"}]
                                },
                              { name:'b',backgroundColor:"#cface3",
                                children:[{name:'b1',backgroundColor:"#fffbe8"},
                                          {name:'b2',backgroundColor:"#ffeed0"}]
                                }
                              ];
    this.state = {
      width: 150,
      height: 40,
      rowHeight: 10,
    };
  }

  render(){
    let {width, height, rowHeight} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            cateogoryStructure
            <pre>
              {JSON.stringify(this.categoryStructure,null,' ')}
            </pre>
          </div>
          <div>
            rowHeight
            <input  type="range" min={10} max={50} value={rowHeight}
                    onChange={(ev)=>this.setState({rowHeight:Number.parseInt(ev.target.value)})}
                    />
            {rowHeight}
          </div>
          <div>
            width
            <input  type="range" min={50} max={200} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            height
            <input  type="range" min={0} max={500} value={height}
                    onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}
                    />
            {height}
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <StaticYPanel categoryStructure={this.categoryStructure}
                        rowHeight={rowHeight}
                        width={width}
                        height={height}
                        />
        </fieldset>
      </>
    );
  }
}

class CollapsibleYPanelBundle extends Component{
  constructor(props){
    super(props);
    this.categoryStructure = [{ name:'a',backgroundColor:"#efdb96",
                                children:[{name:'a1'},
                                          {name:'a2'}]
                                },
                              { name:'b',backgroundColor:"#cface3",
                                children:[{name:'b1'},
                                          {name:'b2'}]
                                }
                              ];
    this.leaves = this.categoryStructure.map( ({children})=>children )
                                        .flat()
                                        .map( ({name})=>name );
    this.state ={ useLeaves: this.leaves,
                  rowHeight: 40,
                  width: 150,
                  height: 40,
                  };
  }

  render(){
    let {useLeaves,rowHeight,width,height} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            cateogoryStructure
            <pre>
              {JSON.stringify(this.categoryStructure,null,' ')}
            </pre>
          </div>
          <div>
            useLeaves
            <button onClick={()=>this.setState({useLeaves:getRandomElements(this.leaves)})}>randomize</button>
            {JSON.stringify(useLeaves,null,' ')}
          </div>
          <div>
            rowHeight
            <input  type="range" min={10} max={50} value={rowHeight}
                    onChange={(ev)=>this.setState({rowHeight:Number.parseInt(ev.target.value)})}
                    />
            {rowHeight}
          </div>
          <div>
            width
            <input  type="range" min={50} max={200} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            height
            <input  type="range" min={0} max={500} value={height}
                    onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}
                    />
            {height}
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <CollapsibleYPanel  categoryStructure={this.categoryStructure}
                              useLeaves={useLeaves}
                              rowHeight={rowHeight}
                              width={width}
                              height={height}
                              />
        </fieldset>
      </>
    );
  }
}

class LinearSpaceYPanelBundle extends Component {
  constructor(props){
    super(props);
    this.categoryStructure = [{ name:'',
                                backgroundColor:"#a8e6e3",
                                start:0,
                                end:15,
                                children:[{ name:'a1',
                                            start:0,
                                            end:5},
                                          { name:'a2',
                                            start:5,
                                            end:15}]
                                },
                              { name:'',
                                backgroundColor:"#fb8730",
                                start:15,
                                end:80,
                                children:[{ name:'b1',
                                            start:15,
                                            end:35},
                                          { name:'b2',
                                            start:35,
                                            end:80}]
                                }
                              ];
    this.state ={ minY: 0,
                  maxY: 100,
                  width: 150,
                  height: 40,
                  };
  }

  render(){
    let {minY,maxY,width,height} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            cateogoryStructure
            <pre>
              {JSON.stringify(this.categoryStructure,null,' ')}
            </pre>
          </div>
          <div>
            minY
            <input  type="range" min={0} max={maxY} value={minY}
                    onChange={(ev)=>this.setState({minY:Number.parseInt(ev.target.value)})}
                    />
            {minY}
          </div>
          <div>
            maxY
            <input  type="range" min={minY} max={120} value={maxY}
                    onChange={(ev)=>this.setState({maxY:Number.parseInt(ev.target.value)})}
                    />
            {maxY}
          </div>
          <div>
            width
            <input  type="range" min={50} max={200} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            height
            <input  type="range" min={0} max={500} value={height}
                    onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}
                    />
            {height}
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <LinearSpaceYPanel  categoryStructure={this.categoryStructure}
                              minY={minY}
                              maxY={maxY}
                              width={width}
                              height={height}
                              />
        </fieldset>
      </>
    );
  }
}

class App extends Component{
  render(){
    return (
      <Router>
        <nav className="app">
          <Link to="/StaticYPanel">StaticYPanel</Link>
          <Link to="/CollapsibleYPanel">CollapsibleYPanel</Link>
          <Link to="/LinearSpaceYPanel">LinearSpaceYPanel</Link>
        </nav>
        <Route path="/StaticYPanel" exact component={StaticYPanelBundle}/>
        <Route path="/CollapsibleYPanel" exact component={CollapsibleYPanelBundle}/>
        <Route path="/LinearSpaceYPanel" exact component={LinearSpaceYPanelBundle}/>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
