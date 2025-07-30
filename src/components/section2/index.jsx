"use client";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div className="flex flex-row">
      {/* Card 1 */}
      <div className="h-[100vh] bg-background min-w-1/4 flex justify-center items-center m-auto rounded-bl-lg rounded tr-lg cursor-pointer">
        <motion.div
          className="p-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="m-2 text-black">
            <h1 className="text-4xl">Affordable Produce</h1>
            <p className="my-2">
              At Tama, we believe healthy eating starts with access. We offer a
              wide array of produce making it easy for everyone to enjoy fruits
              and vegetables without breaking the bank. Stock up on seasonal
              staples, everyday essentials, and community favorites that change
              every day!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 2 */}
      <div className="h-[100vh] bg-amber-500 min-w-1/4 flex justify-center items-center m-auto cursor-pointer">
        <motion.div
          className="p-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="m-2 text-black">
            <h1 className="text-4xl ">Filipino Specialties</h1>
            <p className=" my-2">
              Craving sinigang, adobo, or halo-halo? We’ve got the ingredients,
              snacks, and sauces that make Filipino cooking so special. From
              classic pantry staples to frozen favorites and ready-to-eat meals,
              Tama is your go-to for authentic Filipino groceries.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 3 */}
      <div className="h-[100vh] bg-amber-700 min-w-1/4 flex justify-center items-center m-auto cursor-pointer">
        <motion.div
          className="p-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="m-2 text-white ">
            <h1 className="text-4xl">Local Products</h1>
            <p className="my-2">
              We carry products made right here in the community, from sauces
              and baked goods to handmade treats. By shopping local, you’re not
              only enjoying fresh, high-quality goods but also helping small
              businesses and families thrive.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 4 */}
      <div className="h-[100vh] bg-amber-950 min-w-1/4 flex justify-center items-center m-auto rounded-tl-lg rounded br-lg cursor-pointer">
        <motion.div
          className="p-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="m-2 text-white">
            <h1 className="text-4xl ">We Listen to YOU</h1>
            <p className="my-2">
              Can’t find something? Suggest it. We’re constantly improving our
              store based on what our community asks for. Tama is your
              supermarket, help shape it.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
