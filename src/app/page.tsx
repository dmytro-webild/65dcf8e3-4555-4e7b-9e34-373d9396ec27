"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Mr Hair Cutt"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient",
      }}
      logoText="Mr Hair Cutt Saloon"
      description="Premium grooming services for the modern gentleman. Experience expert precision, classic techniques, and an atmosphere of refined relaxation."
      buttons={[
        {
          text: "Book Appointment",
          href: "#contact",
        },
        {
          text: "Our Services",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-bearded-black-man-with-tattooed-arm-wearing-white-shirt_613910-1888.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="A Legacy of Grooming"
      metrics={[
        {
          icon: Award,
          label: "Years of Experience",
          value: "15+",
        },
        {
          icon: Users,
          label: "Satisfied Clients",
          value: "10K+",
        },
        {
          icon: Sparkles,
          label: "Services Performed",
          value: "50K+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Expert Grooming Services"
      description="We specialize in precision cuts, classic shaves, and personalized grooming experiences tailored to your style and hair type."
      accordionItems={[
        {
          id: "s1",
          title: "Precision Haircut",
          content: "Our signature service includes a professional consultation, precision cut, and styling using premium products.",
        },
        {
          id: "s2",
          title: "Classic Straight Razor Shave",
          content: "Experience the ultimate hot towel service and straight razor shave for the cleanest finish possible.",
        },
        {
          id: "s3",
          title: "Beard Sculpting",
          content: "Keep your beard looking its best with professional shaping, line-up, and conditioning treatments.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/barber-shop-interior_1163-2009.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          price: "$45",
          name: "Signature Haircut",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "Consultation",
            "Precision Cut",
            "Style Application",
          ],
        },
        {
          id: "p2",
          price: "$35",
          name: "Classic Shave",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "Hot Towel",
            "Straight Razor Shave",
            "Aftershave Treatment",
          ],
        },
        {
          id: "p3",
          price: "$65",
          name: "The Gentleman's Combo",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "Precision Cut",
            "Classic Shave",
            "Beard Detail",
          ],
        },
      ]}
      title="Our Services & Pricing"
      description="Transparent pricing for exceptional grooming services. Choose the package that suits your needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "John Doe",
          role: "Architect",
          company: "Design Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-barber-combing-moustache-client_23-2147778841.jpg",
        },
        {
          id: "2",
          name: "Mark Smith",
          role: "Manager",
          company: "Tech Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/latino-hair-salon-owner-taking-care-client_23-2150286038.jpg",
        },
        {
          id: "3",
          name: "Robert Lee",
          role: "Photographer",
          company: "Lens Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-getting-haircut_23-2150665407.jpg",
        },
        {
          id: "4",
          name: "David Miller",
          role: "CEO",
          company: "Growth Inc",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pov-entrepreneurs-online-meeting_482257-79771.jpg",
        },
        {
          id: "5",
          name: "Paul Brown",
          role: "Lawyer",
          company: "Brown & Assoc",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-mobile-phone-communication-technology_53876-16014.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Avg Rating",
        },
        {
          value: "99%",
          label: "Client Satisfaction",
        },
        {
          value: "500+",
          label: "Monthly Appointments",
        },
      ]}
      title="Client Reviews"
      description="What our clients say about their experience at Mr Hair Cutt Saloon."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Visit Us"
      title="Ready to look your best?"
      description="Book your appointment today and get the premium grooming experience you deserve at Mr Hair Cutt Saloon."
      buttons={[
        {
          text: "Schedule Appointment",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Mr Hair Cutt Saloon"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
