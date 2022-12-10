<script>
    import { dues } from '$lib/utils/helper';
    let one;
    let two, twoOne;
    let three, threeOne, threeTwo, threeThree, threeFour, threeFive;
    let four, fourOne, fourTwo, fourThree, fourFour, fourFive, fourSix;
    let five, fiveOne, fiveTwo, fiveThree;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo;
    let eight, eightOne, eightTwo, eightThree, eightFour;
    let nine, nineOne, nineTwo, nineThree, nineFour;
    let ten, tenOne, tenTwo, tenThree, tenFour, tenFive;
    let eleven;
    let twelve;
    
    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
   <h1 class="noUnderscore">JEDEN VERDAMMTEN SONNTAG LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">INHALTSVERZEICHNIS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Artikel I: ENTSTEHUNG UND GÜLTIGKEIT DER CONSTITUTION</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Artikel II: BEGRIFFSDEFINITION</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>Zeit</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Artikel III: DER COMMISSIONER</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>Das Amt des Commissioners</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>Vorgeschriebene Strafen</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>Commissioner soll die Autorität der Clubs nicht ersetzen</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeFour)}>Verfahren zur Überprüfung und/oder Aufhebung der Entscheidung des Commissioners</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeFive)}>Amtszeitbeschränkungen und Wahlen</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Artikel IV: CLUBS UND MANAGER</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>Gründung von Clubs und Ernennen von Managern</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>Abstimmungen in der Offseason</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourThree)}>Abstimmung in der Regular Saison</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourFour)}>Keine diskussionswürdige Änderung der Constitution während der Regular Saison</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourFive)}>Mindestanforderungen an die Abstimmungen</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourSix)}>Rückzug von Managern / Clubs</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Artikel V: LEAGUE SETTINGS</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>Game Service and Format</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>Siege und Tiebreaker</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>Transaktionsbeschränkungen</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Artikel VI: JEDEN VERDAMMTEN SONNTAG SNAKE DRAFT</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>Ankündigung</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>Draft Order Determination</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>Regeln des Drafts</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Artikel VII: FREE AGENCY, SALARY CAP UND ROSTER MANAGEMENT</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>Free Agent Akquisition</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwo)}>Verantwortlichkeiten des Managers und Dienstplanmanagement</h4>
    
     <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Artikel VIII: TRADES</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>Regeln</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>Verbotene Trades</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightThree)}>Trade Deadline</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightFour)}>Auswirkungen der Zuwiderhandlung</h4>
    
     <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Artikel IX: PLAYOFFS</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineOne)}>Timing</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineTwo)}>Beteiligung</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineThree)}>Tiebreaker</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineFour)}>Auszeichnungen</h4>
    
     <h3 class="noUnderscore clickable" on:click={() => goToSection(ten)}>Artikel X: REGELVERSTÖßE</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenOne)}>Art der Straftaten</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenTwo)}>Einleitung eines Ordnungswidrigkeitenverfahrens</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenThree)}>Regelverstöße</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenFour)}>Strafen</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenFive)}>Schiedsrichter und Jurys</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eleven)}>Anhang "A": FINANZEN</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(twelve)}>Anhang "B": VERSIONSHISTORIE</h3>
    
    <hr />
    
     <h2 class="sectionHeading" bind:this={one}>Artikel 1: ENTSTEHUNG UND GÜLTIGKEIT DER CONSTITUTION</h2>
     <p>Diese Jeden Verdammten Sonntag Fantasy League Constitution stellt eine Vereinbarung zwischen den Managern dar. Von diesen akzeptiert jeder die Regeln und Rechte dieser Vereinbarung und verpflichtet sich, alle Bedingungen zu akzeptieren und zu befolgen. Die Constitution bleibt auf unbestimmte Zeit in Kraft, mit der Ausnahme, dass die Bestimmungen von Artikel 3, Abschnitt 2 außer Kraft treten, wenn der derzeitige Commissioner sein Amt niederlegt.</p>
    

     <h2 class="sectionHeading" bind:this={two}>Artikel II: BEGRIFFSDEFINITION</h2>
     <dl>
        <dt>„Message Board“</dt>
        <dd>bezeichnet zugleich die WhatsApp Gruppe „Jeden verdammten Sonntag“ und das Sleeper-Message Board auf  https://sleeper.app/leagues/786635113353039872.</dd>

        <dt>„Club“</dt>
        <dd>bezeichnet eine Fantasy Football Mannschaft, die gemäß dieser Verfassung gegründet wurde.</dd>

        <dt>„Commissioner“</dt>
        <dd>bezeichnet den Amtsinhaber und/oder das Amt des Commissi-oners der Liga.</dd>
    
        <dt>„Inaktiv“</dt>
        <dd>bezeichnet den Zustand, in dem für einen bestimmten Zeitraum alle folgenden Aktionen außer Kraft gesetzt werden: (a) Adding oder Dropping von Spielern; b) Aufstellung eines vollständigen Lineups.</dd>
    
        <dt>„Manager“</dt>
        <dd>bezeichnet einen am Fantasy Football teilnehmenden Spieler, der befugt ist, verbindliche Entscheidungen in Bezug auf einen Club zu treffen.</dd>
    
        <dt>„Bekanntmachung“</dt>
        <dd>bezeichnet die Veröffentlichung auf den o.g. Message Boards. Nur ein Post auf einer dieser Plattformen dient als offizielle und ausreichende Benachrichtigung des Commissioners zu jeglichen Maßnahmen. Während informelle Methoden (münd-lich, im betrunkenen Zustand) bei der Beratung des Commissioners als wirksam angesehen werde können, darf kein Club ei-ne Entscheidung des Commissioners als bindend ansehen oder eine Beschwerde einreichen, die nicht offiziell in den Boards angekündigt wurde. </dd>
    
        <dt>„Regular Season“</dt>
        <dd>bezeichnet den Zeitraum zwischen dem Tag, an dem das erste NFL-Football-Spiel in einem bestimmten Jahr ausgetragen wird, und dem Auflösen der „normalen“ Spiele.</dd>
    
        <dt>„Playoffs“</dt>
        <dd>bezeichnet den Zeitraum zwischen dem letzten Regular Season Spiel und dem offiziellen Ende der Season.</dd>
    
        <dt>„Offseason“ </dt>
        <dd>bezeichnet den Zeitraum zwischen dem Ende der Season und dem Tag, an dem das erste NFL-Football-Spiel in einem bestimmten Jahr ausgetragen wird.</dd>
    </dl>

    <h3 bind:this={twoOne}>Zeit</h3>
    <p>Bezieht sich diese Constitution auf eine „Week“, so wird damit entweder eine Spielwoche (z. B. von 19 Uhr an einem Dienstag bis 19 Uhr am folgenden Dienstag), oder bezieht sich im Zusammenhang mit einem Head-to-Head-Games auf den Zeitraum, der das Head-to-Head-Game zwischen zwei Gegnern umfasst, unabhängig von der Anzahl der tatsächlichen Tage innerhalb dieses Zeitraums. </p>
    <p>Alle hier angewendeten Zeiten werden als Mitteleuropäische Zeit (MET) berechnet.</p>

    
    <h2 class="sectionHeading" bind:this={three}>Artikel III: DER COMMISSIONER</h2>

    <h3 bind:this={threeOne}>Das Amt des Commissioners</h3>
    <ol>
        <li>Das Amt des Commissioners ist hiermit eingerichtet.</li>
        <li>Zu den Aufgaben des Commissioners gehören:</li>
            <ol type="a">
                <li>als Verwaltungschef, Streitschlichter and (evtl. in Zukunft) als Finanzverwalter der Liga zu fungieren.</li>
                <li>entweder auf Beschwerde oder auf eigene Initiative jede Handlung, Transaktion oder Praxis zu untersuchen, die beklagt oder verdächtigt wird, nicht im besten Interesse des Fantasy Footballs zu handeln, mit der Befugnis, die Clubs und Manager zu zwingen, auf offizielle Fragen des Commissioners zu reagieren, die zur Lösung erforderlich sind und nach Prüfung oder nach einer Ablehnung oder Nichtbefolgung solcher Ermahnungen, die im Folgenden vorgesehenen Sanktionen zu verhängen.</li>
                <li>nach der Untersuchung festzustellen, welche Präventiv- oder Strafmaßnahmen unter den jeweiligen Umständen für die Handlung, Transaktion oder Praxis angemessen sind und gegebenenfalls Maßnahmen gegen Clubs, Manager oder andere Personen zu ergreifen.</li>
                <li>die Person zu ernennen, die dem Amt des Commissioners offiziell beigeordnet ist, soweit dies nach alleinigem Ermessen des Commissioners erforderlich ist.</li>
                <li>Überprüfung und Genehmigung der Keeper-Auswahl (evtl. in der Zukunft) und Transaktionen und Trades zwischen Clubs in Bezug auf Wettbewerbsgleichge-wicht, Einhalten von Absprachen oder anderen eingeschränkten Praktiken und im besten Interesse des Fantasy Footballs.</li>
                <li>Entscheidungen zu treffen oder Personen zu ernennen, die Entscheidungen in Be-zug auf Regelauslegungen, Verwaltungsfunktionen, Finanztransaktionen oder Disziplinarmaßnahmen treffen, soweit dies erforderlich sein kann.</li>
                <li>Alle Änderungen dieser Verfassung in Anhang B "Änderungshistorie" festzuhalten.</li>
            </ol>
    </ol>

    <h3 bind:this={threeTwo}>Vorgeschriebene Strafen</h3>
    <ol start="3">
        <li>Im Falle eines Verhaltens, das der Commissioner als nicht im besten Interesse der Liga oder des Fantasy Footballs erachtet, können Straf- oder Disziplinarmaßnahmen gegen Clubs oder Manager eine oder mehrere der folgenden Maßnahmen umfassen:</li>
            <ol type="a">
                <li>Eine formelle Warnung;</li>
                <li>Eine Rückgängigmachung, Änderung oder Ablehnung einer angefochtenen Transaktion;</li>
                <li>Punktabzug für den Spieltag;</li>
                <li>Ein Verfall eines zuvor bestimmten Draft-Picks;</li>
                <li>Eine Reduzierung der Waiver Priority;</li>
                <li>Suspendierung oder Entfernung eines Clubs oder eines Managers aus der Liga;</li>
                <li>Verfall der Jahresbeiträge (falls vorhanden);</li>
                <li>Andere Maßnahmen, die der Commissioner für angemessen hält.</li>
            </ol>
        <li>Entscheidungen des Commissioners, die Strafen für die Clubs enthalten, müssen formell in den Boards veröffentlicht werden.</li>
    </ol>
    
    <h3 bind:this={threeThree}>Commissioner soll die Autorität der Clubs nicht ersetzen</h3>
    <ol start="5">
         <li>Ungeachtet der Bestimmungen des vorstehenden Abschnitts 2 darf der Commissioner keine Maßnahmen ergreifen und keine Änderung dieser Verfassung oder Anpassung des Status quo in Bezug auf Angelegenheiten vornehmen, die eine Abstimmung der Clubs erfordern, wie in Artikel IV, Abschnitt 2 dargelegt.</li>
    </ol>
    
    <h3 bind:this={threeFour}>Verfahren zur Überprüfung und/oder Aufhebung der Entscheidung des Commissioners</h3>
    <ol start="6">
         <li>Jede nach diesem Artikel ergriffene Maßnahme des Commissioners, unabhängig davon, ob sie ausdrücklich als "reviewable" bezeichnet wird oder nicht, kann nach folgendem Verfahren aufgehoben werden:</li>
            <ol type="a">
                <li>Clubs, die am Ergebnis der Entscheidung des Commissioner interessiert sind (d. h. der Club, der den direkten Vorteil eines überstimmten „Votes“ erhalten würde, und alle anderen Clubs, die direkt an der angefochtenen Transaktion und/oder Handlung beteiligt sind), gelten als „interessierte Parteien“ und sind nicht berechtigt, an einem Vote zur Aufhebung dieser Entscheidung teilzunehmen.</li>
                <li>Die Entscheidung kann neu überprüft werden, wenn bei den nicht beteiligten Clubs (Als beteiligt gelten der Commissioner und die betroffenen Clubs) die Hälfte gegen die Entscheidung des Commissioners stimmt. Damit ist die Entscheidung hinfällig, der Vorfall kann neu überprüft werden oder es kann ein An-trag auf Abstimmung gestellt werden. <u>Dieser Antrag auf Abstimmung muss innerhalb einer Woche nach der förmlichen Veröffentlichung der angefochtenen Entscheidung in den Message Boards eingereicht werden.</u></li>
                <li>Der Commissioner und alle interessierten Parteien können bei den Clubs nach Belieben zur Unterstützung ihres bevorzugten Ausgangs einer Abstimmung werben.</li>
                <li>Die Entscheidung des Commissioners kann bei der Abstimmung nur mit einer Zweidrittel-Mehrheit der wahlberechtigten Vereine aufgehoben werden.</li>
                <li>Wenn eine solche Mehrheit nicht erreicht wird, bleibt die Entscheidung des Commissioners bestehen. <u>Zur Klarstellung: Dies schließt weitere Aktionen des Commissioners gegen denselben Manager oder zum selben Thema nicht aus.</u></li>
            </ol>
    </ol>
    
    <p><u>Auslegungsbemerkung:</u> <i>Zum Beispiel kann der Commissioner gemäß Artikel III, Abschnitt 3, Absatz f) entscheiden, dass Club X aufgrund von missbräuchlichem Verhalten (z.B. illegal Lineup) einen Punktabzug für den Spieltag erhält. Diese Entscheidung wird an einem Dienstag um 17:35 Uhr MET in den Message Boards veröffentlicht. Ein Drittel der Clubs (zu denen der ausführende Commissioner und der beteiligte Club nicht gehören, weil es sich um interessierte Partein handelt) beantragt beim Commissioner eine erneute Überprüfung oder eine erneute Abstimmung gemäß Artikel III, Abschnitt 6, Absatz b), und zwar vor Ablauf der Frist um 17:35 Uhr MET am folgenden Dienstag.</i></p>
    <p><i>Der Commissioner weigert sich, dies noch einmal zu überdenken, und daher findet eine Abstimmung statt. Mehr als zwei Drittel der Clubs stimmen dafür, dass die Entscheidung aufgehoben werden soll. Die Entscheidung des Commissioners ist damit offiziell aufgehoben. Der Commissioner entscheidet dann gemäß Artikel III, Abschnitt 3, Absatz d), dass der missbräuchliche Club stattdessen mit einer Absenkung der Waiver-Priority bestraft wird. Nur zwei Clubs beantragen eine Überprüfung dieser Entscheidung. Da dies eine unzureichende Anzahl ist, um einen gültigen Antrag zu bilden, hat diese Entscheidung bestand und der missbräuchliche Club wird darauf hin mit einer Absenkung der Waiver-Priority bestraft.</i></p>
    
     <h3 bind:this={threeFive}>Amtszeitbeschränkungen und Wahlen</h3>
     <ol start="7">
            <li>Der Commissioner übt sein Amt ohne Mindestdauer aus. Die Manager der Liga haben in jeder Offseason die Möglichkeit über einen neuen Commissioner abzustimmen.</li>
            <li>Die Wahl eines Commissioners erfolgt mit einfacher Mehrheit, und jeder Club hat eine (1) Stimme. Bei Stimmengleichheit findet mindestens einmal wöchentlich eine weitere Wahl statt, bis ein Commissioner gewählt ist.</li>
            <li>Der Commissioner kann jederzeit (auch in der Season) mit einer Zweidrittel-Mehrheit abgewählt werden. Gleichzeitig muss ein neuer Commissioner mit absoluter Mehrheit gewählt werden. Kommt diese Mehrheit nicht zustande, bleibt der Commissioner bis weiteres im Amt.</li>
            <li>Der Commissioner ist zu jeder Zeit gleichgestellt mit jedem anderen Manager der Liga. Er hat sich an alle gelten Regeln zu halten unabhängig der in Artikel III, Abschnitt 2 beschriebenen Sonderrechte.</li>
    </ol>
    
    
    <h2 class="sectionHeading" bind:this={four}>Artikel IV: CLUBS UND MANAGER</h2>
    
    <h3 bind:this={fourOne}>Gründung von Clubs und Ernennen von Managern</h3>
    <ol>
         <li>Die Manager jedes Clubs werden wie folgt festgelegt:</li>
            <ol type="a">
                <li>Marcus – Show Me Your TDs</li>
                <li>Chris – Smack Ya’ll Team</li>
                <li>Markus Hembes – TeamBayPackers</li>
                <li>Markus Flohr – Barfuß Bethlehem</li>
                <li>Bö – Hail to the GOAT</li>
                <li>Ecki – Eckis Eleven</li>
                <li>David Mehrfeld – Unicorn Brittle Bones</li>
                <li>David Schwarz – Superdogs</li>
                <li>Nico – Stay calm and OMAHA!</li>
                <li>Marten – Rasenrammler Rügen</li>
                <li>Janosch – Sorenson GOAT</li>
                <li>Manu – lions50</li>
            </ol>
    </ol>
    
    <h3 bind:this={fourTwo}>Abstimmungen in der Offseason</h3>
    <ol start="2">
         <li>In jeder Offseason können die Clubs verpflichtet sein, Stimmen in Bezug auf Angelegenheiten abzugeben, die Folgendes umfassen, aber nicht darauf beschränkt sind:</li>
            <ol type="a">
                <li>die Wahl eines Commissioners;</li>
                <li>Der Betrag des jährlichen Buy-Ins eines Clubs (evtl. Zukunft);</li>
                <li>Der Zeitplan der Auszahlungsbedingungen (evtl. Zukunft);</li>
                <li>Die Änderung dieser Verfassung in Bezug auf Angelegenheiten, die Folgendes umfassen, aber nicht darauf beschränkt sind:</li>
                    <ol type="i">
                        <li>Die Erweiterung der Liga;</li>
                        <li>Überarbeitungen der Ligaeinstellungen, wie in Artikel V definiert; und</li>
                        <li>Überarbeitungen der Regularien, die sich auf den Draft beziehen;</li>
                    </ol> 
            </ol>
    </ol>
    <p>All dies bedarf der einfachen Mehrheit durch eine Abstimmung in den Message Boards oder persönlich, solange alle Clubs vertreten sind; mit Ausnahme des Absatzes d), für den eine Zweidrittelmehrheit erforderlich ist. Alle Abstimmungen bleiben für 3 Tage nach der Erstellung geöffnet. Nach Ablauf des Abstimmungsfensters werden alle Stimmen gezählt und eine Entscheidung vom Commissioner gemäß der ihm in Artikel III, Abschnitt 2 Absatz f) erteilten Befugnis getroffen.</p>

    <h3 bind:this={fourThree}>Abstimmungen in der Offseason</h3>
    <ol start="3">
         <li>Während der Regular Saison können die Clubs verpflichtet sein, Stimmen in Bezug auf Angelegenheiten abzugeben, die Folgendes umfassen, aber nicht darauf beschränkt sind:</li>
            <ol type="a">
                <li>Referenden oder Meinungsumfragen, die vom Commissioner zur eigenen Orien-tierung verlangt werden; und</li>
                <li>Überprüfung der Entscheidungen des Commissioners innerhalb der Regular Saison, wie in Artikel III, Abschnitt 6 dargelegt.</li>
            </ol>
    </ol>
    
    <h3 bind:this={fourFour}>Keine diskussionswürdige Änderung der Constitution während der Regular Saison</h3>
    <ol start="4">
         <li>Diese Constitution kann, während der Regular Saison, nur durch einstimmigen Be-schluss der Clubs durch eine Abstimmung in den Message Boards geändert werden. Die Abstimmungen bleiben für 3 Tage nach der Erstellung geöffnet. Nach Ablauf des Abstimmungsfensters werden alle Stimmen gezählt und eine Entscheidung vom Commis-sioner gemäß der ihm in Artikel III, Abschnitt 2 Absatz f) erteilten Befugnis getroffen.</li>
    </ol>
    
    <h3 bind:this={fourFive}>Mindestanforderungen an die Abstimmungen</h3>
    <ol start="5">
         <li>Es gibt keine Mindestquorum- oder Abstimmungspflicht für eine Regular Season- oder Offseason.</li>
         <li>Ausnahmen, bei der eine 100% Abstimmungsquote erreicht werden muss, sind: Abwahl-/ Wahl des Commissioners, Abstimmung in Bezug auf die Constitution, Ernennung/Ersetzen neuer Mitglieder, Ort und Uhrzeit des Drafts.</li>
    </ol>
    
    <h3 bind:this={fourSix}>Rückzug von Managern / Clubs</h3>
    <ol start="7">
         <li>Manager können sich jederzeit zwischen Beginn der Offseason und dem 15. August innerhalb dieser Offseason ohne Strafe aus der Liga zurückziehen. Ihre Clubs bleiben be-stehen und Ersatzeigentümer können nach alleinigem Ermessen der Liga gefunden und ernannt werden.</li>
         <li>Jeder Manager, der zwischen dem 15. August und dem Beginn der folgenden Offseason in einem bestimmten Jahr aussteigt, verliert sein Buy-In-Guthaben (wenn vorhanden).</li>
         <li>Neue Manager haben die Möglichkeit, einen Club, aus dem sich alle Manager zurückgezogen haben, umzubenennen.</li>
         <li>Neue Manager haben die Möglichkeit, alle Keeper-berechtigten Spieler (evtl. Zukunft) in dem Club zu behalten, aus dem sich alle Manager gemäß Artikel IV, Abschnitt 7 zurückgezogen haben.</li>
    </ol>
    
    
    <h2 class="sectionHeading" bind:this={five}>Artikel V: LEAGUE SETTINGS</h2>
    
    <h3 bind:this={fiveOne}>Game Service and Format</h3>
    <ol>
         <li>Die Liga ist eine wöchentliche Head-to-Head-Liga, die auf Sleeper gehosted wird.</li>
         <li>Das Scheduling der Liga wird von den internen Systemen von Sleeper festgelegt und vom Commissioner überprüft.</li>
            <ol type="a">
                <li>Jeder spielt einmal gegen jeden anderen.</li>
                <li>Da hierfür nur elf (11) Wochen nötig sind, werden die Weeks 6, 10 und 14 nach vorgegebenen Methoden ausgelost</li>
                    <ol type="i">
                        <li>Week 6: Kicker Punkte (1. vs. 10.; 2. vs. 9; etc.)</li>
                        <li>Week 10: Bench Punkte (1. vs. 10.; 2. vs. 9; etc.)</li>
                        <li>Week 14 (letzte Week der Regular Season): 1. vs. 2.; 3. vs. 4; etc.</li>
                    </ol> 
            </ol>
         <li>Die Scoring-Kategorien und zugehörigen Punkte für die Liga lauten wie folgt:</li>
             <ol type="a">
                 <li>Passing: Passing Yards (0,04) / TD Pass (4) / Interceptions Throw (-2) / 2pt Pass-ing Conversions (2)</li>
                 <li>Rushing: Rushing Yards (0.1) / TD Rush (6) / 2pt Rushing Conversion (2)</li>
                 <li>Receiving: Receiving Yards (0.1) / Reception (0.5) / TD Reception (6) / 2pt Re-ceiving Conversion (2)</li>
                 <li>Sonstiges: Kickoff Return TD (6) / Punt Return TD (6) / Fumble recovered for TD (6) / Total Fumbles (-0.5) / Total Fumbles Lost (-1.5) / Fumble Return TD (6) / 2 Point Return TD (2)</li>
                 <li>Kicking: PAT Made (1) / PAT Missed (-2) / Points per FG Yard (0.1) / FG Missed (0-39 yds) (-2) / FG Missed (40-49 yds) (-1)</li>
                 <li>Defense und Special Teams: Sack (1) / INT Return TD (6) / Fumble Return TD (6) / Blocked Punt oder FG Return for TD (6) / Blocked Punt, PAT oder FG (2) / Interception (2) / Fumble Recovered (1) / Safety (2) / Sack (1) / Forced Fumble (1) / 0 Points Allowed (10) / 1-6 Points Allowed (8) / 7-13 Points Allowed (6) / 14-20 Points Allowed (3) / 21-27 Points Allowed (1) / 35+ Points Allowed (-2) / Less Than 100 Total Yards Allowed (5) / 100-199 Total Yards Allowed (3) / 200-299 Total Yards Allowed (2) / 350-399 Total Yards Allowed (-1) / 400-449 Total Yards Allowed (-3) / 450-499 Total Yards Allowed (-5) / 500-549 Total Yards Al-lowed (-6) / 550+ Total Yards Allowed (-7)</li>
             </ol> 
        <li>Der Roster setzt sich wie folgt zusammen:</li>
             <ol type="a">
                <li>1 Starting Quarterback (QB); Kein Maximum</li>
                <li>2 Starting Running Backs (RB); Kein Maximum</li>
                <li>2 Starting Wide Receivers (WR); Kein Maximum</li>
                <li>1 Starting Tight End (TE); Kein Maximum</li>
                <li>2 Starting Flex (RB/WR/TE);</li>
                <li>1 Starting Defense/Special Team (D/ST); Kein Maximum</li>
                <li>1 Starting Kicker (K); Kein Maximum</li>
                <li>6 Bench (BN);</li>
             </ol>
        <li>Während der Regular Saison besteht dieser Kader durchgehend aus 16 Spielern (zuzüg-lich zwei IR-Spots).</li>
    </ol>

    <h3 bind:this={fiveTwo}>Siege und Tiebreaker</h3>
    <ol start="7">
         <li>Wöchentliche Head-to-Head-Matchups werden von dem Team mit der höheren Punktzahl für diese bestimmte Woche nach Abzug aller etwaigen Strafen gemäß Artikel VII, Abschnitt 7 gewonnen.</li>
         <li>Matchups, die mit einem Unentschieden enden, werden als Unentschieden mit Ausnahme von Spielen in den Playoffs und des Championship-Games, wie hier beschrieben, gewertet.</li>
    </ol>
    
    <h3 bind:this={fiveThree}>Transaktionsbeschränkungen</h3>
    <ol start="9">
         <li>Jeder Club ist berechtigt, jede Saison eine unbegrenzte Anzahl von Trades und/oder Add/Drops zu tätigen.</li>
         <li>Jeder Trade unterliegt nach seiner Einreichung keinem Überprüfungszeitraum. Manager haben jedoch die Möglichkeit abzustimmen, den Trade zu bemängeln.</li>
    </ol>
    
     
    <h2 class="sectionHeading" bind:this={six}>Artikel VI: JEDEN VERDAMMTEN SONNTAG SNAKE DRAFT</h2>
    
    <h3 bind:this={sixOne}>Ankündigung</h3>
    <ol>
         <li>Das Datum und die Uhrzeit des Entwurfs werden auf der Sleeper und in WhatsApp veröffentlicht und jedem Eigentümer per E-Mail mitgeteilt.</li>
         <li>Das Startdatum jedes nachfolgenden Snake Drafts wird vom Commissioner in Abspra-che mit den Managern spätestens zwei (2) Wochen vor Beginn der regulären NFL-Saison festgelegt, und soll spätestens einen (1) Tag vor dem Opening Kickoff und mit einer Frist zur Kenntnisnahme von mindestens sieben (7) Tagen für die Clubs durchgeführt werden.</li>
    </ol>
    
    <h3 bind:this={sixTwo}>Draft Order Determination</h3>
    <ol start="3">
         <li>Jedes Jahr wird es eine neue Auslosung der Draft-Positionen geben. Dabei ist der 1st Pick dem Gewinner des Loser-Brackets des vorhergehenden Jahres bereits zugeordnet (wie in Artikel IX, Abschnitt 9 bestimmt). Diese Position kann aber auf freiwilliger Basis zurückgegeben werden, um an der Auslosung teilnehmen zu können. Der Gewinner des Vorjahres besitzt dabei automatisch den letzten Pick im Draft.</li>
    </ol>
    
    <h3 bind:this={sixThree}>Regeln des Drafts</h3>
    <ol start="4">
         <li>Der Draft unterliegt dem automatisierten Prozess von Sleeper und ist ein Snake Draft.</li>
    </ol>

    <h2 class="sectionHeading" bind:this={seven}>Artikel VII: FREE AGENCY, SALARY CAP UND ROSTER MANAGEMENT</h2>
    
    <h3 bind:this={sevenOne}>Free Agent Akquisition</h3>
    <ol>
         <li>Free Agent Spieler werden über die wöchentliche Free Agent Waiver Wire erworben. Die Waiver-Wire-Reihenfolge wird anhand der erzielten Punkte an jedem Spieltag bestimmt, wobei das Team mit den wenigsten Punkten den ersten Pick hat. Der Free Agent/Waiver Wire-Prozess wird durch den automatisierten Prozess von Sleeper gere-gelt. Bei Punktgleichheit entscheidet das Standing in der Tabelle über die Platzierung.</li>
         <li>Es gibt kein Saison-Limit.</li>
         <li>Jeder neue Free Agent bleibt 24 Stunden lang auf dem Waiver Wire, um allen Teams die Möglichkeit zu geben, einen Anspruch geltend zu machen.</li>
    </ol>
    
    <h3 bind:this={sevenTwo}>Verantwortlichkeiten des Managers und Dienstplanmanagement</h3>
    <ol start="4">
         <li>Manager müssen jederzeit ein komplettes Team aufstellen.</li>
         <li>Manager dürfen Spielern verletzte oder IR-Spieler nicht zu Spielbeginn in ihrer aktiven Aufstellung belassen. Ebenso dürfen Spieler, die auf einem IR-Spot sind und nachdem sie den Out oder IR-Status verloren haben, nicht auf diesem Spot zu Spielbeginn verbleiben.</li>
         <li>Verletzt sich ein Spieler vor einem Spätspiel, oder ist bis dahin der Status noch nicht geklärt, wird eine Frist für die Manager zum Reagieren auf 23 Uhr des Spieltages festgelegt. Ändert sich nach dieser Uhrzeit der Status eines Spieler, so wird der Manager nicht für ein illegal Line-Up verantwortlich gemacht.</li>
         <li>Die Nichteinhaltung der in den Abschnitten 4,5 und 6 festgelegten Verantwortlichkeiten führt dazu, dass der Club nach Ermessen des Commissioners gemäß Artikel III, Abschnitt 3 bestraft wird und gemäß Artikel III, Abschnitt 6 überprüfbar ist.</li>
         <li>Darüber hinaus, wenn ein Manager für einen Zeitraum von mehr als zwei Wochen inaktiv ist, stellt diese Vernachlässigung eine Straftat im Sinne von Artikel X dar.</li>
    </ol>
    
   
    <h2 class="sectionHeading" bind:this={eight}>Artikel VIII: TRADES</h2>
    
    <h3 bind:this={eightOne}>Regeln</h3>
    <ol>
         <li>Jeder Club kann jederzeit eine beliebige Anzahl von Trades mit einer beliebigen Anzahl anderer Clubs durchführen, vorausgesetzt, dass die Trades nicht den besten Interessen des Fantasy Footballs zuwiderlaufen. Vorgeschlagene Trades werden keinem Überprüfungsprozess unterzogen und werden nach der Annahme direkt durchgeführt.</li>
         <li>Der Commissioner ist befugt, alle Transaktionen gemäß Artikel III Abschnitt 2 Absatz e) unter den folgenden Bedingungen zu bewerten:</li>
            <ol type="a">
                <li>Der Commissioner kann ein Veto gegen solche Transaktionen einlegen oder sie für nichtig erklären, die gegen diese Constitution verstoßen oder die nach seinem Ermessen dem besten Interesse des Fantasy Footballs zuwiderlaufen würden;</li>
                <li>Alle derartigen Vetos müssen innerhalb von vierundzwanzig (24) Stunden nach der angekündigten Transaktion angekündigt werden;</li>
                <li>Alle diese Vetos sind nachprüfbare Entscheidungen gemäß Artikel III, Abschnitt 6; und</li>
                <li>Der Commissioner muss diese Handlung mit allen Betroffenen abstimmen;</li>
            </ol>
    </ol>
    
    <h3 bind:this={eightTwo}>Verbotene Trades</h3>
    <ol start="3">
         <li>Draft-Picks und "später zu benennende Spieler" sind nicht übertragbar und dürfen keinen Teil des Wertes einer Transaktion ausmachen.</li>
         <li>Mit Ausnahme der Roster- und Salary Cap-Anforderungen (evtl. Zukunft) gibt es keine Einschränkungen in Bezug auf die Anzahl der Spieler, die Teil einer Transaktion sein können.</li>
    </ol>
    
    <h3 bind:this={eightThree}>Trade Deadline</h3>
    <ol start="5">
         <li>Die Frist für Trades ist der Anpfiff des Monday Night Spiels in Week 12.</li>
    </ol>

    <h3 bind:this={eightFour}>Trade Deadline</h3>
    <ol start="6">
         <li>Transaktionen, die gegen die Anforderungen des Rosters oder des Salary Caps (falls vorhanden) jeder betroffenen Partei oder die gegen diesen Artikel verstoßen, sind null und nichtig. Zur Klarstellung: Selbst, wenn an einer Transaktion mehrere Parteien beteiligt sind, macht eine einzige Verletzung eines Managers die gesamte Transaktion für alle Parteien zunichte.</li>
    </ol>

    
    <h2 class="sectionHeading" bind:this={nine}>Artikel IX: PLAYOFFS</h2> 
    
    <h3 bind:this={nineOne}>Timing</h3>
    <ol>
         <li>Die Playoffs beginnen in Week 15 der Regular Season der NFL.</li>
         <li>Es gibt drei (3) Playoff-Runden</li>
         <li>Jede Playoff-Runde dauert eine (1) Woche.</li>
    </ol>
    
    <h3 bind:this={nineTwo}>Beteiligung</h3>
    <ol start="4">
         <li>Die sechs (6) Vereine mit der höchsten Siegquote am letzten Tag vor Beginn der Playoffs qualifizieren sich für die Playoffs.</li>
         <li>Die beiden (2) Clubs mit der höchsten Gewinnquote erhalten in der ersten Runde der Playoffs eine Bye Week.</li>
    </ol>
    
    <h3 bind:this={nineThree}>Tiebreaker</h3>
    <ol start="6">
         <li>Für den Fall, dass ein Club in Bezug auf die Win Percentage gleichauf liegen sollte, ist der Tiebreaker die Gesamtpunktzahl für (PF) während der regulären Saison.</li>
    </ol>    
    
    <h3 bind:this={nineFour}>Beteiligung</h3>
    <ol start="7">
         <li>Der Sieger der Liga erhält den Pokal mit eingraviertem Namen.</li>
         <li>Der Verlierer der Liga erhält eine Toiletten-Pokal.</li>
         <li>Der Sieger der Consolidation Bracket (Loser Round) (7. Platz) erhält automatisch den First Pick im Draft des folgenden Jahres. Der Sieger der Liga (1. Platz) erhält automatisch den Last Pick im Draft des folgenden Jahres.</li>
    </ol>    
    
    
    <h2 class="sectionHeading" bind:this={ten}>Artikel X: REGELVERSTÖßE</h2> 
    
    <h3 bind:this={tenOne}>Art der Straftaten</h3>
    <ol>
         <li>Dieser Artikel befasst sich mit Regelverstößen, die über den Anwendungsbereich von Unregelmäßigkeiten oder geringfügigen Verstößen gegen die Constitution hinausgehen und ein fehlverhaltendes Verhalten darstellen, das einer strengeren Bestrafung bedarf.</li>
    </ol>
    
    <h3 bind:this={tenTwo}>Einleitung eines Ordnungswidrigkeitenverfahrens</h3>
    <ol start="2">
         <li>Der Commissioner kann von sich aus oder nach Eingang einer anonymen oder öffentlichen Beschwerde, nachdem er sich vergewissert hat, dass die Beschwerde begründet ist, verkünden, dass ein Club oder sein Manager eine Regelwidrigkeit begangen hat, und die Strafe benennen.</li>
         <li>Der Commissioner ist befugt, mutmaßliche Regelwidrigkeiten zu untersuchen, wenn er dies für notwendig hält, und die Manager sind verpflichtet, bei solchen Untersuchungen zu helfen, indem sie dem Commissioner wahrheitsgemäße Aussagen machen, wenn sie dazu aufgefordert werden.</li>
    </ol>
    
    <h3 bind:this={tenThree}>Regelverstöße</h3>
    <ol>
         <li>Jeder begeht einen Regelverstoß, der ...:</li>
            <ol type="a">
                <li>><u>Bestechung:</u> ... einer anderen Partei einen anderen Wert als den In-Game Wert im Austausch für Leistungen oder Trades im Spiel bietet.</li>
                <li>><u>Collusion:</u> ... mit einer anderen Partei vereinbart, den offenen Wettbewerb im Spiel einzuschränken, indem andere getäuscht, irregeführt oder betrogen werden, damit eine Partei, die an der Absprache beteiligt sein kann oder nicht, einen unfairen Marktvorteil erlangt.</li>
                    <ol type="i">
                        <li>Eine Collusion wird in jedem Fall angenommen, wenn ein Manager gleichzeitig für mehr als einen Club tätig ist.</li>
                    </ol>
                <li>><u>Respektlosigkeit:</u> ... beleidigende, aggressive, unangenehme oder abfällige Kommentare zu einer an-deren Partei macht, die von anderen Menschen als mehr als freundlichem "Trash Talk" betrachtet werden würde.</li>
                <li>><u>Belästigung:</u> ... wiederholt eine andere Partei kontaktiert, obwohl diese Partei darum gebeten hat, dies zu unterlassen.</li>
                    <ol type="i">
                        <li>Es handelt sich um eine Verteidigung gegen diesen Belästigungsvorwurf, dass die Kontakte in Ton, Inhalt und Häufigkeit objektiv ver-nünftig und respektvoll waren.</li>
                    </ol>
                <li>><u>Wettbewerbswidriges Verhalten:</u> ... die Absicht zeigt, nicht mehr am Spiel teilzunehmen, das über bloße Fahrlässigkeit hinausgeht.</li>
                    <ol type="i">
                        <li>Unter extremen Umständen kann eine wiederholte Weigerung, sich an angemessenen Trades zu beteiligen, als wettbewerbswidriges Verhal-ten angesehen werden.</li>
                    </ol>
                <li>><u>Belästigung:</u> ... sich wiederholt über den Betrieb in der Liga in dem Maße beschwert, dass es auf eine Belästigung des Commissioners hinausläuft oder die Freude anderer deutlich verringert.</li>
                <li>><u>Allgemein:</u> ... ein Verhalten zeigt, das nicht anderweitig durch diese Verfassung verboten ist, aber allgemein als beschissen anerkannt wird.</li>
            </ol>
    </ol>    
    
    <h3 bind:this={tenFour}>Strafen</h3>
    <ol start="5">
         <li>Jeder Manager, der einer Regelwidrigkeit für schuldig befunden wird, kann die Strafen gemäß Artikel III, Abschnitt 3, einschließlich einer dauerhaften Suspendierung ohne Rücknahme erhalten.</li>
         <li>Der Commissioner kann nach eigenem Ermessen einen Club für die Handlungen eines Managers bestrafen.</li>
         <li>Entscheidungen über eine Straftat und ihre Strafe können gemäß Artikel III, Abschnitt 6 überprüft werden.</li>
         <li>Folgende Strafen werden ausgesprochen:</li>
             <ol type="a">
                 <li><b>Illegal Lineup</b> – Abzug von 10 Punkten pro illegalem Spieler. Dazu zählen aufgestellte Spieler mit folgendem Status:</li>
                        <ol type="i">
                            <li>OUT, IR, SUP, PUP;</li>
                            <li>Bye-Week; </li>
                            <li>NFL-Free Agents</li>
                        </ol>
                 <li><b>Ungültiger Spieler auf IR</b> – Abzug der Durchschnittspunkte des Spielers/der Spieler über die Saison für diesen Spieltag.</li>
                 <li>Weitere Strafen können vom Commissioner im League Chat kommuniziert werden.</li>
        </ol>
    </ol>
    
    <h3 bind:this={tenFive}>Schiedsrichter und Jurys</h3>
    <ol start="9">
         <li>Der Commissioner ist nach Artikel III, Abschnitt 2, Absatz d) ausdrücklich befugt, einen neutralen Schiedsrichter oder eine Jury zu ernennen, wenn er dies nach eigenem Ermessen für erforderlich hält; und muss dies tun, wenn er an einem mutmaßlichen Regelverstoß selbst beteiligt ist. Trotz Artikel III, Abschnitt 6 ist die Entscheidung, einen Schiedsrichter oder eine Jury zu ernennen, nicht diskutierbar.</li>
         <li>Eine Juryabstimmung ist nicht bindend, sondern nur beratend.</li>
         <li>Juryabstimmungen dürfen nicht geheim sein.</li>
         <li>Es gibt kein Mindestquorum- oder Anwesenheitspflicht für eine unverbindliche Juryabstimmung.</li>
    </ol>             
                 
 <p>Auslegungshinweis: <i>Während der Commissioner der Streitbeilegungsbeauftragte der Liga ist, kann der Commissioner in seltenen Fällen beschließen, andere zur Beilegung von Streitigkeiten zu ernennen. Dies wird besonders – und vielleicht ausschließlich – nützlich sein, wenn der Commissioner einem Regelverstoß beschuldigt wird oder Opfer eines Regelverstoß wird; oder wenn er in der Entscheidung befangen ist. Zum Beispiel kann ein Commissioner einen neutralen externen Schiedsrichter ernennen, um zu bestimmen, welche Strafe, falls nötig, ein Manager erhalten soll, der einen anderen Manager belästigt; oder er kann eine kleine Jury ernennen, um festzustellen, ob der "Trash Talk" von jemandem beleidigend ge-nug ist, um als missbräuchlich zu gelten. Jury-Abstimmungen dürfen nicht geheim sein, so dass dem Commissioner nicht vorgeworfen werden kann, über das Ergebnis gelogen zu haben. Ebenso wenig sind Juryabstimmungen bindend, da der Commissioner vernünftigerweise feststellen kann, dass in einer Abstimmung genügend Vorbehalt gezeigt wurde, um eine Straftat zu begründen, oder er kann feststellen, dass es für jeden Manager unnötig oder un-erwünscht ist, sich einzubringen. (Wenn beispielsweise 40% der Jury der Meinung sind, dass der Kontakt eines Managers mit einem anderen Manager eine unangemessene Belästigung darstellt, könnte der Commissioner beschließen, diesen Manager mit einer milderen Strafe zu bestrafen, anstatt festzustellen, dass überhaupt keine Straftat vorliegt.)</i></p>                
 
 <p>VEREINBART mit diesem Tag, dem 23. September 2022.</p>               

    
  <h2 class="sectionHeading" bind:this={eleven}>Anhang "A": FINANZEN</h2>  
  
  <p>TBA</p>


  <h2 class="sectionHeading" bind:this={twelve}>Anhang "B": VERSIONSHISTORIE</h2>  
  
  <table>
  <tr>
    <th>Anhang</th>
    <th>Anhang Beschreibung</th>
    <th>Verantwortlicher</th>
    <th>Datum</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Erstmalige Erstellung</td>
    <td>Marcus</td>
    <td>07.09.2019</td>
  </tr>
  <tr>
    <td>02</td>
    <td>Komplette Neuausrichtung mit Ergänzungen</td>
    <td>Marcus</td>
    <td>14.01.2022</td>
  </tr>
  <tr>
    <td>03</td>
    <td>Überarbeitung</td>
    <td>Marcus/Chris</td>
    <td>23.09.2022</td>
  </tr>
  <tr>
    <td>04</td>
    <td>Überarbeitung der Strafen</td>
    <td>Marcus</td>
    <td>06.12.2022</td>
  </tr>
</table>
    
</div>
