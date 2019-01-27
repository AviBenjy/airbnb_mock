import React from "react"


export const GlobalContext = React.createContext()
// const { Provider, Consumer } = StoreData

// class DataProvider extends React.Component {

//   state = {
//     initialData: []
//   }

//   setInitialData = async initialData => {
//     this.setState({initialData})
//   }

//   actions = {
//     setInitialData: this.setInitialData
//   }

//   render() {
//     return <Provider value={{ ...this.state, ...this.actions }}> {this.props.children} </Provider>
//   }
// }

// export { DataProvider, Consumer as DataConsumer, StoreData }
