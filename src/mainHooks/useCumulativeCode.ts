import { useTypedSelector } from "./useTypedSelector";

export const useCumulativeCode=(cellId:string)=>{
    return useTypedSelector((state) => {
        const { data, order } = state.cells;
        const orderedCell = order.map((id) => data[id]);
        const showFunc = ` import _React from 'react';
        import _ReactDOM from 'react-dom';
        const root=document.querySelector('#root');
       var show = (value) => {
          if (typeof value === 'object') {
            if(value.$$typeof && value.props){
              _ReactDOM.render(value,root);
            }
            else
            root.innerHTML = JSON.stringify(value);
          } else {
            root.innerHTML = value;
          }
        };
      `;
        const showFuncNoOp = "var show=()=>{}";
        const cumulativeCode = [];
        for (let c of orderedCell) {
          if (c.type === "code") {
            if (c.id === cellId) {
              cumulativeCode.push(showFunc);
            } else {
              cumulativeCode.push(showFuncNoOp);
            }
            cumulativeCode.push(c.content);
          }
          if (c.id === cellId) {
            break;
          }
        }

        return cumulativeCode.join('\n');
      });
}