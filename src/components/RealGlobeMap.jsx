import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function RealGlobeMap() {
  const wrapperRef = useRef();
  const globeRef = useRef();
  const [countries, setCountries] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data.features || []));
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const { width, height } = wrapperRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleGlobeReady = () => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enableDamping = true;

    globeRef.current.pointOfView({ lat: 20, lng: 10, altitude: 2.2 });
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        maxWidth: 480,
        height: 480,
        background: "#04070f",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        onGlobeReady={handleGlobeReady}
        backgroundColor="#04070f"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#4da3ff"
        atmosphereAltitude={0.18}
        /* حدود الدول فقط */
        polygonsData={countries}
        polygonCapColor={() => "rgba(210, 235, 190, 0.85)"}
        polygonSideColor={() => "rgba(120, 150, 110, 0.3)"}
        polygonStrokeColor={() => "#e05a5a"}
        polygonAltitude={0.006}
        polygonLabel={(d) => `<b>${d.properties?.name || "Country"}</b>`}
      />
    </div>
  );
}
