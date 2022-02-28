import { v4 as uuidv4 } from 'uuid';

export interface Question {
  id: string;
  name: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  score: number;
  option: string;
}

export const questions: Question[] = [
  {
    id: '1',
    name: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    options: [
      { id: '1', option: 'Don’t dare to interrupt them ', score: 1 },
      {
        id: '12',
        option:
          'Think it’s more important to give them some of your time; work can wait ',
        score: 4,
      },
      {
        id: '13',
        option: 'Listen, but with only with half an ear ',
        score: 2,
      },
      {
        id: '14',
        option: 'Interrupt and explain that you are really busy at the moment ',
        score: 3,
      },
    ],
  },
  {
    id: '2',
    name: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You: ',
    options: [
      {
        id: '21',
        option: 'Look at your watch every two minutes ',
        score: 1,
      },
      {
        id: '22',
        option: 'Bubble with inner anger, but keep quiet ',
        score: 4,
      },
      {
        id: '23',
        option:
          'Explain to other equally impatient people in the room that the doctor is always running late ',
        score: 2,
      },
      {
        id: '24',
        option:
          'Complain in a loud voice, while tapping your foot impatiently ',
        score: 3,
      },
    ],
  },
  {
    id: '3',
    name: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You: ',
    options: [
      {
        id: '31',
        option: 'Don’t dare contradict them ',
        score: 1,
      },
      {
        id: '32',
        option: 'Think that they are obviously right ',
        score: 4,
      },
      {
        id: '33',
        option: 'Defend your own point of view, tooth and nail ',
        score: 2,
      },
      {
        id: '34',
        option: 'Continuously interrupt your colleague ',
        score: 3,
      },
    ],
  },
  {
    id: '4',
    name: 'You are taking part in a guided tour of a museum. You: ',
    options: [
      {
        id: '41',
        option:
          'Are a bit too far towards the back so don’t really hear what the guide is saying ',
        score: 1,
      },
      {
        id: '42',
        option: 'Follow the group without question ',
        score: 4,
      },
      {
        id: '43',
        option: 'Make sure that everyone is able to hear properly ',
        score: 2,
      },
      {
        id: '44',
        option:
          'Are right up the front, adding your own comments in a loud voice ',
        score: 3,
      },
    ],
  },
];
