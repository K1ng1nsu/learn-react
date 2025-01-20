import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';

const TOPICS = ['components', 'jsx', 'props', 'state'];

const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
};

function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleSelect = (selectedButton) => {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    };

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item, index) => {
                            return <CoreConcept key={item.title} {...item} />;
                        })}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {TOPICS.map((topic) => {
                            return (
                                <TabButton
                                    key={topic}
                                    isSelected={selectedTopic === topic}
                                    onSelect={() => handleSelect(topic)}
                                >
                                    {capitalizeFirstLetter(topic)}
                                </TabButton>
                            );
                        })}
                    </menu>

                    {!selectedTopic && <p>Please select a topic</p>}

                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
