import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { AreaChart, Area } from "recharts";
const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
const gaussian = (tresh) =>
  range(-2, 2, 0.01).map((e, index) => {
    let key = "";
    if (index > tresh) {
      key = "past";
    } else {
      key = "pre";
    }
    return { name: index, [key]: Math.exp(-0.5 * e ** 2) };
  });
console.log(gaussian);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Metric({ active, data }) {
  const { twins, stats, priority } = data;
  const prior = {
    name: "Total Subscribers",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase"
  };
  //console.log(data);
  return (
    <>
      {active === "twins" && (
        <div class="space-y-4 mt-4">
          {Object.keys(twins).map((key) => (
            <div class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none">
              <div class="flex-1">
                <div
                  class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
                  style={{ width: `${parseInt(twins[key] * 100)}%` }}
                ></div>{" "}
                <p>{key}</p>
              </div>{" "}
              <p class="pl-2">{twins[key].toFixed(2)}</p>{" "}
            </div>
          ))}
        </div>
      )}
      {active === "stats" && (
        <div class="space-y-4 mt-4">
          {Object.keys(stats).map((key) => {
            const d = stats[key];
            const render = Object.keys(d).map((key) => {
              return { name: key, val: d[key] };
            });
            console.log(render);
            if (key != "count_job") {
              return (
                <div>
                  <p className="font-mono font-semibold ">{key}</p>
                  <BarChart
                    width={500}
                    height={200}
                    data={render}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <XAxis dataKey="name" />

                    <Tooltip />

                    <Bar dataKey="val" fill="#8884d8" />
                  </BarChart>
                </div>
              );
            }
          })}
        </div>
      )}
      {active === "prior" && (
        <div class="space-y-4 mt-4">
          <div className="pt-8 border-gray-100 ">
            <div className="mb-5 flex justify-between ">
              <dl>
                <dt class="-mb-1 text-sm text-gray-500">Priority rank</dt>
                <dd class="font-semibold">{priority}/233</dd>
              </dl>

              <AreaChart
                width={200}
                height={50}
                data={gaussian(parseInt(400 * (1 - priority / 233)))}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5
                }}
              >
                <defs>
                  <linearGradient id="past" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="pre" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8956FF" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#8956FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  // type="monotone"
                  strokeWidth={3}
                  dataKey="past"
                  stroke="#DDD6FE"
                  fillOpacity={1}
                  fill="url(#past)"
                />
                <Area
                  // type="monotone"
                  strokeWidth={3}
                  dataKey="pre"
                  stroke="#8956FF"
                  fillOpacity={1}
                  fill="url(#pre)"
                />
              </AreaChart>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
