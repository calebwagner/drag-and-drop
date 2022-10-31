import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";

const PictureList = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]

export default function DragDrop() {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => { addImageToBoard(item.id) },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id)
        setBoard((board) => [...board, pictureList[0]])
    }

    return (
        <>
            <div className="pictures">{PictureList.map(picture => {
                return <Picture id={picture.id} url={picture.url} />
            })}</div>
            <div className="board" ref={drop}>
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />
                })}
            </div>
        </>
    )
}