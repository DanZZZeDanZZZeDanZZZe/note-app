import DataComponent from "../DataComponent"
import DataLoader from "../DataLoader"

function DataLoadingComponent(props) {
  return (
    <DataLoader {...{url: props.url}}> 
      {(data, error) => (
          <DataComponent {...{data, error}}>
            {props.children(data)}
          </DataComponent>
      )}
    </DataLoader>
  )
}

export default DataLoadingComponent