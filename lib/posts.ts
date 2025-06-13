import type { Post, AdjacentPosts } from "./types"

const postsData: Post[] = [
  {
    slug: "demystifying-kubernetes-objects",
    title: "Demystifying Kubernetes Objects: A Beginner's Guide",
    date: "2025-06-10",
    excerpt:
      "Pods, Services, Deployments, Oh My! Understanding the fundamental building blocks of Kubernetes can be daunting. This guide breaks them down.",
    content: `
      <p>Kubernetes, the de facto container orchestrator, has a rich set of objects that define the state of your applications. For newcomers, navigating this landscape can feel like learning a new language. Let's simplify some core concepts.</p>
      <h2>1. Pods: The Smallest Deployable Units</h2>
      <p>A Pod is the most basic deployable object in Kubernetes. It represents a single instance of a running process in your cluster. A Pod can contain one or more containers (like Docker containers), which share storage, network resources, and a specification on how to run the containers.</p>
      <p>Think of a Pod as a co-located group of containers that work together. They are ephemeral by nature; if a Pod dies, it's gone unless managed by a higher-level controller.</p>
      <h2>2. Services: Exposing Your Applications</h2>
      <p>Since Pods are ephemeral and have dynamic IP addresses, how do you reliably access your application? Enter Services. A Service provides a stable IP address and DNS name for a set of Pods. It acts as a load balancer and a single point of entry.</p>
      <p>Common types include ClusterIP (internal access), NodePort (exposes on each node's IP), and LoadBalancer (external cloud load balancer).</p>
      <h2>3. Deployments: Managing Application Lifecycles</h2>
      <p>You rarely create Pods directly. Instead, you use Deployments. A Deployment controller provides declarative updates for Pods and ReplicaSets (which ensure a specific number of Pod replicas are running). With Deployments, you can describe a desired state, and Kubernetes will work to achieve it. This includes rolling updates, rollbacks, and scaling.</p>
      <h2>4. ConfigMaps and Secrets: Managing Configuration</h2>
      <p>ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable. Secrets are similar but are intended for sensitive data like passwords, OAuth tokens, and ssh keys.</p>
      <p>Understanding these core objects is the first step to mastering Kubernetes. Each plays a vital role in deploying, managing, and scaling your cloud-native applications.</p>
    `,
    author: {
      name: "Mani HK",
    },
  },
  {
    slug: "serverless-vs-containers-choosing-right",
    title: "Serverless vs. Containers: Choosing the Right Tool for the Job",
    date: "2025-05-22",
    excerpt:
      "The cloud offers powerful paradigms: serverless functions and container orchestration. When should you use which? A practical comparison.",
    content: `
      <p>In the world of cloud-native development, 'serverless' and 'containers' are two dominant approaches for deploying applications. While both offer scalability and efficiency, they cater to different needs and have distinct trade-offs.</p>
      <h2>Serverless (Functions as a Service - FaaS)</h2>
      <p>Serverless, often synonymous with AWS Lambda or Azure Functions, allows you to run code without provisioning or managing servers. You upload your code, and the cloud provider handles the execution environment, scaling, and billing based on actual usage.</p>
      <p><strong>Pros:</strong> Extreme scalability, pay-per-use (often very cost-effective for sporadic workloads), reduced operational overhead.</p>
      <p><strong>Cons:</strong> Cold starts, execution time limits, vendor lock-in potential, statelessness can be challenging for some applications.</p>
      <h2>Containers (e.g., Docker with Kubernetes/ECS)</h2>
      <p>Containers package your application and its dependencies together. Orchestrators like Kubernetes manage the deployment, scaling, and networking of these containers.</p>
      <p><strong>Pros:</strong> Portability across environments, full control over the execution environment, suitable for complex, stateful applications, mature ecosystem.</p>
      <p><strong>Cons:</strong> Higher operational complexity (even with managed services), resource overhead (you pay for underlying VMs), steeper learning curve.</p>
      <h2>When to Choose Which?</h2>
      <ul>
        <li><strong>Serverless is great for:</strong> Event-driven tasks, APIs, background processing, microservices with fluctuating traffic.</li>
        <li><strong>Containers are ideal for:</strong> Long-running applications, complex microservice architectures, applications requiring specific OS-level dependencies or persistent state, migrating existing monolithic applications.</li>
      </ul>
      <p>Often, the best solution involves a hybrid approach, using serverless functions for specific event-driven components and containers for the core application logic. The key is to understand your application's requirements and choose the tool that best fits.</p>
    `,
    author: {
      name: "Mani HK",
    },
  },
  {
    slug: "infrastructure-as-code-terraform-basics",
    title: "Infrastructure as Code: Getting Started with Terraform",
    date: "2025-04-15",
    excerpt:
      "Managing cloud resources manually is error-prone and unscalable. Infrastructure as Code (IaC) with tools like Terraform solves this. An introduction.",
    content: `
      <p>As cloud environments grow in complexity, manually provisioning and managing resources through web consoles becomes unsustainable. Infrastructure as Code (IaC) is a practice that allows you to define and manage your infrastructure using configuration files, bringing software development best practices like version control and automation to your infrastructure.</p>
      <h2>What is Terraform?</h2>
      <p>Terraform, by HashiCorp, is a popular open-source IaC tool. It uses a declarative configuration language called HCL (HashiCorp Configuration Language) to describe your desired infrastructure state across various cloud providers (AWS, Azure, GCP, etc.) and other services.</p>
      <h2>Core Concepts</h2>
      <ul>
        <li><strong>Providers:</strong> Plugins that interact with specific cloud APIs (e.g., AWS provider).</li>
        <li><strong>Resources:</strong> Define infrastructure components (e.g., an AWS EC2 instance, a VPC).</li>
        <li><strong>State:</strong> Terraform keeps track of your managed infrastructure in a state file, allowing it to map real-world resources to your configuration.</li>
        <li><strong>Execution Plan:</strong> Before making changes, Terraform generates an execution plan (<code>terraform plan</code>) showing what it will create, modify, or destroy.</li>
      </ul>
      <h2>A Simple Example (Conceptual)</h2>
      <pre><code class="language-hcl">
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b31ad2c454b97"
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}
      </code></pre>
      <p>This snippet defines an AWS provider and an EC2 instance. Running <code>terraform apply</code> would provision this instance.</p>
      <h2>Benefits of IaC with Terraform</h2>
      <p>Version control, reusability (modules), automation, reduced errors, and improved collaboration are just a few advantages. It's a fundamental skill for modern cloud engineers.</p>
    `,
    author: {
      name: "Mani HK",
    },
  },
  {
    slug: "understanding-cloud-cost-optimization",
    title: "Key Strategies for Cloud Cost Optimization",
    date: "2025-03-28",
    excerpt:
      "Cloud computing offers incredible flexibility, but costs can quickly spiral if not managed effectively. Explore essential strategies to keep your cloud bill in check.",
    content: `
      <p>The pay-as-you-go model of cloud computing is a double-edged sword. While it provides agility, it also means that inefficiencies or unmonitored resources can lead to surprisingly high bills. Effective cloud cost optimization is crucial for any organization leveraging the cloud.</p>
      <h2>1. Right-Sizing Resources</h2>
      <p>One of the most common sources of wasted cloud spend is overprovisioned resources. Regularly analyze the utilization of your virtual machines, databases, and storage. Downsize or terminate instances that are consistently underutilized. Most cloud providers offer tools to help identify these opportunities.</p>
      <h2>2. Leveraging Reserved Instances and Savings Plans</h2>
      <p>For predictable, long-term workloads, cloud providers offer significant discounts through Reserved Instances (RIs) or Savings Plans. By committing to a certain level of usage for 1 or 3 years, you can save up to 70% compared to on-demand pricing.</p>
      <h2>3. Utilizing Spot Instances</h2>
      <p>Spot Instances offer access to unused compute capacity at steep discounts (up to 90%). They are suitable for fault-tolerant, stateless workloads that can handle interruptions, as these instances can be reclaimed by the cloud provider with short notice.</p>
      <h2>4. Implementing Auto-Scaling</h2>
      <p>Auto-scaling ensures that you only use (and pay for) the resources you need at any given time. Configure your applications to scale out during peak demand and scale in during quieter periods.</p>
      <h2>5. Monitoring and Tagging Resources</h2>
      <p>Implement robust monitoring and set up budget alerts. Use tags to categorize resources by project, department, or environment. This provides visibility into where costs are originating and helps allocate them accurately.</p>
      <h2>6. Deleting Unused Resources</h2>
      <p>It sounds simple, but orphaned storage volumes, snapshots, idle load balancers, and unused IP addresses can accumulate costs over time. Regularly audit and clean up these resources.</p>
      <p>Cloud cost optimization is an ongoing process, not a one-time task. By fostering a cost-aware culture and regularly applying these strategies, you can maximize the value of your cloud investment.</p>
    `,
    author: {
      name: "Mani HK",
    },
  },
]

// Sort posts by date in descending order (newest first)
const sortedPosts = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 50)) // Simulate delay
  return sortedPosts
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return sortedPosts.find((post) => post.slug === slug)
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function getAdjacentPosts(currentSlug: string): Promise<AdjacentPosts> {
  const posts = await getPosts()
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug)

  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return { previous, next }
}

export async function getRelatedPosts(currentSlug: string, count = 2): Promise<Post[]> {
  const posts = await getPosts()
  const related = posts
    .filter((post) => post.slug !== currentSlug) // Exclude current post
    .sort(() => 0.5 - Math.random()) // Shuffle for randomness
    .slice(0, count) // Take the specified number
  return related
}
