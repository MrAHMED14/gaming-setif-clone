import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Filters = () => {
  return (
    <div className="w-[235px] hidden lg:block">
      <div className="border sticky top-20 w-full flex-col p-4 rounded-md">
        <h1 className="font-bold text-lg">Filters</h1>

        <div className="">
          <h3 className="pt-3 font-medium">Categories</h3>
          <div className="px-4 py-2 flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="cat1" />
              <Label htmlFor="cat1">Composants</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat2" />
              <Label htmlFor="cat2">Moniteur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat3" />
              <Label htmlFor="cat3">Peripheriques</Label>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="pt-3 font-medium">Sub Category</h3>
          <div className="px-4 py-2 flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="cat1" />
              <Label htmlFor="cat1">Composants</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat2" />
              <Label htmlFor="cat2">Moniteur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat3" />
              <Label htmlFor="cat3">Peripheriques</Label>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="pt-3 font-medium">Brand</h3>
          <div className="px-4 py-2 flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="cat1" />
              <Label htmlFor="cat1">Composants</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat2" />
              <Label htmlFor="cat2">Moniteur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat3" />
              <Label htmlFor="cat3">Peripheriques</Label>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="pt-3 font-medium">Price</h3>
          <div className="px-4 py-2 flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="cat1" />
              <Label htmlFor="cat1">High to Low </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cat2" />
              <Label htmlFor="cat2">Low to High</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
