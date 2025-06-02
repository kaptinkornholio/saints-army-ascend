
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface NFTGridSkeletonProps {
  count?: number;
}

const NFTGridSkeleton: React.FC<NFTGridSkeletonProps> = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="cosmic-card p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gradient-to-br from-black/80 to-saints-purple/10">
          <Skeleton className="w-full aspect-square rounded-md lg:rounded-lg mb-2 lg:mb-3" />
          <Skeleton className="h-4 w-3/4 mx-auto mb-2" />
          <div className="flex gap-1 mb-2 lg:mb-3 justify-center">
            <Skeleton className="h-6 w-12 rounded-full" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>
          <Skeleton className="h-8 w-full rounded-md lg:rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default NFTGridSkeleton;
