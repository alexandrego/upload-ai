import { Button } from "./components/ui/button";

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1>Upload AI</h1>

        <div>
          <span>Desenvolvido com 💜 no NLW da Rocketseat</span>
          <Button>Github</Button>
        </div>
      </div>
    </div>
  )
}