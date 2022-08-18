//pass name, description, image when a new card is encountered
function tarotCard(name, meaning, image) {
  this.name = name;
  this.meaning = meaning;
  this.image = image;
}

/* card app, array of objects
card meanings courtesy of biddytarot.com
images from wikimedia */
let deck = [
  //major arcana
  new card('The Fool', 'Have an open, curious mind and a sense of excitement.  Throw caution to the wind and be ready to embrace the unknown. The world is your oyster!.', 'fool'),
  new card('The Magician', 'Everything you need right now is at your fingertips. Now is the perfect time to move forward on an idea that you recently conceived.', 'magician'),
  new card('The High Priestess', 'The answers you seek will come from within, from your deepest truth. Connect with your intuition through methods most comfortable to you — meditation, visualization, writing, etc.', 'high-priestess'),
  new card('The Empress', 'Treat yourself to a day spa, learn massage, enjoy a fine restaurant or spend more time with your partner. Discover different approaches to expressing yourself creatively, be it through painting, music, drama or other art forms.', 'empress'),
  new card('The Emperor', 'Claim your authority as leader and influencer and don’t let others put you down. Create calm out of chaos by breaking down any problem into its parts and then mapping out the actions you need to take to resolve it.', 'emperor'),
  new card('The Hierophant', 'Before you can discover your own belief systems and make your own choices around a topic, learn the fundamental principles from a trusted source.', 'hierophant'),
  new card('The Lovers', 'Love is a choice. By communicating openly and honestly with those you care about, you will create a harmonious and fulfilling relationship built on trust and respect. Alternatively, make a choice about who you want to be, how you want to connect with others and on what level, and about what you will and won’t stand for.', 'lovers'),
  new card('The Chariot', 'Set your objectives and channel your inner power with a fierce dedication to bring them to fruition. When you apply discipline, commitment and willpower to achieve your goals, you will succeed. Be bold in expressing your desires and laying down your boundaries; otherwise, you will not get your way.', 'chariot'),
  new card('Strength', 'Your strength will give you the confidence to overcome any growing fears, challenges or doubts. Feel the fear and do it anyway! ‘Tame’ your animal instincts, gut reactions, and raw emotions, and channel these initial responses constructively. It’s normal for feelings such as anger, rage, sadness, guilt or shame to arise in certain situations. However, it’s what you do with these emotions that makes all the difference.', 'strength'),
  new card('The Hermit', 'Take a break from everyday life to draw your energy and attention inward and find the answers you seek, deep within your soul. Go on a weekend retreat or sacred pilgrimage, anything in which you can emplate your motivations, personal values and principles, and get closer to your authentic self.', 'hermit'),
  new card('The Wheel of Fortune', 'Greater forces that are outside of human control are at work here. Wherever the wheel lands is as random as chance - you may find yourself at either the top or bottom, but remember that no matter what the outcome it may not last for very long, for the wheel always turns.', 'wheel'),
  new card('Justice', 'The decisions that you make now have long-term effects in all things, both for yourself and others. There will always come a time where you will be judged. If you have been wronged, this card may bring you relief. If your actions caused pain to others, this card serves as a warning. You have a chance to change your actions now for a better future.', 'justice'),
  new card('Hanged Man', 'Sometimes you have to put everything on hold before you can take the next step, or the Universe will do it on your behalf (and it may not always be at the most convenient time!). Welcome these pauses with open arms and surrender control.', 'hanged-man'),
  new card('Death', 'A major phase in your life is approaching, and a new one is going to start. The past needs to be behind you, so you can focus your energy on what is ahead of you. Let go of any unhealthy attachments that you have in your life.', 'death'),
  new card('Temperance', 'Time to evaluate and re-examine the priorities you have chosen. This will help you create a balance between your outer and inner self. At the end of it all, you will find greater purpose and meaning in your actions.', 'temperance'),
  new card('The Devil', 'You may be at the effect of negative habits, dependencies, behaviors, thought patterns, relationships, and addictions. To break free of these negative patterns, you need to acknowledge the hold they have over you and the impact they are having on your life and take action to free yourself. It is unlikely that this will be remedied overnight, so a tremendous amount of willpower and strength from you is required.', 'devil'),
  new card('The Tower', 'Change in the most radical and momentous sense. Change itself is a normal part of life that one has to embrace. But it can sometimes strike fear, for it means that we must leave behind what we thought was true. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.', 'tower'),
  new card('The Star', 'Remember how abundantly blessed you are by the universe as evidenced by the various things around you. You hold within all that you need for your fulfillment - the only thing that you need is courage and faith.', 'star'),
  new card('The Moon', 'Be careful of making fast decisions when The Moon appears because you may later realize you only had half the information you needed. You need to listen to and trust your intuition so you can see beyond what is in front of you. Feel into situations rather than thinking what they mean.', 'moon'),
  new card('The Sun', 'The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy. This beautiful, warm energy is what will get you through the tough times and help you succeed.', 'sun'),
  new card('Judgment', 'Through self-reflection, you can have a clearer and objective understanding about where you are now, and what you need to do in order to grow.', 'judgment'),
  new card('The World', 'Reflect on your journey and honor your achievements. Celebrate your successes and bask in the joy of having brought your goals to fruition. All the triumphs and tribulations along your path have made you into the strong, wise, more experienced person you are now', 'world'),


  // suit of cups
  new card('Ace of Cups', 'Open your heart and experience the rich flow of emotion available to you right now. Be receptive to creative opportunities and loving connections with others around you. As with all Aces in the Tarot, this card comes as an invitation. Will you take it?', 'ace-cups'),
  new card('Two of Cups', 'Create deep connections and partnerships, based on shared values, compassion, and unconditional love. They have the potential to grow and develop into something deeply fulfilling and rewarding in the long-term', 'two-cups'),
  new card('Three of Cups', 'Gather with your closest friends and have a good time together, talking, laughing, sharing and creating. Together, you give and receive the love, support and compassion each of you needs from one another.', 'three-cups'),
  new card('Four of Cups', 'New invitations and opportunities are flowing to you, but for now, you’re saying “no” and turning them away. Perhaps the prospects do not interest you, or your cup is full, or you already have too much on your plate. Use your discernment to decide on what is truly important to you, and dont be afraid to decline new projects that dont align with your future path.', 'four-cups'),
  new card('Five of Cups', 'Even though things aren’t going your way, new opportunities and possibilities are waiting for you – but only when you are ready. It’s time to shift your mindset and focus on what can go right from this point onwards. Be open to the brighter side of life and know many blessings are in disguise right now.', 'five-cups'),
  new card('Six of Cups', 'Get in touch with your inner child and experience the fun, freedom and innocence that comes with being a young child again. You might like to sit down with a colouring book, dance like no one is watching you, or play your favorite childhood games. When you give yourself permission to be playful, spontaneous, and creative, you connect more with your authentic self.', 'six-cups'),
  new card('Seven of Cups', 'When you are constantly in the idea phase, you miss the chance to bring your designs into fruition. Now is a time to focus on the one thing that will move you closer to your goal; resist the temptation to get side-tracked with other ideas as they arise. Note your ideas as they come up, but stay focused on the one thing you’re doing.', 'seven-cups'),
  new card('Eight of Cups', 'Ask yourself what brings you joy, contentment and fulfilment on a deeper level. Without it, you might pursue goals that fail to give you the satisfaction you’re seeking.', 'eight-cups'),
  new card('Nine of Cups', 'Splurge, indulge and enjoy life’s pleasures. This includes enjoying good food and wine, appreciating the arts, making love, relaxing in a luxurious resort or experiencing beauty. Live in the moment and give yourself permission to indulge temporarily without any guilt about the possible negative consequences of such pleasure.', 'nine-cups'),
  new card('Ten of Cups', 'Your dreams, wants, needs and wishes have been (or will soon be) fulfilled, and you feel a complete sense of satisfaction. Take a moment and breathe, look around you and be thankful for all your blessings.', 'ten-cups'),
  new card('Page of Cups', 'You will receive an unexpected and pleasant surprise message related to the emotions, intuition, or creative endeavours. It might be the birth of a baby, an engagement or marriage, a new love interest, or the offer of a new project. Be ready to receive when the moment comes.', 'page-cups'),
  new card('Knight of Cups', 'You may find yourself drawn to a particular passion or hobby and now is the time to turn it into ‘something.’ While you are in no hurry to reach the finish line, keep in mind that true imagination feeds on action; if you do nothing with your dreams, they will remain just that – dreams and not reality.', 'knight-cups'),
  new card('Queen of Cups', 'Be a rock to yourself and others by listening with your heart, being compassionate, and caring for yourself/them deeply.', 'queen-cups'),
  new card('King of Cups', 'If you are being challenged in any aspect of your life, proceed in an emotionally mature manner. Be firm on your personal boundaries and state what is and is not acceptable on an emotional level.', 'king-cups'),

  //suit of wands
  new card('Ace of Wands', 'If you feel a strong pull towards a new project or path, but are questioning whether it will work, then this card gives you a gentle nudge to pursue your passion. ', 'ace-wands'),
  new card('Two of Wands', 'Ponder on your long-term goals and be prepared to plan for what you need to do to achieve them. With careful planning and a moderated approach, you will set yourself up for success. ', 'two-wands'),
  new card('Three of Wands', 'There are many chances available to you to broaden your horizons through study, travel, business enterprise and learning. To take advantage of this potential, you must stay committed to your path and be prepared to stretch beyond your comfort zone, knowing your best hopes lie outside of your current environment.', 'three-wands'),
  new card('Four of Wands', 'Pause and celebrate what you have achieved so far. Step back for a moment and enjoy the fruits of your labour. Acknowledge your hard work and give yourself permission to take a small break before embarking on the next phase of your journey.', 'four-wands'),
  new card('Five of Wands', 'In the midst of conflict and misunderstanding, see it as an opportunity to rise above the chaos and disorder. Take a moment to listen to what others have to say – even if you agree to disagree. Allow each person to make their case. Perhaps, their opinions may become softer and quieter. They may also give you the respect you’re seeking and listen to your viewpoint.', 'five-wands'),
  new card('Six of Wands', 'Put yourself out there and be proud of what you achieved. Shout your successes from the rooftop and set it all out there for others to see and cheer you on. Be open to receiving love and support from your biggest cheerleaders, who are energised by seeing you succeed. Now is your time to shine!', 'six-wands'),
  new card('Seven of Wands', 'Someone or something may get in the way of you being able to pursue your goals and dreams. While it appears to block your path forward, you can overcome this obstacle by drawing upon your strong self-confidence, self-belief, and continual self-improvement. Hold your ground, take a stand, and defend your position at all costs.', 'seven-wands'),
  new card('Eight of Wands', 'Look forward to the rapid completion of a project currently underway. You can also expect to be occupied by something new and even more exciting soon. There is no stopping you right now as you are just bursting with energy and ideas. To maximise this energy, make sure your actions align with your broader goals and invest in the right things at the right time.', 'eight-wands'),
  new card('Nine of Wands', 'Even in the face of adversity, stand tall and strong. You may be on the edge of exhaustion, but be resilient, persistent, and ready to do what it takes to get to the finish line. You got this!', 'nine-wands'),
  new card('Ten of Wands', 'You are unconsciously taking on extra responsibility and finding yourself feeling weighed down, exhausted and burnt out. You may try to do everything at once, even though you know it is adding extra pressure to your daily life. Examine your current lifestyle and assess which activities or tasks are urgent or important. Utilize various time management/prioritization methods to determine where best to spend your time and which tasks you can drop.', 'ten-wands'),
  new card('Page of Wands', 'You are experiencing creative restlessness, but you still need to take your creative spark and ground it down into reality. Map out your strategy or test your ideas or create a few experiments before committing. It could be helpful to run your thoughts through a filter so that you only act on those most aligned with your broader goals.', 'page-wands'),
  new card('Knight of Wands', 'In your pursuit of action, you may be impulsive and impatient, expecting everything to be done yesterday. While bursting with energy, you have a tendency to rush into things with little consideration for the consequences of your actions. Focus your enthusiasm on the activities that will move you closer to your goal. When you have a new idea, rather than acting on it straight away, take a moment to check in and see if it truly aligns with your goals and whether it needs to happen right now.', 'knight-wands'),
  new card('Queen of Wands', 'Be bold in your undertakings. Do not be afraid to own your power and put it into the world. Get to know the lesser-known side of you, and express it more openly with others', 'queen-wands'),
  new card('King of Wands', 'Lead your life with intent, vision and a long-term view. You have a grand idea of what is truly possible, and you will stop at nothing to see it through. Unlike the Knight who can be a little impulsive with his actions, you have the maturity to see your vision through right to the end and beyond. You can achieve a lot because you are clear about your future direction and how you will get there', 'king-wands'),

  //suit of swords
  new card('Ace of Swords', 'You may be on the verge of a significant breakthrough or a new way of thinking that allows you to view the world with clear eyes. Or, you may have a sudden realisation or conscious understanding about an issue that has been troubling you and can finally see the path ahead of you. Meditate regularly to clear away the mental chatter and make the most of this intellectual potential.', 'ace-swords'),
  new card('Two of Swords', 'You are facing a challenging decision, but you are unclear about which option to take. Both possibilities may seem equally good – or equally bad – and you are stumped about which will lead you to the best outcome. Weigh the pros and cons of each choice and then make a conscious judgment. Use both your head (your mind and the intellect) and your heart (your feelings and intuition) to choose the path that is best for you.', 'two-swords'),
  new card('Three of Swords', 'Pain, sorrow and grief are a necessary part of life. Without it, you would never experience the challenges you need to grow and develop as a person. Every hardship creates discomfort, which inevitably turns into an opportunity to become stronger, learn from your mistakes, and change the course of your life for the better. While the pain may cloud your vision for a time, it will eventually bring clarity and enable you to put the past behind you. This hurt and sadness is temporary, and you will bounce back.', 'three-swords'),
  new card('Four of Swords', 'Even if you are highly productive and driven, take time out from your busy schedule to restore your energy and heal the body and the mind. Constant stress and tension will break even the hardest and most resilient of people but brief periods of rest enable you to refresh your energy, concentration and focus so that you are ready for the next challenge.', 'four-swords'),
  new card('Five of Swords', 'Pick your battles. You may be tempted to fight every conflict to ensure you get your way, to prove that you are right, or defend yourself when you are feeling challenged or threatened. However, choosing your battles wisely is a much better way of life than engaging in every disagreement. Not only will it lead to a more peaceful existence, but your interpersonal relationships are likely to come out stronger.', 'five-swords'),
  new card('Six of Swords', 'reflect on any emotional or mental baggage you may carry as you move from one phase to the next. In the boat stand six upstanding swords – a sign you are still carrying a heavy weight from your past as you move forward, which might slow your personal growth. These "swords" may be memories, relationships, habits, behaviours, thought patterns and beliefs that are no longer serving you. Decide what you need to take with you and what you can leave behind.', 'six-swords'),
  new card('Seven of Swords', 'Others are not being candid with you, and you may be unaware of their lies and deception. You may trust someone who then turns out to be running their own agenda, leaving you high and dry. Look out for any sneaky behaviour and listen to your intuition when something does not feel right or seems too good to be true.', 'seven-swords'),
  new card('Eight of Swords', 'You may be over-thinking things and limiting yourself by only considering the worst-case scenario. The more you think about the situation, the more you feel stuck and without any options. It is time to get out of your head and let go of those thoughts and beliefs holding you back. Like the woman on the card, you are capable of freeing yourself from these bindings by remove the blindfold and adopting a new perspective..', 'eight-swords'),
  new card('Nine of Swords', 'Much of the fear and worry you are experiencing is in your head and not necessarily an accurate reflection of what is happening around you. You may make things worse for yourself by over-thinking or obsessing over the worst-case scenarios. Instead of looking for evidence of what is going wrong, put your attention on what is going right. Take a deep breath and realise that life is not as dreadful as it seems and that the more you worry, the more harm you are doing to yourself.', 'nine-swords'),
  new card('Ten of Swords', 'You may have been hit with a painful yet inevitable endings. For example, a relationship may come to an abrupt end, your job may be cut, or a contract is broken. It is as if this ending has come out of the blue and rocked your world. Feel and sit your feelings, then let go. You can longer resist change but allow it to happen. There must be a change to facilitate renewal.', 'ten-swords'),
  new card('Page of Swords', 'Give yourself the space to explore ways of thinking - a new idea, a new perspective, new knowledge, or a new technique. You may be prone to making mistakes along the way, but your curiosity means that you are eager to learn from your slip-ups.', 'page-swords'),
  new card('Knight of Swords', 'Be assertive in getting what you want. Do not hang back and wait for something to fall out of the sky. Dont let challenges, difficulties and obstacles on the path ahead faze you because you know deep down where you want to go. Move forward with sheer strength and determination to make things happen.', 'knight-swords'),
  new card('Queen of Swords', 'Use your gift of intellect and unbiased judgement while remaining flexible and open to receive input from other sources. As you lead from the head and not the heart, you will be able to discern situations without the influence of emotion or sentimentality.', 'queen-swords'),
  new card('King of Swords', 'Use your logic and intellect to navigate the path ahead. You will need to make firm and well-researched decisions and stay fair in your dealings with others. Take your situation, look at it with total impartiality, and then come to a balanced and insightful decision.', 'king-swords'),

  //suit of pentacles
  new card('Ace of Pentacles', 'No matter the occasion, the Ace of Pentacles heralds a sense of prosperity and abundance in the material or financial areas of your life. It undoubtedly comes as a welcome invitation – but it is not a free ride. As with all Aces in the Tarot deck, this card illustrates the possibility of a new endeavour but does not guarantee its manifestation or success. That piece is up to you.', 'ace-pentacles'),
  new card('Two of Pentacles', 'Be aware of the concept of balance and those parts of your life where you have it (and those where you don’t). While you can strive for equilibrium, nothing ever stays in perfect harmony. Be patient, flexible and adaptable as you try to juggle your responsibilities with your family, friends, work, finances, health and new challenges. Be ready to swap around activities or accommodate last-minute requests. And know that if you are succeeding in one area of your life, it’s likely you’re struggling in another – that’s just a part of the balancing act!', 'two-pentacles'),
  new card('Three of Pentacles', 'The stonemason couldn’t build the cathedral without the help of the architects, and vice versa. Each person has an important role to play, and when they come together as a team, they can create something much more significant than if they were to undertake the project on their own. When the Three of Pentacles turns up in a Tarot reading, take it as a sign to collaborate with others, creating synergies to achieve big results.', 'three-pentacles'),
  new card('Four of Pentacles', 'Examine your relationship with material possessions, work, love, friends, family, your partner(s), and yourself. Are you desperately clinging to security, afraid to spend time and resources for fear that you do not have enough or could lose it forever? Start small, and try to find ways to slowly regain control in your life.', 'four-pentacles'),
  new card('Five of Pentacles', 'You could be feeling isolated and alone. Just like the two people in the card, you feel as if you have been left in the cold. You may wonder, “Why is no-one coming to help me!?” It may appear as if no one cares anymore. However, since the windows in the church are lit up, help is nearby; but you are too focused on your problems to notice. You may be waiting for someone to come and help you when really, you need to be proactive and ask for help. Swallow your pride, let go of your fear of rejection, and reach out. People are here to support you. Find them and let them know you need them.', 'five-pentacles'),
  new card('Six of Pentacles', 'Share your resources with others through charitable donations, tithing or fundraising and enjoy the good feelings associated with helping others. Even if you are not financially wealthy, you can offer up your time, energy, love and support to those who are in need, knowing it will be appreciated. Giving of your time or your wisdom is often just as  fulfilling as giving away money or gifts, and the intangible gift of your presence is received just as well, if not better. There may be times when you wonder if you can truly afford to give generously to others. Trust that every contribution you make is valued and will come back to you threefold.', 'six-pentacles'),
  new card('Seven of Pentacles', 'You have been labouring away at something important, and you may feel concerned that your efforts will go unrewarded. Be patient and appreciate the progress you have made so far. If your work has not yet paid off as planned, remember that your expectations may be unreasonable. There are no guarantees. Be grateful, focus on the present and do what you can with what you have.', 'seven-pentacles'),
  new card('Eight of Pentacles', 'You are encouraed to keep doing what you are doing as it will eventually lead to success. Yes, it requires a lot of dedication, focus and patience but as each day passes and as you stay true to your values and beliefs, you get a little closer to your goal. It may not be as apparent as you may like but events are unfolding that will lead you to the right path. Continue working on yourself, too, and making ongoing improvements and adjustments to ensure that you are the best person you can be. Alternatively, if you are not currently engaged in the active pursuit of your goals, ask yourself what you could learn or create to better yourself or your circumstances. ', 'eight-pentacles'),
  new card('Nine of Pentacles', 'Enjoy the fruits of your labour. Thanks to your independent efforts, self-confidence and discipline, you attained a well-deserved success and created a stable foundation for your material wealth and comfort. Now, sit back, relax and enjoy the luxuries and pleasures of the good life – money, leisure time, fun, material comfort and rest. You deserve it!', 'nine-pentacles'),
  new card('Ten of Pentacles', 'You have reached a point of completion and accomplishment in your journey. As a Pentacles card, this sense of accomplishment is likely to be the result of a successful career path, smart financial investments, a stable home environment and a possible committed and long-term relationship. You have accumulated wealth and abundance through your hard work and dedication and can now relish sharing this wealth with your chosen family.', 'ten-pentacles'),
  new card('Page of Pentacles', 'You will receive opportunities related to money, wealth, possessions, career, and physical health. This will open doors, helping you to discover how to turn your dreams into reality.', 'page-pentacles'),
  new card('Knight of Pentacles', 'Envision your goal, determine the best course of action, and then stick to your path with a methodical and relentless focus. When you are in ‘implementation mode’, the job will get done, even if it requires hard work along the way.', 'knight-pentacles'),
  new card('Queen of Pentacles', 'Maintain a compassionate, nurturing, practical and down-to-earth attitude when dealing with others and your present circumstances. Focus on creating a calm and balanced life for yourself. Be resourceful and practical, dealing with issues as they arise using straightforward solutions that fix the problem with minimal fuss.', 'queen-pentacles'),
  new card('King of Pentacles', 'A methodical, planned and well-thought-out approach will lead you to success. You have experimented in the past with what works best and have landed on your own methods and practices you know will continue to work for you in the future. Continue down this path rather than trying new ways of doing things. You do not need to take any more risks.', 'king-pentacles'),
];

//select a randon card
function getRandom(num) {
  let randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
};

//button
document.getElementById("draw").onclick = function () {
  let index = getRandom(78); // position in array
  let selectedCard = deck[index]; // get selected card

  //make display div to have image within card name w/ meaning underneath
  document.getElementById("card_display").innerHTML = '<img src="images/' + selectedCard.image + '.jpeg"><h3>' + selectedCard.name + '</h3><p>' +
    selectedCard.meaning + '</p>';
};
