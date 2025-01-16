import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Choose Nova Code?",
  desc: "At Nova Code, we pride ourselves on delivering exceptional quality and results-driven solutions. Here’s why businesses trust us:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Customer-Centric Approach",
      desc: "We understand your unique needs and craft solutions tailored to your goals.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Business Growth",
      desc: "Our innovative solutions help improve customer acquisition and retention.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Expert Team",
      desc: "Work with experienced professionals who are passionate about delivering excellence.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our Advantages",
  desc: "Explore more reasons why Nova Code is your ideal partner for digital transformation:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Responsive Designs",
      desc: "Our solutions are designed to work seamlessly across all devices.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Modern Technology",
      desc: "Built using cutting-edge tools like Next.js and TailwindCSS for performance and reliability.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Light & Dark Mode",
      desc: "Enjoy visually appealing designs with customizable themes.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
