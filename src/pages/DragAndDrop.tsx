import { useState, useEffect } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import DndBoard from "../components/dnd/DndBoard";
import DndContext from "../components/dnd/DndContext";

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const getListStyle = (isDraggingOver: boolean) => ({
  backgroud: isDraggingOver ? "lightgreen": 'lightgrey',
  padding: 8,
  width: 250
})

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  padding: 16,
  margin: `0 0 8px 0`,
  background: isDragging? 'lightgreen' : 'grey',
  ...draggableStyle
})

interface IItem {
  id: number,
  content: string
}

export default function DragAndDrop() {
  const [ boards, setBoards ] = useState(["board1", "board2", "board3"]);
  const [ items, setItems ] = useState<IItem[]>([
    { id: 0, content: "asd"},
    { id: 1, content: "asd1"},
    { id: 2, content: "asd2"},
    { id: 3, content: "asd3"},
    { id: 4, content: "asd4"},
    { id: 5, content: "asd5"},
    { id: 6, content: "asd6"},
  ]);
  const [ selected, setSelected ] = useState<Array<IItem>>([{id:7, content: "777"}]);


  const getList = (id: any) => {
    if (id === "droppable") {
      return items;
    } else if (id === "droppable2") {
      return selected;
    }
  }

  const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
  
    destClone.splice(droppableDestination.index, 0, removed);
    

    console.log(items)
  }

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const reorderedItems = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === "droppable") {
        // items 순서 바꾸기
      } else {
        // selected 순서 바꾸기
      }
      
    } else {
      move(getList(source.droppableId), getList(destination.droppableId), source, destination);

    }
  }

  return(
    <DndContext>
      <DndBoard droppableId={"board1"} itemsData={itemsData} />
      <DndBoard droppableId={"board2"} itemsData={itemsData2} />
    </DndContext>
  )
}

const boardData = [
  {
    id: 1,
    name: "Jake"
  },
  {
    id: 2,
    name: "BMO"
  },
  {
    id: 3,
    name: "Finn"
  },
  {
    id: 4,
    name: "Princess bubblegum"
  },
]

const itemsData = [
  {
    id: 1,
    content: 'a1',
    board: "Jake"
  },
  {
    id: 2,
    content: 'a2',
    board: "Jake"
  },
  {
    id: 3,
    content: 'a3',
    board: "Finn"
  },
  {
    id: 4,
    content: 'a4',
    board: "BMO"
  },
]

const itemsData2 = [
  {
    id: 11,
    content: 'a1',
    board: "Jake"
  },
  {
    id: 12,
    content: 'a2',
    board: "Jake"
  },
  {
    id: 13,
    content: 'a3',
    board: "Finn"
  },
  {
    id: 14,
    content: 'a4',
    board: "BMO"
  },
]