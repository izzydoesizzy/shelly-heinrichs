import { Card, CardContent } from "@/components/ui/card";

export const AboutShelly = () => {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <div className="relative lg:h-full">
              <img
                className="relative rounded-lg shadow-lg object-cover"
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Shelly Heinrichs"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Meet Shelly Heinrichs
              </h2>
              <div className="mt-6 text-xl text-muted-foreground space-y-6">
                <p>
                  After losing nearly 100 pounds and maintaining that loss for several years, I knew I had to share what I'd discovered. As a Certified Holistic Nutrition and Health Coach and Certified Ketogenic Lifestyle Coach, I now help women break free from the same struggles I faced.
                </p>
                <p>
                  My journey taught me that sustainable weight loss isn't about counting calories or endless cardio. It's about understanding how food affects your body, particularly your blood sugar, and making choices that support your natural healing abilities.
                </p>
                <p>
                  Today, I guide women to find their unique path to health—because there's no one-size-fits-all solution. Whether it's low-carb, keto, or intermittent fasting, we'll discover what works for your body and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};