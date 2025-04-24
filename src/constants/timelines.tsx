import { TimeLineType } from "@/types/timelines";

export const timelineData: TimeLineType[] = [
  {
    company: "Libber",
    role: "Fullstack Developer",
    stacks: [
      "Go", 
      "TypeScript", 
      "Next.js", 
      "React", 
      "PostgreSQL", 
      "Drizzle ORM", 
      "TailwindCSS", 
      "Node.js", 
      "AWS", 
      "RabbitMQ", 
      "Redis", 
      "Prometheus", 
      "N8N (Zapier alternative)", 
      "Grafana"
    ],
    date: "05/11/2023 - Present",
    description: "Temp staffing startup",
    location: "Brazil, Distrito Federal - Hybrid",
    responsibilities: [
      `Developed and maintained the Core API using Go, Fiber, SQLC, Goose, Swagger, and RabbitMQ,
       implementing DDD and event-driven architecture.`,
      `Designed and built Talent Rating and Talent Profile functionalities end to end, handling both 
      backend logic and frontend integration and components.`,
      `Enhanced operational workflow automation, reducing manual workload by 30% and 
      increasing processing speed for shift management.`,
      `Deployed backend services using Docker and AWS (EC2 for hosting, S3 for talent image 
      storage). implemented monitoring with Prometheus and Grafana for performance tracking 
      and alerts.`
    ]
  },
  {
    company: "Spot",
    role: "Frontend Developer",
    stacks: [
      "TypeScript", 
      "Next.js", 
      "sanity.io", 
      "stitches", 
      "framer-motion",
      "figma"
    ],
    date: "01/06/2023 - 01/11/2023",
    description: "Human resources company",
    location: "Brazil, Distrito Federal - Remote",
    responsibilities: [
      "Rebuilt the entire landing page by improving UI/UX design and implementing new features.",
      "Implemented SEO improvements to increase visibility and organic traffic.",
      "Collaborated with the team on UI/UX design to create a consistent and engaging user experience across the platform."
    ]
  },
  {
    company: "Hackerone",
    role: "Web Application Analyst",
    stacks: [
      "JavaScript", 
      "Python", 
      "Bash", 
      "Rest API", 
      "Postman"
    ],
    date: "16/10/2022 - 25/04/2023",
    description: "Freelance web application testing and analysis",
    location: "Brazil, Distrito Federal",
    responsibilities: [
      "Conducted web application testing and security analysis for companies like Ford, Sony Corporation, Xfinity, and Bungie to help secure their applications.",
      "Identified bugs and vulnerabilities by analyzing and testing the source code (JavaScript), functionalities, and APIs of web applications.",
      "Utilized tools such as Postman for API testing and performed manual and automated testing to ensure application integrity."
    ]
  }
];
