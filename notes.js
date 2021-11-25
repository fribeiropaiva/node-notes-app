const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedNote = notes.find(note => note.title === title);

  if (!duplicatedNote) {
    notes.push({
      title,
      body
    });

    fs.writeFileSync('notes.json', JSON.stringify(notes));

    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('This note has already been saved!'));
  }
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch(e) {
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  if (notes.length === 1 && notes[0].title === title) {
    fs.writeFileSync('notes.json', JSON.stringify([]));
  } else {
    const filteredNotes = notes.filter(note => note.title !== title);
      if (filteredNotes.length >= 1) {
        fs.writeFileSync('notes.json', JSON.stringify(filteredNotes));
      } else {
        console.log(chalk.red.inverse('Note not found.'));
        return;
      }
    }
    console.log(chalk.green.inverse(`Note '${title}' successfully removed.` ));
}

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    notes.forEach(note => console.log(chalk.green.inverse(note.title)));
  } else {
    console.log(chalk.red.inverse("You don't have any notes to show"))
  }
}

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.green.inverse(noteToRead.body));
  } else {
    console.log(chalk.red.inverse('Note not found.'));
  }
}

module.exports = {listNotes, addNote, removeNote, readNote};