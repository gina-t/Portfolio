import { useId, useRef } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the plugin outside of any component
gsap.registerPlugin(useGSAP);

type Star = [x: number, y: number, dim?: boolean, blur?: boolean];

interface BlurPointProps {
  blurId: string;
  point: Star;
  key?: number; // Make key optional
}

interface ConstellationProps {
  points: Star[];
  blurId: string;
  key?: number; // Make key optional
}

const stars: Array<Star> = [
  [4, 4, true, true],
  [4, 44, true],
  [36, 22],
  [50, 146, true, true],
  [64, 43, true, true],
  [76, 30, true],
  [101, 116],
  [140, 36, true],
  [149, 134],
  [162, 74, true],
  [171, 96, true, true],
  [210, 56, true, true],
  [235, 90],
  [275, 82, true, true],
  [306, 6],
  [307, 64, true, true],
  [380, 68, true],
  [380, 108, true, true],
  [391, 148, true, true],
  [405, 18, true],
  [412, 86, true, true],
  [426, 210, true, true],
  [427, 56, true, true],
  [538, 138],
  [563, 88, true, true],
  [611, 154, true, true],
  [637, 150],
  [651, 146, true],
  [682, 70, true, true],
  [683, 128],
  [781, 82, true, true],
  [785, 158, true],
  [832, 146, true, true],
  [852, 89],
];

const constellations: Array<Array<Star>> = [
  [
    [247, 103],
    [261, 86],
    [307, 104],
    [357, 36],
  ],
  [
    [586, 120],
    [516, 100],
    [491, 62],
    [440, 107],
    [477, 180],
    [516, 100],
  ],
  [
    [733, 100],
    [803, 120],
    [879, 113],
    [823, 164],
    [803, 120],
  ],
];

function Star({ blurId, point }: BlurPointProps) {
  const groupRef = useRef<SVGGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  // Use useGSAP within the component
  useGSAP(
    () => {
      if (!groupRef.current || !circleRef.current) return;

      const delay = Math.random() * 2;

      // Animation code
      gsap.to(groupRef.current, {
        opacity: 1,
        duration: 4,
        delay,
      });

      gsap.to(circleRef.current, {
        opacity: point[2] ? 0.5 : 0.6,
        scale: point[2] ? 1.2 : 1,
        duration: Math.random() * 2 + 2,
        delay,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    },
    { scope: groupRef }
  );

  return (
    <g ref={groupRef} className="opacity-0">
      <circle
        ref={circleRef}
        cx={point[0]}
        cy={point[1]}
        r={1}
        style={{
          transformOrigin: `${point[0] / 16}rem ${point[1] / 16}rem`,
          opacity: point[2] ? 0.2 : 1,
        }}
        filter={point[3] ? `url(#${blurId})` : undefined}
      />
    </g>
  );
}

function Constellation({ points, blurId }: ConstellationProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const constellationRef = useRef(null);
  const uniquePoints = points.filter(
    (point, pointIndex) =>
      points.findIndex((p) => String(p) === String(point)) === pointIndex
  );
  const isFilled = uniquePoints.length !== points.length;

  useGSAP(
    () => {
      if (!pathRef.current) {
        return;
      }
      // Create timeline for constellation animation
      const tl = gsap.timeline();

      // Animate the path stroke
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        visibility: 'visible',
        duration: 5,
        delay: Math.random() * 3 + 2,
      });

      // If it should be filled, add that animation
      if (isFilled) {
        tl.to(pathRef.current, {
          fill: 'rgb(255 255 255 / 0.02)',
          duration: 1,
        });
      }
    },
    { scope: constellationRef }
  );

  return (
    <g ref={constellationRef}>
      <path
        ref={pathRef}
        stroke="white"
        strokeOpacity="0.2"
        strokeDasharray={1}
        strokeDashoffset={1}
        pathLength={1}
        fill="transparent"
        d={`M ${points.map(([x, y]) => `${x},${y}`).join(' L ')}`}
        className="invisible"
      />
      {uniquePoints.map((point, pointIndex) => (
        <Star key={pointIndex} point={point} blurId={blurId} />
      ))}
    </g>
  );
}

export function StarField({ className }: { className?: string }) {
  const blurId = useId();
  const containerRef = useRef(null);

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 881 211"
      fill="white"
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70',
        className
      )}
    >
      <defs>
        <filter id={blurId}>
          <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
        </filter>
      </defs>
      {constellations.map((points, constellationIndex) => (
        <Constellation
          key={constellationIndex}
          points={points}
          blurId={blurId}
        />
      ))}
      {stars.map((point, pointIndex) => (
        <Star key={pointIndex} point={point} blurId={blurId} />
      ))}
    </svg>
  );
}
