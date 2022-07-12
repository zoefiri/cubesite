function RandomCircles({ orientation, quantity, bound, minRad, maxRad }) {
   let resamples = {"iters":4, "thresh":.5};
   let points = [];
   for(const i of new Array(quantity).keys()) {
      let radius = Math.floor(Math.random()*(maxRad-minRad) + minRad);
      let x_rand = Math.floor(Math.random()*100);
      let y_rand = Math.floor(Math.random()*bound);
      for(const j of new Array(resamples.iters).keys()) { // reroll rng if
         if(y_rand > Math.random()*(bound*resamples.thresh)) {
            y_rand = Math.floor(Math.random()*bound);
            resamples.thresh **= .5;
         }
      }
      points[i] = {x:x_rand, y:y_rand, radius:radius};
   }

   switch(orientation) {
      case "top":
         break;
      case "bottom":
         for(const i in points) {
            points[i].y = 100-points[i].y;
         }
         break;
      case "left":
         let buff;
         for(const i in points) {
            buff = points[i].x;
            points[i].x = points[i].y;
            points[i].y = buff;
         }
         break;
      case "right":
         for(const i in points) {
            buff = points[i].x;
            points[i].x = 100-points[i].y;
            points[i].y = buff;
         }
         break;
   }

   return ( 
      <svg style={{width:"100%", height:"100%"}}>
         <defs>
            <linearGradient id="MaskGradient" x1="0" x2="0" y1="0" y2="1">
               <stop offset="45%"  stopColor="#FFFFFF"/>
               <stop offset="95%" stopColor="#000000"/>
            </linearGradient>
            <mask id="CirclesMask">
               <rect fill="#FFFFFF" x={0} y={0} width="100%" height="100%"/>
               {points.map((p) => <circle fill="#000000" cx={p.x+"%"} cy={p.y+"%"} r={p.radius+"px"}/>)}
            </mask>
         </defs>
      </svg>
                
   );
}

export default RandomCircles;
