import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        id="services"
        preTitle="Nova Code Benefits"
        title="Why Choose Nova Code?"
      >
        Nova Code delivers high-quality websites and applications tailored to
        your business needs. Our team of experts ensures your digital presence
        stands out with innovative and scalable solutions.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        id="approach"
        preTitle="Watch a video"
        title="Empowering Your Digital Journey"
      >
        Discover how Nova Code can transform your ideas into reality. Watch our
        video to see how we can help fulfill your business needs with innovative
        solutions.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        id="testimonials"
        preTitle="Testimonials"
        title="What Our Clients Say"
      >
        Hear from our satisfied clients and learn why Nova Code is the trusted
        partner for businesses looking to innovate and grow.
      </SectionTitle>

      <Testimonials />

      <SectionTitle id="faq" preTitle="FAQ" title="Frequently Asked Questions">
        Got questions? We’ve got answers. Browse through our FAQ to learn more
        about how Nova Code can help your business thrive.
      </SectionTitle>

      <Faq />
      <Cta id="contact" />
    </Container>
  );
}
