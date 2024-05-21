import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
const PathBreadcrumb = ({ Category, SubCategory }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-base sm:text-xl font-medium">
        <BreadcrumbItem>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href="/shop" className="hover:text-black">
            {Category}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{SubCategory}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PathBreadcrumb;
