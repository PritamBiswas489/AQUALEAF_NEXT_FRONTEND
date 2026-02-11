
import "./ChatDropdown.scss";
import "./ChatDropdown.responsive.scss";
import { useEffect, useRef, useState } from "react";

function ChatDropdown({ homeContent }) {

  // Contact chat dropdown
      const [showDropDown, setShowDropDown] = useState(false);
      const [selectedItems, setSelectedItems] = useState([]);
      const dropdownRef = useRef(null);
      useEffect(() => {
          const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                  setShowDropDown(false);
              }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
      const handleToggle = (title) => {
          if (selectedItems.includes(title)) {      
          setSelectedItems(selectedItems.filter((item) => item !== title));
          } else {      
          setSelectedItems([...selectedItems, title]);
          }
      };
  
      const ChatDropDownData = [
          {
              id: '1',
              title: 'Hiring dedicated developer/team'
          },
          {
              id: '2',
              title: 'Project based delivery',
          },
          {
              id: '3',
              title: 'Scoping requirements',
          },
          {
              id: '4',
              title: 'RFP / RFI I have',
          },
          {
              id: '5',
              title: 'Plugging a talent/resource gap',
          },
          {
              id: '6',
              title: 'Existing project takeover',
          },
          {
              id: '7',
              title: 'Getting help with a task',
          },
          {
              id: '8',
              title: 'Become a referral partner',
          },
          {
              id: '9',
              title: 'Career enquiry',
          },
          {
              id: '2',
              title: 'General enquiry',
          },
      ]
  return (
    <>
        <div ref={dropdownRef} className={`contact-chat-dropdown ${showDropDown ? 'open' : ''}`}>
            <div className="chat-dropdown-area" onClick={() => setShowDropDown(!showDropDown)}>
                {selectedItems.length === 0 
                ? "I’d like to chat about..."
                : selectedItems.length === 1 
                ? selectedItems[0]
                : `${selectedItems[0]} + ${selectedItems.length - 1} More`
                }
            </div>
            {showDropDown && (
                <div className="chat-dropdown-list">
                    <ul>
                        {ChatDropDownData.map((val, i) => (
                        <li className='checkbox' key={i}>
                            <input type='checkbox' 
                            id={`checkbox-${val.id}`} 
                            checked={selectedItems.includes(val.title)} 
                            onChange={() => handleToggle(val.title)}
                            />
                            <label htmlFor={`checkbox-${val.id}`}>{val.title}</label>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </>
  );
}

export default ChatDropdown;
