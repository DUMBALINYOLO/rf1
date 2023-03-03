import "./styles.css";
import Graph from "./graph";
import React from "react";
import Metric from "./metric";
import { AreaChart, Area } from "recharts";
import Tabs from "./tabs";
import GraphMenu from "./graphMenu";
import nodesData from "./d";
import { useState } from "react";
import Skills from "./skills";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function App() {
  const [active, setActive] = useState("twins");
  const [selected, setSelected] = useState({ id: 18, name: "sql" });
  //const node = "visual basic";
  console.log("node data ", nodesData[selected.name]);
  const nodeData = nodesData[selected.name];
  return (
    <main className="flex flex-col flex-1  ">
      <header className="bg-gray-50 p-4 ">
        <div className="flex flex-row justify-between ">
          <h1 className="flex items-center flex-wrap md:text-xl mb-3">
            <p className="font-mono font-semibold">
              {selected.name.toUpperCase()}
            </p>
          </h1>
          <div>
            {" "}
            <Skills selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </header>
      <div
        className="container relative space-y-4 flex flex-col md:grid md:space-y-0 w-full
		md:grid-cols-12
		md:flex-1 md:grid-rows-full 
		md:gap-6	 p-4
	"
      >
        <div className="pt-8 border-gray-100 md:col-span-7 pb-24 relative ">
          <div className="pb-2 flex flex-row justify-between ">
            {" "}
            <p className="font-mono font-semibold ">Skill graph</p>
            <GraphMenu />
          </div>

          <Graph data={nodeData["neiGraph"]} />
        </div>
        <div className="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
          <div className="mb-5 flex justify-between ">
            <dl>
              <dt class="-mb-1 text-sm text-gray-500">Number of occurences</dt>
              <dd class="font-semibold">
                {nodeData["stats"]["count_job"]}{" "}
                <span className="text-xs text-gray-200">since 05/2021</span>
              </dd>
            </dl>

            <AreaChart
              width={200}
              height={50}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8956FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8956FF" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                // type="monotone"
                strokeWidth={3}
                dataKey="uv"
                stroke="#8956FF"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </div>
          <div className="border-t pt-4 border-gray-100 bg-white">
            <p className="font-mono font-semibold pb-2">Metrics</p>
            <Tabs active={active} setActive={setActive} />
            <Metric
              active={active}
              data={{
                stats: nodeData["stats"],
                twins: nodeData["twins"],
                priority: nodeData["priority"]
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
