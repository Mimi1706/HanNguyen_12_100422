const urldatamock = {
  urlMainData(id) {
    return `../data/${id}/mainData.json`
  },
  urlActivity(id) {
    return `../data/${id}/activity.json`
  },
  urlSessions(id) {
    return `../data/${id}/sessions.json`
  },
  urlPerformance(id) {
    return `../data/${id}/performance.json`
  },
}

export default urldatamock