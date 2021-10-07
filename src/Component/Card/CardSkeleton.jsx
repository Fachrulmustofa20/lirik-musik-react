import React from "react";
import Skeleton from "react-loading-skeleton";
import './Card.css';

const CardSkeleton = () => {
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="card mt-3 rounded bg-info text-white shadow-lg">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-3">
                            <Skeleton height={55} />
                        </div>
                        <div className="col-9 my-auto">
                            <Skeleton height={25} className="mb-1" />
                            <Skeleton className="mb-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardSkeleton;
