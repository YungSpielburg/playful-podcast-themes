import React from 'react';
import { Music, Users, BookOpen, PenTool, UsersRound } from 'lucide-react';

const HowTo = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-anton text-4xl md:text-5xl font-bold mb-6">
            How to Give Your Podcast
            <br />
            <span className="text-accent">A Signature Sound</span>
          </h1>
          <p className="font-gotham text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm Yung Spielburg, a Grammy award-winning producer and songwriter who has produced 
            themes for the world's top podcasts including The All In Podcast, Acquired.fm, Not Boring, and many more. 
            Below is my method for creating iconic musical themes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-16 mb-16">
          {/* Discovery Phase */}
          <section className="glass p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <Music className="w-8 h-8 text-gold" />
              <h2 className="font-gotham text-2xl md:text-3xl font-bold">Discovery Phase</h2>
            </div>
            <p className="font-gotham text-lg mb-4">The goal of this phase is to <span className="text-accent">become a fan</span> — to understand the temperament of the hosts, the material, the delivery style, and how the hosts and fans feel about each element.</p>
            <ul className="font-gotham list-disc list-inside space-y-2 text-muted-foreground">
              <li>Listen to 10-20 hours of episodes</li>
              <li>Join the show's community (Slack, Discord, etc.)</li>
              <li>Read fan interactions across socials</li>
            </ul>
          </section>

          {/* Creative Exploration */}
          <section className="glass p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <PenTool className="w-8 h-8 text-gold" />
              <h2 className="font-gotham text-2xl md:text-3xl font-bold">Creative Exploration</h2>
            </div>
            <p className="font-gotham text-lg mb-4">The goal of this phase is to understand the <span className="text-accent">feeling</span> the host wants to invoke with their intro.</p>
            <div className="bg-background/40 p-6 rounded-md mb-6">
              <p className="font-gotham text-xl font-semibold text-gold mb-2">⚠️ MAKE SURE ALL DECISION MAKERS ARE AT THIS MEETING! ⚠️</p>
              <p>You don't want to get 15 hours into an idea to learn that one of the decision makers was never bought into the concept from the beginning.</p>
            </div>
            <p className="font-gotham text-lg mb-4">
              You can start by asking outright, but oftentimes words are insufficient, generic, and you'd be surprised how different the associations and feelings are that people have for the same words. A much better strategy is to ask questions that get them to illustrate the answer.
            </p>
            <h3 className="font-gotham text-xl font-semibold mb-4">Golden Questions:</h3>
            <ul className="font-gotham list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>If you were to host a live event, what musical guest would you have and why?</li>
              <li>Why are your fans in the audience? What bonds them to each other, and to you?</li>
            </ul>
            <p className="font-gotham text-lg mb-2">I give 2 examples here:</p>
            <ul className="font-gotham space-y-2 text-muted-foreground list-disc list-inside">
              <li>Florence and The Machine: We go to their concert to put our soul through the washing machine.</li>
              <li>Diplo in Ibiza: If you were 25, you might go to this show to let off some steam ;)</li>
            </ul>
          </section>

          {/* References */}
          <section className="glass p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-gold" />
              <h2 className="font-gotham text-2xl md:text-3xl font-bold">References</h2>
            </div>
            <p className="font-gotham text-lg mb-4">
              The last thing you want is to take inspiration from a melody when what they really liked was "that sparkly sound at 1:47."
            </p>
            <p className="font-gotham text-lg mb-4">Have the hosts make a playlist of music they like and that is relevant to the show.</p>
            <p className="font-gotham text-lg mb-4">
              If they have direct references, make sure to get <span className="text-accent">extremely specific</span> about <span className="text-accent">exactly</span> what they like about each one.
            </p>
            <p className="font-gotham text-lg mb-4">
              The last thing you want is to take inspiration from a melody when what they really liked was "that sparkly sound at 1:47."
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic my-4">
              "What songs come on before and after you on the radio?"
            </blockquote>
          </section>

          {/* Songwriting Process */}
          <section className="glass p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-gold" />
              <h2 className="font-gotham text-2xl md:text-3xl font-bold">Songwriting Process</h2>
            </div>
            <p className="font-gotham text-lg mb-4">When it comes down to the actual song, I have two approaches: Direct and Serendipitous.</p>
            
            <p className="font-gotham text-lg mb-4">
              The theme for The All In Podcast is a great example of the direct method. The very first thing you hear is:
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic my-4">
              "I'm going All In."
            </blockquote>
            <p className="text-muted-foreground mb-6">
              This method believes the most important thing is name recognition, and so my job is to find the single catchiest, most powerful way to deliver the title of the show.
            </p>

            <p className="font-gotham text-lg mb-4">
              I've had a songwriting belief and philosophy throughout my career that words or phrases have a single best melody. When you think of the all-time great songs, those writers have found that singular greatest pairing.
            </p>

            <p className="font-gotham text-lg mb-6">
              Sometimes hosts want to be less "on the nose" — either personality-wise or because the title of the show doesn't lend itself to that method. In that case, we turn to the Serendipitous method where we drill down into the essence of the show and genuinely write a song about it. It feels as though there is this incredible song that just so happens to exactly reflect the show's values.
            </p>

            <p className="font-gotham text-lg mb-4">
              For Acquired, we actually first composed a theme where I sang the title of the show, but upon hearing it, Ben and David realized it was not the right direction. We later drilled down into the essence of the show, which is to get the truth. And so, I wrote the line:
            </p>
            
            <blockquote className="border-l-4 border-gold pl-4 italic my-4">
              "Who got the truth?"
            </blockquote>

            <p className="font-gotham text-lg">
              I reached out to the iconic singer, Mike Taylor, and we wrote the song that you all know and love today.
            </p>
          </section>

          {/* Iterative Collaboration */}
          <section className="glass p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <UsersRound className="w-8 h-8 text-gold" />
              <h2 className="font-gotham text-2xl md:text-3xl font-bold">Iterative Collaboration</h2>
            </div>
            <p className="font-gotham text-lg mb-4">Be ready to deliver exactly what a client asked for and have them realize it's actually not what they wanted. That's okay.</p>
            <p className="font-gotham text-lg text-accent">This is iterative and collaborative — enjoy the process!</p>
          </section>
        </div>

        {/* Contact */}
        <div className="text-center pb-16">
          <p className="font-gotham text-2xl font-bold mb-2">YUNG SPIELBURG</p>
          <p className="font-gotham text-lg">
            Inquiry: {' '}
            <a href="mailto:YungIntros@gmail.com" className="text-accent hover:text-accent-light">
              YungIntros@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
