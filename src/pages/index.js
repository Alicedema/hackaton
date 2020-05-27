import React from 'react';

import Layout from '../components/Layout';
import { Textfit } from 'react-textfit';

// OUR GIFS
import slowEthan from '../assets/images/slow_ethan.gif';
import alice from '../assets/images/alice.gif';
import aliceNadia from '../assets/images/alice_nadia.gif';
import allTogether from '../assets/images/all_together.gif';
import niels from '../assets/images/niels_foodHackaton.gif';

import coffeeStain1 from '../assets/images/coffee-ring-5.png';
import coffeeStain2 from '../assets/images/coffee_stain2.png';
import hand from '../assets/images/hand.png';
import quality from '../assets/images/quality.png';
import line from '../assets/images/line.png';
import fish from '../assets/images/fish.png';

const sections = [
  { id: 'one', bg: require('../assets/images/table.jpg') },
  { id: 'two', bg: require('../assets/images/table.jpg') },
  { id: 'three', bg: require('../assets/images/table.jpg') },
];
const IndexPage = () => {
  return (
    <Layout>
      <section id="one" className="main">
        <div className="container">
          <img
            style={{ position: 'absolute', top: -10, left: -10 }}
            width={250}
            height={250}
            src={coffeeStain1}
            alt=""
          />
          <span className="image fit primary">
            <img src={sections[0].bg} alt="" />
          </span>
          <div className="major">
            <h1>
              The A-Team <span>Daily</span>
            </h1>
          </div>

          <div className="content border">
            <div className="article article--disclaimer">Disclaimer</div>
            <div className="article article--bigTitle">Outlook Galore?</div>
            <div className="article article--1">
              <img
                width="600px"
                className="image right"
                src={slowEthan}
                alt=""
              />
              Scientists from Harvard University spent years of intensive
              analysis searching for a solution to the NCC App problem. They
              spent years in experiments but could not achieve the desired
              solution. However, on Wednesday at 9 am, young developers resolved
              the problem. Congratulations to these smart individuals, whose
              names are still uncertain, from all over the world who programmed
              the NCC App to continuously update an already exported events in
              the user’s Outlook calendar!
              <img
                className="image left"
                src={aliceNadia}
                alt=""
                style={{ margin: '8px' }}
              />
              Additionally, a big shout out to the A-Team Lead, Mr. E. Flory,
              who encouraged and aided in this achievement! This type of
              leadership and support is what makes our community so wonderful.
              E. Flory has been described as a "quite, kind" individual, who
              "loves to show off weighlifiting during standups". The source
              prefer to stay anonymous, as we all wonder what did they mean
              exactly. <br />
              The global scientific community now wonders: what they will come
              up with, next time? Time travelling? Teleport? A more efficient
              food delivery? We can't predict, we can only dream.
              <div className="author align-right">
                Nediya Cheperchowa, Ellis Dema
              </div>
            </div>
            <div className="article article--2 important-article">
              <div className="article-title article-title--2">Immortals</div>
              A team. A squad. A-Team. This is the only definition. One day, one
              united group, pure dripping Success.
              <br />
              This is how we can best describe A-Team. Starting yesterday, 27th
              May 2020, at 9A.M., the group joined an animated chat where the
              Objectives were made clear: Outlook needs a friendly kick. "It was
              a torture" explains one of the A-Team members, who wishes to stay
              anonymous, "I usually wake up at 9AM".
              <br />
              Five were the names of The Immortals: Alice (said the Writer),
              Ethan (said the Captain), Nadja (said the Peeper), Niels (said the
              Bad Eater), Maarten (said the Discussion Appointer).
              <br />
              <img width="320px" className="image right" src={allTogether} />
              They said a certain Pratichi (said the Ninja Scrum) made her
              appearance and never returned. Somebody thinks even a Michael
              (said the Chatter) and a Wouter (said the Cold Complainer) were
              part of the group of these so-called "Immortals". We didn't find
              any link, but never give up. Never give up on hope.
              <br />
              We only know that, after a long, exhausting day, the Immortals
              finally came up with not only one, but two projects. An amazing
              and pretty-looking Outlook Calendar sync application and
              <div className="author align-right">Ellis Dema</div>
            </div>
            <div className="article article--3">
              <div className="article-title article-title--3">Ate too much</div>
              Current colleague Niels Krijger perfomed yesterday an amazing
              pirouette, showing-off his outfit. In a not-well-defined "previous
              hackaton" Mr. Krijger allegedly coded better that he could eat.
              According to various sources, it seems that the Hackaton was
              mainly about coding while cooking.
              <img width="333" className="image right" src={niels} alt="" />
              <br />
              It's still not clear how these two tasks could have been performed
              at the same time.
            </div>
            <div className="article article--4 condensed-article important-article">
              <Textfit mode="multi">
                {`const EventDetailsModal = ({isOpen, onClose, onSubmit, event}: Props) => {
              const [form, setForm] = useState<EventForm>({
                subject: '',
                startDate: '',
                startTime: '',
                endDate: '',
                endTime: '',
                location: '',
                attendees: [''],
              });  useEffect(() => {
                setForm({
                  subject: event?.subject ?? '',
                  startDate: event?.start?.dateTime ? moment.utc(event.start.dateTime).local()
                  .format('YYYY-MM-DD') : '',
                  startTime: event?.start?.dateTime ? moment.utc(event.start.dateTime).local()
                  .format('HH:mm') : '',
                  endDate: event?.end?.dateTime ? moment.utc(event.end.dateTime).local()
                  .format('YYYY-MM-DD') : '',
                  endTime: event?.end?.dateTime ? moment.utc(event.end.dateTime).local()
                  .format('HH:mm') : '',
                location: event?.location?.displayName ?? '',
                  attendees: event?.attendees?.map(({emailAddress}) => emailAddress?.address ?? '') ?? ['']
                })
              }, [event])  const isNewEvent = !event;`}
                <br />
                {`export default function withAuthProvider<T extends React.Component<AuthComponentProps>>
                  (WrappedComponent: new(props: AuthComponentProps, context?: any) => T): React.ComponentClass {
                  return class extends React.Component<any, AuthProviderState> {
                    private userAgentApplication: UserAgentApplication;`}
                <br />
                {`getEvent = async (eventId: string) => {
                    const event = await this.client
                      .api('/me/events/\${eventId}')
                      .get();`}
                <br />
                Hmm, yes I am conflicting on this. Perhaps my background
                explains it a little; When hooks were introduced I thought it'd
                be the end of Redux. I thought it silly to still use something
                heavy as Redux if React provides something out of the box. The
                project where I really ran into performance issues due to hooks
                was here: https://github.com/nielskrijger/gitstat-web I built
                that without redux, just hooks and functional components,
                primarily useState and useEffect at first. After a couple of
                weeks I got completely stuck, it didn't perform at all and
                became incredibly tangled with very long dependency chains that
                I wasn't able to follow. That's how I learned to utilize
                useCallback and useMemo properly (I probably use it too much
                these days). But even that only gets you so far; when you really
                have thousands of data records and hooks acting on that shared
                state it's then I realised I can't do some stuff without relying
                on useReducer and useContext; I had to decouple
                actions/functions from the shared state for the app to work
                properly. (When I say useReducer I'm always referring to the
                React hook; NOT redux) So I rebuilt the core of that app
                completely with useReducer and useContext, and it became so much
                easier to optimize, and so much cleaner than my initial design.
                I do really like it, compared to Redux the only thing I really
                miss is debugging tools. I tried to integrate react-devtools
                with useContext there months ago but it was a hassle, buggy and
                ended up removing it. The stupid thing; if you look at that app
                it's remarkably similar to a Redux app; just without Redux. It
                proved to me you can work without Redux just fine (it's great
                even); but ditching the whole state management idea is not
                really an option.
                <br />
                <br />
                <br />
                <div className="author align-right">Noils Krieg</div>
              </Textfit>
            </div>
            <div className="article  article--5" style={{ fontSize: '20px' }}>
              <img
                className="image left"
                src={line}
                alt=""
                style={{ width: '320px' }}
              />
              <i>
                The call was messy, but productive. <br />
                The team got tired, but happy. <br />
                The code got written, but ugly. <br />
                The problem was defined, but enormous. <br />
                The slides got fixed, but yellow. <br />
                The project was finished, but bitter.
              </i>
              <br />
              <br />
              <div className="author align-right">Anonymous</div>
              <br />
              <span className="medium-text">
                "The ugliest code I've ever wrote"
              </span>
              <img
                className="image"
                src={fish}
                alt=""
                width="245px"
                style={{ marginLeft: '45px' }}
              />
              <span className="medium-text">
                Zoom Rooms now have greater security and privacy host controls!
                Join zoom, the best digital pidgeon you could ever imagine!
                zoooooooooooom!
              </span>
            </div>
            <div className="article article--6">
              <img width="333" className="image right" src={hand} alt="" />
              <div className="medium-text" style={{ fontSize: '35px' }}>
                The controller ensures that everything is under control
              </div>
            </div>
            <div className="article  article--7 condensed-article-medium">
              <img
                className="image left"
                src={alice}
                alt=""
                style={{ margin: '8px' }}
              />
              <span className="medium-text">
                "Good work comes with many sacrifices"
              </span>
              <br />
              <br />
              These the words of a valued member of society, A. De Mauro. It's
              been suggested her name has been mispelled so many times, that one
              penny for each mistake could have become a vacation to Hawaii.
              "Design is not just a word. Design is a pixel taking its beauty
              daily routine in an ocean of Javascript", in these few words it's
              hidden the authenticity of something we still don't understand,
              but we probably should believe it, shouldn't we?
            </div>
            <div className="article  article--8">
              <img className="image left" src={alice} alt="" width="310px" />
              "Hard work comes with many sacrifices", these the words of a
              valued member of society, A. De Mauro. It's been suggested her
              name has been mispelled so many times, that earning one penny for
              each mistake could have become a vacation to Hawaii. "Design is
              not just a word. Design is a pixel taking its beauty daily routine
              in an ocean of Javascript", in these few words it's hidden the
              authenticity of something we still don't understand, but we
              probably should believe it, shouldn't we?
            </div>
            <div className="article  article--9">
              <span className="big-text">what the hell really happened?</span>
              <img className="image left" src={alice} alt="" />
              <br />
              "Hard work comes with many sacrifices", these the words of a
              valued member of society, A. De Mauro. It's been suggested her
              name has been mispelled so many times, that one penny for each
              mistake could have become a vacation to Hawaii. "Design is not
              just a word. Design is a pixel taking its beauty daily routine in
              an ocean of Javascript", in these few words it's hidden the
              authenticity of something we still don't understand, but we
              probably should believe it, shouldn't we?
            </div>
            <div className="article article--footer">
              <img className="image left" src={quality} alt="" />
              <span className="big-text">DEMAND A-TEAM DEVELOPMENT</span>
              <span className="medium-text">
                The whole World knows A-Team is an effective antidote for any
                kind of problem. It might not cure covid nineteen, but it's just
                as important to know that there is only one genuine A-Team.
                Simply promptly relief.
              </span>
            </div>
          </div>
          <img
            style={{ position: 'absolute', top: 900, right: -100 }}
            width={400}
            height={350}
            src={coffeeStain2}
            alt=""
          />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
