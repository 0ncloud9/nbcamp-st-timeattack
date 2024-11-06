import { useState } from 'react'

function App() {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [medalList, setMedalList] = useState([]);


  const onSubmit = () => {
    
  }

  const handleUpdate = () => {
    
  }

  const handleDelete = () => {
    
  }


  return (
    <div>
      <div>
          <form>
            <div>
              <div>국가명</div>
              <input type="text" value={country} placeholder='국가명' required/>
            </div>
            <div>
              <div>금</div>
              <input type="number" value={gold} placeholder='국가명' min={0} required/>
            </div>
            <div>
              <div>은</div>
              <input type="number" value={silver} placeholder='국가명' min={0} required/>
            </div>
            <div>
              <div>동</div>
              <input type="number" value={bronze} placeholder='국가명' min={0} required/>
            </div>
            <button type='submit' onClick={onSubmit()}>추가하기</button>
            <button onClick={handleUpdate()}>업데이트</button>
          </form>
          <table>
            <tr>
              <th>국가</th>
              <th>🥇</th>
              <th>🥈</th>
              <th>🥉</th>
              <th>액션</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <th><button onClick={handleDelete}>삭제</button></th>
            </tr>
          </table>

      </div>
      </div>
  )
}

export default App
