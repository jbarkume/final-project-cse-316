import React, { useContext, useEffect, useState } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import SearchB from './SearchB.js'
import MUIDeleteModal from './MUIDeleteModal'
import ReactYouTube from './ReactYouTube'

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import List from '@mui/material/List';
import Box from '@mui/material/Box'
import SearchBar from './SearchB';
/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { store } = useContext(GlobalStoreContext);
    let [pairs, setPairs] = useState(store.idNamePairs)
    let [currentPlaylist, setPlaylist] = useState(["dQw4w9WgXcQ"])
    console.log("pairs = ", pairs)
    console.log("currentPlaylist = ", currentPlaylist);

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }

    // Returns array of filtered by search bar, full array if searchInput is empty
    function filter(searchInput) {
        if (searchInput.length > 0) {
            setPairs(store.idNamePairs.filter((pair) => {
                return pair.name.match(searchInput);
            }));
        }
        else {
            setPairs([...store.idNamePairs]);
        }
    }

    function sortAlpha() {

    }

    function sortOldtoNew() {

    }

    function sortNewToOld() {

    }

    function searchUsers(searchInput) {
        // set pairs to all possible published playlists and filter by user

        if (searchInput.length > 0) {
            setPairs(pairs.filter((pair) => {
                return pair.name.match(searchInput);
            }));
        }
        else {
            setPairs(pairs);
        }
    }

    function searchByPlaylists() {
        // set pairs to all possible published playlists in database

    }

    function searchOwn() {
        setPairs(store.idNamePairs);
    }

    function changeCurrentPlaylist(id) {
        setPlaylist(pairs.find((pair) => {
            return pair._id === id
        }).playlist)
        console.log(currentPlaylist)
    }

    function openType(evt, type) {
        // Declare all variables
        let i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(type).style.display = "block";
        evt.currentTarget.className += " active";
      }


    let listCard = "";

    if (store) {
        console.log(pairs)
        listCard = 
            <List key={pairs} sx={{width: '100%', bgcolor: 'background.paper', mb:"20px" }}>
            {
                pairs.map((pair) => (
                    <ListCard
                        key={pair._id}
                        idNamePair={pair}
                        selected={false}
                        published={pair.published}
                        changeFunction={changeCurrentPlaylist}
                    />
                ))
                
            }
            </List>;
    }
    return (
        <div id="playlist-selector">
            <div id="list-selector-heading">
            <Fab sx={{transform:"translate(-20%, 0%)"}}
                color="primary" 
                aria-label="add"
                id="add-list-button"
                onClick={handleCreateNewList}
            >
                <AddIcon />
            </Fab>
                Your Playlists
            <SearchB 
                filter={filter}/>
                <div class="dropdown" style={{"left": 200}}>
                    <button class="dropbtn"
                        sx={{transform:"translate(-20%, 0%)"}}
                        color="white" 
                        label="Sort By"
                        id="sort-list-button">
                        Sort By</button>
                    <div class="dropdown-content">
                        <button onClick={sortAlpha}>A-Z</button>
                        <button onClick={sortOldtoNew}>Old-New</button>
                        <button onClick={sortNewToOld}>New-Old</button>
                    </div>
                </div>   
            </div>
            <Box sx={{bgcolor:"background.paper"}} id="list-selector-list">
                {
                    listCard
                }
                <MUIDeleteModal />
            </Box>
            <Box id="player">
                <ReactYouTube key={currentPlaylist} playlist={currentPlaylist}/>
            </Box> 
                
        </div>)
}

export default HomeScreen;