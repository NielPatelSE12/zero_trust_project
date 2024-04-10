import React from 'react';


export default function Map() {
  return (
    <div>
      <form>
        <label>Start Location:
            <input type ='text' name='name'></input>
        </label>
        <label>End Location:
            <input type ='text' name='name'></input>
        </label>
        <button>Send Data</button>
      </form>
    </div>
  );
}