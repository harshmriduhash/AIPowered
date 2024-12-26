import { Article } from "../../components/Article";
import Header from "../../components/Header";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";


export default function WriteArticle() {
 
  return (
    <>
      <Header />
      <CopilotKit>
      runtimeUrl="https://api.openai.com/v1/engines/text-davinci-002/"
      publicApiKey={process.env.OPENAI_API_KEY}
        <CopilotSidebar
          instructions="Help the user research a blog article topic."
          defaultOpen={true}
          labels={{
            title: "Blog Article Copilot",
            initial:
              "Hi you! 👋 I can help you research any topic for a blog article.",
          }}
          clickOutsideToClose={false}>
          <Article />
        </CopilotSidebar>
      </CopilotKit>
    </>
  );
}

