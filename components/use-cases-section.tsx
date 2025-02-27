import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, FileText, Microscope, Users } from "lucide-react"
import Image from "next/image"

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500">
            Real-World Applications
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">AI Agent Use Cases</h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Discover how organizations are deploying AI agents to transform their operations.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="development" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-zinc-950 border border-zinc-800">
                <TabsTrigger
                  value="development"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Code className="h-4 w-4 mr-2" />
                  Development
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Microscope className="h-4 w-4 mr-2" />
                  Research
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger
                  value="customer"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Customer Support
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="development" className="mt-0">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Development Assistant</Badge>
                  <h3 className="text-2xl font-bold text-white">Accelerate Development Workflows</h3>
                  <p className="text-zinc-400">
                    AI agents can serve as intelligent coding assistants that help developers debug issues, generate
                    code, explain complex systems, and automate repetitive development tasks.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Automated Code Generation</h4>
                        <p className="text-sm text-zinc-400">Generate boilerplate code, tests, and documentation</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Intelligent Debugging</h4>
                        <p className="text-sm text-zinc-400">Analyze errors and suggest potential fixes</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Code Refactoring</h4>
                        <p className="text-sm text-zinc-400">Suggest improvements to existing codebases</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="gap-1 px-0 text-primary hover:text-primary/90">
                    See developer agent documentation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Development Agent Screenshot"
                    className="w-full object-cover h-[400px]"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-0">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">Research Assistant</Badge>
                  <h3 className="text-2xl font-bold text-white">Accelerate Discovery & Insights</h3>
                  <p className="text-zinc-400">
                    Research agents can search, analyze, and synthesize information from multiple sources, helping
                    researchers stay current with the latest developments and generate new insights.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Literature Review</h4>
                        <p className="text-sm text-zinc-400">Find and summarize relevant papers and articles</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Data Analysis</h4>
                        <p className="text-sm text-zinc-400">Process and interpret complex datasets</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Hypothesis Generation</h4>
                        <p className="text-sm text-zinc-400">
                          Suggest new research directions based on existing knowledge
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="gap-1 px-0 text-purple-500 hover:text-purple-500/90">
                    See research agent case studies
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Research Agent Screenshot"
                    className="w-full object-cover h-[400px]"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content" className="mt-0">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Content Creation</Badge>
                  <h3 className="text-2xl font-bold text-white">Streamline Content Production</h3>
                  <p className="text-zinc-400">
                    Content agents can help plan, draft, edit, and optimize various types of content, from blog posts
                    and marketing materials to technical documentation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Content Planning</h4>
                        <p className="text-sm text-zinc-400">Develop content strategies and editorial calendars</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Adaptive Writing</h4>
                        <p className="text-sm text-zinc-400">
                          Create content tailored to specific audiences and platforms
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">SEO Optimization</h4>
                        <p className="text-sm text-zinc-400">Enhance content for better search visibility</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="gap-1 px-0 text-blue-500 hover:text-blue-500/90">
                    Explore content agent templates
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Content Agent Screenshot"
                    className="w-full object-cover h-[400px]"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customer" className="mt-0">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Customer Support</Badge>
                  <h3 className="text-2xl font-bold text-white">Enhance Customer Experience</h3>
                  <p className="text-zinc-400">
                    Support agents can handle customer inquiries, resolve common issues, and escalate complex problems,
                    providing 24/7 assistance while reducing response times.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Query Resolution</h4>
                        <p className="text-sm text-zinc-400">Answer common questions and troubleshoot issues</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Personalized Assistance</h4>
                        <p className="text-sm text-zinc-400">Provide help based on customer history and preferences</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Intelligent Routing</h4>
                        <p className="text-sm text-zinc-400">Escalate complex issues to the right human specialists</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="gap-1 px-0 text-green-500 hover:text-green-500/90">
                    View support agent framework
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Customer Support Agent Screenshot"
                    className="w-full object-cover h-[400px]"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

