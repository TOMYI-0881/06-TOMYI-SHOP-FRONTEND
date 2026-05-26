import { AdminTitle } from "@/admin/components/AdminTitle";
import CustomPagination from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  return (
    <>
      <div className="py-2 flex justify-between items-center w-[98%] mx-auto mb-6">
        <AdminTitle
          title="Productos"
          description="Aquí puedes ver y administrar tus productos"
        />

        <Link to="/admin/products/new">
          <Button>
            <PlusIcon />
            Nuevo producto
          </Button>
        </Link>
      </div>

      <div className="w-[98%] mx-auto overflow-x-auto rounded-lg border border-gray-200 shadow-xs mb-10 bg-white">
        <Table className="w-full min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Imagen</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Inventario</TableHead>
              <TableHead>Tallas</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>
                <img
                  src="https://placehold.co/250x250"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>Producto 1</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>Categoría 1</TableCell>
              <TableCell>100 stock</TableCell>
              <TableCell>XS,S,L</TableCell>
              <TableCell className="text-right">
                {/* <Link to={`t-shirt-teslo`}>Editar</Link> */}
                <Link to={`/admin/products/t-shirt-teslo`}>Editar</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <CustomPagination totalPages={10} />
    </>
  );
};
