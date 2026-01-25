// Project page for Poker Hand Analyzer

const Project3: React.FC = () => {
    return (
        <>
            <div className="is-size-5">
                <p>
                    The Poker Hand Analyzer is a fun and interactive single-page application built with <a href="https://vuejs.org/">Vue.js</a> that simulates drawing, evaluating, and improving poker hands using live data from the <a href="https://deckofcardsapi.com/">Deck of Cards API</a>.
                </p>
                <p>
                    The app starts by generating a fresh deck and automatically dealing five cards. It then evaluates the best possible poker hand from the current selection (such as <span className="is-italic">Pair</span>, <span className="is-italic">Three of a Kind</span>, <span className="is-italic">Straight</span>, or <span className="is-italic">Flush</span>) and displays the result immediately. Players can click any card to “flip” it, visually turning it over, and then choose to swap all flipped cards for new ones. After each swap, the application re-evaluates the hand and updates the result in real time. Players can perform up to two swaps per game, after which the deck is reshuffled, the state resets, and a new hand is dealt.
                </p>
                <p>
                    This project was my <span className="has-text-weight-bold">first experience building with Vue</span>, and it taught me a tremendous amount about <span className="has-text-weight-bold">state management</span> in a reactive framework. I learned how to:
                </p>
                <ol type="1">
                    <li>Maintain and update component state to reflect card flips, swaps, and shuffling.</li>
                    <li>Trigger UI changes automatically based on state updates.</li>
                    <li>Manage game logic in a clean and predictable way.</li>
                    <li>Re-initialize application state when a round concludes.</li>
                    <li>Keep the UI and underlying data perfectly in sync.</li>
                </ol>
                <p>
                    Overall, the Poker Hand Analyzer strengthened my understanding of real-time UI updates, conditional rendering, and orchestrating multiple pieces of interdependent state—skills that translate directly into building more advanced and dynamic front-end applications.
                </p>
            </div>
        </>
    );
};

export default Project3;