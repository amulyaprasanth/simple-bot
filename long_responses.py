import random

R_EATING = "I donot like eating anything because I am a bot obviously"


def unknown():
    response = [ 'Could you please re-phrase that?',
                '...',
                'Sounds about right',
                'What does that mean?'][random.randrange(4)]
    
    return response

R_GAME = "Which game do you want to play?"
R_HOBBIES = "I like watching movies, cricket and reading books."