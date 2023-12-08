import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center text-black mb-16">
          Unlock exclusive premium features with AuthorCopilot.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-accent rounded-md shadow-lg border p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <BsCheckCircle className="w-12 h-12 mx-auto mb-6 text-white" />
            <h3 className="text-white text-2xl font-semibold mb-4  text-center">Automated Writing</h3>
            <p className="text-white text-center">
              Utilize OpenAI's advanced GPT-4 powered technology to automatically generate high-quality content. Say goodbye to writer's block and hello to unlimited creativity.
            </p>
          </div>
          <div className="bg-accent rounded-md shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <BsCheckCircle className="w-12 h-12 mx-auto mb-6 text-white" />
            <h3 className="text-white text-2xl font-semibold mb-4 text-center">Industry-Standard Formatting</h3>
            <p className="text-white text-center">
              Enjoy hassle-free formatting and ensure your ebook meets industry standards. Impress your readers with a professionally designed ebook that stands out from the crowd.
            </p>
          </div>
          <div className="bg-accent rounded-md shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <BsCheckCircle className="w-12 h-12 mx-auto mb-6 text-white" />
            <h3 className="text-white text-2xl font-semibold mb-4 text-center">Efficient Publishing</h3>
            <p className="text-white text-center">
              Easily publish your ebook on multiple platforms and reach a wider audience. Maximize your earning potential with our streamlined publishing process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;