// //================

// import { Component } from "react";

// import {toast} from 'react-toastify'

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

//   <header class="searchbar">

//   <form class="form">

//     <button type="submit" class="button">

//       <span class="button-label">Search</span>

//     </button>

//     <input

//       class="input"

//       type="text"

//       autocomplete="off"

//       autofocus

//       placeholder="Search images and photos"

//     />

//   </form>

// </header>

// }

// }

// }

// //+++++++++++++

// import api from './'

// export default class catInfo extends Component{

//   state = {

//     cat: null ,

//     error: null,

//     status: 'idle'

//   };

//   componentDidUpdate(prevProps, prevState){

//     const prevName = prevProps.catName

//     const nextName = this.props.catName

//   if(prevName !== nextName){

//     console.log('change name cats')

//     console.log('prevProps', prevName)

//     console.log('this.props.catName', nextName)

//     this.setState({status:'pending'});

//       api.fetchImg(nextSearch, page)

//       .then(cat => this.setState({cat, status: 'resolved'}))

//       .catch(error => this.setState({status: 'rejected'}))

//   }

// }

// render(){

//   const{cat, error, status} = this.state

//   if(status === 'idle'){

//   return <div></div>

//   }

//      if(status === 'pending'){

//     return <Spiner />

//     }

//     if(status === 'rejected'){

//       return <h1>{error.message}</h1>

//       }

//      if(status === 'resolved'){

//       return (

// <div>

//     <p>{catName}</p>

//     <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage}/>

// </div>

//       )

//       }

//     }}

//       //===================================== Fetch

// //============================
