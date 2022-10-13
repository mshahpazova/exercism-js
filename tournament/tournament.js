//@ts-check

/**
 *
 * @param {string} input
 */
export const tournamentTally = (input) => {
  let teamStats = [];
  /**
   *
   * @param {string} teamName
   * @param {string} result
   */
  const updateData = (teamName, result) => {
    let team = teamStats.find((team) => team.name === teamName);
    if (!team) {
      team = new Team(teamName);
      teamStats.push(team);
    }
    team.updateStats(result);
  };
  if (input) {
    let games = input.split("\n");
    let reverseResult = { loss: "win", draw: "draw", win: "loss" };
    for (let match of games) {
      let [team1, team2, result] = match.split(";");
      updateData(team1, result);
      updateData(team2, reverseResult[result]);
    }
  }
  let result = ["Team                           | MP |  W |  D |  L |  P"];
  teamStats.sort(
    (team1, team2) =>
      team2.points - team1.points || team1.name.localeCompare(team2.name)
  );

  for (let team of teamStats) {
    result.push(
      `${team.name}${" ".repeat(31 - team.name.length)}|  ${team.games} |  ${
        team.wins
      } |  ${team.draws} |  ${team.losses} | ${` ${team.points}`.substr(-2)}`
    );
  }
  return result.join("\n");
};

class Team {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.losses = 0;
    this.draws = 0;
    this.games = 0;
  }

  get points() {
    return this.wins * 3 + this.draws * 1;
  }

  updateStats(matchResult) {
    if (matchResult === "win") {
      this.wins += 1;
    }
    if (matchResult === "draw") {
      this.draws += 1;
    }
    if (matchResult === "loss") {
      this.losses += 1;
    }
    this.games += 1;
  }
}
