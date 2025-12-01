import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import useApi from "@/hooks/use-api";

const ITEMS_PER_PAGE = 5;

export function DataTable() {
  const { data, error, loading } = useApi("/countriesWithPopulationGreater");

  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

  const totalData = data.length;
  const totalPages = Math.ceil(totalData / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = data.slice(startIndex, endIndex);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Top 5 Countries With High Population </CardTitle>
        <CardDescription>Latest available data</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <Table className="w-[600px]">
          <TableCaption className="text-base text-left md:text-center">
            Countries With Population Greater
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Country Name</TableHead>
              <TableHead>Continent</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-right">Population</TableHead>
              <TableHead className="text-right">Capital</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentData.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{item.Name}</TableCell>
                <TableCell>{item.Continent}</TableCell>
                <TableCell>{item.Region}</TableCell>
                <TableCell className="text-right">
                  {item.Population?.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">{item.Capital}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between px-2 py-3">
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>

          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
