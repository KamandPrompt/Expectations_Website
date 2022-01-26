import { useRef, useEffect } from 'react'


// dynamic titles props
function Page(props) {
    const titleSuffix = ' | Expectations, IIT Mandi'
    useDocumentTitle(`${props.title}${titleSuffix}`)
    return <div>{props.content}</div>
  }

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
}

export default useDocumentTitle;