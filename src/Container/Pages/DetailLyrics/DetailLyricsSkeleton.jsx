import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";

const DetailLyricsSkeleton = () => {
    return (
        <div className="container text-center">
            <Skeleton height={30} className="mt-2" /> 
            <Skeleton className="mb-3 mt-3" width={200} />
            <SkeletonTheme>
            <p>
                <Skeleton className="mb-3" count={14} />
            </p>
            </SkeletonTheme>;
        </div>
    )
}

export default DetailLyricsSkeleton;
