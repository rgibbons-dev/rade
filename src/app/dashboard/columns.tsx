"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Book = {
  id: string;
  name: string;
  time: string;
  bookedBy: string;
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "bookedBy",
    header: "Booked By",
  },
];
