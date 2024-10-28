import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Sanjeevani" },
    { name: "description", content: "Welcome to Sanjeevani" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <div className="flex justify-between items-center mt-3 px-3">
        <h1 className="text-4xl font-bold">Sanjeevani</h1>
      </div>
      <Hero/>
    </div>
  );
}
