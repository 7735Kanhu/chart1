import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });
    // setChart([...chart, { name, message: msg }])
    setMsg("");
  };

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      console.log(data.val());
      setChat((chat) => [...chat, data.val()]);
    });
  }, []);
  return (
    <div>
      <div>
        {name ? null : (
          <div>
            <input
              type="text"
              placeholder="Enter Your NAme"
              onBlur={(e) => setName(e.target.value)}
            />
          </div>
        )}
      </div>
      {name ? (
        <div>
          <h1>User: {name}</h1>
          <div className="chart-container">
            {chat.map((c, i) => (
              <div
                key={c.i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chart-box">
                  <strong>{c.name}:</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="send">
            <input
              type="text"
              placeholder="Enter your chart"
              value={msg}
              onInput={(e) => setMsg(e.target.value)}
            />
            <button onClick={(e) => sendChat()}>Submit</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
