<script>
    import {getNflState, getLeagueRosters, getLeagueUsers, waitForAll, getLeagueRecords, loadPlayers, getLeagueData} from '$lib/utils/helper';
    import PowerRankingsDisplay from './PowerRankingsDisplay.svelte';
    import LinearProgress from '@smui/linear-progress';
    
    const helperPromises = waitForAll(
        getNflState(),
        getLeagueRosters(),
        getLeagueUsers(),
        getLeagueRecords(),
        getLeagueData(),
        loadPlayers(null),
    );

</script>

<style>
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }
</style>

{#await helperPromises}
    <!-- promise is pending -->
    <div class="loading">
        <p>Berechne Powerrankings...</p>
        <LinearProgress indeterminate />
    </div>
{:then [nflState, rostersData, users, records, leagueData, playersInfo]}
    {#if leagueData.status != 'pre_draft'}
        <PowerRankingsDisplay {nflState} {rostersData} {users} {leagueData} {records} {playersInfo} />
    {/if}
{:catch error}
	<!-- promise was rejected -->
	<p>Etwas ist schief gelaufen: {error.message}</p>
{/await}



