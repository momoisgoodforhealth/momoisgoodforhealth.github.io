import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";

const CONTACT = {
  name: "Shovan Shakya",
  tagline: "Embedded / Firmware",
  email: "shoban.shakya@gmail.com",
  phone: "813-809-6496",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shovan-shakya-45526317b/" },
    { label: "GitHub", href: "https://github.com/momoisgoodforhealth" },
   { label: "Resume (PDF)", href: "resume.pdf", download: true },
  ],
  resumeHref: "resume.pdf",
};

const PROJECTS = [
  {
    id: "reekon",
    title: "Current Job: REEKON Tools",
    subtitle: "Embedded Software Engineer",
    videos: [
      { url: "./t1r.mp4", playing: true, loop: true, muted: true },
      { url: "./goertzel.mp4", playing: true, loop: true, muted: true },
    ],
    expandable: {
      label: "",
      images: [
        { src: "./IMG_4450.jpg", alt: "REEKON Tools project photo" },
        { src: "./IMG_4455.jpg", alt: "REEKON Tools project photo" },
      ],
      videos: [{ url: "./IMG_4357.mp4", playing: true, loop: true, muted: true, controls: true }],
    },
  },
  {
    id: "zynq",
    title: "ZYNQ Image Processing – Connected Component Labelling",
    subtitle: "FPGA/SoC image processing pipeline demo",
    images: [{ src: "./zynq.png", alt: "ZYNQ screenshot" }],
    videos: [{ url: "https://www.youtube.com/shorts/pgks__EZI3E" }],
  },
  {
    id: "fnirs",
    title: "Functional Near Infrared Spectroscopy Headset",
    subtitle: "Capstone project",
    links: [{ label: "Capstone Link", href: "https://bci-fnirs.github.io/" }],
    images: [{ src: "./IMG_3250.jpg", alt: "fNIRS headset photo" }],
  },
  {
    id: "stm32",
    title: "STM32 IMU Sensor Platform with CAN and Ethernet",
    subtitle: "Hardware + embedded platform work",
    images: [
      { src: "./moduleschem.png", alt: "Module schematic" },
      { src: "./modulepcb.png", alt: "PCB layout" },
      { src: "./module3d1.png", alt: "3D render" },
      { src: "./module3d2.png", alt: "3D render angle 2" },
    ],
  },
  {
    id: "mbari",
    title: "Monterey Bay Aquarium Research Institute (MBARI)",
    subtitle: "Stereo vision + fisheye disparity + distance estimation",
    links: [
      { label: "MBARI", href: "https://www.mbari.org/" },
      { label: "GitHub – Stereovision", href: "https://github.com/momoisgoodforhealth/Stereovision" },
      { label: "Paper", href: "https://www.mbari.org/wp-content/uploads/Shakya_Shovan.pdf" },
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1LC6_ez7sk5ZSmQTdiO0k_Ne_mjp_kn4VQ116n-8X_hw/edit?usp=sharing",
      },
    ],
    videos: [
      { url: "https://youtu.be/HjspPxy8HYE" },
      { url: "https://youtu.be/-WozIKdKqKQ" },
      { url: "https://youtu.be/YaTxnYlS3kk" },
    ],
  },
  {
    id: "riscv",
    title: "16-bit RISC-V Microprocessor – FPGA Implementation",
    subtitle: "Custom CPU design + FPGA implementation",
    images: [{ src: "./mips.png", alt: "CPU/FPGA screenshot" }],
  },
  {
    id: "ml",
    title: "Image Classification Methods on Custom Data",
    subtitle: "Report / writeup",
    links: [
      {
        label: "Final Report (PDF)",
        href: "https://github.com/momoisgoodforhealth/ML/blob/main/EEL4774_finalreport.pdf",
      },
    ],
  },
  {
    id: "reed",
    title: "Rehabilitation Engineering and Electromechanical Design Lab (2023)",
    subtitle: "As a research project for analyzing biosignals, I created a driving simulator for a 6DOF motion system. Driving Simulator was made using Unity. Communication with the motion system computer was done using ESP NOW.",
    links: [
      { label: "REED Lab", href: "http://reedlab.eng.usf.edu/" },
      { label: "GitHub – CAREN Driving Simulator", href: "https://github.com/momoisgoodforhealth/IAE-Driving-Sim" },
    ],
    videos: [{ url: "https://youtu.be/BI3HAqEKuM8" }],
  },
  {
    id: "fft",
    title: "nRF5340 Zephyr RTOS FFT Visualizer",
    subtitle: "BLE data transfer + CMSIS DSP FFT + visualization",
    images: [
      { src: "./fft.jpeg", alt: "FFT visualizer screenshot" },
      { src: "./ble.png", alt: "BLE diagram" },
    ],
  },
  {
    id: "khel",
    title: "Khel Android App (2020)",
    subtitle: "In my final year of highschool, I had this idea that playing sports and interacting with people is one of the best ways to make friends. So I made an app that allows users to book futsal venues, form teams and challenge each other.",
    links: [{ label: "GitHub – Khel", href: "https://github.com/momoisgoodforhealth/Khel-Android-App" }],
    videos: [{ url: "https://youtube.com/shorts/_jeOAJ3J_G8?feature=share" }],
  },
];

