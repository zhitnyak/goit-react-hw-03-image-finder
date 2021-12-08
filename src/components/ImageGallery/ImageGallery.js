// import css from "../../App.css";
// import React, { Component } from "react";
// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import Button from "../Button/Button";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
// import Modal from "../Modal/Modal";

// import api from "../apiImg";
// export default class ImageGallery extends Component {
//   state = {
//     status: "idle",
//   };

//   componentDidUpdate(prevProps) {
//     const prevSearch = prevProps.searchbar;
//     const nextSearch = this.props.searchbar;
//     const page = 1;
//     if (prevSearch !== nextSearch) {
//       this.setState({ status: "pending", page: 1 });

//       api
//         .fetchImg(nextSearch, page)
//         .then((images) => {
//           if (images.total === 0) {
//             this.setState({ error: "No any picture", status: "rejected" });
//           } else {
//             this.setState({
//               images: images.hits,
//               status: "resolved",
//               page: 1,
//               searchbar: nextSearch,
//             });
//           }
//         })
//         .catch((error) => this.setState({ error, status: "rejected" }));
//     }
//   }
//   loadMore = () => {
//     const page = this.state.page + 1;

//     api
//       .fetchImg(this.state.searchbar, page)
//       .then((images) =>
//         this.setState((prevState) => ({
//           images: [...prevState.images, ...images.hits],
//           page: prevState.page + 1,
//         }))
//       )
//       .then(() => {
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth",
//         });
//       })
//       .catch((error) => this.setState({ error }));
//   };
//   modalOpen = (moduleUrl, moduleAlt) => {
//     this.setState({
//       largeImageURL: moduleUrl,
//       alt: moduleAlt,
//     });
//   };
//   modalClose = () => {
//     this.setState({ largeImageURL: "", alt: "" });
//   };

//   render() {
//     const { images, status } = this.state;
//     if (status === "idle") {
//       return <p></p>;
//     }
//     if (status === "pending") {
//       return <Loader />;
//     }
//     if (status === "resolved") {
//       return (
//         <ul className={css.ImageGallery}>
//           {images.map((image) => {
//             return (
//               <ImageGalleryItem
//                 key={image.id}
//                 tags={image.tags}
//                 webformatURL={image.webformatURL}
//                 largeImageURL={image.largeImageURL}
//                 modalOpen={this.modalOpen}
//               />
//             );
//           })}
//           <Button onClick={this.loadMore} />
//           {this.state.largeImageURL && (
//             <Modal
//               largeImageURL={this.state.largeImageURL}
//               alt={this.state.alt}
//               onClick={this.modalClose}
//             />
//           )}
//         </ul>
//       );
//     }
//     if (status === "rejected") {
//       return <p>{this.state.error}</p>;
//     }
//   }
// }
