import { ReactNode } from "react";
import HeaderV2 from "./HeaderV2";
import FooterV2 from "./FooterV2";

interface LayoutV2Props {
  children: ReactNode;
}

export const LayoutV2 = ({ children }: LayoutV2Props) => {
  return (
    <div className="min-h-screen bg-v2-surface text-v2-ink-body font-lato antialiased">
      <HeaderV2 />
      <main className="pt-16 md:pt-20">{children}</main>
      <FooterV2 />
    </div>
  );
};

export default LayoutV2;