const PROJECT_ORDER = [
  "reekon",
  "zynq",
  "fnirs",
  "stm32",
  "mbari",
  "reed",
  "riscv",
  "ml",
  "fft",
  "khel",
];

const DISPLAY_PROJECTS = PROJECT_ORDER
  .map((projectId) => PROJECTS.find((project) => project.id === projectId))
  .filter(Boolean);

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}

function MediaGrid({ images }) {
  if (!images?.length) return null;
  return (
    <div className="mediaGrid">
      {images.map((img) => (
        <img
          key={img.src}
          className="mediaImg"
          src={img.src}
          alt={img.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}

function VideoBlock({ videos }) {
  if (!videos?.length) return null;
  return (
    <>
      {videos.map((video) => (
        <div key={video.url} className="videoWrap">
          <div className="videoInner">
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              controls={video.controls ?? true}
              playing={video.playing}
              loop={video.loop}
              muted={video.muted}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default function App() {
  const lastUpdated = "1999-09-07"; // change to whatever you want for the joke
  const visitorCount = "00018427";  // fake counter
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (projectId) => {
    setExpandedProjects((current) => ({
      ...current,
      [projectId]: !current[projectId],
    }));
  };

  return (
    <div className="page">
      <h1 className="topTitle">{CONTACT.name}'s Home Page</h1>
      <hr className="hrClassic" />

      <div className="navRow">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#links">Links</a>
        <a href="#contact">Contact</a>
        <a href={CONTACT.resumeHref} download>
          Resume (PDF)
        </a>
      </div>

      {/* <div className="marquee">
        <b>NEWS:</b> This website is under construction. Please excuse the mess.
        {" "}
        <span className="small">(We are adding GIFs soon.)</span>
      </div> */}

      <section id="about" className="section">
        <h2>About</h2>
        <div className="box">
          <p style={{ marginTop: 0 }}>
            Welcome to my personal webpage. I find embedded systems and hardware acceleration stuff interesting.
          </p>
          <ul className="ulCompact">
            {/* <li>Interests: RTOS, Embedded Linux, computer vision, sensors, motor control</li> */}
            {/* <li>Currently: building and shipping real products + prototypes</li> */}
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="box">
          <p className="small muted" style={{ marginTop: 0 }}>
            Jump to:
            {" "}
            {DISPLAY_PROJECTS.map((p, i) => (
              <span key={p.id}>
                <a href={`#${p.id}`}>{p.title}</a>
                {i < DISPLAY_PROJECTS.length - 1 ? " | " : ""}
              </span>
            ))}
          </p>
        </div>

        {DISPLAY_PROJECTS.map((p) => (
          <div key={p.id} id={p.id} className="project">
            <div className="projectTitle">{p.title}</div>
            {p.subtitle ? <div className="projectSub">{p.subtitle}</div> : null}

            {p.links?.length ? (
              <ul className="ulCompact">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <ExternalLink href={l.href}>{l.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            ) : null}

            <MediaGrid images={p.images} />
            <VideoBlock videos={p.videos} />

            {p.expandable ? (
              <>
                <button
                  type="button"
                  className="small expandButton"
                  onClick={() => toggleProject(p.id)}
                  aria-expanded={Boolean(expandedProjects[p.id])}
                >
                  {expandedProjects[p.id] ? "Hide" : p.expandable.label}
                </button>
                {expandedProjects[p.id] ? (
                  <>
                    <MediaGrid images={p.expandable.images} />
                    <VideoBlock videos={p.expandable.videos} />
                  </>
                ) : null}
              </>
            ) : null}

            <div className="small" style={{ marginTop: 8 }}>
              <a href="#projects">Back to top</a>
            </div>

            <hr className="hrClassic" />
          </div>
        ))}
      </section>

      <section id="links" className="section">
        <h2>Links</h2>
        <div className="box">
          <ul className="ulCompact">
            {CONTACT.links.map((l) => (
              <li key={l.href}>
                <ExternalLink href={l.href}>{l.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="box">
          <p style={{ marginTop: 0 }}>
            Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <br />
            Phone: {CONTACT.phone}
          </p>
        </div>
      </section>

      {/* <div className="footer">
        <div className="counterRow">
          <span className="small">Last updated: {lastUpdated}</span>
          <span className="small">|</span>
          <span className="small">Visitors:</span>
          <span className="counter">{visitorCount}</span>
        </div>
        <div className="small muted" style={{ marginTop: 8 }}>
          © {CONTACT.name}. All rights reserved. (Do not hotlink my images.)
        </div>
      </div> */}
    </div>
  );
}
