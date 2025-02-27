import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, FileJson, type LucideIcon, MessagesSquare, PlugZap, Repeat } from "lucide-react"

interface WorkflowStepProps {
  number: number
  title: string
  description: string
  icon: LucideIcon
  codeExample: string
  isLast?: boolean
}

function WorkflowStep({ number, title, description, icon: Icon, codeExample, isLast }: WorkflowStepProps) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-6 top-20 h-[calc(100%-4rem)] w-px border-l border-dashed border-zinc-800"></div>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25">
          {number}
        </div>

        <div className="space-y-4 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-sm sm:text-base text-zinc-400">{description}</p>

          <div className="rounded-lg border border-zinc-800 bg-black p-4">
            <pre className="text-xs sm:text-sm text-zinc-400 overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500">
            Step-by-Step Tutorial
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">How AI Agents Work</h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Learn the core components and workflow of building effective AI agents.
          </p>
        </div>

        <div className="mt-16 flex flex-col space-y-12 md:space-y-16">
          <WorkflowStep
            number={1}
            title="Define the Agent's Purpose"
            description="Start by clearly defining what your agent needs to accomplish. The best agents have well-scoped domains and specific objectives."
            icon={MessagesSquare}
            codeExample={`// Define the agent's system prompt
const systemPrompt = \`You are a research assistant that helps
users find and summarize scientific papers.
Your goal is to provide accurate, well-structured information.\`;`}
          />

          <WorkflowStep
            number={2}
            title="Connect to Foundation Model"
            description="Choose and integrate with a language model that will power your agent's reasoning capabilities."
            icon={Bot}
            codeExample={`import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

// Set up the language model
const model = openai('gpt-4o');`}
          />

          <WorkflowStep
            number={3}
            title="Add Tool Capabilities"
            description="Expand what your agent can do by connecting it to external tools, APIs, and data sources."
            icon={PlugZap}
            codeExample={`// Define tools the agent can use
const tools = [
  {
    name: 'search_papers',
    description: 'Search for scientific papers',
    parameters: {
      type: 'object',
      properties: {
        query: { type: 'string' },
        limit: { type: 'number' }
      },
      required: ['query']
    }
  }
];`}
          />

          <WorkflowStep
            number={4}
            title="Implement Reasoning Loop"
            description="Create the decision-making process that allows your agent to plan and execute actions to achieve its goals."
            icon={Repeat}
            codeExample={`async function agentLoop(query, maxSteps = 5) {
  let step = 0;
  let context = \`User query: \${query}\n\n\`;
  
  while (step < maxSteps) {
    // Think: Determine next action based on context
    const { object: plan } = await generateObject({
      model,
      schema: planSchema,
      prompt: \`\${context}\nWhat should I do next?\`
    });
    
    // Act: Execute the chosen action
    const result = await executeAction(plan.action, plan.parameters);
    
    // Update context with results
    context += \`\nAction: \${plan.action}\nResult: \${result}\n\`;
    step++;
    
    // Check if goal is complete
    if (plan.isComplete) break;
  }
  
  return context;
}`}
          />

          <WorkflowStep
            number={5}
            title="Provide Response Generation"
            description="Format the agent's final output for the user based on the results of its actions and reasoning."
            icon={FileJson}
            codeExample={`// Generate the final response for the user
const { text: finalResponse } = await generateText({
  model,
  system: systemPrompt,
  prompt: \`\${context}\n\nProvide a well-formatted final 
response to the user's query.\`
});

return finalResponse;`}
            isLast
          />
        </div>

        <div className="mt-16 flex justify-center">
          <Button className="gap-2 bg-gradient-to-r from-purple-500 to-primary hover:from-purple-500/90 hover:to-primary/90">
            Try the interactive tutorial
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

