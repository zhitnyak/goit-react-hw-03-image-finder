// // import {ToastContainer} from 'react'

// // import React, { Component } from "react";

// // import axios from 'axios';

// // const API_KEY = '22603097-01ea7c9e46d89c9af2e821f90';

// // const BASE_URL = 'https://pixabay.com/api/';

// class App extends Component {

//   state = {

//     catName: 'null' ,

//     // loadiing: false,

//     // page: 1,

//     // perPage: 12,

//   };

// // handleNameChange = e =>{

// //   this.setState({cat: e.currentTarget.value.toLowerCase()})

// // }

//   habdleFormSubmit = catName =>{

//     this.setState({catName})

//   }

//   // componentDidMount() {

//   //   //const url = `${BASE_URL}?q=${this.query}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=${this.perPage}`;

//   //   fetch(`https://pixabay.com/api/?q=cat&page=1&${API_KEY}=your_key&image_type=photo&orientation=horizontal&per_page=12`)

//   //   .then(res=>res.json())

//   //   .then(cat => this.setState({cat}))

//   //   .finally(()=> this.setState({loading: false}))

//   // }

//   render() {

//    return (

//       <div className="wrapper">

//         {/* {this.state.loading && <h1>Загружаем...</h1>}

//         {this.state.cat && <div>{this.state.cat}</div>} */}

//         <catForm onSubmit={this.habdleFormSubmit}/>

//         <catInfo catName={this.state.catName}/>

//         <ToastContainer autoClose={3000}/>

//       </div>

//     );

//   }

// }

// export default App;

// //==============

// // import { Component } from "react";

// // import {toast} from 'react-toastify'

// export default class catForm extends Component{

// state = {

//   cat: "" ,

// };

// handleNameChange = e =>{

// this.setState({catName: e.currentTarget.value.toLowerCase()})

// }

// handleSubmit = e =>{

//   e.preventDefault()

//   if(this.state.catName.trim() ===''){

//     return  toast.error("vvedy")

// }

//   this.props.onSubmit(this.state.catName)

//   this.setState({catName:''})

// }

// render () {

//   return {

// //   <header class="searchbar">

// //   <form class="form">

// //     <button type="submit" class="button">

// //       <span class="button-label">Search</span>

// //     </button>

// //     <input

// //       class="input"

// //       type="text"

// //       autocomplete="off"

// //       autofocus

// //       placeholder="Search images and photos"

// //     />

// //   </form>

// // </header>

// }

// }

// }

// //+++++++++++++==

// export default class catInfo extends Component{

//   state = {

//     cat: "" ,

//      loadiing: false,

//   };

//   componentDidUpdate(prevProps, prevState){

//     const prevName = prevProps.catName

//     const nextName = this.props.catName

//   if(prevName !== nextName){

//     console.log('change name cats')

//     console.log('prevProps', prevName)

//     console.log('this.props.catName', nextName)

//     this.setState({loading: true, cat: null})

//     fetch(`https://pixabay.com/api/?q=${searchName}&page=${pages}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)

//     .tthen((response) => {

//       if (response.ok) {

//         return response.json();

//       }

//       return Promise.reject(new Error(`No images on request ${nextName}`));

//     })

//       .then(cat => this.setState({cat}))

//       .catch(error => this.setState({error}))

//       .finally(()=> this.setState({loading: false}))

//   }

// }

//   render(){

//     const{cat, loading, error} = this.state

//     const {catName} = this.props

//     return <div>

//       <h1>catInfo</h1>

//       {error && <h1>{error.message}</h1>}

//               {loading && <h1>Загружаем...</h1>}

//       {!catName && <div>Vvedy</div>}

//       {cat && <div>{cat.name}</div>}

//         {/* {this.state.cat && <div>{this.state.cat}</div>} */}

//       <p>{catName}</p>

//       <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage}/>

//       </div>

//   }

// }
