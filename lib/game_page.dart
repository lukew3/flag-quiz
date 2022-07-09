import 'dart:ffi';

import 'package:flutter/material.dart';

class GamePage extends StatefulWidget {
  const GamePage({Key? key}) : super(key: key);
  @override
  _GamePageState createState() => _GamePageState();
}

class _GamePageState extends State<GamePage> {
  int _questionNumber = 1;
  bool _guessing = true;
  String _answer = 'United States';

  _submitGuess(String guess) {
    print("Guess: $guess");
    setState(() {
      _guessing = false;
    });
  }

  _nextGuess() {
    print('Next guess');
    setState(() {
      _guessing = true;
      _questionNumber++;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_guessing) {
      return Scaffold(
        body: Column(
          children: <Widget>[
            GameHeader(_questionNumber),
            const Center(
              child: Padding(
                padding: EdgeInsets.all(60),
                child: Image(
                  image: AssetImage('assets/flag_usa.png'),
                  width: 500,
                ),
              ),
            ),
            Center(
              child: SizedBox(
                width: 500,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    SizedBox(
                      width: 400,
                      child: TextField(
                        decoration: const InputDecoration(
                          labelText: 'Country Name',
                          labelStyle: TextStyle(color: Colors.grey),
                        ),
                        style: const TextStyle(color: Colors.white),
                        onSubmitted: _submitGuess,
                      ),
                    ),
                    TextButton(
                      style: TextButton.styleFrom(
                        primary: Colors.black,
                        backgroundColor: Colors.green,
                        padding: const EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 20,
                        ),
                      ),
                      onPressed: () {},
                      child: const Text(
                        'Submit',
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      );
    } else {
      return GestureDetector(
        onTap: _nextGuess,
        child: Scaffold(
          body: Column(
            children: <Widget>[
              GameHeader(_questionNumber),
              const Center(
                child: Padding(
                  padding: EdgeInsets.fromLTRB(0, 60, 0, 20),
                  child: Image(
                    image: AssetImage('assets/flag_usa.png'),
                    width: 500,
                  ),
                ),
              ),
              const Center(
                child: Text(
                  'United States of America',
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                  ),
                ),
              ),
              IsCorrect(_answer, false),
              const Center(
                child: Padding(
                  padding: EdgeInsets.fromLTRB(0, 150, 0, 20),
                  child: Text(
                    'Press anywhere to continue...',
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
    }
  }
}

class GameHeader extends StatelessWidget {
  final int position;

  const GameHeader(this.position, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          const Text(
            'Flag Quiz',
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
            ),
          ),
          Text(
            '$position/195',
            style: const TextStyle(
              color: Colors.white,
              fontSize: 20,
            ),
          ),
        ],
      ),
    );
  }
}

class IsCorrect extends StatelessWidget {
  final String answer;
  final bool isCorrect;

  const IsCorrect(this.answer, this.isCorrect, {Key? key}) : super(key: key);

  String _correctImage() {
    return isCorrect ? 'assets/correct.png' : 'assets/incorrect.png';
  }

  String _correctStatement() {
    return isCorrect ? '$answer is Correct!' : '$answer is Incorrect.';
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Center(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(0, 80, 0, 20),
            child: Image(
              image: AssetImage(_correctImage()),
              width: 60,
            ),
          ),
        ),
        Center(
          child: Text(
            _correctStatement(),
            style: const TextStyle(
              fontSize: 20,
              color: Colors.white,
            ),
          ),
        )
      ],
    );
  }
}
