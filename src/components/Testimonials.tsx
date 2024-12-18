import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "After having done keto on my own for several months without much results, I decided to hire a coach. Shelly taught me how to listen to my body and not ignore hunger signals. In 8 weeks, I lost 23 pounds and brought my blood sugars down into the normal range.",
    author: "Tina B.",
    achievement: "Lost 23 pounds in 8 weeks"
  },
  {
    content: "Shelly is amazing in her knowledge of the small things you don't really think about when doing keto. Having someone with knowledge in your corner is a game changer!",
    author: "Melissa G.",
    achievement: "Achieved sustainable results"
  },
  {
    content: "My biggest problem was trying to do it all at once. Shelly worked with me to create a manageable plan and helped me learn how to make changes that moved me along my health journey.",
    author: "Linda M.",
    achievement: "Found a sustainable approach"
  }
];

export const Testimonials = () => {
  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transformational Results
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Real stories from women who've found freedom from the diet roller coaster
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card">
              <CardContent className="pt-10">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-primary opacity-20" />
                <div className="relative">
                  <p className="text-lg text-card-foreground mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.achievement}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};