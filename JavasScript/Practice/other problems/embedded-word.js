/**
 * You are running a classroom and suspect that some of your students are passing aroudn the answers to multile choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. 
There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'

find_embedded_word(words, string1) -> cat

string2 = 'tbcabnihjs' -> cat
string3 = 'baykkjl' -> None/null
string4 = 'bbabykkjl' -> baby
string5 = 'ccc'; -> None/null
string6 = 'breadmaking'; -> bird
 */

const words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax'];
const string1 = 'tcabnihjs'
const string2 = 'tbcabnihjs';
const string3 = 'baykkjl';
const string4 = 'bbabykkjl';
const string5 = 'ccc';
const string6 = 'breadmaking';

function findEmbeddedString (words, string) {
    // input string letter counts
    let inputStringCount = {};

    for (let i = 0; i < string.length; i++) {
        // if letter does not exist, assign 1
        if (!inputStringCount[string[i]]) {
            inputStringCount[string[i]] = 1
        } else {
            // else letter exists, add 1
            inputStringCount[string[i]] += 1
        }
    }

    // go through the list of words
    for (let i = 0; i < words.length; i++) {
        let wordLetterCount = {};
        for (let j = 0; j < words[i].length; j++) {
            // if letter does not exist, assign 1
        if (!wordLetterCount[words[i][j]]) {
            wordLetterCount[words[i][j]] = 1
        } else {
            // else letter exists, add 1
            wordLetterCount[words[i][j]] += 1
        }
        }

        if (inputStringCount[words[i][j]]) {
            inputStringCount[words[i][j]] -= 1;
        }
    }
}

findEmbeddedString(words, string1);