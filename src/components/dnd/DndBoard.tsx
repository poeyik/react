import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  padding: 16,
  fontSize: '14px',
  background: '#fff',
  border: '1px solid rgba(0,0,0,.125)',
  ...draggableStyle
});

const DndBoard = ({
  droppableId,
  itemsData,
}: any) => {

  return(
    <Droppable
      droppableId={droppableId}
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {itemsData.map((item: any, index: number) => (
            <Draggable
              key={item.id}
              draggableId={item.id.toString()}
              index={index}
            >
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                  {item.content}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    // <>
    //   <DragDropContext onDragEnd={onDragEnd}>
    //     <Droppable
    //       droppableId="board"
    //       type="COLUMN"
    //       direction="horizontal"
    //       isCombineEnabled={isCombinedEnabled}
    //     >
    //       {(provided) => (
    //         <div ref={provided.innerRef}>
    //           {ordered.map((key, index) => (
    //             <DndItem
    //               key={key}
    //               index={index}
    //               draggableId={key}
    //             >
    //             </DndItem>
    //           ))}
    //           {provided.placeholder}
    //         </div>
    //       )}
    //     </Droppable>
    //   </DragDropContext>
    // </>
  )  
}

export default DndBoard;