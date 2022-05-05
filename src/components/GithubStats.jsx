import React, { PureComponent, useEffect, useState } from "react";
import "./../styles/GithubStats.css";
import { Tooltip, Treemap, ResponsiveContainer } from "recharts";
import axios from "axios";

const GithubStats = () => {
  let data = [];
  const [lang, setLang] = useState([]);
  const [details, setDetails] = useState([]);

  const sleep = (delay) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  const setLanguages = () => {
    setLang(data);
    console.log(lang);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.github.com/users/A-Lokanush/repos`
      );
      const res = response.data;
      let data = [];
      // eslint-disable-next-line array-callback-return
      res.map((resp) => {
        if (!resp.fork) {
          data.push(resp);
        }
      });
      setDetails(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      details.map((detail) => {
        (async () => {
          if (!detail.fork) {
            const response = await axios.get(
              `https://api.github.com/repos/A-Lokanush/${detail.name}/languages`
            );
            let child = [];
            const res = response.data;
            Object.entries(res).map((langs) => {
              child.push({ name: langs[0], size: langs[1] });
            });
            const obj = {
              name: detail.name,
              children: child,
            };
            data.push(obj);
          }
        })();
      });
      await sleep(500);
      setLanguages();
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  const COLORS = [
    "#4700D8",
    "#9900F0",
    "#F900BF",
    "#FF85B3",
    "#0E185F",
    "#2FA4FF",
  ];

  class CustomizedContent extends PureComponent {
    render() {
      const { root, depth, x, y, width, height, index, colors, name } =
        this.props;

      return (
        <g>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            style={{
              fill:
                depth < 2
                  ? colors[Math.floor((index / root?.children?.length) * 6)]
                  : "none",
              stroke: "#121212",
              strokeWidth: 3 / (depth + 1e-10),
              strokeOpacity: 1 / (depth + 1e-10),
            }}
          />
          {depth === 1 ? (
            <text
              x={x + width / 2}
              y={y + height / 2 + 7}
              textAnchor="middle"
              fill="#fff"
              fontSize={20}
            >
              {name}
            </text>
          ) : null}
          {depth === 1 ? (
            <text
              x={x + 4}
              y={y + 18}
              fill="#800000"
              fontSize={15}
              fillOpacity={0.9}
            >
              {index + 1}
            </text>
          ) : null}
        </g>
      );
    }
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      console.log(payload[0].payload.name, payload[0].payload.root.name);
      return (
        <div class="treemap-custom-tooltip">
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
        <Treemap
          width={400}
          height={300}
          data={lang}
          dataKey="size"
          ratio={3 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </>
  );
};

export default GithubStats;
