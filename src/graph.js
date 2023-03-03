import react, { useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";
import d from "./d";
function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i, name: "Python" })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
      }))
  };
}

export default function Graph({ data }) {
  const forceRef = useRef();

  useEffect(() => {
    // forceRef.current.d3Force("gravity").strength(0.05);
    // forceRef.current.d3Force("charge").strength(-300);
    // forceRef.current.d3Force("link").distance(250);
    //forceRef.current.d3Force("charge").distanceMax(150);
  }, []);
  return (
    <div className=" bg-indigo-50 shadow-lg flex justify-center p-2  ring-2 ring-purple-100   rounded-lg ">
      <ForceGraph2D
        // className="border-2 rounder"
        ref={forceRef}
        graphData={data}
        backgroundColor="#EEF2FF"
        width="690"
        height="700"
        minZoom={5}
        //nodeAutoColorBy="group"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;

          //let fontSize = 12 / globalScale;

          const fontSize = (8 + d[node.id]["stats"]["count_job"]) / globalScale;

          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(
            (n) => n + fontSize * 0.2
          ); // some padding

          ctx.fillStyle = "#EEF2FF";
          ctx.fillRect(
            node.x - bckgDimensions[0] / 2,
            node.y - bckgDimensions[1] / 2,
            ...bckgDimensions
          );

          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#4F46E5";
          ctx.fillText(label, node.x, node.y);

          node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
        }}
        onEngineStop={() => forceRef.current.zoomToFit(400)}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const bckgDimensions = node.__bckgDimensions;
          bckgDimensions &&
            ctx.fillRect(
              node.x - bckgDimensions[0] / 2,
              node.y - bckgDimensions[1] / 2,
              ...bckgDimensions
            );
        }}
      />
    </div>
  );
}
