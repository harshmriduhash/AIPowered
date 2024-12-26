import Image from "next/image";
import Link from "next/link";
import Header from "src/components/Header";
import { Article } from "../components/Article";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";



const Home = async () => {
 
  
  return (
    <>
        <Header />
          <CopilotKit>
         
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
      {/* <Header />
      <div className="max-w-[85rem] h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            key={""}
            className="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 "
            href={""}>
           <Image
            
             className="object-cover h-48 w-96 rounded-xl"
             src="/world.jpeg"
             width={500}
             height={500}
             alt="world"
           />
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 ">
                Hello World
              </h3>
            </div>
          </Link>
        </div>
      </div>
       */}
    </>
  );
};

export default Home;