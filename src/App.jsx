import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components';


const Button = styled.button`
	color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// 拡張できる例
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato
`

const Input = styled.input`
	padding: 0.5em;
  margin: 0.5em;
	color: ${props => props.inputColor || "palevioletred"};
	background: papayawhip;
  border: none;
  border-radius: 3px;
`

const Thing = styled.div`
	&:hover {
  color: red; // <Thing> when hovered
  }

  & ~ & {
  background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
  background: lime; // <Thing> next to <Thing>
  }

  &.something {
  background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
  border: 1px solid; // <Thing> inside another element labeled ".something-else"
	}

	.something {
	border: 1px solid; // an element labeled ".something" inside <Thing>
  display: block;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />
function App() {
  return (
    <div className="App">
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      {/* asをつけることでタグをかえることができる */}
      <TomatoButton as="a" href="/">Link with</TomatoButton>
      {/* custom componentをasに渡すこともできる */}
      <Button as={ReversedButton}>Custom Button</Button>
      <Input defaultValue="@probablyup" type="text" />
      {/* propsを渡す */}
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
      {/* ＆なしでセレクターを配置すると、コンポーネントの子を参照する */}
      <Thing>
        <label htmlFor="foo-button" className="something">Mystery button</label>
        <button id="foo-button">What do I do?</button>
      </Thing>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </div>
  );
}

export default App;
