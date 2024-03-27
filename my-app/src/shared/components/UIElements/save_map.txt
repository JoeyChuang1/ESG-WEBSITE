import React from "react";
import './Map.css';
import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";

const comments = {
    id: 1,
    items: [],
  };

const Map = props => {
    const [commentsData, setCommentsData] = useState(comments);

    const { insertNode, editNode, deleteNode } = useNode();
  
    const handleInsertNode = (folderId, item) => {
      const finalStructure = insertNode(commentsData, folderId, item);
      setCommentsData(finalStructure);
    };
  
    const handleEditNode = (folderId, value) => {
      const finalStructure = editNode(commentsData, folderId, value);
      setCommentsData(finalStructure);
    };
  
    const handleDeleteNode = (folderId) => {
      const finalStructure = deleteNode(commentsData, folderId);
      const temp = { ...finalStructure };
      setCommentsData(temp);
    };
    const dummyComments = [
  {
    id: 1,
    text: 'This is the first comment!',
    replies: [
      {
        id: 2,
        text: 'Reply to the first comment!',
        replies: [],
      },
    ],
  },
  {
    id: 3,
    text: 'This is the second comment!',
    replies: [],
  },
];

    return  <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
};

export default Map;