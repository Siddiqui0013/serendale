"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, RotateCcw } from 'lucide-react'
// import Link from "next/link"

export default function GeneratePage() {
  const [activeTab, setActiveTab] = useState<"workspace" | "preview">("workspace")
  const [generatedText] = useState<string>(
    "Optional syncing between the prompt and Canvas\nAuto-layout improvements for cleaner design\nExport feature to save designs as images\nA simple single-page interface to tie everything together"
  )
  const [prompt, setPrompt] = useState<string>("")

  // Sample code for demonstration
  const sampleCode = 
`# include <iostream>
using namespace std;

int main()
{
  char op;
  float num1, num2; 
  cout << "Enter operator: +, -, *, /: " << endl << "> ";
  
  cout << "Enter two operands: "; 
  cin >> num1 >> num2; 
  switch(op)
  {
    case '+': cout << num1 << " + " << num2 << " = " << num1 + num2; break; 
    case '-': cout << num1 << " - " << num2 << " = " << num1 - num2; break; 
    case '*': cout << num1 << " * " << num2 << " = " << num1 * num2; break; 
    case '/': cout << num1 << " / " << num2 << " = " << num1 / num2; break;
    
    default: // If the operator is other than +, -, *, or /, 
    // error message is shown cout << "Error! operator is not correct"; break; }
  
  return 0; }
`

  const handleGenerate = () => {
    console.log("Generating code from prompt:", prompt)
  }

  return (
    <div className="flex h-screen bg-[#212121] text-white">
      {/* Left Sidebar */}
      <div className="w-[400px] flex flex-col border-r border-gray-800">
        {/* Generated text area */}
        <div className="flex-1 p-6 bg-[#2c2c2c] overflow-y-auto">
          <pre className="whitespace-pre-wrap">{generatedText}</pre>
        </div>

        {/* Regenerate button */}
        <div className="p-4 flex justify-center">
          <Button variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800">
            <RotateCcw className="h-4 w-4 mr-2" />
            Regenerate
          </Button>
        </div>

        {/* Prompt input area */}
        <div className="p-4 bg-[#212121]">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your design"
              className="w-full h-24 bg-[#2c2c2c] rounded-md p-4 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Button
              onClick={handleGenerate}
              className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Generate
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <Tabs defaultValue="workspace" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2 bg-[#2c2c2c]">
              <TabsTrigger
                value="workspace"
                className={activeTab === "workspace" ? "data-[state=active]:bg-blue-600" : ""}
                onClick={() => setActiveTab("workspace")}
              >
                Work space
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className={activeTab === "preview" ? "data-[state=active]:bg-blue-600" : ""}
                onClick={() => setActiveTab("preview")}
              >
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button className="bg-blue-600 hover:bg-blue-700">Publish</Button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === "workspace" ? (
            <div className="bg-[#2c2c2c] rounded-md p-6 h-full overflow-auto">
              <pre className="text-gray-300 font-mono text-sm">{sampleCode}</pre>
            </div>
          ) : (
            <div className="bg-[#2c2c2c] rounded-md p-6 h-full overflow-auto">
              <div className="bg-white text-black p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Calculator App</h3>
                <p>A simple calculator that can perform basic arithmetic operations:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Addition</li>
                  <li>Subtraction</li>
                  <li>Multiplication</li>
                  <li>Division</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <p className="font-mono">Enter operator: +, -, *, /:</p>
                  <p className="font-mono">&gt; +</p>
                  <p className="font-mono">Enter two operands: 5 3</p>
                  <p className="font-mono">5 + 3 = 8</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}