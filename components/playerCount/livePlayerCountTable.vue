<template>
    <div class="live-player-count">
      <h2>Live Player Count</h2>
      <table v-if="tableData" class="table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Platform</th>
            <th>Player Count</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(game, gameKey) in tableData" :key="gameKey">
            <td :rowspan="game.rowspan">{{ game.game }}</td>
            <td v-for="(playerCount, platform) in game" :key="platform">
              {{ platform !== 'rowspan' ? playerCount : '' }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Total Player Count</td>
            <td>{{ totalPlayerCount }}</td>
          </tr>
        </tfoot>
      </table>
      <p v-else>Failed to fetch live player count.</p>
    </div>
  </template>
  
  <script setup>
  

  </script>
  