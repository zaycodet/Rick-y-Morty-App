import { Link } from 'react-router-dom';
import { CardContainer } from './styles';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <CardContainer>
         <Link to={`/detail/${id}`} className='nav-link'>
         <h2>{name}</h2>
         </Link>
         <p>{species}</p>
         <p>{gender}</p>
         <img src={image} alt='' />
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>

         <button onClick={() => onClose(id)}>💀</button>
      </CardContainer>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps, mapDispatchToProps
)(Card);