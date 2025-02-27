import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileJson, Github, Search, ShoppingCart } from "lucide-react"

export default function ExamplesSection() {
  return (
    <section id="examples" className="py-24 relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Code Samples
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Example AI Agents</h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Explore ready-to-use examples that demonstrate how to build different types of AI agents.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="search" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-zinc-950 border border-zinc-800">
                <TabsTrigger
                  value="search"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Agent
                </TabsTrigger>
                <TabsTrigger
                  value="shopping"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Shopping Agent
                </TabsTrigger>
                <TabsTrigger
                  value="github"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Agent
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="search" className="mt-0">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <div className="rounded-xl border border-zinc-800 bg-black p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs text-zinc-400">search-agent.tsx</div>
                    </div>
                    <pre className="text-sm text-zinc-400 overflow-x-auto">
                      <code>{`import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

// Define the search tool
const searchTool = {
  name: 'search',
  description: 'Search the web for information',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The search query'
      }
    },
    required: ['query']
  }
};

// Mock search function
async function performSearch(query: string) {
  // In a real app, this would connect to a search API
  return \`Results for: \${query}...\`;
}

// Create the search agent
export async function searchAgent(question: string) {
  const model = openai('gpt-4o');
  
  // Initialize conversation context
  let context = \`User question: \${question}\n\n\`;
  
  // Generate a search plan
  const { text: searchPlan } = await generateText({
    model,
    prompt: \`\${context}
    What search queries would help answer this question?
    Generate up to 3 specific search queries.\`,
  });
  
  context += \`Search plan: \${searchPlan}\n\n\`;
  
  // Extract and perform searches
  const searchRegex = /(?:"|')([^"']+)(?:"|')/g;
  const queries = [];
  let match;
  
  while ((match = searchRegex.exec(searchPlan)) !== null) {
    queries.push(match[1]);
  }
  
  // Limit to 3 queries
  const limitedQueries = queries.slice(0, 3);
  
  // Perform searches
  for (const query of limitedQueries) {
    const results = await performSearch(query);
    context += \`Query: \${query}\nResults: \${results}\n\n\`;
  }
  
  // Generate final response
  const { text: finalAnswer } = await generateText({
    model,
    prompt: \`\${context}
    Based on the search results, provide a comprehensive 
    answer to the original question: "\${question}"\`,
  });
  
  return finalAnswer;
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white">Search-Powered Research Agent</h3>
                  <p className="text-zinc-400">
                    This example demonstrates a search agent that can answer questions by generating appropriate search
                    queries, retrieving information, and synthesizing the results.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Dynamic Query Generation</h4>
                        <p className="text-sm text-zinc-400">
                          Formulates tailored search queries based on the user's question
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Multi-Query Strategy</h4>
                        <p className="text-sm text-zinc-400">
                          Uses multiple searches to gather comprehensive information
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Result Synthesis</h4>
                        <p className="text-sm text-zinc-400">Combines multiple sources into a coherent answer</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                      Try this example
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="gap-2 border-zinc-800 bg-black hover:bg-zinc-900">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shopping" className="mt-0">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <div className="rounded-xl border border-zinc-800 bg-black p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs text-zinc-400">shopping-agent.tsx</div>
                    </div>
                    <pre className="text-sm text-zinc-400 overflow-x-auto">
                      <code>{`import { generateText, generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

// Define the product search tool
const searchProductsTool = {
  name: 'searchProducts',
  description: 'Search for products in the catalog',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The search query'
      },
      filters: {
        type: 'object',
        description: 'Optional filters',
        properties: {
          priceMin: { type: 'number' },
          priceMax: { type: 'number' },
          category: { type: 'string' }
        }
      }
    },
    required: ['query']
  }
};

// Mock product database
const products = [
  { id: 'p1', name: 'Premium Laptop', price: 1299, category: 'Electronics' },
  { id: 'p2', name: 'Wireless Headphones', price: 199, category: 'Audio' },
  { id: 'p3', name: 'Ergonomic Chair', price: 349, category: 'Furniture' }
];

// Search function
function searchProducts(query, filters = {}) {
  const { priceMin, priceMax, category } = filters;
  
  return products.filter(product => {
    let match = product.name.toLowerCase().includes(query.toLowerCase());
    
    if (priceMin && product.price < priceMin) match = false;
    if (priceMax && product.price > priceMax) match = false;
    if (category && product.category !== category) match = false;
    
    return match;
  });
}

// Shopping recommendation agent
export async function shoppingAgent(userRequest) {
  const model = openai('gpt-4o');
  
  // Parse user needs
  const { object: userNeeds } = await generateObject({
    model,
    schema: z.object({
      productType: z.string(),
      priceRange: z.object({
        min: z.number().optional(),
        max: z.number().optional()
      }).optional(),
      preferences: z.array(z.string()).optional()
    }),
    prompt: \`Extract the product needs from this request: \${userRequest}\`
  });
  
  // Search for products
  const searchResults = searchProducts(
    userNeeds.productType,
    {
      priceMin: userNeeds.priceRange?.min,
      priceMax: userNeeds.priceRange?.max
    }
  );
  
  // Generate recommendations
  const { text: recommendation } = await generateText({
    model,
    prompt: \`
    User request: \${userRequest}
    
    Available products:
    \${JSON.stringify(searchResults, null, 2)}
    
    Based on the user's request and preferences \${JSON.stringify(userNeeds.preferences || [])},
    provide a personalized recommendation explaining why these products
    would be a good fit. If no products match exactly, suggest alternatives.
    \`
  });
  
  return recommendation;
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white">Shopping Recommendation Agent</h3>
                  <p className="text-zinc-400">
                    This example shows how to build a shopping assistant that understands user preferences, searches for
                    relevant products, and provides personalized recommendations.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Preference Analysis</h4>
                        <p className="text-sm text-zinc-400">Extracts user needs from natural language requests</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Filtered Search</h4>
                        <p className="text-sm text-zinc-400">Applies constraints like price range and categories</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Personalized Recommendations</h4>
                        <p className="text-sm text-zinc-400">Explains why specific products match the user's needs</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                      Try this example
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="gap-2 border-zinc-800 bg-black hover:bg-zinc-900">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="github" className="mt-0">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <div className="rounded-xl border border-zinc-800 bg-black p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs text-zinc-400">github-agent.tsx</div>
                    </div>
                    <pre className="text-sm text-zinc-400 overflow-x-auto">
                      <code>{`import { generateText, generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

// Define GitHub API tools
const searchRepositoriesTool = {
  name: 'searchRepositories',
  description: 'Search for GitHub repositories',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The search query'
      },
      sort: {
        type: 'string',
        enum: ['stars', 'forks', 'updated'],
        description: 'How to sort the results'
      }
    },
    required: ['query']
  }
};

const getIssuesForRepoTool = {
  name: 'getIssuesForRepo',
  description: 'Get issues for a GitHub repository',
  parameters: {
    type: 'object',
    properties: {
      owner: {
        type: 'string',
        description: 'Repository owner'
      },
      repo: {
        type: 'string',
        description: 'Repository name'
      },
      state: {
        type: 'string',
        enum: ['open', 'closed', 'all'],
        description: 'Issue state'
      }
    },
    required: ['owner', 'repo']
  }
};

// Mock GitHub API functions
async function searchRepositories(query, sort = 'stars') {
  // In a real app, this would call the GitHub API
  return [
    { name: 'react', owner: 'facebook', stars: 180000, description: 'A JavaScript library for building user interfaces' },
    { name: 'node', owner: 'nodejs', stars: 85000, description: 'Node.js JavaScript runtime' }
  ];
}

async function getIssuesForRepo(owner, repo, state = 'open') {
  // In a real app, this would call the GitHub API
  return [
    { title: 'Bug in core module', number: 1234, state: 'open', labels: ['bug', 'priority'] },
    { title: 'Add new feature', number: 1235, state: 'open', labels: ['enhancement'] }
  ];
}

// GitHub project assistant agent
export async function githubAgent(userQuery) {
  const model = openai('gpt-4o');
  
  // Analyze the user's query
  const { object: queryAnalysis } = await generateObject({
    model,
    schema: z.object({
      intent: z.enum(['find_repositories', 'find_issues', 'general_question']),
      searchTerms: z.array(z.string()),
      repoInfo: z.object({
        owner: z.string().optional(),
        repo: z.string().optional()
      }).optional()
    }),
    prompt: \`Analyze this GitHub-related query: \${userQuery}\`
  });
  
  let response;
  
  if (queryAnalysis.intent === 'find_repositories') {
    // Search for repositories
    const searchQuery = queryAnalysis.searchTerms.join(' ');
    const repos = await searchRepositories(searchQuery);
    
    response = await generateText({
      model,
      prompt: \`
      User query: \${userQuery}
      
      GitHub repositories found:
      \${JSON.stringify(repos, null, 2)}
      
      Provide a helpful response about these repositories that answers the user's query.
      Include relevant details about each repository and explain why they might be useful.
      \`
    });
  } else if (queryAnalysis.intent === 'find_issues' && 
             queryAnalysis.repoInfo?.owner && 
             queryAnalysis.repoInfo?.repo) {
    // Get issues for a specific repository
    const issues = await getIssuesForRepo(
      queryAnalysis.repoInfo.owner,
      queryAnalysis.repoInfo.repo
    );
    
    response = await generateText({
      model,
      prompt: \`
      User query: \${userQuery}
      
      Issues for \${queryAnalysis.repoInfo.owner}/\${queryAnalysis.repoInfo.repo}:
      \${JSON.stringify(issues, null, 2)}
      
      Provide a helpful summary of these issues that answers the user's query.
      Include relevant details and any patterns you notice.
      \`
    });
  } else {
    // Answer general GitHub questions
    response = await generateText({
      model,
      prompt: \`
      You are a GitHub expert assistant. Answer this question about GitHub:
      \${userQuery}
      
      Provide a detailed, helpful response based on your knowledge of GitHub.
      \`
    });
  }
  
  return response.text;
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white">GitHub Project Assistant</h3>
                  <p className="text-zinc-400">
                    This example demonstrates an agent that helps developers find GitHub repositories, track issues, and
                    answer questions about GitHub projects.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Query Analysis</h4>
                        <p className="text-sm text-zinc-400">Determines user intent and extracts relevant parameters</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Multi-Tool Integration</h4>
                        <p className="text-sm text-zinc-400">
                          Uses specialized tools for repository search and issue tracking
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FileJson className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Contextual Responses</h4>
                        <p className="text-sm text-zinc-400">Provides tailored information based on the query type</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                      Try this example
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="gap-2 border-zinc-800 bg-black hover:bg-zinc-900">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-20">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Ready to Build Your Own Agent?
                </h3>
                <p className="text-zinc-400">
                  Get started with our comprehensive documentation and templates to create powerful AI agents tailored
                  to your specific needs.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row md:justify-end md:items-center">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-zinc-800 bg-black hover:bg-zinc-900">
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

