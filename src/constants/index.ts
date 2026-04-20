export interface ProjectTag {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: ProjectTag[];
}

export interface Social {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: string[];
}

export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".Net", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Ef Core", path: "/assets/logos/efcore.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: ".NET Core", path: "/assets/logos/dotnetcore.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials: Social[] = [
  {
    name: "Gmail",
    href: "mailto:davidyuan0158@gmail.com",
    icon: "/assets/socials/gmail.svg",
  },
  {
    name: "Telegram",
    href: "https://t.me/david_yuan2",
    icon: "/assets/socials/telegram.svg"
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/david-yuan-b36b70a6",
    icon: "/assets/socials/linkedin.svg",
  }
];

export const experiences: Experience[] = [
  {
    title: "Google",
    job: "Senior Software Engineer",
    date: "07/2022-Present",
    contents: [
      "Architected and scaled high-throughput distributed backend systems for critical product and platform workflows, designing low-latency microservices, gRPC and REST APIs, asynchronous processing layers, and fault-tolerant service boundaries across large-scale production systems.",
      "Delivered senior-level technical leadership on core platform initiatives, driving architecture decisions, service design, code quality standards, rollout strategies, and cross-team technical alignment for systems with strict SLO, reliability, and operability requirements.",
      "Built cloud-native services in Python, Java, and Go on GCP, using Kubernetes, Pub/Sub, Bigtable, Spanner, Redis, and GCS to support highly available, scalable, and resilient event-driven workflows.",
      "Designed and optimized large-scale data platforms that ingested, transformed, and served high-volume product telemetry and behavioral data, leveraging BigQuery, Airflow, SQL, and batch and streaming pipelines to power analytics, experimentation, and feature development.",
      "Implemented scalable ETL workflows, data models, and data quality frameworks for product intelligence and operational reporting, improving data freshness, schema consistency, lineage visibility, and query performance for downstream consumers.",
    ],
  },
  {
    title: "Paxos",
    job: "Senior Software Engineer",
    date: "11/2021 – 07/2022",
    contents: [
      "Built backend systems for regulated financial infrastructure and digital asset platforms, designing secure transaction services, ledger workflows, and auditable APIs for high-integrity payments, settlement, and asset movement use cases.",
      "Developed resilient microservices in Python and Java using cloud-native architectures, with strong emphasis on correctness, idempotency, reconciliation, and failure recovery across distributed transaction-processing environments.",
      "Strengthened ledger-adjacent data flows and financial event pipelines using Kafka, PostgreSQL, SQL, and batch and streaming processing patterns, improving traceability, downstream reporting accuracy, and reconciliation efficiency across operational systems.",
      "Designed data ingestion and normalization workflows for transaction, account, and balance events, enabling more consistent analytics, compliance reporting, and internal financial observability across multiple product surfaces.",
      "Built scalable ETL workflows, data models, and backend storage patterns for transactional records, improving schema consistency, data lineage, query performance, and trusted access to financial datasets.",
    ],
  },
  {
    title: "Goldman Sachs",
    job: "Software Engineer",
    date: "07/2018 – 11/2021",
    contents: [
      "Engineered scalable backend services and internal financial platforms, building Java and Python microservices, workflow orchestration layers, and integration APIs to support transaction-heavy business operations in a high-reliability environment.",
      "Designed and implemented service-oriented architecture patterns for enterprise financial applications, improving modularity, maintainability, deployment safety, and system throughput across complex multi-service platforms.",
      "Built data engineering workflows for operational and analytical use cases, including data ingestion, transformation, and publishing of high-volume financial events using Kafka, SQL, ETL pipelines, and warehouse-oriented data models.",
      "Developed robust batch and stream processing paths for transaction reporting, operational dashboards, and internal analytics, improving data freshness, reconciliation transparency, and downstream decision support for business and engineering teams.",
      "Optimized database access, indexing strategy, query performance, and data synchronization patterns across Oracle and PostgreSQL, improving latency and stability for high-value financial workflows.",
    ],
  },
  {
    title: "Akamai Technologies",
    job: "Software Engineer Intern",
    date: "03/2017 – 08/2017",
    contents: [
      "Contributed to backend and infrastructure engineering for internet-scale edge, CDN, and delivery systems, working on service components, automation, and operational tooling for highly distributed production environments.",
      "Built internal tools, automation scripts, and service-supporting utilities in Python and Linux environments to improve system diagnostics, workflow automation, and engineering productivity across large-scale networking and platform operations.",
      "Assisted with data processing and analysis workflows for service telemetry, log data, and operational metrics, helping improve visibility into performance behavior, accelerate debugging, and strengthen system validation for distributed services.",
      "Worked with production-oriented engineering practices including testing, code review, performance profiling, and reliability-focused development, gaining early experience with distributed systems, service reliability, and scalable backend software design.",
    ],
  },
];

export const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
