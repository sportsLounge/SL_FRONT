import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideNavBar from "./components/SideNavBar";

function App() {

  return (
    <> 
      <SidebarProvider >
        <SideNavBar />
        <div className="w-full h-full">
          <SidebarTrigger />
          <p className='underline'> main-section</p>
        </div>
      </SidebarProvider> 
    </>
  )
}

export default App
