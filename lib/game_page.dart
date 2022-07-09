import 'package:flutter/material.dart';

class GamePage extends StatelessWidget {
  const GamePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
          Padding(
              padding: const EdgeInsets.all(20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: const <Widget>[
                  Text('Flag Quiz',
                      style: TextStyle(color: Colors.white, fontSize: 20)),
                  Text('Score: 0',
                      style: TextStyle(color: Colors.white, fontSize: 20)),
                ],
              )),
          const Center(
              child: Image(
            image: AssetImage('assets/flag_usa.png'),
            width: 500,
          )),
          TextField(
            decoration: const InputDecoration(
              labelText: 'Country Name',
              labelStyle: TextStyle(color: Colors.white),
            ),
            style: const TextStyle(color: Colors.white),
            onSubmitted: (value) {
              print('Submitted: $value');
            },
          ),
          /*
          Row(
            children: [
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Enter your name',
                  labelStyle: TextStyle(color: Colors.white),
                ),
              ),
              TextButton(
                  onPressed: () {},
                  child: const Text(
                    'Submit',
                    style: TextStyle(color: Colors.white),
                  ))
            ],
          )
          */
        ]));
  }
}
