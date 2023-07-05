import { useState, useEffect } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  //result[droppableSource.droppableId] = sourceClone;
  //result[droppableDestination.droppableId] = destClone;

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
  const [ items, setItems ] = useState([
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

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      let state = { items };
      
      if (source.droppableId === "droppable2") {
        
      }

      
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source, 
        destination
      );

      console.log(result);
    }
  }

  return(
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {selected.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}  
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}