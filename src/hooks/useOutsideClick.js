import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        //ref.current is where the dom node that references the StyledModal element will be stored
        //if the ref.current does not contain the element that was clicked close the modal
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      //if we use true in the listenCapturing parameter the event will be handled in the capturing phase
      //(as the event moves down the tree)
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
