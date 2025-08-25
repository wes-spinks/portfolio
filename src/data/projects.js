export const workProjects = [
    {
      title: "CI/CD Pipelines",
      description: "Custom SDLC pipelines, from linting, testing, and security scanning to release, rollbacks, and rollouts - using a variety of tools",
      technologies: ["Jenkins", "Ansible", "GitLab CI/CD", "Github", "Tekton"],
      image: "/screens/gitlab_cicd.png"
    },
    {
      title: "Authentication Proxy",
      description: "OIDC proxy service integrates Red Hat Composer AI Chatbot (customer demo) with enterprise SSO, protecting internal APIs and services. https://github.com/redhat-composer-ai/appOfApps/pull/24",
      technologies: ["Keycloak", "ArgoCD", "Helm", "OAuth2", "React", "Quarkus"],
      image: "/screens/composer_oauth.png"
    },
    {
      title: "Retrieval-augmented Generative AI",
      description: "Integrated vector search and LLMs to provide contextual answers to enterprise knowledge base queries.",
      technologies: ["LangChain", "Postgres", "OpenAI", "vLLM", "Streamlit", "GraphRAG"],
      image: "/screens/shadowgpt-ui.png"
    },
    {
      title: "ETL and ELT Pipelines",
      description: "Secure data pipelines, including Snowflake data to vector store for HNSW knowledge graph search.",
      technologies: ["Astronomer", "Apache Airflow", "OpenShift", "Streamlit", "Jupyter", "Snowflake", "LlamaIndex", "Postgres"],
      image: "/screens/airflow-dags.png"
    },
    {
      title: "Model Inference Services",
      description: "Cloud-native LLM completion services using popular Python libraries",
      technologies: ["vLLM", "K8s", "Ollama", "llama-cpp", "AWS S3", "Minio", "InstructLab"],
      image: "/screens/vLLM_startup.png"
    },
    {
      title: "Natural Language to SQL Agent",
      description: "NLP to SQL agent takes natural language chats and queries central data warehouse",
      technologies: ["Autogen", "LangGraph", "LangChain", "Snowflake"],
      image: "/screens/nlp-sql-agent.png"
    },
    {
      title: "AI Code Assist",
      description: "Explored various code assist tools, providing feedback for wider enterprise consumption",
      technologies: ["MCP", "Google Gemini", "Claude Code", "Cursor", "Cline", "WatsonX", "Github Copilot"],
      image: "/screens/ai-coding.png"
    },
  ]
  
  export const sideProjects = [
    {
      title: "Godot Game Development",
      description: "Prototype server-client 3D game exploring collision meshes, textures, physics, and 3D modeling",
      technologies: ["GDScript", "Blender", ],
      image: "/screens/godot-1.png"
    },
    {
      title: "Clover-Google Integrations",
      description: "Assisting local small businesses with Clover inventory management APIs via Google Sheets and Google Apps Script",
      technologies: ["Clover API", "Google API", "GCP", "AppSheet"],
      image: "/screens/clover-gas.png"
    },
  ]
  