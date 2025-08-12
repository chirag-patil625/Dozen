import Image from "next/image";
import "../components/ui/animations.css"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">Dozen</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse animate-delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animate-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                Project Management
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 block animate-gradient-x bg-[length:200%_200%]">
                  Made Simple
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The all-in-one workspace that combines the power of Jira's tracking,
                Notion's flexibility,
                <br className="hidden sm:block" />
                Trello's simplicity, and Asana's collaboration in one beautiful
                interface.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
              <button className="group relative bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"/>
                  </svg>
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="mt-16 relative animate-fade-in-up animate-delay-600">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-transform duration-500 hover:scale-105">
              {/* Browser Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    <div className="ml-4 text-sm text-gray-600 font-mono">dozen.app/workspace</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded animate-pulse delay-300"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded animate-pulse delay-400"></div>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Project Workspace</h3>
                    <p className="text-gray-600">Organize, track, and collaborate on all your projects</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">New Project</span>
                    </div>
                  </div>
                </div>

                {/* Feature Showcase Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-900">Task Management</h4>
                    </div>
                    <p className="text-blue-800">Create, assign, and track tasks with powerful filters and custom workflows</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Drag & Drop</span>
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Due Dates</span>
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Priority</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-green-900">Team Collaboration</h4>
                    </div>
                    <p className="text-green-800">Real-time updates, comments, and file sharing keep everyone in sync</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">Real-time</span>
                      <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">Comments</span>
                      <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">File Sharing</span>
                    </div>
                  </div>
                </div>

                {/* Kanban Board Preview */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Project Views</h4>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium">Board</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">List</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">Calendar</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">Timeline</button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium text-gray-900">Planning</h5>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">3</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border-l-4 border-purple-500 shadow-sm">
                          <div className="text-sm font-medium text-gray-900">Feature Specification</div>
                          <div className="text-xs text-gray-500 mt-1">Research & Planning</div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-500 shadow-sm">
                          <div className="text-sm font-medium text-gray-900">UI/UX Design</div>
                          <div className="text-xs text-gray-500 mt-1">Design Phase</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium text-yellow-900">In Development</h5>
                        <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full">2</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border-l-4 border-orange-500 shadow-sm">
                          <div className="text-sm font-medium text-gray-900">Backend API</div>
                          <div className="text-xs text-gray-500 mt-1">75% Complete</div>
                          <div className="mt-2">
                            <div className="bg-gray-200 rounded-full h-1.5">
                              <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium text-green-900">Completed</h5>
                        <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">5</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border-l-4 border-green-500 shadow-sm opacity-80">
                          <div className="text-sm font-medium text-gray-900 line-through">Project Setup</div>
                          <div className="text-xs text-green-600 mt-1 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Completed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Features */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-purple-900">Analytics</div>
                      <div className="text-xs text-purple-600">Track progress & performance</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-indigo-900">Documentation</div>
                      <div className="text-xs text-indigo-600">Rich text editor & wiki</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-pink-900">Integrations</div>
                      <div className="text-xs text-pink-600">Connect your favorite tools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything you need to manage projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features inspired by the best project management tools,
                unified in one platform.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "bg-blue-600 rounded",
                title: "Kanban Boards",
                description: "Visual project tracking with drag-and-drop simplicity, inspired by Trello's intuitive design.",
                gradient: "from-blue-500 to-blue-600",
                delay: "animate-delay-100"
              },
              {
                icon: "bg-green-600 rounded-full",
                title: "Issue Tracking",
                description: "Comprehensive bug and task tracking with Jira-level detail and organization.",
                gradient: "from-green-500 to-green-600",
                delay: "animate-delay-200"
              },
              {
                icon: "bg-purple-600 rounded-lg",
                title: "Rich Documentation",
                description: "Create detailed project docs and wikis with Notion-style rich text editing.",
                gradient: "from-purple-500 to-purple-600",
                delay: "animate-delay-300"
              },
              {
                icon: "bg-yellow-600 rounded-full",
                title: "Team Collaboration",
                description: "Real-time collaboration features that make teamwork as smooth as Asana.",
                gradient: "from-yellow-500 to-yellow-600",
                delay: "animate-delay-400"
              },
              {
                icon: "bg-red-600 rounded-lg",
                title: "Timeline View",
                description: "Gantt-style timeline visualization to track project progress and dependencies.",
                gradient: "from-red-500 to-red-600",
                delay: "animate-delay-500"
              },
              {
                icon: "bg-indigo-600 rounded-full",
                title: "Analytics & Reports",
                description: "Insightful project analytics and customizable reports to track team performance.",
                gradient: "from-indigo-500 to-indigo-600",
                delay: "animate-delay-600"
              }
            ].map((feature, index) => (
              <div key={index} className={`group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up ${feature.delay}`}>
                <div className="relative">
                  <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-8 h-8 ${feature.icon} bg-white/30`}></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full w-16 h-16 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80"></div>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to streamline your projects?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who have already transformed their project
              management workflow.
            </p>
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center justify-center">
                Start Your Free Trial
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Dozen</h3>
              <p className="text-gray-400">
                The ultimate project management tool for modern teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dozen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}