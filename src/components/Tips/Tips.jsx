import React from "react";
import { FaFacebookSquare, FaTwitter, FaWhatsappSquare } from "react-icons/fa";
import img from "../../assets/winter-pet-care.jpg";

const Tips = () => {
  return (
    <div className="py-20 px-4 bg-base-200 space-y-4">
      <h2 className="text-emerald-600 text-4xl font-bold">Winter Care Tips for Pets</h2>
      <div className="flex gap-2 justify-start items-center">
        <FaFacebookSquare className="bg-white p-1 rounded-full text-3xl cursor-pointer" />
        <FaTwitter className="bg-white p-1 rounded-full text-3xl cursor-pointer" />
        <FaWhatsappSquare className="bg-white p-1 rounded-full text-3xl cursor-pointer" />
      </div>
      <p>
        <span className="text-emerald-400 mr-4">Written by Emersion Emily</span>{" "}
        <span className="text-blue-400">Updated on 23 Oct 2025</span>
      </p>
      <img src={img} alt="Winter Care Tips for Pets" />
      <p>Long-haired dogs, on the other hand, can handle cold temperatures. Take a Labrador Retriever, for instance: these guys were originally bred to work in cold Canadian waters - hence the thick, waterproof coat. The same goes for the likes of Newfoundlands, Akitas, Huskies and German Shepherds. </p>
      <h2 className="text-emerald-600 text-2xl font-bold">How to Keep Dogs Warm in Winter</h2>

      <p>Thick fur and fat deposits provide natural insulation, so you may need to increase food intake during the colder months. Adding a small amount of warm water to your dog's biscuits will make a comforting meal.</p>
<p>One way to help your dog keep warm is through exercise, so keep up with those daily winter walks. It’s a good idea to have lots of short walks rather than one long one, and don’t leave your dog outside in the garden for too long.

It's important to limit your dog’s time outside in winter months and prevent them from getting too cold. Dogs with thin haircoats, like Dachshunds, Greyhounds or Chihuahuas may need to wear a dog winter coat when they go outside.</p>
      <h2 className="text-emerald-600 text-2xl font-bold">Winter Cat Care</h2>
      <p>When the first winter snow arrives, your cat will be itching to get out and explore. If you do let your cat out, make sure you have a cat flap installed so that they can come inside whenever they get too cold. Take extra care to wipe off any grit, salt and other substances that can cause skin irritation.</p>
      <h2 className="text-emerald-600 text-2xl font-bold">Winter Grooming for Cats and Dogs</h2>
      <p>For long-haired breeds of cat and dog, the advice is usually to avoid trimming and shaving as often during the winter, so they don’t miss out on that natural layer of insulation. That said, don’t cut back on the brushing and combing. As well as being a cause of irritation, matted hair is less effective at providing a barrier against cold snow and rain, so be sure to brush out any mats and tangles</p>
    </div>
  );
};

export default Tips;
