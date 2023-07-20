import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  0% { color: green; }
  10% { color: yellow; }
  20% { color: orange; }
  30% { color: red; }
  40% { color: purple; }
  50% { color: blue; }
  60% { color: cyan; }
  70% { color: lime; }
  80% { color: pink; }
  90% { color: teal; }
  100% { color: green; }
`;

export const CardContainer = styled.div`
  width: 300px;
  background-color: rgba(0, 150, 0, 0.8);
  font-family: 'Get Schwifty Regular';
  font-size: 13px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 10px;
  margin-top: 30px;
  flex: 0 0 200px;
  border: 2px solid black;
  transition: background-color 0.3s ease;
  cursor: url(${require('../img/cursor.png')}), auto;

  button {
    background-color: #FFB600;
    font-family: 'Get Schwifty Regular';
    font-size: 15px;
    color: black;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
    cursor: url(${require('../img/pointer.png')}), pointer;
  }

  h2 {
    margin: 10px 0;
    font-family: 'Get Schwifty Regular';
    font-size: 30px;
    font-weight: bold;
    color: #FFB600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease;
    text-decoration: none;
  }

  p {
    font-family: 'Get Schwifty Regular';
    font-size: 15px;
    margin: 10px 0;
    font-size: 15px;
    font-weight: bold;
    color: #FFB600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease;
  }

  .card-name {
    font-family: 'Get Schwifty Regular';
    font-size: 35px;
    color: #FFB600;
    transition: color 0.3s ease;
    text-decoration: underline;
    text-decoration-color: #FFB600;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
    cursor: url(${require('../img/pointer.png')}), pointer;

    &:hover {
      animation: ${rainbowAnimation} 0.2s infinite;
      font-family: 'Get Schwifty Regular';
      font-weight: bold;
      text-decoration: underline;
      text-decoration-color:r gba(0, 150, 0);
    }
  }

  .nav-link {
    color: black;
    text-decoration: none;
    cursor: url(${require('../img/pointer.png')}), pointer;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    background-color: rgba(255, 204, 0, 0.7);

    h3 {
      color: rgba(0, 150, 0, 0.8);
      font-family: 'Get Schwifty Regular';
    }

    h2 {
      color: rgba(0, 150, 0, 0.8);
      font-family: 'Get Schwifty Regular';
    }

    p {
      color: rgba(0, 150, 0, 0.8);
      font-family: 'Get Schwifty Regular';
    }

    button {
      background-color: rgba(0, 150, 0, 0.8);
      font-family: 'Get Schwifty Regular';
      font-size: 15px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  font-family: 'Get Schwifty Regular';
  font-size: 15px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  overflow-x: auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 20px;
  }
`;

export const SearchBarContainer = styled.div`
  background-color: rgba(255, 255, 0, 0.5);
  font-family: 'Get Schwifty Regular';
  color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 8px;
  gap: 20px;
  animation: backgroundAnimation 0.3s infinite;

  h1 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'Get Schwifty Regular';
    color: green;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
    font-size: 70px;
    padding: 5px;
    border-radius: 4px;
    transition: color 0.1s ease;

    &:hover {
      animation: ${rainbowAnimation} 0.2s infinite;
    }
  }

  button {
    font-family: 'Get Schwifty Regular';
    font-size: 15px;
    margin-top: 10px;
    background-color: #FFB600;
    color: black;
    text-decoration: none;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
    cursor: url(${require('../img/pointer.png')}), pointer;
  
    &:hover {
      background-color: #FFA200;
    }
  }

  .nav-link {
    color: black;
    text-decoration: none;
    cursor: url(${require('../img/pointer.png')}), pointer;
  }

  @keyframes backgroundAnimation {
    0% { background-color: rgba(255, 255, 0, 0.5); }
    25% { background-color: rgba(0, 255, 0, 0.5); }
    50% { background-color: rgba(255, 165, 0, 0.5); }
    75% { background-color: rgba(128, 0, 128, 0.5); }
    100% { background-color: rgba(255, 255, 0, 0.5); }
  }
`;

export const AppContainer = styled.div`
  background-image: url(${require('../img/rick-and-morty-uy-3840x2160.png')});
  font-family: 'Get Schwifty Regular';
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: url(${require('../img/cursor.png')}), auto;
`;

export const FormContainer = styled.div`
  background-color: rgba(255, 204, 0, 0.7);
  font-family: 'Get Schwifty Regular';
  font-weight: bold;
  color: rgba(0, 150, 0); 
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 8px;
  border: 2px solid black;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  &:hover {
    background-color: rgba(0, 150, 0, 0.8);
    font-family: 'Get Schwifty Regular';
    font-weight: bold;
    color: #FFB600;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 10px;
}

input {
  margin-bottom: 10px;
}


  button {
    font-family: 'Get Schwifty Regular';
    font-size: 15px;
    margin-top: 10px;
    background-color: rgba(0, 150, 0, 0.8);
    color: black;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
    cursor: url(${require('../img/pointer.png')}), pointer;
  
    &:hover {
      background-color: #FFA200;
    }
  }
`;

export const FavContainer = styled.div`
  h2 {
    margin: 10px 0;
    font-family: 'Get Schwifty Regular';
    font-size: 60px;
    font-weight: bold;
    color: green;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
    transition: color 0.3s ease;

    &:hover {
      animation: ${rainbowAnimation} 0.2s infinite;
      font-family: 'Get Schwifty Regular';
      font-weight: bold;
    }
  }

  label {
    margin: 10px 0;
    font-family: 'Get Schwifty Regular';
    font-size: 30px;
    font-weight: bold;
    color: green;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
  }
`