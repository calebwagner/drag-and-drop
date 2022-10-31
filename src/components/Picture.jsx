import React from "react";
import { useDrag } from "react-dnd";

export default function Picture({ id, url }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    }));

    return (
        <>
            <img ref={drag} src={url} alt="" width="150px" style={{ border: isDragging ? "5px solid pink" : "0px"}}/>
        </>
    )
}