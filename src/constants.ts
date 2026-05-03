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
            options: ['Speed', 'Continuous delivery', 'Reliability', 'Cost reduction'],
            correctAnswer: 1,
            explanation: 'DevOps focuses on delivering value continuously through better collaboration and automation.'
          },
          {
            id: 'u1-q2',
            question: 'Which of the following is NOT a key principle of DevOps?',
            options: ['Automation', 'Isolation', 'Iteration', 'Collaboration'],
            correctAnswer: 1,
            explanation: 'DevOps emphasizes breaking down silos and collaboration, not isolation.'
          },
          {
            id: 'u1-q3',
            question: 'How does DevOps improve speed in software development?',
            options: ['More developers', 'Automation', 'Less testing', 'Older tech'],
            correctAnswer: 1,
            explanation: 'Automation of manual processes is a core DevOps principle that increases development speed.'
          },
          {
            id: 'u1-q4',
            question: 'What does "continuous delivery" mean in DevOps context?',
            options: ['Daily packages', 'Frequent reliable releases', 'Physical shipping', '24/7 support'],
            correctAnswer: 1,
            explanation: 'Continuous delivery enables teams to release changes to production in a safe and rapid manner.'
          },
          {
            id: 'u1-q5',
            question: 'Which benefit of DevOps relates to application update quality?',
            options: ['Speed', 'Reliability', 'Rapid Delivery', 'Cost reduction'],
            correctAnswer: 1,
            explanation: 'Reliability ensures the quality of application updates and infrastructure changes.'
          },
          {
            id: 'u1-q6',
            question: 'DevOps culture primarily aims to break down silos between which groups?',
            options: ['Management/employees', 'Dev/Ops', 'Sales/marketing', 'HR/finance'],
            correctAnswer: 1,
            explanation: 'DevOps is about breaking down traditional silos between Development and Operations teams.'
          },
          {
            id: 'u1-q7',
            question: 'What is the main purpose of iteration in DevOps?',
            options: ['Repeat process', 'Small frequent patches', 'Manual testing', 'Documentation'],
            correctAnswer: 1,
            explanation: 'Iteration in DevOps means delivering small, frequent updates rather than large, infrequent releases.'
          },
          {
            id: 'u1-q8',
            question: 'Which aspect of DevOps helps in building more effective teams?',
            options: ['Individual metrics', 'Shared responsibility', 'Strict hierarchies', 'Department competition'],
            correctAnswer: 1,
            explanation: 'Improved collaboration through shared responsibility builds more effective DevOps teams.'
          },
          {
            id: 'u1-q9',
            question: 'What does DevOps automation primarily target?',
            options: ['Customer communication', 'Manual tasks', 'Design work', 'Strategic planning'],
            correctAnswer: 1,
            explanation: 'DevOps automation focuses on minimizing manual work and repetitive tasks.'
          },
          {
            id: 'u1-q10',
            question: 'How does DevOps transform traditional software development?',
            options: ['Slower but safer', 'People/process/products', 'No testing', 'Infrastructure only'],
            correctAnswer: 1,
            explanation: 'DevOps transforms development by uniting people, process, and technology to enable continuous value delivery.'
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
          },
          {
            id: 'u1-q3',
            question: 'From which methodology did DevOps evolve?',
            options: ['Waterfall', 'Agile software development', 'Scrum', 'Kanban'],
            correctAnswer: 1,
            explanation: 'DevOps evolved from Agile software development to improve collaboration between developers and operations.'
          },
          {
            id: 'u1-q4',
            question: 'What is the primary cultural challenge in DevOps implementation?',
            options: ['Learning new tools', 'Moving from silos to shared responsibility', 'Writing better code', 'Upgrading hardware'],
            correctAnswer: 1,
            explanation: 'The biggest cultural shift is moving from isolated silos to a model of shared responsibility.'
          },
          {
            id: 'u1-q5',
            question: 'Which complexity challenge does DevOps help address?',
            options: ['Managing distributed systems at scale', 'Reducing code complexity', 'Simplifying user interfaces', 'Minimizing database size'],
            correctAnswer: 0,
            explanation: 'DevOps provides tools and practices to manage the complexity of distributed systems at scale.'
          },
          {
            id: 'u1-q6',
            question: 'What skill set challenge do DevOps Engineers face?',
            options: ['Knowing only one programming language', 'Understanding both code and infrastructure', 'Being expert in design', 'Only knowing networking'],
            correctAnswer: 1,
            explanation: 'DevOps Engineers need broad knowledge spanning both development and operations domains.'
          },
          {
            id: 'u1-q7',
            question: 'How do legacy systems impact DevOps implementation?',
            options: ['They make DevOps easier', 'They integrate seamlessly', 'They can be difficult to integrate with modern practices', 'They require no changes'],
            correctAnswer: 2,
            explanation: 'Legacy monolithic applications can be challenging to integrate with modern DevOps practices and tools.'
          },
          {
            id: 'u1-q8',
            question: 'What is the main collaboration improvement DevOps brings?',
            options: ['Better email communication', 'Improved collaboration between developers and IT infrastructure professionals', 'More meetings', 'Better documentation'],
            correctAnswer: 1,
            explanation: 'DevOps specifically improves collaboration between software developers and IT infrastructure professionals.'
          },
          {
            id: 'u1-q9',
            question: 'Which challenge is most about organizational structure?',
            options: ['Tool selection', 'Cultural change and silos', 'Technical skills', 'Budget constraints'],
            correctAnswer: 1,
            explanation: 'Organizational silos and cultural change are structural challenges that must be addressed for DevOps success.'
          },
          {
            id: 'u1-q10',
            question: 'What makes DevOps skill requirements unique?',
            options: ['They require only development skills', 'They demand understanding of both development and operations', 'They focus only on cloud knowledge', 'They require only infrastructure knowledge'],
            correctAnswer: 1,
            explanation: 'DevOps uniquely requires professionals to understand both code development and infrastructure management.'
          },
          {
            id: 'u1-q11',
            question: 'Why is breaking down silos important in DevOps?',
            options: ['It reduces office space needs', 'It enables better collaboration and shared goals', 'It saves money on tools', 'It simplifies reporting'],
            correctAnswer: 1,
            explanation: 'Breaking down silos allows teams to work together toward shared goals rather than isolated objectives.'
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
          },
          {
            id: 'u2-q2',
            question: 'What is a Git repository?',
            options: ['A folder with code files', 'A central place where data is stored and managed', 'A backup system', 'A documentation file'],
            correctAnswer: 1,
            explanation: 'A repository is the central location where all project files and their history are stored and managed.'
          },
          {
            id: 'u2-q3',
            question: 'Which Git command initializes a new repository?',
            options: ['git start', 'git init', 'git create', 'git new'],
            correctAnswer: 1,
            explanation: '\'git init\' creates a new Git repository in the current directory.'
          },
          {
            id: 'u2-q4',
            question: 'What does a Git commit represent?',
            options: ['A backup of files', 'A snapshot of changes at a point in time', 'A deleted file', 'A merged branch'],
            correctAnswer: 1,
            explanation: 'A commit is a snapshot of the repository\'s state at a specific moment in time.'
          },
          {
            id: 'u2-q5',
            question: 'What is the purpose of Git branching?',
            options: ['To delete old code', 'To create a separate line of development', 'To merge all changes', 'To stop development'],
            correctAnswer: 1,
            explanation: 'Branching allows developers to work on separate features or fixes without affecting the main codebase.'
          },
          {
            id: 'u2-q6',
            question: 'Which command stages changes for commit?',
            options: ['git stage .', 'git add .', 'git prepare .', 'git ready .'],
            correctAnswer: 1,
            explanation: '\'git add .\' stages all changes in the current directory for the next commit.'
          },
          {
            id: 'u2-q7',
            question: 'What does Git merging accomplish?',
            options: ['Deletes branches', 'Combines different branches back together', 'Creates new branches', 'Stops all development'],
            correctAnswer: 1,
            explanation: 'Merging integrates changes from different branches into a single branch.'
          },
          {
            id: 'u2-q8',
            question: 'Which command shows the current state of the working directory?',
            options: ['git state', 'git status', 'git check', 'git info'],
            correctAnswer: 1,
            explanation: '\'git status\' displays the current state of files, including staged, unstaged, and untracked files.'
          },
          {
            id: 'u2-q9',
            question: 'What is the main purpose of Version Control Systems?',
            options: ['To write code faster', 'To manage changes to source code over time', 'To test applications', 'To deploy software'],
            correctAnswer: 1,
            explanation: 'VCS helps teams track and manage changes to source code throughout the development lifecycle.'
          },
          {
            id: 'u2-q10',
            question: 'How does Git help teams collaborate?',
            options: ['By sharing passwords', 'By tracking changes and managing conflicts', 'By assigning tasks', 'By scheduling meetings'],
            correctAnswer: 1,
            explanation: 'Git enables collaboration through change tracking, branching, and conflict resolution mechanisms.'
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
          },
          {
            id: 'u2-q3',
            question: 'What is the primary purpose of GitHub?',
            options: ['Writing code', 'Hosting Git repositories with web interface', 'Testing applications', 'Deploying software'],
            correctAnswer: 1,
            explanation: 'GitHub is a hosting service for Git repositories that provides a web-based interface and social features.'
          },
          {
            id: 'u2-q4',
            question: 'What happens during code review in GitHub?',
            options: ['Code is automatically tested', 'Collaboratively checking code before it\'s merged', 'Code is deleted', 'Code is backed up'],
            correctAnswer: 1,
            explanation: 'Code reviews allow team members to examine and discuss changes before they are merged into the main branch.'
          },
          {
            id: 'u2-q5',
            question: 'What is GitHub Issue Tracking used for?',
            options: ['Tracking bugs and feature requests', 'Managing user accounts', 'Storing code files', 'Running tests'],
            correctAnswer: 0,
            explanation: 'Issue tracking helps teams manage bugs, feature requests, and other project tasks in an organized way.'
          },
          {
            id: 'u2-q6',
            question: 'When does conflict resolution become necessary in GitHub?',
            options: ['When multiple people edit the same file', 'When code is written incorrectly', 'When tests fail', 'When servers are down'],
            correctAnswer: 0,
            explanation: 'Conflicts occur when multiple contributors make changes to the same parts of a file simultaneously.'
          },
          {
            id: 'u2-q7',
            question: 'What is the main benefit of GitHub workflows?',
            options: ['They automate repetitive tasks', 'They make code prettier', 'They reduce file size', 'They improve internet speed'],
            correctAnswer: 0,
            explanation: 'GitHub workflows automate CI/CD processes, testing, and other repetitive development tasks.'
          },
          {
            id: 'u2-q8',
            question: 'How do Pull Requests improve code quality?',
            options: ['By adding more features', 'Through peer review and discussion', 'By running faster', 'By using more memory'],
            correctAnswer: 1,
            explanation: 'Pull Requests enable peer review, which helps catch issues and improve overall code quality.'
          },
          {
            id: 'u2-q9',
            question: 'What social feature does GitHub provide for collaboration?',
            options: ['Chat rooms', 'Discussion forums and comments', 'Video calls', 'Email integration'],
            correctAnswer: 1,
            explanation: 'GitHub provides discussion forums, comments, and other social features to facilitate collaboration.'
          },
          {
            id: 'u2-q10',
            question: 'What is the purpose of branching in GitHub workflows?',
            options: ['To create isolated environments for features', 'To delete old code', 'To merge all changes', 'To stop development'],
            correctAnswer: 0,
            explanation: 'Branching allows developers to work on features in isolation before integrating them into the main codebase.'
          },
          {
            id: 'u2-q11',
            question: 'How does GitHub help with project management?',
            options: ['By assigning tasks and tracking progress', 'By writing code automatically', 'By testing applications', 'By deploying software'],
            correctAnswer: 0,
            explanation: 'GitHub provides project management features like issue tracking, milestones, and project boards to help organize work.'
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
          },
          {
            id: 'u3-q2',
            question: 'Which JDK version is commonly required for Jenkins?',
            options: ['JDK 8', 'JDK 11 or 17', 'JDK 21', 'No JDK needed'],
            correctAnswer: 1,
            explanation: 'Jenkins typically requires JDK 11 or 17 for optimal performance and compatibility.'
          },
          {
            id: 'u3-q3',
            question: 'What is the first step in Jenkins installation?',
            options: ['Install plugins', 'Install Java JDK', 'Download Jenkins', 'Unlock Jenkins'],
            correctAnswer: 1,
            explanation: 'Java JDK must be installed first as Jenkins is built on Java.'
          },
          {
            id: 'u3-q4',
            question: 'How do you unlock Jenkins after initial installation?',
            options: ['With a password from the server', 'Using an email verification', 'By paying for a license', 'No unlock needed'],
            correctAnswer: 0,
            explanation: 'Jenkins requires unlocking using the administrator password found on the server.'
          },
          {
            id: 'u3-q5',
            question: 'What type of plugins are recommended for Jenkins setup?',
            options: ['Only testing plugins', 'Suggested Plugins', 'No plugins needed', 'Only database plugins'],
            correctAnswer: 1,
            explanation: 'The "Suggested Plugins" include essential tools for Git, Pipeline, and other core functionality.'
          },
          {
            id: 'u3-q6',
            question: 'What is Jenkins primarily used for?',
            options: ['Writing code', 'Automating build, test, and deployment processes', 'Designing user interfaces', 'Managing databases'],
            correctAnswer: 1,
            explanation: 'Jenkins automates the parts of software development related to building, testing, and deploying.'
          },
          {
            id: 'u3-q7',
            question: 'Where is the Jenkins administrator password located after installation?',
            options: ['In an email', 'On the server file system', 'In the Jenkins UI', 'In a text file on desktop'],
            correctAnswer: 1,
            explanation: 'The initial administrator password is found in a specific file on the Jenkins server.'
          },
          {
            id: 'u3-q8',
            question: 'What happens after installing suggested plugins in Jenkins?',
            options: ['Jenkins is ready to use', 'You create the first admin user', 'You must restart Jenkins', 'You need to configure database'],
            correctAnswer: 1,
            explanation: 'After plugin installation, you create the first administrator user account.'
          },
          {
            id: 'u3-q9',
            question: 'Which of these is NOT a Jenkins installation step?',
            options: ['Install Java JDK', 'Download Jenkins', 'Install Microsoft Office', 'Unlock Jenkins'],
            correctAnswer: 2,
            explanation: 'Microsoft Office is not required for Jenkins installation.'
          },
          {
            id: 'u3-q10',
            question: 'What is the purpose of Jenkins plugins?',
            options: ['To make the interface colorful', 'To extend Jenkins functionality for different tools and technologies', 'To slow down Jenkins', 'To replace Jenkins core'],
            correctAnswer: 1,
            explanation: 'Plugins extend Jenkins capabilities to integrate with various development tools and technologies.'
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
          },
          {
            id: 'u3-q3',
            question: 'What is a Jenkins Pipeline?',
            options: ['A water pipe', 'A suite of plugins for implementing continuous delivery pipelines', 'A database connection', 'A user interface'],
            correctAnswer: 1,
            explanation: 'Jenkins Pipeline is a collection of plugins that supports implementing continuous delivery pipelines.'
          },
          {
            id: 'u3-q4',
            question: 'Which pipeline type is easier to write and read?',
            options: ['Scripted', 'Declarative', 'Imperative', 'Functional'],
            correctAnswer: 1,
            explanation: 'Declarative pipelines use a structured format that is easier to read and write.'
          },
          {
            id: 'u3-q5',
            question: 'What language are scripted Jenkins pipelines based on?',
            options: ['Python', 'JavaScript', 'Groovy', 'Java'],
            correctAnswer: 2,
            explanation: 'Scripted pipelines are based on Groovy, which provides more flexibility.'
          },
          {
            id: 'u3-q6',
            question: 'What is the typical first stage in a Jenkins pipeline?',
            options: ['Deploy', 'Test', 'Build', 'Monitor'],
            correctAnswer: 2,
            explanation: 'The Build stage typically comes first, where code is compiled and artifacts are created.'
          },
          {
            id: 'u3-q7',
            question: 'What happens during the Test stage of a Jenkins pipeline?',
            options: ['Code is deployed', 'Unit tests are run', 'Code is written', 'Database is created'],
            correctAnswer: 1,
            explanation: 'The Test stage runs automated tests to ensure code quality and functionality.'
          },
          {
            id: 'u3-q8',
            question: 'What is the final stage in most Jenkins pipelines?',
            options: ['Build', 'Test', 'Deploy', 'Plan'],
            correctAnswer: 2,
            explanation: 'Deploy is typically the final stage where code is taken to production environments.'
          },
          {
            id: 'u3-q9',
            question: 'What is the main advantage of declarative pipelines?',
            options: ['They run faster', 'They are easier to read and maintain', 'They use less memory', 'They are more secure'],
            correctAnswer: 1,
            explanation: 'Declarative pipelines have a structured syntax that makes them more readable and maintainable.'
          },
          {
            id: 'u3-q10',
            question: 'How does Jenkins Pipeline support "pipeline as code"?',
            options: ['By storing pipeline configuration in files', 'By writing code in the UI only', 'By using databases', 'By email configuration'],
            correctAnswer: 0,
            explanation: 'Pipeline as code allows defining pipelines in Jenkinsfiles that can be version controlled.'
          },
          {
            id: 'u3-q11',
            question: 'What is the purpose of stages in Jenkins pipelines?',
            options: ['To make the pipeline look nice', 'To organize pipeline steps into logical phases', 'To speed up execution', 'To reduce memory usage'],
            correctAnswer: 1,
            explanation: 'Stages help organize pipeline steps into logical phases like Build, Test, and Deploy.'
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
          },
          {
            id: 'u4-q2',
            question: 'What is the primary purpose of Docker?',
            options: ['Writing better code', 'Developing, shipping, and running applications inside containers', 'Managing databases', 'Creating user interfaces'],
            correctAnswer: 1,
            explanation: 'Docker is a platform for containerizing applications for consistent development and deployment.'
          },
          {
            id: 'u4-q3',
            question: 'What is the Docker Engine?',
            options: ['A type of car engine', 'The core underlying technology that runs containers', 'A database system', 'A programming language'],
            correctAnswer: 1,
            explanation: 'The Docker Engine is the core technology that creates and manages containers.'
          },
          {
            id: 'u4-q4',
            question: 'How do users typically interact with Docker?',
            options: ['Through a web browser', 'Via the Docker Client CLI', 'Using only GUI tools', 'Through email commands'],
            correctAnswer: 1,
            explanation: 'The Docker Client provides a command-line interface for interacting with the Docker daemon.'
          },
          {
            id: 'u4-q5',
            question: 'What is a Docker Container?',
            options: ['A shipping box', 'A runnable instance of a Docker image', 'A database', 'A programming file'],
            correctAnswer: 1,
            explanation: 'Containers are the actual running instances created from Docker images.'
          },
          {
            id: 'u4-q6',
            question: 'What is Docker Hub?',
            options: ['A social network for developers', 'A cloud service for storing and sharing Docker images', 'A hardware device', 'A programming language'],
            correctAnswer: 1,
            explanation: 'Docker Hub is a registry service where Docker images are stored and shared.'
          },
          {
            id: 'u4-q7',
            question: 'What is the relationship between Docker images and containers?',
            options: ['They are the same thing', 'Images are templates, containers are running instances', 'Containers create images', 'Images are running, containers are templates'],
            correctAnswer: 1,
            explanation: 'Images are read-only templates that are used to create runnable container instances.'
          },
          {
            id: 'u4-q8',
            question: 'What is a Docker Registry?',
            options: ['A government office', 'A service for storing and distributing Docker images', 'A programming tool', 'A database system'],
            correctAnswer: 1,
            explanation: 'A Docker Registry is a storage and distribution system for Docker images.'
          },
          {
            id: 'u4-q9',
            question: 'What makes Docker containers portable?',
            options: ['They are small in size', 'They include everything needed to run the application', 'They run on any operating system', 'They are free to use'],
            correctAnswer: 1,
            explanation: 'Containers bundle all dependencies, making them portable across different environments.'
          },
          {
            id: 'u4-q10',
            question: 'What is the main advantage of containerization?',
            options: ['It makes code run faster', 'It provides consistent environments across development and production', 'It reduces file sizes', 'It improves graphics'],
            correctAnswer: 1,
            explanation: 'Containerization ensures applications run consistently across different environments.'
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
          },
          {
            id: 'u5-q2',
            question: 'Why is container orchestration needed?',
            options: ['To make containers colorful', 'When you have hundreds of containers that need to be managed', 'To write better code', 'To improve internet speed'],
            correctAnswer: 1,
            explanation: 'Orchestration becomes necessary when managing large numbers of containers across multiple machines.'
          },
          {
            id: 'u5-q3',
            question: 'What is the key difference between Docker and Kubernetes?',
            options: ['They are the same', 'Docker focuses on single containers, K8s manages clusters', 'Docker is older', 'Kubernetes is for databases only'],
            correctAnswer: 1,
            explanation: 'Docker is for building and running individual containers, while Kubernetes manages clusters of containers.'
          },
          {
            id: 'u5-q4',
            question: 'What does Kubernetes provide at scale?',
            options: ['Better graphics', 'Management of container clusters across many machines', 'Faster coding', 'Smaller file sizes'],
            correctAnswer: 1,
            explanation: 'Kubernetes provides automated management of containerized applications across distributed systems.'
          },
          {
            id: 'u5-q5',
            question: 'What is Prometheus used for in Kubernetes environments?',
            options: ['Writing code', 'Monitoring and metrics collection', 'Creating containers', 'Managing users'],
            correctAnswer: 1,
            explanation: 'Prometheus is a monitoring system that collects metrics from applications and infrastructure.'
          },
          {
            id: 'u5-q6',
            question: 'What role does Grafana play in Kubernetes monitoring?',
            options: ['Writing applications', 'Creating visualization dashboards for metrics', 'Managing containers', 'Storing data'],
            correctAnswer: 1,
            explanation: 'Grafana creates dashboards to visualize metrics collected by Prometheus and other monitoring tools.'
          },
          {
            id: 'u5-q7',
            question: 'What can you monitor with Prometheus and Grafana?',
            options: ['Only CPU usage', 'CPU, memory usage, and application health in real-time', 'Only network traffic', 'Only disk space'],
            correctAnswer: 1,
            explanation: 'These tools provide comprehensive monitoring of system resources and application performance.'
          },
          {
            id: 'u5-q8',
            question: 'What is a common abbreviation for Kubernetes?',
            options: ['KB', 'K8s', 'K8', 'KS'],
            correctAnswer: 1,
            explanation: 'K8s is a common abbreviation derived from "K" + 8 letters + "s".'
          },
          {
            id: 'u5-q9',
            question: 'What problem does Kubernetes solve with containers?',
            options: ['Making them faster', 'Managing hundreds of containers across many machines', 'Writing better container code', 'Reducing container size'],
            correctAnswer: 1,
            explanation: 'Kubernetes solves the complexity of managing large numbers of containers at scale.'
          },
          {
            id: 'u5-q10',
            question: 'What is real-time monitoring important for in Kubernetes?',
            options: ['Making applications look good', 'Tracking CPU, memory usage, and application health', 'Writing code faster', 'Reducing costs'],
            correctAnswer: 1,
            explanation: 'Real-time monitoring helps ensure application performance and resource optimization.'
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
          },
          {
            id: 'u6-q2',
            question: 'What is Infrastructure as Code (IaC)?',
            options: ['Writing documentation', 'Managing and provisioning infrastructure through code instead of manual processes', 'Creating user interfaces', 'Testing applications'],
            correctAnswer: 1,
            explanation: 'IaC allows infrastructure to be defined and managed programmatically rather than through manual configuration.'
          },
          {
            id: 'u6-q3',
            question: 'What makes Terraform different from manual infrastructure management?',
            options: ['It is faster', 'It uses human-readable configuration files that can be versioned and shared', 'It is cheaper', 'It requires more hardware'],
            correctAnswer: 1,
            explanation: 'Terraform enables infrastructure to be defined in code that can be version controlled, reused, and shared.'
          },
          {
            id: 'u6-q4',
            question: 'What is the first step in the Terraform workflow?',
            options: ['Apply', 'Plan', 'Write resources in .tf files', 'Destroy'],
            correctAnswer: 2,
            explanation: 'The workflow begins with writing infrastructure definitions in .tf configuration files.'
          },
          {
            id: 'u6-q5',
            question: 'What does the "Apply" stage do in Terraform?',
            options: ['Deletes infrastructure', 'Provisions the infrastructure based on the plan', 'Writes configuration files', 'Tests the infrastructure'],
            correctAnswer: 1,
            explanation: 'The Apply stage executes the plan and provisions the actual infrastructure resources.'
          },
          {
            id: 'u6-q6',
            question: 'What file extension does Terraform use for configuration files?',
            options: ['.yaml', '.json', '.tf', '.xml'],
            correctAnswer: 2,
            explanation: 'Terraform uses .tf files for defining infrastructure resources.'
          },
          {
            id: 'u6-q7',
            question: 'What is a key benefit of Terraform being open-source?',
            options: ['It is free to use', 'It can manage both cloud and on-prem resources', 'It runs faster', 'It has better graphics'],
            correctAnswer: 1,
            explanation: 'As an open-source tool, Terraform can define and manage resources across multiple cloud providers and on-premises infrastructure.'
          },
          {
            id: 'u6-q8',
            question: 'Why is the Plan stage important in Terraform?',
            options: ['It makes things look professional', 'It allows you to preview changes before making them', 'It speeds up deployment', 'It reduces costs'],
            correctAnswer: 1,
            explanation: 'The Plan stage provides a preview of changes, helping prevent unintended modifications to infrastructure.'
          },
          {
            id: 'u6-q9',
            question: 'What does "version control" mean for Terraform configurations?',
            options: ['Keeping track of software versions', 'Being able to version, reuse, and share infrastructure code', 'Managing cloud provider versions', 'Controlling user access'],
            correctAnswer: 1,
            explanation: 'Version control allows infrastructure code to be tracked over time, shared among team members, and reused.'
          },
          {
            id: 'u6-q10',
            question: 'What types of resources can Terraform manage?',
            options: ['Only AWS resources', 'Only on-premises servers', 'Both cloud and on-prem resources', 'Only databases'],
            correctAnswer: 2,
            explanation: 'Terraform is cloud-agnostic and can manage resources across various cloud providers and on-premises infrastructure.'
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
          },
          {
            id: 'u7-q2',
            question: 'What does SRE stand for?',
            options: ['Software Reliability Engineering', 'Site Reliability Engineering', 'System Resource Engineering', 'Service Response Engineering'],
            correctAnswer: 1,
            explanation: 'SRE stands for Site Reliability Engineering, a discipline that applies software engineering to infrastructure problems.'
          },
          {
            id: 'u7-q3',
            question: 'What is an SLI in SRE context?',
            options: ['Service Level Indicator - a measure of service performance', 'System Load Index', 'Software Life-cycle Indicator', 'Service Legal Interface'],
            correctAnswer: 0,
            explanation: 'SLI (Service Level Indicator) is a quantitative measure of service performance, like latency or error rate.'
          },
          {
            id: 'u7-q4',
            question: 'What does SLO represent in SRE?',
            options: ['Service Level Objective - target value for SLI', 'System Load Output', 'Software Legal Obligation', 'Service Life-cycle Objective'],
            correctAnswer: 0,
            explanation: 'SLO (Service Level Objective) is the target value or range of values for a Service Level Indicator.'
          },
          {
            id: 'u7-q5',
            question: 'What is an SLA in the SRE framework?',
            options: ['Service Level Agreement - legal contract with customers', 'System Load Average', 'Software License Agreement', 'Service Life-cycle Assessment'],
            correctAnswer: 0,
            explanation: 'SLA (Service Level Agreement) is a legal contract that specifies service levels and consequences for not meeting them.'
          },
          {
            id: 'u7-q6',
            question: 'How is Error Budget calculated?',
            options: ['Error Budget = 1 - SLO', 'Error Budget = SLO + 1', 'Error Budget = SLO * 2', 'Error Budget is fixed at 10%'],
            correctAnswer: 0,
            explanation: 'Error Budget represents the amount of unreliability you can tolerate, calculated as 1 minus the SLO.'
          },
          {
            id: 'u7-q7',
            question: 'What is the purpose of Error Budgets?',
            options: ['To track how much unreliability is acceptable', 'To count all errors', 'To measure system load', 'To calculate costs'],
            correctAnswer: 0,
            explanation: 'Error Budgets help teams understand how much risk they can take with innovations and changes.'
          },
          {
            id: 'u7-q8',
            question: 'Which field does SRE combine aspects from?',
            options: ['Only software engineering', 'Only operations', 'Software engineering and infrastructure operations', 'Only management'],
            correctAnswer: 2,
            explanation: 'SRE incorporates aspects of both software engineering and infrastructure/operations disciplines.'
          },
          {
            id: 'u7-q9',
            question: 'What does SRE apply software engineering principles to?',
            options: ['User interface design', 'Infrastructure and operations problems', 'Database design', 'Marketing campaigns'],
            correctAnswer: 1,
            explanation: 'SRE applies software engineering approaches to traditionally operational infrastructure problems.'
          },
          {
            id: 'u7-q10',
            question: 'What is a common example of an SLI?',
            options: ['Company revenue', 'User satisfaction score', 'Latency or error rate', 'Number of employees'],
            correctAnswer: 2,
            explanation: 'Common SLIs include technical metrics like latency, error rate, throughput, and availability.'
          }
        ]
      }
    ]
  }
];
