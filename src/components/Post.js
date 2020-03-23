import React from 'react';
import { UserContext } from '../App';

function Post({ image, content, user }) {
  const currentUser = React.useContext(UserContext);
  const isCurrentUser = currentUser === user;

  return (
    <>
      {image && (
        <img
          style={{ height: 200, width: 300, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt='Post Cover'
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && 'red' }}>{user}</div>
    </>
  );
}

export default Post;
