import React, { Component } from "react";
import { Data } from "./Data";
import IPod from "./IPod";
import ZingTouch from "zingtouch";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.wheelRef = React.createRef();
    this.zingtouch = null;
    this.distance = 0;
    this.sensitivity = 25;

    this.songsArray = Data.Songs;
    this.currentSongIndex = 0;

    this.btnFunction = {
      menuOrBack: this.menuOrBack,
      okButtonHandle: this.okButtonHandle,
      playBtn: this.playBtn,
      forwardBtn: this.forwardBtn,
      backwardBtn: this.backwardBtn,
      seekBarChange: this.seekBarChange
    };

    this.state = {
      menuQueue: [0],  //~help to fallback to previous path/menu
      selectedMenu: 0,   //~current working menue-index(in Data)
      selectedOption: 0,  //~current selected option in that menu
      menuArray: Object.values(Data)[0],  //~menu
      singlePage: false,  //~to know the root of app
      currentSong: new Audio(this.songsArray[0].source),  //~current selected song
    };
  }


  componentDidMount() {
    const wheel = this.wheelRef.current;
    this.zingtouch = new ZingTouch.Region(wheel);
    this.bindRotationGesture();
  }


  bindRotationGesture = () => {
    const wheel = this.wheelRef.current;//~ used to get a reference to the element in the DOM where the rotation gesture will be detected.
    const myGesture = new ZingTouch.Rotate();

    const menuArray = Object.values(Data)[this.state.selectedMenu];

    this.zingtouch.bind(wheel, myGesture, (event) => {
      if (!this.state.currentSong.paused) return; //~ Song is playing, do not perform rotation gesture

      if (Math.floor(event.detail.distanceFromOrigin) === 0) {
        this.distance = 0;//~reset to 0
      }

      if (Math.abs(this.distance - event.detail.distanceFromOrigin) > this.sensitivity) {

        const menuName = Object.keys(Data)[this.state.selectedMenu];

        let newState;
        if (this.distance - event.detail.distanceFromOrigin < 0) {
          newState = (this.state.selectedOption + 1) % menuArray.length;
        } else {
          newState = (this.state.selectedOption - 1 + menuArray.length) % menuArray.length;
        }
        this.setState((prevState) => {

          if (menuName == "Songs") { //~help to select song by gesture , only when song is not playing
            this.currentSongIndex = newState;
            return {
              currentSong: new Audio(this.songsArray[newState].source),
              selectedOption: newState
            }
          } else {//~ if not song menue, just change selectedOption
            return { selectedOption: newState }
          }

        });
        this.distance = event.detail.distanceFromOrigin;
      }
    });
  };



  menuOrBack = () => {
    let newMenuQueue = this.state.menuQueue;

    if (newMenuQueue.length === 1 || !this.state.currentSong.paused) { //~ you are on top or song is playing
      console.log(`sorry, selected Option has no effect, ${!this.state.currentSong.paused ? "Song is playing" : "you are on top"}`)
      return;
    }

    newMenuQueue.pop();
    const newSelectedMenu = newMenuQueue[newMenuQueue.length - 1]
    
    this.setState({
      menuQueue: newMenuQueue,
      selectedMenu: newSelectedMenu,
      selectedOption: 0,
      menuArray: Object.values(Data)[newSelectedMenu],
      singlePage: false, //~ single page render krna hai ya menu
    })
  }



  okButtonHandle = (option) => {
    let newMenuQueue = this.state.menuQueue;
    const length = newMenuQueue.length;

    if (newMenuQueue[length - 1] === newMenuQueue[length - 2]) { //~ means you are at the root of app
      console.log(`sorry, selected Option has no effect, ${!this.state.currentSong.paused ? "Song is playing" : "you are on root of App"}`)
      return;
    }

    const newSelectedMenu = Object.values(Data)[this.state.selectedMenu][option].parentIndex;
    newMenuQueue.push(newSelectedMenu);

    
    if (newSelectedMenu === this.state.selectedMenu) {
      this.setState({
        singlePage: true,
        menuQueue: newMenuQueue,
        selectedMenu: newSelectedMenu,
        selectedOption: 0,
        menuArray: Object.values(Data)[option],
      })
      return;
    }

    this.setState({
      singlePage: false,
      menuQueue: newMenuQueue,
      selectedMenu: newSelectedMenu,
      selectedOption: 0,
      menuArray: Object.values(Data)[option],
    });
  }

  // for functionality of play/pause button
  playBtn = () => {
    if (this.state.currentSong.paused) {
      this.state.currentSong.play();
     
    } else {
      this.state.currentSong.pause();
     
    }
  }


  // for functionality of forward button
  forwardBtn = () => {
    this.state.currentSong.pause();
    this.currentSongIndex = (++this.currentSongIndex % this.songsArray.length);
    const newCurrentSong = new Audio(this.songsArray[this.currentSongIndex].source);
    
    newCurrentSong.play();

    this.setState({
      currentSong: newCurrentSong,
    })
  }

  // for functionality of backward button
  backwardBtn = () => {
    this.state.currentSong.pause();
    this.currentSongIndex = this.currentSongIndex === 0 ? this.songsArray.length - 1 : --this.currentSongIndex;
    const newCurrentSong = new Audio(this.songsArray[this.currentSongIndex].source);
    
    newCurrentSong.play();

    this.setState({
      currentSong: newCurrentSong,
    })
  }



  render() {
   
    return (
      <>
        <IPod
          selectedMenu={this.state.selectedMenu}
          selectedOption={this.state.selectedOption}
          singlePage={this.state.singlePage}
          currentSong={this.state.currentSong}

          currentSongIndex={this.currentSongIndex}
          btnFunction={this.btnFunction}
          wheelRef={this.wheelRef}
        />
      </>
    );
  }
}

export default App;
