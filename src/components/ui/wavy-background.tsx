// "use client";
// import { cn } from "@/lib/utils";
// import React, { useEffect, useRef, useState } from "react";
// import { createNoise3D } from "simplex-noise";

// export const WavyBackground: React.FC<{
//     children?: React.ReactNode;
//     className?: string;
//     containerClassName?: string;
//     colors?: string[];
//     waveWidth?: number;
//     backgroundFill?: string;
//     blur?: number;
//     speed?: "slow" | "fast";
//     waveOpacity?: number;
//     [key: string]: any;
// }> = ({
//     children,
//     className,
//     containerClassName,
//     colors,
//     waveWidth,
//     backgroundFill,
//     blur = 10,
//     speed = "fast",
//     waveOpacity = 0.5,
//     ...props
// }) => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const [isClient, setIsClient] = useState(false); // Ensure the component runs only on the client
//     const [isSafari, setIsSafari] = useState(false);

//     useEffect(() => {
//         // Ensure this runs only on the client
//         setIsClient(true);

//         // Detect Safari browser
//         setIsSafari(
//             typeof window !== "undefined" &&
//                 navigator.userAgent.includes("Safari") &&
//                 !navigator.userAgent.includes("Chrome")
//         );
//     }, []);

//     useEffect(() => {
//         if (!isClient) return; // Prevent running on the server

//         const noise = createNoise3D();
//         let w: number, h: number, nt: number, ctx: CanvasRenderingContext2D | null;
//         let animationId: number;

//         const getSpeed = () => {
//             switch (speed) {
//                 case "slow":
//                     return 0.001;
//                 case "fast":
//                     return 0.002;
//                 default:
//                     return 0.001;
//             }
//         };

//         const init = () => {
//             const canvas = canvasRef.current;
//             if (!canvas) return;

//             ctx = canvas.getContext("2d");
//             if (!ctx) return;

//             w = ctx.canvas.width = window.innerWidth;
//             h = ctx.canvas.height = window.innerHeight;
//             ctx.filter = `blur(${blur}px)`;
//             nt = 0;

//             window.onresize = function () {
//                 w = ctx!.canvas.width = window.innerWidth;
//                 h = ctx!.canvas.height = window.innerHeight;
//                 ctx!.filter = `blur(${blur}px)`;
//             };

//             render();
//         };

//         const waveColors = colors ?? [
//             "#38bdf8",
//             "#818cf8",
//             "#c084fc",
//             "#e879f9",
//             "#22d3ee",
//         ];

//         const drawWave = (n: number) => {
//             if (!ctx) return;
//             nt += getSpeed();
//             for (let i = 0; i < n; i++) {
//                 ctx.beginPath();
//                 ctx.lineWidth = waveWidth || 50;
//                 ctx.strokeStyle = waveColors[i % waveColors.length];
//                 for (let x = 0; x < w; x += 5) {
//                     const y = noise(x / 800, 0.3 * i, nt) * 100;
//                     ctx.lineTo(x, y + h * 0.5); // Adjust for height, currently at 50% of the container
//                 }
//                 ctx.stroke();
//                 ctx.closePath();
//             }
//         };

//         const render = () => {
//             if (!ctx) return;
//             ctx.fillStyle = backgroundFill || "black";
//             ctx.globalAlpha = waveOpacity || 0.5;
//             ctx.fillRect(0, 0, w, h);
//             drawWave(5);
//             animationId = requestAnimationFrame(render);
//         };

//         init();

//         return () => {
//             cancelAnimationFrame(animationId);
//         };
//     }, [isClient, blur, speed, colors, waveWidth, backgroundFill, waveOpacity]);

//     return (
//         <div
//             className={cn(
//                 "h-screen flex flex-col items-center justify-center",
//                 containerClassName
//             )}
//         >
//             {isClient && (
//                 <canvas
//                     className="absolute inset-0 z-0"
//                     ref={canvasRef}
//                     id="canvas"
//                     style={{
//                         ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
//                     }}
//                 ></canvas>
//             )}
//             <div className={cn("relative z-10", className)} {...props}>
//                 {children}
//             </div>
//         </div>
//     );
// };
