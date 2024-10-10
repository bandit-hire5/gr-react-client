import { useState, useEffect, useContext } from 'react';
import { httpsCallable } from 'firebase/functions';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { Game } from '../interfaces/game';

const HomePage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    const fetchGames = async () => {
      if (firebaseContext) {
        const fn = httpsCallable<void, Game[]>(
          firebaseContext.functions,
          'getGameList'
        );

        const { data } = await fn();

        setGames(data);
      }
    };

    fetchGames();
  }, [firebaseContext]);

  return (
    <div className="home-container">
      <h1>Games List</h1>
      <ul className="games-list">
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
