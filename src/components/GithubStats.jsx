import React, { PureComponent, useEffect, useState } from 'react';
import "./../styles/GithubStats.css";
import { Tooltip, Treemap, ResponsiveContainer } from 'recharts';
import axios from "axios";

const data = [
  {
    name: 'axis',
    children: [
      { name: 'Axes', size: 1302 },
      { name: 'AxisGridLine', size: 652 },
      { name: 'AxisLabel', size: 636 },
      { name: 'CartesianAxes', size: 6703 },
    ],
  },
  {
    name: 'controls',
    children: [
      { name: 'AnchorControl', size: 2138 },
      { name: 'ClickControl', size: 3824 },
      { name: 'Control', size: 1353 },
      { name: 'ControlList', size: 4665 },
      { name: 'DragControl', size: 2649 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
    ],
  },
  {
    name: 'data',
    children: [
      { name: 'EdgeSprite', size: 3301 },
      { name: 'NodeSprite', size: 19382 },
      {
        name: 'render',
        children: [
          { name: 'ArrowType', size: 698 },
          { name: 'EdgeRenderer', size: 5569 },
          { name: 'IRenderer', size: 353 },
          { name: 'ShapeRenderer', size: 2247 },
        ],
      },
      { name: 'Tree', size: 7147 },
      { name: 'TreeBuilder', size: 9930 },
    ],
  },
  {
    name: 'events',
    children: [
      { name: 'SelectionEvent', size: 6880 },
      { name: 'VisualizationEvent', size: 2117 },
    ],
  },
  {
    name: 'legend',
    children: [
      { name: 'LegendItem', size: 4614 },
      { name: 'LegendRange', size: 10530 },
    ],
  },
  {
    name: 'operator',
    children: [
      {
        name: 'distortion',
        children: [
          { name: 'BifocalDistortion', size: 4461 },
          { name: 'FisheyeDistortion', size: 3444 },
        ],
      },
      {
        name: 'encoder',
        children: [
          { name: 'ColorEncoder', size: 3179 },
          { name: 'ShapeEncoder', size: 1690 },
          { name: 'SizeEncoder', size: 1830 },
        ],
      },
      {
        name: 'filter',
        children: [
          { name: 'GraphDistanceFilter', size: 3165 },
          { name: 'VisibilityFilter', size: 3509 },
        ],
      },
      { name: 'IOperator', size: 1286 },
      {
        name: 'label',
        children: [
          { name: 'RadialLabeler', size: 3899 },
          { name: 'StackedAreaLabeler', size: 3202 },
        ],
      },
      {
        name: 'layout',
        children: [
          { name: 'AxisLayout', size: 6725 },
          { name: 'BundledEdgeRouter', size: 3727 },
          { name: 'RandomLayout', size: 870 },
          { name: 'StackedAreaLayout', size: 9121 },
          { name: 'TreeMapLayout', size: 9191 },
        ],
      },
      { name: 'Operator', size: 2490 },
      { name: 'OperatorList', size: 5248 },
      { name: 'SortOperator', size: 2023 },
    ],
  },
];

const GithubStats = () => {
  // const [lang, setLang] = useState([]);
  // const [details, setDetails] = useState([]);

  // const sleep = (delay) => {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, delay);
  //   });
  // }

  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get(`https://api.github.com/users/A-Lokanush/repos`);
  //     const res = response.data;
  //     setDetails(res);
  //     console.log(details);
  //   })();
  // },[]);

  // useEffect(() => {
  //   (async () => {
  //     details.map(detail => {
  //       (async () => {
  //         if(!detail.fork){
  //           const response = await axios.get(`https://api.github.com/repos/A-Lokanush/${detail.name}/languages`);
  //           let child = [];
  //           const res = response.data;
  //           Object.entries(res).map((langs) => {
  //             child.push({name:langs[0], size:langs[1]})
  //           })
  //           const obj = {
  //             name : detail.name,
  //             children : child
  //           }
  //           data.push(obj);
  //           console.log(data);
  //         }
  //       })();
  //     })
  //   })();
  // },[details]);

  //   useEffect(() => {
  //   const wait = async () => {
  //     await sleep(5000);
  //     setLang(data);
  //     console.log(lang);
  //   }
  //   wait();
  // }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   // (async () => {
  //   //   Object.keys(details).map((detail) => {
  //   //     (async () => {
  //   //       let response = await axios.get(`https://api.github.com/repos/A-Lokanush/${detail.name}/languages`);
  //   //       let child = [];
  //   //       let res = response.data;
  //   //       Object.entries(res).map((langs) => {
  //   //         child.push({name:langs[0], size:langs[1]})
  //   //       })
  //   //       const obj = {
  //   //         name : detail.name,
  //   //         children : child
  //   //       }
  //   //       data.push(obj);
  //   //     })();
  //     // const response = await axios.get(`https://api.github.com/repos/A-Lokanush/IPMP_2k24/languages`);
  //     // let child = [];
  //     // const res = response.data;
  //     // Object.entries(res).map((langs) => {
  //     //   child.push({name:langs[0], size:langs[1]})
  //     // })
  //     // const obj = {
  //     //   name : "pollbooth",
  //     //   children : child
  //     // }
  //     // data.push(obj);
  //     // const response2 = await axios.get(`https://api.github.com/repos/A-Lokanush/onedriver/languages`);
  //     // let child2 = [];
  //     // const res2 = response2.data;
  //     // Object.entries(res2).map((langs) => {
  //     //   child2.push({name:langs[0], size:langs[1]})
  //     // })
  //     // const obj2 = {
  //     //   name : "swift-chat",
  //     //   children : child2
  //     // }
  //     // data.push(obj2);
  //     // const response3 = await axios.get(`https://api.github.com/repos/A-Lokanush/pragyan/languages`);
  //     // let child3 = [];
  //     // const res3 = response3.data;
  //     // Object.entries(res3).map((langs) => {
  //     //   child3.push({name:langs[0], size:langs[1]})
  //     // })
  //     // const obj3 = {
  //     //   name : "pragyan",
  //     //   children : child3
  //     // }
  //     // data.push(obj3);
  //   // })
  //   // })();
  //   console.log(details);
  // },[])

const COLORS = ['#A689E1', '#d896ff', '#be29ec', '#800080', '#660066', '#663399'];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, colors, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root?.children?.length) * 6)] : 'none',
            stroke: '#121212',
            strokeWidth: 3 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={20}>
            {name}
          </text>
        ) : null}
        {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#800000" fontSize={15} fillOpacity={0.9}>
            {index + 1}
          </text>
        ) : null}
      </g>
    );
  }
}
const CustomTooltip = ({ active, payload }) => {
  
  if (active && payload && payload.length) {
    console.log(payload,active)
    return (
      <div className="treemap-custom-tooltip">
        <p>{`${payload[0].payload.root.name}`}</p>
        <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
          <Treemap width={400} height={300} data={data} dataKey="size" ratio={3 / 3} stroke="#fff" fill="#8884d8" content={<CustomizedContent colors={COLORS} />} >
            <Tooltip content={<CustomTooltip />} />
          </Treemap>
        </ResponsiveContainer>
    </>    
  )
}

export default GithubStats;