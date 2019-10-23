const express = require("express");

const server = express();

server.use(express.json());

//Armazenamento
let projects = [];

let cont = 0;

// Middlewares
function verifyProjectId(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}

server.use((req, res, next) => {
  console.count("Número de requisições");
  next();
});

// Rotas
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", verifyProjectId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.forEach(project => {
    if (project.id == id) {
      project.title = title;
      return res.json(project);
    }
  });
  return res.send();
});

server.delete("/projects/:id", verifyProjectId, (req, res) => {
  const { id } = req.params;

  projects = projects.filter(project => project.id != id);

  return res.send();
});

server.post("/projects/:id/tasks", verifyProjectId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.forEach(project => {
    if (project.id == id) {
      project.tasks.push(title);
      return res.json(project);
    }
  });

  return res.send();
});

// Porta
server.listen(3000);
