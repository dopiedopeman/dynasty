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
    let ten, tenOne, tenTwo, tenThree, thenFour, tenFive;

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
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Artikel 1: ENTSTEHUNG UND GÜLTIGKEIT DER CONSTITUTION</h2>
    
    <p>Diese Jeden Verdammten Sonntag Fantasy League Constitution stellt eine Vereinbarung zwischen den Managern dar. Von diesen akzeptiert jeder die Regeln und Rechte dieser Ver-einbarung und verpflichtet sich, alle Bedingungen zu akzeptieren und zu befolgen. Die Constitution bleibt auf unbestimmte Zeit in Kraft, mit der Ausnahme, dass die Bestimmungen von href="#threeOne">Artikel III, Abschnitt 2 außer Kraft treten, wenn der derzeitige Commissioner sein Amt niederlegt.</p>

    <p>1 IR Spots (Player must be labeled as IR, Out, or Covid in the Sleeper App)</p>
    
        <h4 bind:this={oneOneOne}>1.1.1 Position Maximums</h4>
        
        <div class="subBlock">
            <table class="positionMaximums">
                <tr><td>QB</td><td class="right">3 active, 5 total</td></tr>
                <tr><td>RB</td><td class="right">20</td></tr>
                <tr><td>WR</td><td class="right">20</td></tr>
                <tr><td>TE</td><td class="right">10</td></tr>
                <tr><td>D/ST</td><td class="right">3</td></tr>
                <tr><td>K</td><td class="right">3</td></tr>
            </table>
        </div>


    <h2 class="sectionHeading" bind:this={two}>Artikel II: BEGRIFFSDEFINITION</h2>
    
     dl>
        <dt>„Message Board“ </dt>
        <dd>bezeichnet zugleich die WhatsApp Gruppe „Jeden verdammten Sonntag“ und das Sleeper-Message Board auf  https://sleeper.app/leagues/786635113353039872.</dd>

        <dt>„Club“ </dt>
        <dd>bezeichnet eine Fantasy Football Mannschaft, die gemäß dieser Verfassung gegründet wurde.</dd>

        <dt>Owlman</dt>
        <dd>A giant owl-like creature.</dd>
    </dl>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring). The scoring system will never change without a majority league vote.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15. Each team that wins their division and the 4 wild card teams that finish with the best records, will receive a playoff berth. The 2 teams that win their division will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Tanking Policy</h2>
    
    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty. Any evidence of intentionally leaving roster spots empty in order to improve your draft position may be subject to punishment, including but not limited to the forfeiture of draft selections.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league chat, trade offers, and the waiver wire, is strongly encouraged but generally grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commisiooners will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>
    
    <h3 bind:this={sixThree}>6.3 Replacement Incentive</h3>
    <p>In the event that a manager chooses to quit the league or is removed by a comissioner, an incoming manager is offered a 50% reductioon on their first year buy-in.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through <a href="https://www.leaguesafe.com/league/3949641">LeagueSafe</a> and collection will be sent out no later than the first of August. All managers must be fully paid up before the start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be addd to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 8}$</li>
        <li>2nd place: {dues * 3}$</li>
        <li>3rd place: {dues}$</li>
    </ul>
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the winner's payout. Similarly, if new managers come into the league and the payout is smaller, the difference will come out of the winner's prize.</p>
    
    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost is reccomended.</p>

</div>
