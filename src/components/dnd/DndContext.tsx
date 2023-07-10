import { DragDropContext } from "react-beautiful-dnd";

const DndContext = ({
  children
}: any) => {

  const onDragEnd = () => {

  }

  return(
    <DragDropContext onDragEnd={onDragEnd}>
      {children}
    </DragDropContext>
  )
}

export default DndContext;