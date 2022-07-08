import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flag Quiz',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  void startQuiz() {
    print("Quiz starting");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Flag Quiz'),
        ),
        body: Column(children: <Widget>[
          const Center(
              child: Text('Flag Quiz',
                  style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold))),
          const Center(child: Image(image: AssetImage('assets/globe.gif'))),
          Center(
              child: TextButton(
                  style: TextButton.styleFrom(
                      primary: Colors.black, backgroundColor: Colors.green),
                  onPressed: startQuiz,
                  child: const Text('Start Quiz')))
        ]));
  }
}
