import React, { useState, createRef } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';
import {exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef = createRef();

    const addText = () => {
        setCount(count+1);
    }
    
  return (
    <div>
      <div ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} alt="" width="300px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <div>
        <Button className="m-2" variant="primary" 
        onClick={addText}>
          Add Text
        </Button>

        <Button variant="success" 
        onClick={(e) => exportComponentAsJPEG(memeRef)}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Edit;
