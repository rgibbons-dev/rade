import { Book, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Book[]> {
  return [
    {
      id: "abc1",
      name: "Professor X",
      time: "1/1/24 @ 12:00",
      bookedBy: "astudent@college.edu",
    },
    {
      id: "abc2",
      name: "Professor Y",
      time: "2/1/24 @ 12:00",
      bookedBy: "astudent@college.edu",
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
