import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

const TOPICS = ['components', 'jsx', 'props', 'state'];

const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
};

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleSelect = (selectedButton) => {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    };

    return (
        <Section id="examples" title="Examples">
            <Tabs
                // buttonsContainer="menu"
                // buttonsContainer={Section}
                buttons={
                    <>
                        {TOPICS.map((topic) => {
                            return (
                                <TabButton
                                    key={topic}
                                    isSelected={selectedTopic === topic}
                                    onClick={() => handleSelect(topic)}
                                >
                                    {capitalizeFirstLetter(topic)}
                                </TabButton>
                            );
                        })}
                    </>
                }
            >
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
            </Tabs>
        </Section>
    );
}
