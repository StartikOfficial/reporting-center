import GlobalProvider from "@/app/GlobalProvider";
import { Footer, HeaderWithForm, Main } from "@/widgets";

function MainPage() {

  return (
    <GlobalProvider>
      <HeaderWithForm/>
      <Main/>
      <Footer/>
    </GlobalProvider>
  )

};

export default MainPage;