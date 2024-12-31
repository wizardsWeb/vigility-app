import AnimatedTestimonials from "@/components/ui/AnimatedTestimonials";
 
export function Testimonials() {
  const testimonials = [
    {
      quote:
        "comes with 23+ years of career success in business development, managing & implementing Transformation Projects.",
      name: "Anand Jain",
      designation: "Chief Executive Officer",
      src: "/team/anand.png",
    },
    {
      quote:
        "Comes with 27+ years of experience on EMS & IT Infrastructure. Open-minded individual with a proven track record in IT Infrastructure.",
      name: "Deepak Upadhyay",
      designation: "Chief Technical Officer",
      src: "/team/deepak.png",
    },
    {
      quote:
        "She is a remarkable leader and her kindness and down to earth nature inspires us to work with patience under pressure.",
      name: "Swati Upadhyay",
      designation: "Director",
      src: "/team/swati.png",
    },
    {
      quote:
        "She has a clear, logical mind with a practical approach to problem solving and a drive to see things through to completion.",
      name: "Uplabdhi Jain",
      designation: "Director",
      src: "/team/uplabdhi.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}