
import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

const NeuronNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize nodes with smaller circles and faster movement
    const initNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = 50; // More neurons for better visibility
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6, // Faster movement
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 1.5, // Much smaller circles as shown in image
          connections: []
        });
      }

      // Create more connections for richer network
      nodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 3) + 5;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * nodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });

      nodesRef.current = nodes;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      
      // Update node positions with faster movement
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= node.radius || node.x >= canvas.width - node.radius) {
          node.vx *= -1;
        }
        if (node.y <= node.radius || node.y >= canvas.height - node.radius) {
          node.vy *= -1;
        }

        // Keep within bounds
        node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
      });

      // Draw connections with subtle opacity
      ctx.strokeStyle = "rgba(169, 169, 169, 0.3)";
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          if (target) {
            const distance = Math.sqrt(
              Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
            );
            
            if (distance < 180) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw smaller nodes
      nodes.forEach(node => {
        // Subtle outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, "rgba(212, 212, 212, 0.4)");
        gradient.addColorStop(0.5, "rgba(169, 169, 169, 0.2)");
        gradient.addColorStop(1, "rgba(169, 169, 169, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Main small node
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius
        );
        // nodeGradient.addColorStop(0, "#f0f0f0");
        // nodeGradient.addColorStop(0.7, "#d4d4d4");
        // nodeGradient.addColorStop(1, "#a9a9a9");

        nodeGradient.addColorStop(0, "#cce6ff"); // very light blue
nodeGradient.addColorStop(0.7, "#80bfff"); // medium blue
nodeGradient.addColorStop(1, "#3385ff"); // dark blue

        
        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Tiny inner highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(node.x - node.radius * 0.3, node.y - node.radius * 0.3, node.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initNodes();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ background: "transparent" }}
    />
  );
};

export default NeuronNetwork;















// import { useEffect, useRef } from "react";

// interface Node {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;
//   connections: number[];
// }

// const NeuronNetwork = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();
//   const nodesRef = useRef<Node[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const initNodes = () => {
//       const nodes: Node[] = [];
//       const nodeCount = 150;
      
//       for (let i = 0; i < nodeCount; i++) {
//         nodes.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.6,
//           vy: (Math.random() - 0.5) * 2,
//           radius: Math.random() * 2 + 1.5,
//           connections: []
//         });
//       }

//       nodes.forEach((node, i) => {
//         const connectionCount = Math.floor(Math.random() * 3) + 5;
//         for (let j = 0; j < connectionCount; j++) {
//           const targetIndex = Math.floor(Math.random() * nodes.length);
//           if (targetIndex !== i && !node.connections.includes(targetIndex)) {
//             node.connections.push(targetIndex);
//           }
//         }
//       });

//       nodesRef.current = nodes;
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const nodes = nodesRef.current;

//       // Update node positions
//       nodes.forEach(node => {
//         node.x += node.vx;
//         node.y += node.vy;

//         if (node.x <= node.radius || node.x >= canvas.width - node.radius) {
//           node.vx *= -1;
//         }
//         if (node.y <= node.radius || node.y >= canvas.height - node.radius) {
//           node.vy *= -1;
//         }

//         node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
//         node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
//       });

//       const maxDistance = 220;
//       const maxConnections = 11;

//       // Draw connections with dynamic gray based on distance
//       nodes.forEach((node) => {
//         node.connections.forEach(targetIndex => {
//           const target = nodes[targetIndex];
//           if (target) {
//             const dx = target.x - node.x;
//             const dy = target.y - node.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < maxDistance) {
//               const opacity = 1 - distance / maxDistance; // closer = more opaque
//               const grayValue = Math.floor(50 + 100 * opacity); // from 50 (dark) to 150 (light)
//               ctx.strokeStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${opacity * 0.7})`;
//               ctx.lineWidth = 1;

//               ctx.beginPath();
//               ctx.moveTo(node.x, node.y);
//               ctx.lineTo(target.x, target.y);
//               ctx.stroke();
//             }
//           }
//         });
//       });

//       // Draw nodes with color intensity based on connection count
//       nodes.forEach(node => {
//         const intensity = Math.min(node.connections.length / maxConnections, 1);
//         const grayValue = Math.floor(200 - 150 * intensity); // 200 = light gray, 50 = dark gray

//         // Outer glow gradient
//         const gradient = ctx.createRadialGradient(
//           node.x, node.y, 0,
//           node.x, node.y, node.radius * 2
//         );
//         gradient.addColorStop(0, `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.4)`);
//         gradient.addColorStop(0.5, `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.2)`);
//         gradient.addColorStop(1, `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0)`);

//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
//         ctx.fill();

//         // Main node gradient
//         const nodeGradient = ctx.createRadialGradient(
//           node.x, node.y, 0,
//           node.x, node.y, node.radius
//         );
//         nodeGradient.addColorStop(0, `rgb(${grayValue}, ${grayValue}, ${grayValue})`);
//         nodeGradient.addColorStop(0.7, `rgb(${Math.floor(grayValue * 0.7)}, ${Math.floor(grayValue * 0.7)}, ${Math.floor(grayValue * 0.7)})`);
//         nodeGradient.addColorStop(1, `rgb(${Math.floor(grayValue * 0.4)}, ${Math.floor(grayValue * 0.4)}, ${Math.floor(grayValue * 0.4)})`);

//         ctx.fillStyle = nodeGradient;
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
//         ctx.fill();

//         // Inner highlight (lighter for less connected nodes)
//         ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * (1 - intensity)})`;
//         ctx.beginPath();
//         ctx.arc(node.x - node.radius * 0.3, node.y - node.radius * 0.3, node.radius * 0.3, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     initNodes();
//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full opacity-60"
//       style={{ background: "transparent" }}
//     />
//   );
// };

// export default NeuronNetwork;

