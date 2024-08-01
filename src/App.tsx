import './App.css';
import { useState } from 'react';

type Colors = {
  red: number,
  green: number,
  blue: number,
  error: boolean,
  status: boolean
}

function App() {
  const [input, setInput] = useState<Colors>({
    red: 255,
    green: 255,
    blue: 255,
    error: false,
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    if ((target.value.length === 1) && (target.value !== '#')) {
      target.value = `#${target.value}`; // Добавляем решётку в начало строки
    }

    if (target.value.length > 7) {
      target.value = target.value.slice(0, 7);
    }

    if (target.value.length < 7) {
      setInput((prevInput) => ({
        ...prevInput,
        ['status']: false,
      }));
    }

    if (target.value.length === 7) {
      // Проверка строки на соответствие цвету
      const regexp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
      const inputText = target.value.match(regexp);

      if (inputText) {
        const text = inputText[0].slice(1);
        const red = parseInt(text.slice(0, 2), 16);
        const green = parseInt(text.slice(2, 4), 16);
        const blue = parseInt(text.slice(4), 16);

        setInput({
          red,
          green,
          blue,
          error: false,
          status: true,
        });

      } else {
        setInput({
          red: 255,
          green: 0,
          blue: 0,
          error: true,
          status: true,
        });
      }
    }
   }

  return (
    <div className='conteiner' style={{backgroundColor: `rgb(${input.red}, ${input.green}, ${input.blue})`}}>
      <div className='conteiner-content'>
        <input id='hex' type="text" className={`input-field status-input-${input.status}`} onChange={handleChange} placeholder="#FFFFFF" />
        <label htmlFor="hex">
          <div className='result-field'>
            {
              input.error
                ? 'Ошибка !!!'
                : `rgb (${input.red}, ${input.green}, ${input.blue})`
            }
          </div>
        </label>
      </div>
    </div>
  )
}

export default App
