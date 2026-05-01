import { Box, Package, Cloud, Terminal, GitBranch, Shield, Zap, Layers, Server, Activity, Lock, Eye, Globe } from 'lucide-react';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  icon: any;
  content: string;
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const DEVOPS_BRANCHES: Module[] = [
  {
    id: 'unit-1',
    title: 'Unit 1: Fundamentals of DevOps',
    lessons: [
      {
        id: 'devops-overview',
        title: 'Definition & Significance',
        icon: Zap,
        content: `
# Overview of DevOps
DevOps is the union of people, process, and products to enable continuous delivery of value to our end users.

## Significance:
- **Speed**: Move at high velocity to innovate for customers faster.
- **Rapid Delivery**: Increase frequency and pace of releases.
- **Reliability**: Ensure the quality of application updates.
- **Improved Collaboration**: Build more effective teams under a DevOps culture.

## Key Principles:
1. **Automation**: Minimize manual work.
2. **Iteration**: Deliver small patches frequently.
3. **Collaboration**: DevOps is about breaking silos between Dev and Ops.
        `,
        quiz: [
          {
            id: 'u1-q1',
            question: 'What is the primary goal of DevOps significance?',
            options: ['Reducing team size', 'Enabling continuous delivery of value', 'Increasing manual testing', 'Replacing developers with AI'],
            correctAnswer: 1,
            explanation: 'DevOps focuses on delivering value continuously through better collaboration and automation.'
          }
        ]
      },
      {
        id: 'devops-evolution',
        title: 'Evolution & Challenges',
        icon: Activity,
        content: `
# Evolution of DevOps
DevOps evolved from Agile software development to improve the collaboration between software developers and IT infrastructure professionals.

## Challenges of Implementation:
- **Cultural Change**: Moving from silos to a shared responsibility model.
- **Complexity**: Managing distributed systems at scale.
- **Skill Set**: DevOps Engineers are expected to understand both code and infrastructure.
- **Legacy Systems**: Integrating modern practices with older monolithic applications.
        `,
        quiz: [
          {
            id: 'u1-q2',
            question: 'Which of these is a major challenge in implementing DevOps?',
            options: ['Using too much paper', 'Breaking down cultural silos', 'Internet speed', 'Finding a good office space'],
            correctAnswer: 1,
            explanation: 'Cultural change is often cited as the most difficult part of a DevOps transformation.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    title: 'Unit 2: VCS - Git & GitHub',
    lessons: [
      {
        id: 'vcs-intro',
        title: 'Intro to Version Control',
        icon: GitBranch,
        content: `
# Version Control Systems (VCS)
VCS is a software tool that helps software teams manage changes to source code over time.

## Git Fundamentals:
- **Repository**: A central place where data is stored and managed.
- **Commit**: A snapshot of your changes.
- **Branching**: Creating a separate line of development.
- **Merging**: Combining different branches back together.

## Basic Git Commands:
- \`git init\`: Initialize a new repo.
- \`git add .\`: Stage changes.
- \`git commit -m "msg"\`: Save changes.
- \`git status\`: Check the state of the working directory.
        `,
        quiz: [
          {
            id: 'u2-q1',
            question: 'Which command is used to record changes to the repository?',
            options: ['git record', 'git save', 'git commit', 'git log'],
            correctAnswer: 2,
            explanation: '\'git commit\' creates a snapshot of the staged changes.'
          }
        ]
      },
      {
        id: 'github-collab',
        title: 'GitHub & Collaboration',
        icon: Globe,
        content: `
# Collaboration with GitHub
GitHub is a hosting service for Git repositories, providing a web-based interface and social features.

## Workflows:
- **Pull Requests (PRs)**: Proposing changes to a repository.
- **Code Reviews**: Collaboratively checking code before it's merged.
- **Issue Tracking**: Managing bugs and feature requests.
- **Conflict Resolution**: Handling situations where multiple people edit the same file.
        `,
        quiz: [
          {
            id: 'u2-q2',
            question: 'What is a Pull Request in GitHub?',
            options: ['Asking a server for data', 'A way to propose changes to a repository', 'Deleting a branch', 'Downloading a file'],
            correctAnswer: 1,
            explanation: 'Pull Requests allow contributors to tell others about changes they\'ve pushed to a branch in a repository.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Jenkins CI/CD',
    lessons: [
      {
        id: 'jenkins-intro',
        title: 'Jenkins Setup & Config',
        icon: Server,
        content: `
# Jenkins Basics
Jenkins is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying.

## Installation Steps:
1. **Java JDK**: Jenkins requires Java (JDK 11 or 17).
2. **Download**: Install from the official site.
3. **Initial Setup**: Unlock using the administrator password found on the server.
4. **Plugins**: Install the "Suggested Plugins" for Git, Pipeline, etc.
        `,
        quiz: [
          {
            id: 'u3-q1',
            question: 'What is a prerequisite for installing Jenkins?',
            options: ['Python', 'Java JDK', 'Docker', 'Photoshop'],
            correctAnswer: 1,
            explanation: 'Jenkins is a Java-based application and requires a JDK to run.'
          }
        ]
      },
      {
        id: 'jenkins-pipelines',
        title: 'Jenkins Pipelines',
        icon: Layers,
        content: `
# The Jenkinsfile
A Jenkins Pipeline is a suite of plugins which supports implementing and integrating continuous delivery pipelines into Jenkins.

## Scripted vs. Declarative:
- **Declarative**: Easier to write and read, uses a structured format.
- **Scripted**: More flexible, based on Groovy.

## Stages:
- **Build**: Compiling code.
- **Test**: Running unit tests.
- **Deploy**: Taking the code to production.
        `,
        quiz: [
          {
            id: 'u3-q2',
            question: 'Where do you typically define your Jenkins pipeline code?',
            options: ['config.yaml', 'Makefile', 'Jenkinsfile', 'docker-compose.yml'],
            correctAnswer: 2,
            explanation: 'The Jenkinsfile is the standard file used to define your pipeline as code.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-4',
    title: 'Unit 4: Docker',
    lessons: [
      {
        id: 'docker-intro',
        title: 'Docker Architecture',
        icon: Box,
        content: `
# Docker Concepts
Docker is a platform for developing, shipping, and running applications inside containers.

## Components:
- **Docker Engine**: The core underlying technology.
- **Docker Client**: How we interact with the daemon (via CLI).
- **Images**: Read-only templates for containers.
- **Containers**: Runnable instances of images.
- **Registry & Docker Hub**: Where we store and share images.
        `,
        quiz: [
          {
            id: 'u4-q1',
            question: 'What is a Docker Image?',
            options: ['A running application', 'A read-only template for a container', 'A virtual machine', 'A cloud server'],
            correctAnswer: 1,
            explanation: 'Images are templates that contain everything needed to run an application.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-5',
    title: 'Unit 5: Advanced Orchestration',
    lessons: [
      {
        id: 'k8s-intro',
        title: 'Kubernetes & Orchestration',
        icon: Cloud,
        content: `
# Why Orchestration?
When you have hundreds of containers, you need a way to manage them. Kubernetes (K8s) provides this at scale.

## Comparison:
- **Docker**: Focus on building, shipping, and running one container.
- **Kubernetes**: Focus on managing a cluster of containers across many machines.

## Advanced Monitoring:
Using **Prometheus** and **Grafana** allows you to track CPU, memory usage, and application health in real-time.
        `,
        quiz: [
          {
            id: 'u5-q1',
            question: 'What is the main purpose of Kubernetes?',
            options: ['Editing code', 'Scaling and managing containerized apps', 'Replacing Linux', 'Designing logos'],
            correctAnswer: 1,
            explanation: 'Kubernetes is an orchestration platform designed to automate deployment and management of container clusters.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-6',
    title: 'Unit 6: Infrastructure as Code (IaC)',
    lessons: [
      {
        id: 'terraform-intro',
        title: 'Terraform & Cloud',
        icon: Shield,
        content: `
# What is IaC?
Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.

## Why Terraform?
Terraform is an open-source IaC tool that allows you to define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share.

## Key Workflow:
1. **Write**: Define resources in .tf files.
2. **Plan**: Preview changes before applying.
3. **Apply**: Provision the infrastructure.
        `,
        quiz: [
          {
            id: 'u6-q1',
            question: 'What is the "Plan" stage in Terraform?',
            options: ['Writing code', 'Previewing changes before execution', 'Deleting all resources', 'Paying for the cloud bill'],
            correctAnswer: 1,
            explanation: 'Terraform Plan shows you exactly what it will do before it makes any real changes.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-7',
    title: 'Unit 7: Reliability & SRE',
    lessons: [
      {
        id: 'sre-foundations',
        title: 'Principles of SRE',
        icon: Activity,
        content: `
# Site Reliability Engineering
SRE is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems.

## SLI, SLO, SLA:
- **SLI**: Service Level Indicator (e.g., latency).
- **SLO**: Service Level Objective (e.g., 99.9% uptime).
- **SLA**: Service Level Agreement (legal contract with customers).

## Error Budgets:
The amount of unreliability you are willing to tolerate. It is 1 - SLO.
        `,
        quiz: [
          {
            id: 'u7-q1',
            question: 'What is the relationship between SLO and Error Budget?',
            options: ['They are the same', 'Error Budget = 1 - SLO', 'They are unrelated', 'SLO is for managers, Budget is for engineers'],
            correctAnswer: 1,
            explanation: 'The Error Budget is the allowable amount of unreliability defined by your Service Level Objective.'
          }
        ]
      }
    ]
  }
];
