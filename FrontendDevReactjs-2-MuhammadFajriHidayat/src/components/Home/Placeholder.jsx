import { Card, Skeleton } from "@nextui-org/react";

export default function Placeholder({ skeletonNum }) {
  return (
    <>
      <div className="mt-10 grid grid-cols-4 gap-6">
        {skeletonNum.map((value, i) => (
          <Card key={i} className="  w-[250px] space-y-10 p-4">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
