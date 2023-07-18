import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = ({ user, setOpenPopUp, PopUpFeedThread, text, setText, postThread }) => {
    return (
      <div className="popup">
          <p onClick={() => setOpenPopUp(false)}>X</p>
          {PopUpFeedThreads?map(PopUpFeedThread => 
               <PopUpThread
                    key={PopUpFeedThread.id}
                    popPupFeedThread={popPupFeedThread}
               />
          )}
          <threadInput
              user={user}
              text={text}
              setText={setText}
              postThread={postThread}
          />
      </div> 
    );
  }
  
export default PopUp
