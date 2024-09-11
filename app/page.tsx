import { prisma } from "@/lib/prisma";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h2>Home</h2>

      <ul className="flex flex-col gap-y-2">
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
