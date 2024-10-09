import { notFound } from "next/navigation";

interface CategoryProps {
  params: {
    id: string;
  };
}
export default function CategoryPage({ params }: CategoryProps) {
  const { id } = params;

  if (id === "kids") {
    notFound();
  }

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
}
