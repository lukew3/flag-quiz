import 'dart:ffi';
import 'dart:convert';

import 'package:flutter/material.dart';

class GamePage extends StatefulWidget {
  const GamePage({Key? key}) : super(key: key);
  @override
  _GamePageState createState() => _GamePageState();
}

class _GamePageState extends State<GamePage> {
  int _questionNumber = 1;
  bool _guessing = true;
  String _guess = 'USA';
  List<int> _order = [0];
  dynamic _flag_data = [
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
    _flag_data = jsonDecode(data); //latest Dart
  }

  generateOrder() {
    _order = List.generate(
      _flag_data.length,
      (i) => i,
      growable: false,
    ); //generate a list of numbers from 0 to length of flag_data
    _order.shuffle(); //shuffle the list
    print(_order);
  }

  _getAnswer() {
    return _flag_data[_order[_questionNumber - 1]]['name'];
  }

  _flagString() {
    var code = _flag_data[_order[_questionNumber - 1]]['code'].toLowerCase();
    return 'assets/flags/$code.png';
  }

  _submitGuess(String guess) {
    print("Guess: $guess");
    setState(() {
      _guess = guess;
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
            Center(
              child: Padding(
                padding: const EdgeInsets.all(60),
                child: Image(
                  image: AssetImage(_flagString()),
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
              Center(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(0, 60, 0, 20),
                  child: Image(
                    image: AssetImage(_flagString()),
                    width: 500,
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
              IsCorrect(_guess, _getAnswer()),
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
  final String guess;
  final String answer;

  const IsCorrect(this.guess, this.answer, {Key? key}) : super(key: key);

  bool _isCorrect() {
    return guess == answer;
  }

  String _correctImage() {
    return _isCorrect() ? 'assets/correct.png' : 'assets/incorrect.png';
  }

  String _correctStatement() {
    return _isCorrect() ? '$guess is Correct!' : '$guess is Incorrect.';
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
