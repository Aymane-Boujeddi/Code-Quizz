const quizData2 =  [
    {
      "name": "JavaScript Basics",
      "difficulty": "easy",
      "timer": "3:00",
      "questions": [
        {
          "id": 1,
          "type": "boolean",
          "question": "Le JavaScript est utilisé principalement pour la programmation côté client?",
          "correctAnswer": true,
          "explanation": "JavaScript est principalement utilisé pour le côté client mais aussi côté serveur avec Node.js.",
          "questionTimer": "15s"
        },
        {
          "id": 2,
          "type": "qcm",
          "question": "Quel mot-clé est utilisé pour déclarer une constante en JavaScript?",
          "options": ["let", "const", "var", "final"],
          "correctAnswer": 1,
          "explanation": "Le mot-clé 'const' est utilisé pour déclarer une constante en JavaScript.",
          "questionTimer": "20s"
        },
        {
          "id": 3,
          "type": "text",
          "question": "Quelle méthode JavaScript retourne l'index d'un élément dans un tableau?",
          "correctAnswer": ["indexOf", "indexOf()", ".indexOf", ".indexOf()"],
          "explanation": "La méthode indexOf() retourne l'index du premier élément trouvé dans le tableau.",
          "questionTimer": "25s"
        }
      ]
    },
    {
      "name": "JavaScript Functions & Arrays",
      "difficulty": "medium",
      "timer": "4:00",
      "questions": [
        {
          "id": 1,
          "type": "qcm",
          "question": "Quelle méthode JavaScript permet de transformer chaque élément d'un tableau?",
          "options": ["map()", "filter()", "reduce()", "forEach()"],
          "correctAnswer": 0,
          "explanation": "map() crée un nouveau tableau en appliquant une fonction à chaque élément.",
          "questionTimer": "30s"
        },
        {
          "id": 2,
          "type": "boolean",
          "question": "Les fonctions JavaScript peuvent être anonymes?",
          "correctAnswer": true,
          "explanation": "Les fonctions anonymes sont des fonctions sans nom qui peuvent être utilisées comme arguments ou assignées à des variables.",
          "questionTimer": "15s"
        },
        {
          "id": 3,
          "type": "text",
          "question": "Quelle méthode permet de supprimer le dernier élément d'un tableau?",
          "correctAnswer": ["pop", "pop()", ".pop", ".pop()"],
          "explanation": "La méthode pop() supprime le dernier élément d'un tableau.",
          "questionTimer": "25s"
        }
      ]
    },
    {
      "name": "JavaScript Advanced Concepts",
      "difficulty": "hard",
      "timer": "5:00",
      "questions": [
        {
          "id": 1,
          "type": "boolean",
          "question": "Les closures en JavaScript permettent de capturer le scope extérieur?",
          "correctAnswer": true,
          "explanation": "Les closures permettent aux fonctions d'accéder au scope dans lequel elles ont été créées.",
          "questionTimer": "20s"
        },
        {
          "id": 2,
          "type": "qcm",
          "question": "Quel mot-clé est utilisé pour créer un objet prototypal en JavaScript?",
          "options": ["Object.create()", "Object.assign()", "Object.defineProperty()", "Object.prototype"],
          "correctAnswer": 0,
          "explanation": "Object.create() crée un nouvel objet avec le prototype spécifié.",
          "questionTimer": "25s"
        },
        {
          "id": 3,
          "type": "text",
          "question": "Quelle méthode JavaScript est utilisée pour fusionner deux tableaux?",
          "correctAnswer": ["concat", "concat()", ".concat", ".concat()"],
          "explanation": "La méthode concat() fusionne deux tableaux en créant un nouveau tableau.",
          "questionTimer": "30s"
        }
      ]
    }
  ];
const quizData =  [
    {
      "name": "JavaScript Basics",
      "difficulty": "easy",
      "timer": "3:00",
      "questions": [
        {
          "id": 1,
          "type": "boolean",
          "question": "Le JavaScript est utilisé principalement pour la programmation côté client?",
          "correctAnswer": true,
          "explanation": "JavaScript est principalement utilisé pour le côté client mais aussi côté serveur avec Node.js.",
          "questionTimer": "15s"
        },
        {
          "id": 2,
          "type": "qcm",
          "question": "Quel mot-clé est utilisé pour déclarer une constante en JavaScript?",
          "options": ["let", "const", "var", "final"],
          "correctAnswer": 1,
          "explanation": "Le mot-clé 'const' est utilisé pour déclarer une constante en JavaScript.",
          "questionTimer": "20s"
        },
        {
          "id": 3,
          "type": "text",
          "question": "Quelle méthode JavaScript retourne l'index d'un élément dans un tableau?",
          "correctAnswer": ["indexOf", "indexOf()", ".indexOf", ".indexOf()"],
          "explanation": "La méthode indexOf() retourne l'index du premier élément trouvé dans le tableau.",
          "questionTimer": "25s"
        }
      ]
    },
    {
      "name": "JavaScript Functions & Arrays",
      "difficulty": "medium",
      "timer": "4:00",
      "questions": [
        {
          "id": 1,
          "type": "qcm",
          "question": "Quelle méthode JavaScript permet de transformer chaque élément d'un tableau?",
          "options": ["map()", "filter()", "reduce()", "forEach()"],
          "correctAnswer": 0,
          "explanation": "map() crée un nouveau tableau en appliquant une fonction à chaque élément.",
          "questionTimer": "30s"
        },
        {
          "id": 2,
          "type": "boolean",
          "question": "Les fonctions JavaScript peuvent être anonymes?",
          "correctAnswer": true,
          "explanation": "Les fonctions anonymes sont des fonctions sans nom qui peuvent être utilisées comme arguments ou assignées à des variables.",
          "questionTimer": "15s"
        },
        {
          "id": 3,
          "type": "text",
          "question": "Quelle méthode permet de supprimer le dernier élément d'un tableau?",
          "correctAnswer": ["pop", "pop()", ".pop", ".pop()"],
          "explanation": "La méthode pop() supprime le dernier élément d'un tableau.",
          "questionTimer": "25s"
        }
      ]
    },
    {
      "name": "JavaScript Advanced Concepts",
      "difficulty": "hard",
      "timer": "5:00",
      "questions": [
        {
          "id": 1,
          "type": "boolean",
          "question": "Les closures en JavaScript permettent de capturer le scope extérieur?",
          "correctAnswer": true,
          "explanation": "Les closures permettent aux fonctions d'accéder au scope dans lequel elles ont été créées.",
          "questionTimer": "20s"
        },
        {
          "id": 2,
          "type": "qcm",
          "question": "Quel mot-clé est utilisé pour créer un objet prototypal en JavaScript?",
          "options": ["Object.create()", "Object.assign()", "Object.defineProperty()", "Object.prototype"],
          "correctAnswer": 0,
          "explanation": "Object.create() crée un nouvel objet avec le prototype spécifié.",
          "questionTimer": "25s"
        },
        {
          "id": 3,
          "type": "text",
          "question": "Quelle méthode JavaScript est utilisée pour fusionner deux tableaux?",
          "correctAnswer": ["concat", "concat()", ".concat", ".concat()"],
          "explanation": "La méthode concat() fusionne deux tableaux en créant un nouveau tableau.",
          "questionTimer": "30s"
        }
      ]
    }
  ];
  
  localStorage.setItem('quizData2', JSON.stringify(quizData2));