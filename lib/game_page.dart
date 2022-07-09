import 'dart:convert';

import 'package:flutter/material.dart';

class GamePage extends StatefulWidget {
  const GamePage({Key? key}) : super(key: key);
  @override
  GamePageState createState() => GamePageState();
}

class GamePageState extends State<GamePage> {
  int _score = 0;
  int _questionNumber = 1;
  bool _guessing = true;
  bool _lastCorrect = false;
  String _guess = 'USA';
  List<int> _order = [0];
  dynamic _flagData = [
    {'name': 'United States', 'code': 'us'}
  ];

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      await loadJson();
      generateOrder();
      setState(() {}); // force a re-render
    });
  }

  loadJson() async {
    String data = await DefaultAssetBundle.of(context)
        .loadString("assets/flag_data.json");
    _flagData = jsonDecode(data); //latest Dart
  }

  void generateOrder() {
    _order = List.generate(
      _flagData.length,
      (i) => i,
      growable: false,
    ); //generate a list of numbers from 0 to length of flagData
    _order.shuffle(); //shuffle the list
  }

  String _getAnswer() {
    return _flagData[_order[_questionNumber - 1]]['name'];
  }

  String _flagString() {
    var code = _flagData[_order[_questionNumber - 1]]['code'].toLowerCase();
    return 'assets/flags/$code.png';
  }

  _submitGuess(String guess) {
    setState(() {
      _guess = guess;
      _guessing = false;
      _lastCorrect = _guess == _getAnswer();
      if (_lastCorrect) {
        _score++;
      }
    });
  }

  _nextGuess() {
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
            GameHeader(_score, _questionNumber),
            Center(
              child: Padding(
                padding: const EdgeInsets.all(60),
                child: Image(
                  image: AssetImage(_flagString()),
                  height: 250,
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
              GameHeader(_score, _questionNumber),
              Center(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(0, 60, 0, 20),
                  child: Image(
                    image: AssetImage(_flagString()),
                    height: 250,
                  ),
                ),
              ),
              Center(
                child: Text(
                  _getAnswer(),
                  style: const TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                  ),
                ),
              ),
              IsCorrect(_guess, _lastCorrect),
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
  final int numCorrect;
  final int position;

  const GameHeader(this.numCorrect, this.position, {Key? key})
      : super(key: key);

  String _remaining() {
    int rem = 249 - position;
    return '$rem remain';
  }

  String _score() {
    int completed = position - 1;
    return 'Score: $numCorrect/$completed';
  }

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
          Column(
            children: [
              Text(
                _score(),
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                ),
              ),
              Text(
                _remaining(),
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}

class IsCorrect extends StatelessWidget {
  final String guess;
  final bool correct;

  const IsCorrect(this.guess, this.correct, {Key? key}) : super(key: key);

  String _correctImage() {
    return correct ? 'assets/correct.png' : 'assets/incorrect.png';
  }

  String _correctStatement() {
    return correct ? '$guess is Correct!' : '$guess is Incorrect.';
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
