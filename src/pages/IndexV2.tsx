import LayoutV2 from "@/components/v2/LayoutV2";
import HeroV2 from "@/components/v2/sections/HeroV2";
import ProblemStatV2 from "@/components/v2/sections/ProblemStatV2";
import WhyItHappensV2 from "@/components/v2/sections/WhyItHappensV2";
import NoSomosV2 from "@/components/v2/sections/NoSomosV2";
import MondayV2 from "@/components/v2/sections/MondayV2";
import TuEquipoV2 from "@/components/v2/sections/TuEquipoV2";
import TodoListoV2 from "@/components/v2/sections/TodoListoV2";
import ComparativaV2 from "@/components/v2/sections/ComparativaV2";
import CrmComparisonV2 from "@/components/v2/sections/CrmComparisonV2";
import BestOfBothV2 from "@/components/v2/sections/BestOfBothV2";
import ServicesGridV2 from "@/components/v2/sections/ServicesGridV2";
import IndustriesV2 from "@/components/v2/sections/IndustriesV2";
import HowItWorksV2 from "@/components/v2/sections/HowItWorksV2";
import CadenceV2 from "@/components/v2/sections/CadenceV2";
import CasesV2 from "@/components/v2/sections/CasesV2";
import TestimonialsV2 from "@/components/v2/sections/TestimonialsV2";
import ChatConciergeV2 from "@/components/v2/sections/ChatConciergeV2";
import PricingV2 from "@/components/v2/sections/PricingV2";
import FaqV2 from "@/components/v2/sections/FaqV2";
import FinalCtaV2 from "@/components/v2/sections/FinalCtaV2";

const IndexV2 = () => {
  return (
    <LayoutV2>
      <HeroV2 />
      <NoSomosV2 />
      <ServicesGridV2 />
      {/* <HowItWorksV2 /> */}
      <PricingV2 />
      {/* <ProblemStatV2 /> */}
      {/* <WhyItHappensV2 /> */}
      <MondayV2 />
      <TuEquipoV2 />
      {/* <ComparativaV2 /> */}
      {/* <TodoListoV2 /> */}
      {/* <CrmComparisonV2 /> */}
      {/* <BestOfBothV2 /> */}
      <IndustriesV2 />
      {/* <CadenceV2 /> */}
      <CasesV2 />
      <TestimonialsV2 />
      <ChatConciergeV2 />
      <FaqV2 />
      <FinalCtaV2 />
    </LayoutV2>
  );
};

export default IndexV2;
