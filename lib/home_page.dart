import 'package:flutter/material.dart';
import './game_page.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  void startQuiz() {
    print("Quiz starting");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          const Center(
            child: Text(
              'Flag Quiz',
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
          const Center(
            child: Image(
              image: AssetImage('assets/globe.gif'),
              height: 200,
            ),
          ),
          Center(
            child: TextButton(
              style: TextButton.styleFrom(
                padding: const EdgeInsets.symmetric(
                  vertical: 20,
                  horizontal: 36,
                ),
                primary: Colors.black,
                backgroundColor: Colors.green,
              ),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const GamePage()),
                );
              },
              child: const Text('Start Quiz'),
            ),
          )
        ],
      ),
    );
  }
}
