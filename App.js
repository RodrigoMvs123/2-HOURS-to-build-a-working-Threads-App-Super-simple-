import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)
    const [ text, setText ] useState("")

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreads = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const postReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    const postThread = async () => {
      const thread {
          "timestamp": newDate(),
          "thread_from": user.user_uuid,
          "thread_to": user.user_uuid || null,
          "reply_to": interactingThread?.id || null,
          "text": text,
          "likes": [] 
      }

      try {
          const response = await fetch ("http://localhost:3000/threads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(thread)
          })
          const result = await response.json()
          console.log(result)
          getThreads()
          getReplies()
          setText("")
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    console.log('interactingThread', interactingThread)

    const handleClick = () => {
            setPopUpFeedThread(null)
            setInteractingThread(null)
            setOpenPopUp(true)
        }

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
              text={text}
              setText={setText}
              postThread={postThread}
          />}
        </div>}
        <div onClick={handleClick}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App
